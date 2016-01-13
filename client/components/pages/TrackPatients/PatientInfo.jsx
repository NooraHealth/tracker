
var PatientInfo = React.createClass({
                                        
  propTypes: {
    patient: React.PropTypes.object,
    tookClassHandler: React.PropTypes.func,
    tookPracticalHandler: React.PropTypes.func,
    dischargedHandler: React.PropTypes.func,
    subscribedHandler: React.PropTypes.func
  },

  defaultProps(){
    return {
      patient: {}
    }
  },

  getInitialState(){ return {} },

  render(){
    var { tookClassHandler, tookPracticalHandler, dischargedHandler, subscribedHandler, patient } = this.props;
    return (
      <div className="accordion-item">
        <div className="accordion-item-toggle">
          <i className="icon-in-button fa fa-pencil button button-fill">+</i>
          <span> { patient.phone }, { patient.language } </span>
        </div>

        <div className="accordion-item-content">
          <div className="list-block">
            <ul>
              <li>
                <Form.Checkbox
                  title='Took First Class'
                  onChange={ tookClassHandler }
                  />
              </li>
              <li>
                <Form.Checkbox
                  title='Took Practical'
                  onChange={ tookPracticalHandler }
                  />
              </li>
              <li>
                <Form.Checkbox
                  title='Discharged'
                  onChange={ dischargedHandler }
                  />
              </li>
              <li>
                <Form.Checkbox
                  title='Subscribed To Phone Messages'
                  onChange={ subscribedHandler }
                  />
              </li>
            </ul>
          </div>       
        </div>
      </div>
    )
  }
});

this.PatientInfo = PatientInfo;
