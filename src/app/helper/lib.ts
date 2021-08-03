import {NzTableQueryParams} from "ng-zorro-antd/table";


export function parseTableQuery(query: NzTableQueryParams, body: any): void {
  // const body: any = {
  //   filter: {},
  //   //sort: {},
  // }

  //过滤器
  query.filter.forEach(f => {
    if (f.value.length > 1)
      body.filter[f.key] = {$in: f.value};
    else if (f.value.length === 1)
      body.filter[f.key] = f.value[0];
  })

  //分布
  body.skip = (query.pageIndex - 1) * query.pageSize;
  body.limit = query.pageSize;

  //排序
  const sorts = query.sort.filter(s => s.value);
  if (sorts.length) {
    body.sort = {};
    sorts.forEach(s => {
      body.sort[s.key] = s.value === 'ascend' ? 1 : -1;
    });
  } else {
    delete body.sort;
  }
}

export const DataTypes: Array<any> = [
  {name: '布尔', value: 'boolean'},
  {name: '字', value: 'word'},
  {name: '双字', value: 'dword'},
  {name: '浮点', value: 'float'},
  {name: '双精度', value: 'double'},
  {name: 'uint8', value: 'uint8'},
  {name: 'uint16', value: 'uint16'},
  {name: 'uint32', value: 'uint32'},
  {name: 'uint64', value: 'uint64'},
  {name: 'int8', value: 'int8'},
  {name: 'int16', value: 'int16'},
  {name: 'int32', value: 'int32'},
  {name: 'int64', value: 'int64'},
  {name: '小端浮点', value: 'le-float'},
  {name: '小端双精度', value: 'le-double'},
  {name: '小端uint16', value: 'le-uint16'},
  {name: '小端uint32', value: 'le-uint32'},
  {name: '小端uint64', value: 'le-uint64'},
  {name: '小端int16', value: 'le-int16'},
  {name: '小端int32', value: 'le-int32'},
  {name: '小端int64', value: 'le-int64'},
]

//建立索引
DataTypes.forEach(dt => DataTypes[dt.value] = dt.name);
