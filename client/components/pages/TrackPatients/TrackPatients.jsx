
var TrackPatientsPage = React.createClass({
  mixins: [ LinkedStateMixin, ReactMeteorData, DateAndTimeMixin ],
                                        
  propTypes: {
    hospital: React.PropTypes.string
  },

  defaultProps(){
    return {
      hospital: ""
    }
  },

  getInitialState(){
    return {
      search: ""
    }
  },

  getMeteorData(){
    re = new RegExp( this.state.search );

    var dischargedQuery = {
      $and: [ 
        {phone: {$regex: re}}, 
        { date_discharged: {$not: null} },
        { hospital: this.props.hospital }
      ]
    };

    var activeQuery = {
      $and: [ 
        {phone: {$regex: re}}, 
        { date_discharged: null },
        { hospital: this.props.hospital }
      ]
    };

    var sort = {sort: { phone: -1 }};

    var active = Patients.find( activeQuery , sort );
    var discharged  = Patients.find( dischargedQuery, sort );

    return {
      active: active.fetch(),
      discharged: discharged.fetch()
    }   
  },

  _setBooleanOnChange( id, field ){
    return ( function( value ){
      Patients.update({ _id: id }, { $set: { [field]: value }});
    }).bind(this);
  },

  _setDateOnChange( id, field ){
    return ( function( setToToday ){
      var date = null;
      if( setToToday ) {
        date = this._today();
      }

      Patients.update({ _id: id }, { $set: { [field]: date }});
    }).bind(this);
  },

  _getPatientInfoComponents( patients ){
    components = patients.map( function( patient){
      subscribedHandler = _setBooleanOnChange( patient._id, "subscribes_to_ivr" );
      dischargedHandler = _setDateOnChange( patient._id, "date_discharged" );
      tookClassHandler = _setDateOnChange( patient._id, "date_first_class" );
      tookPracticalHandler = _setDateOnChange( patient._id, "date_practical" );

      return (
        <PatientInfo
          patient={ patient }
          subscribedHandler={ subscribedHandler }
          dischargedHandler={ dischargedHandler }
          tookClassHandler={ tookClassHandler }
          tookPracticalHandler={ tookPracticalHandler }
        />
      )
    });

    return components;
  },
  render(){
    console.log("Rerending the trackpatients page");
    console.log(this.state);

    var activePatientsInfo = this.data.active.map( function( patient ){
       
    });
    return (
      <div>

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

        <div className="content-block">
          <div className="buttons-row">
            <a href="#active" id="active-tab" className="tab-link active button button-bordered">Active</a>
            <a href="#discharged" id="discharged-tab" className="tab-link button button-bordered">Discharged</a>
          </div>
        </div>

        <div className="tabs">
          <div id="active" className="tab active">
            <div className="content-block">
              <div className="content-block accordion-list custom-accordion">
                { activePatients }
              </div>
            </div>
          </div>
          <div id="discharged" className="tab">
            <div className="content-block">
              <div className="content-block accordion-list custom-accordion">
                { dischargedPatients }
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  
  }
});

this.TrackPatientsPage = TrackPatientsPage;
