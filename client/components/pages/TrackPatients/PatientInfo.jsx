
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
    var { tookClassHandler, tookPracticalHandler, dischargedHandler, subscribedHandler } = this.props;
    return (
      <div className="accordion-item">
        <div className="accordion-item-toggle">
          <i className="icon-in-button fa fa-pencil button button-fill">+</i>
          <span> { phone }, { language } </span>
        </div>

        <div className="accordion-item-content">
          <div className="list-block">
            <ul>
              <li>
                <Checkbox
                  title='Took First Class'
                  valueLink={ tookClassHandler }
                  />
              </li>
              <li>
                <Checkbox
                  title='Took Practical'
                  valueLink={ tookPracticalHandler }
                  />
              </li>
              <li>
                <Checkbox
                  title='Discharged'
                  valueLink={ dischargedHandler }
                  />
              </li>
              <li>
                <Checkbox
                  title='Subscribed To Phone Messages'
                  valueLink={ subscribedHandler }
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
