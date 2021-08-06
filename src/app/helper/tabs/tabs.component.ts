import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, ComponentRef,
  Injector, OnDestroy,
  OnInit,
  QueryList, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router, RouterLinkWithHref} from '@angular/router';
import {Subscription} from 'rxjs';
import {AdminComponent} from "../../main/admin.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren(RouterLinkWithHref) links: QueryList<RouterLinkWithHref> | undefined;
  @ViewChildren('container', {read: ViewContainerRef}) containers: QueryList<ViewContainerRef> | undefined;

  current = 0;

  tabs: Array<TabRef> = [];

  event: any;
  sub: Subscription;

  constructor(private router: Router, private resolver: ComponentFactoryResolver, private location: ViewContainerRef) {
    this.sub = router.events.subscribe((e: any) => {
      // console.log('router event', e);
      if (e instanceof ActivationEnd && !e.snapshot.firstChild) {
        this.event = e;
        return;
      }

      if (e instanceof NavigationEnd) {
        this.checkRouter(e.url);
      }
    });
  }

  checkRouter(url: string): void {
    if (!this.links) {
      return;
    }

    // TODO 要判断是 /admin/ 起始
    const path = url.replace(/^\/admin\//, '');

    // 快速查找
    let index = this.tabs.findIndex(tab => tab.route === path);
    // 通过Angular路由查找
    if (index < 0 && this.links) {
      index = this.links.toArray().findIndex(link => this.router.isActive(link.urlTree, true));
    }
    if (index > -1) {
      this.current = index;
      return;
    }

    // 创建新标签
    this.current = this.tabs.length;
    this.tabs.push(new TabRef(path, path, this));
    setTimeout(() => {
      this.onTabsChange(this.tabs.length - 1);
    }, 100);
  }

  ngAfterViewInit(): void {
    this.checkRouter(this.router.url);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.tabs.forEach(tab => {
      if (tab.component) {
        tab.component.destroy();
      }
    });
  }

  onTabsChange(index: number): void {
    this.current = index;
    this.loadTab(index);
  }

  onTabClose(index: number): void {
    if (this.tabs.length === 1) {
      // TODO 打开默认页
      return;
    }

    const tab = this.tabs.splice(index, 1)[0];
    if (tab.component) {
      tab.component.destroy();
    }
    if (this.current > index) {
      this.current--;
    } else if (this.current === index) {
      if (this.current >= this.tabs.length) {
        this.current = this.tabs.length - 1;
      }
      // 用修改路由的方式触发
      this.router.navigate(['/admin/' + this.tabs[this.current].route]);
      return;
    }
  }

  loadTab(index: number): void {
    if (this.tabs[index].component) {
      // TODO setTitle
      return;
    }

    // this.router.routerState.snapshot.root.firstChild.firstChild.firstChild...
    let route: any = this.router.routerState.snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    // TODO 如果route.component为空，则找不到内容
    if (!route.component) {
      return;
    }
    // 避免初次打开，页面一直嵌套的问题，但是页面会一直处于加载中
    if (route.component === AdminComponent) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(route.component);
    const injector = new TabsInjector(this.event, this.location.injector, this.tabs[index]);

    // @ts-ignore
    const container = this.containers.toArray()[index];
    container.clear();
    this.tabs[index].component = container.createComponent(factory, this.location.length, injector);
    // TODO setTitle

    // @ts-ignore
    this.tabs[index].component.instance.closeTab = () => {
      this.onTabClose(index);
    };
  }

}

export class TabRef {
  component: ComponentRef<any> | undefined;

  constructor(public name: string, public route: string, public tabs: TabsComponent) {
  }

  Close(): void {
    const index = this.tabs.tabs.findIndex(v => v === this);
    this.tabs.onTabClose(index);
  }
}

class TabsInjector implements Injector {
  constructor(private route: ActivatedRoute, private parent: Injector, private ref: TabRef) {
  }

  get(token: any, notFoundValue?: any): any {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === TabRef) {
      return this.ref;
    }
    return this.parent.get(token, notFoundValue);
  }
}
