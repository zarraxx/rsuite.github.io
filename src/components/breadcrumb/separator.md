
### 自定义分隔符

<!--start-code-->
```js
const instance = (
  <Breadcrumb separator={<IconFont icon="chevron-right" />}>
    <Breadcrumb.Item componentClass={Link} to="/">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item componentClass={Link} >
      Components
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Breadcrumb
    </Breadcrumb.Item>
  </Breadcrumb>
);
ReactDOM.render(instance);
```
<!--end-code-->