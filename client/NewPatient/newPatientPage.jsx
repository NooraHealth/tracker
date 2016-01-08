
class NewPatientPage extends React.Component {
  constructor( props ){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
    console.log("A new patient was submitted");
    console.log(this);
  }
    
  render() {
    return (
      <div>
        <Form onSubmit={ this.onSubmit } >
          <Form.Input type='number' icon='icon icon-form-tel' name='phone' ref={ (i)=> this.phoneInput = i} />
          <Form.RadioGroup ref={ (i)=> this.languageSelect = i } >
            <Form.RadioGroup.Radio title='Kannada' name='language' checked={true}  />
            <Form.RadioGroup.Radio title='Hindi' name='language' checked={false} />
            <Form.RadioGroup.Radio title='English' name='language' checked={false} />
          </Form.RadioGroup>
          <Form.Checkbox title='Subscribe to Phone Messages' ref={ (i)=> this.subscribeCheckbox = i }/>
        </Form>
      </div>
    )
  }
}

this.NewPatientPage = NewPatientPage
