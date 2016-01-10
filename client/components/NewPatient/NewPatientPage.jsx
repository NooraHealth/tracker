
var NewPatientPage = React.createClass({

  mixins: [LinkedStateMixin],

  getDefaultProps() {
    return {
      languageOptions: [
        { title: 'Kannada', value: 'kannada' },
        { title: 'Hindi', value: 'hindi' },
        { title: 'English', value: 'english' }
      ],
      phoneLength: 10,
    };
  },


  getInitialState() {
    date = moment().toDate() 
    return {
      phone: '',
      language: 'kannada',
      hospital: 'jayadeva',
      subscribeToIVR: false
    };
  },

  onSubmit(){
    console.log("A new patient was submitted");
    console.log(this);
    var phone = this.state.phone;
    var language = this.state.language;
    var subscribeToIVR = this.state.subscribeToIVR;
    var date = this.state.date;
    var hospital = this.state.hospital;

    if( phone.length != this.props.phoneLength )
      swal("Error", "Patient phone must be 10 digits", "error");
    else {
      var patient = {
        phone: phone,
        language: language,
        subscribes_to_ivr: subscribeToIVR,
        has_been_input_to_ivr_system: false,
        date_added: date,
        date_discharged: null,
        date_first_class: null,
        date_practical: null,
        hospital: hospital
      };

      Meteor.call( "insertPatient", patient);

      analytics.track( "Action", {
        location: "newPatient",
        text: "submit",
        color: "blue"
      });

      FlowRouter.go("/");
    }
  },
    
  render() {
    console.log("Rerendering the new patient form page: ", this.state);
    return (
      <div>
        <Form onSubmit={ this.onSubmit } >
          <Form.Input 
            type='number' 
            icon='icon icon-form-tel'
            maxLength={ this.phoneLength } 
            ref={ (i)=> this.phoneInput = i} 
            valueLink={ this.linkState('phone') }
          />
          <Form.RadioGroup
            ref={ (i)=> this.languageSelect = i }
            options={ this.props.languageOptions }
            //linkValue={ this.linkState('language') }
          />
          <Form.Checkbox
            title='Subscribe to Phone Messages'
            ref={ (i)=> this.subscribeCheckbox = i }
            //valueLink={ this.linkState('subscribeToIVR') }
          />
        </Form>
      </div>
    )
  }
});

this.NewPatientPage = NewPatientPage
