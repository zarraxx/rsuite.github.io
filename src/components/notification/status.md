
### 通知类型

<!--start-code-->
```js

function open(funcName){
  Notification[funcName]({
      title: funcName,
      description: `
        long long long long long  message
        long long long long long  message
      `
  });
}

const instance = (
  <ButtonToolbar>
    <Button onClick={()=>open('info')}> Info </Button>
    <Button onClick={()=>open('success')}> Success </Button>
    <Button onClick={()=>open('warning')}> Warning </Button>
    <Button onClick={()=>open('error')}> Error </Button>
  </ButtonToolbar>
);
ReactDOM.render(instance);
```
<!--end-code-->