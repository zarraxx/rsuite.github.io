### `FormControl`

- FormControl 用于绑定 Form 中的数据字段，通过 `name` 属性和 Schema.Model 对象的 `key` 对应。
- FormControl 默认是个 `Input` 组件，可以通过 `accepter` 设置需要的数据录入组件。

> 例如: `<FormControl accepter={CheckboxGroup} />` ,  FormControl 会渲染一个 `<CheckboxGroup>` 组件, 同时与 Form 中的 Schema.Model 实例绑定。


<!--start-code-->
```js
const model = Schema.Model({
  skill: Schema.Types.ArrayType().minLength(2, '至少选择2个').isRequired('该字段不能为空')
});

const CustomField = ({ name, label, accepter, error, ...props }) => (
  <FormGroup className={error ? 'has-error' : ''}>
    <ControlLabel>{label} </ControlLabel>
    <FormControl name={name} accepter={accepter} {...props} />
    <HelpBlock className={error ? 'error' : ''}>{error}</HelpBlock>
  </FormGroup>
);

class CustomFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { values } = this.state;
    if (!this.form.check()) {
      console.error('数据格式有错误');
      return;
    }
    console.log(values, '提交数据');
  }
  render() {
    const { errors, values } = this.state;
    return (
      <div>
        <Form
          ref={ref => this.form = ref}
          onChange={(values) => {
            this.setState({ values });
            console.log(values);
          }}
          onCheck={errors => this.setState({ errors })}
          defaultValues={values}
          model={model}
        >

          <CustomField
            name="skill"
            label="技能"
            accepter={CheckboxGroup}
            error={errors.skill}
            inline
          >
            <Checkbox value={0}>Node.js</Checkbox>
            <Checkbox value={1}>CSS3</Checkbox>
            <Checkbox value={2}>Javascript</Checkbox>
            <Checkbox value={3}>HTML5</Checkbox>
          </CustomField>
          <Button appearance="primary" onClick={this.handleSubmit}> Submit </Button>
        </Form>
      </div>
    );
  }
}

ReactDOM.render(<CustomFieldForm />);

```
<!--end-code-->