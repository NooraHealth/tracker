
var PatientInfo = React.createClass({
                                        
  propTypes: {
    patient: React.PropTypes.object
  },

  defaultProps(){
    return {
      patient: {}
    }
  },

  getInitialState(){ return {} },

  render(){
    return (
      <div class="accordion-item">
        <div class="accordion-item-toggle">
          <i class="icon-in-button fa fa-pencil button button-fill">+</i>
          <span> { phone }, { language } </span>
        </div>

        <div class="accordion-item-content">
          <div class="list-block">
            <ul>
              <li>
                <Checkbox
                  title='Took First Class'
                  valueLink={ this.linkState('tookFirstClass') }
                  />
              </li>
              <li>
                <Checkbox
                  title='Took Practical'
                  valueLink={ this.linkState('tookPractical') }
                  />
              </li>
              <li>
                <Checkbox
                  title='Discharged'
                  valueLink={ this.linkState('discharged') }
                  />
              </li>
              <li>
                <Checkbox
                  title='Subscribed To Phone Messages'
                  valueLink={ this.linkState('subscribedToIVR') }
                  />

                </label>
              </li>
            </ul>
          </div>       
        </div>
      </div>
    )
  }
});

this.PatientInfo = PatientInfo;
