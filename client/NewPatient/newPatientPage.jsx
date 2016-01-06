
this.NewPatientPage = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <Form>
          <Form.Input type='number' icon='icon-form-tel' name='phone' ref={ (i)=> this.phoneInput = i} />
          <Form.Radio title='Kannada' selected={true} ref={ (i)=> this.language.kannadaBtn = i } />
          <Form.Radio title='Hindi' selected={false} ref={ (i)=> this.language.hindiBtn = i }/>
          <Form.Radio title='English' selected={false} ref={ (i)=> this.language.englishBtn = i }/>
          <Form.Checkbox title='Subscribe to Phone Messages' ref={ (i)=> this.subscribeCheckbox = i }/>
        </Form>
      </div>
    )
  }
});
