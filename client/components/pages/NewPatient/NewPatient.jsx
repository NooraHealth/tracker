
var NewPatientPage = React.createClass({

  mixins: [ LinkedStateMixin, DateAndTimeMixin ],

  propTypes: {
    languageOptions: React.PropTypes.array,
    phoneLength: React.PropTypes.number,
    hospital: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      languageOptions: [
        { title: 'Kannada', value: 'kannada' },
        { title: 'Hindi', value: 'hindi' },
        { title: 'English', value: 'english' }
      ],
      phoneLength: 10,
      hospital: 'jayadeva'
    };
  },


  getInitialState() {
    return {
      phone: '',
      language: 'kannada',
      subscribeToIVR: false
    };
  },

  _onSubmit(){
    var phone = this.state.phone;
    var language = this.state.language;
    var subscribeToIVR = this.state.subscribeToIVR;
    var date = this._today();
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

      console.log("New patient: ", patient);
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
    return (
      <div>
        <Form onSubmit={ this._onSubmit } >
          <Form.Input 
            type='number' 
            icon='icon icon-form-tel'
            maxLength={ this.phoneLength } 
            ref={ (i)=> this.phoneInput = i} 
            key= 'newpatientphone'
            valueLink={ this.linkState('phone') }
          />
          <Form.RadioGroup
            ref={ (i)=> this.languageSelect = i }
            options={ this.props.languageOptions }
            valueLink={ this.linkState('language') }
            key='newpatientlanguage'
          />
          <Form.Checkbox
            title='Subscribe to Phone Messages'
            ref={ (i)=> this.subscribeCheckbox = i }
            valueLink={ this.linkState('subscribeToIVR') }
            key='newpatientsubscribe'
          />
        </Form>
      </div>
    )
  }
});

this.NewPatientPage = NewPatientPage
