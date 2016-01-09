
class NewPatientPage extends BaseComponent {
  constructor( props ){
    super(props);
    this._bind('onSubmit');
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
          <Form.RadioGroup ref={ (i)=> this.languageSelect = i } value='kannada'>
            <Form.RadioGroup.Radio title='Kannada' value='kannada'/>
            <Form.RadioGroup.Radio title='Hindi' value='hindi' />
            <Form.RadioGroup.Radio title='English' value='english' />
          </Form.RadioGroup>
          <Form.Checkbox title='Subscribe to Phone Messages' ref={ (i)=> this.subscribeCheckbox = i }/>
        </Form>
      </div>
    )
  }
}

this.NewPatientPage = NewPatientPage
