# Progress [<i class="icon icon-edit2" ></i>](https://github.com/rsuite/rsuite.github.io/blob/master/src/components/progress/index.md)

- `<Progress.Line>` 线性进度
- `<Progress.Circle>` 圆形进度



## 演示

<!--{demo}-->

## API

### `<Progress.Line>`
| 属性名称          | 类型                                      | 默认值       | 描述           |
|---------------|-----------------------------------------|-----------|--------------|
| percent       | number                                  |           | 进度百分比        |
| strokeWidth   | number                                  | 1         | 线条宽度         |
| strokeColor   | string                                  |           | 线条颜色         |
| trailWidth    | number                                  | 1         | 背景宽度         |
| trailColor    | string                                  | '#d9d9d9' | 背景颜色         |
| status        | union: 'success', 'fail', 'error', null | null      | 进度状态         |
| infoShow      | bool                                    | true      | 是否显示文字       |
| strokeLinecap | union:  'round', 'square', 'butt'       | 'round'   | 不同类型的开放路径的终结 |


### `<Progress.Circle>`

| 属性名称        | 类型                                       | 默认值   | 描述        |
|-------------|------------------------------------------|-------|-----------|
| percent       | number                                  |           | 进度百分比        |
| strokeWidth   | number                                  | 1         | 线条宽度         |
| strokeColor   | string                                  |           | 线条颜色         |
| trailWidth    | number                                  | 1         | 背景宽度         |
| trailColor    | string                                  | '#d9d9d9' | 背景颜色         |
| status        | union: 'success', 'fail', 'error', null | null      | 进度状态         |
| infoShow      | bool                                    | true      | 是否显示文字       |
| strokeLinecap | union:  'round', 'square', 'butt'       | 'round'   | 不同类型的开放路径的终结 |
| gapPosition | union: 'right', 'top', 'bottom', 'left', | 'top' | 圆形进度条缺口位置 |