# Button 按钮

常用的操作按钮，按钮组合，按钮布局。

* `<Button>` 是组件中最基础的元素，可以快速创建一个带样式的按钮。
* `<IconButton>` 图标按钮组件。
* `<ButtonGroup>` 按钮组控件，可以把一组按钮放在一起，并统一控制布局。
* `<ButtonToolbar>` 按钮工具栏控件。

## 获取组件

```js
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';
```

## 演示

<!--{demo}-->

## Props

### `<Button>`

| 属性名称       | 类型 `(默认值)`                                                          | 描述                 |
| -------------- | ------------------------------------------------------------------------ | -------------------- |
| active         | boolean                                                                  | 激活状态             |
| block          | boolean                                                                  | 显示为块级元素       |
| disabled       | boolean                                                                  | 禁用                 |
| size           | enum: 'lg', 'md', 'sm', 'xs' `('md')`                                    | 设置按钮尺寸         |
| appearance     | enum: 'default', 'primary', 'link', 'subtle', 'ghost'<br/> `('default')` | 设置外观             |
| color          | enum: 'red', 'orange','yellow', 'green', <br/>'cyan', 'blue', 'violet'   | 设置颜色             |
| classPrefix    | string `('btn')`                                                         | className 前缀       |
| componentClass | React.ElementType `('button')`                                           | 为组件自定义元素类型 |
| href           | string                                                                   | 按钮跳转链接         |

### `<IconButton>`

IconButton 继承所有 Button 的属性

| 属性名称    | 类型`(默认值)`                   | 描述           |
| ----------- | -------------------------------- | -------------- |
| circle      | boolean                          | 设置为圆形按钮 |
| icon        | React.Element&lt;typeof Icon&gt; | 设置图标       |
| placement   | enum: 'left', 'right' `('left')` | icon 的位置    |
| classPrefix | string `('btn-icon')`            | className 前缀 |

### `<ButtonGroup>`

| 属性名称    | 类型`(默认值)`               | 描述           |
| ----------- | ---------------------------- | -------------- |
| block       | boolean                      | 适应容器宽度   |
| justified   | boolean                      | 横向等宽布局   |
| vertical    | boolean                      | 按钮垂直布局   |
| size        | enum: `lg`, `md`, `sm`, `xs` | 设置按钮尺寸   |
| classPrefix | string `('btn-group')`       | className 前缀 |
