
var TrackPatientsPage = React.createClass({
                                        
  propTypes: {
    active: React.PropTypes.array,
    discharged: React.PropTypes.array,
  },

  defaultProps(){
    active: [],
    discharged: []
  },

  getInitialState(){
    return {
      search: ""
    }
  },

  render(){
    console.log("Rerending the trackpatients page");
    console.log(this.state);
    return (
      {</* Search bar */}
      <div className='list-block inset'>
        <ul>
          <hr/>
          <li>
            <div className="item-content">
              <div className="item-media"><i className="fa fa-search fa-2x"></i></div>
              <div className="item-inner">
                <div className="item-input">
                  <SearchBar
                    type='number'
                    classes='col-75'
                    placeholder='Search phone number'
                    valueLink={ this.linkState('search') }
                    />
                </div>
              </div>
            </div>
          </li>
          <hr/>
        </ul>
      </div>

    {</* Tabs */}
    <div className="content-block">
        <!-- Buttons row as tabs controller -->
      <div className="buttons-row">
        <!-- Link to 1st tab, active -->
        <a href="#active" id="active-tab" className="tab-link active button button-bordered">Active</a>
        <!-- Link to 2nd tab -->
        <a href="#discharged" id="discharged-tab" className="tab-link button button-bordered">Discharged</a>
      </div>
    </div>

    {</* Tab content wrapper */}
    <div className="tabs">
      <!-- Tab 1, active by default -->
      <div id="active" className="tab active">
        <div className="content-block">
          <div className="content-block accordion-list custom-accordion">
            {{#each patients}}
              {{>patientInfo}}
            {{/each}}
          </div>
        </div>
      </div>
      <!-- Tab 2 -->
      <div id="discharged" className="tab">
        <div className="content-block">
          <div className="content-block accordion-list custom-accordion">
            {{#each discharged}}
              {{>patientInfo}}
            {{/each}}
          </div>
        </div>
      </div>
    </div>
    
    ) 
  
  }
});

this.TrackPatientsPage = TrackPatientsPage;
