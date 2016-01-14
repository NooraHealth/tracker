
var PatientInfo = React.createClass({
                                        
  propTypes: {
    patient: React.PropTypes.object,
    tookClassLink: React.PropTypes.shape({
      value: React.PropTypes.string,
      requestChange: React.PropTypes.func
    }),
    tookPracticalLink: React.PropTypes.shape({
      value: React.PropTypes.string,
      requestChange: React.PropTypes.func
    }),
    dischargedLink: React.PropTypes.shape({
      value: React.PropTypes.string,
      requestChange: React.PropTypes.func
    }),
    subscribedLink: React.PropTypes.shape({
      value: React.PropTypes.string,
      requestChange: React.PropTypes.func
    })
  },

  defaultProps(){
    return {
      patient: {}
    }
  },

  getInitialState(){ return {} },

  render(){
    var { tookClassLink, tookPracticalLink, dischargedLink, subscribedLink, patient } = this.props;
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
                  valueLink={ tookClassLink }
                  />
              </li>
              <li>
                <Form.Checkbox
                  title='Took Practical'
                  valueLink={ tookPracticalLink }
                  />
              </li>
              <li>
                <Form.Checkbox
                  title='Discharged'
                  valueLink={ dischargedLink }
                  />
              </li>
              <li>
                <Form.Checkbox
                  title='Subscribed To Phone Messages'
                  valueLink={ subscribedLink }
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
