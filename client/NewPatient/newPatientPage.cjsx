
this.NewPatientPage = React.createClass
  initialState: ()->
  
  render: ()->
    <Header />
    <Form>
      <Form.Input type='number' icon='icon-form-tel' name='phone' ref={ (i)=> @.phoneInput = i} />
      <Form.Radio title='Kannada' selected={true} ref={ (i)=> @.language.kannadaBtn = i } />
      <Form.Radio title='Hindi' selected={false} ref={ (i)=> @.language.hindiBtn = i }/>
      <Form.Radio title='English' selected={false} ref={ (i)=> @.language.englishBtn = i }/>
      <Form.Checkbox title='Subscribe to Phone Messages' ref={ (i)=> @.subscribeCheckbox = i }/>
    </Form>
