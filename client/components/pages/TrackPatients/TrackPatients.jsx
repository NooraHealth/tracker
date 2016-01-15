'use strict';

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
    console.log("ALL PATIENTS");
    console.table(Patients.find({}).fetch());

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

  componentDidMount(){
    console.log("The thing has mounted");
    Perf.stop();
    Perf.printInclusive();
    Perf.printWasted();
  },

  _setBooleanOnChange( id, field ){
    return ( function( value ){
      Patients.update({ _id: id }, { $set: { [field]: value }});
    }).bind(this);
  },

  _setDateOnChange( id, field ){
    return ( function( setToToday ){
      let date = null;
      if( setToToday ) {
        date = this._today();
      }

      Patients.update({ _id: id }, { $set: { [field]: date }});
    }).bind(this);
  },

  _getPatientInfoComponents( patients ){
    that = this
    components = patients.map( function( patient){
      let subscribedLink = {
        value: patient["subscribes_to_ivr"] != null,
        requestChange: that._setBooleanOnChange( patient._id, "subscribes_to_ivr" )
      };

      let dischargedLink = {
        value: patient["date_discharged"] != null,
        requestChange: that._setDateOnChange( patient._id, "date_discharged" )
      };

      let tookClassLink = {
        value: patient["date_first_class"] != null,
        requestChange: that._setDateOnChange( patient._id, "date_first_class" )
      };

      let tookPracticalLink = {
        value: patient["date_practical"] != null,
        requestChange: that._setDateOnChange( patient._id, "date_practical" )
      };

      return (
        <div>
          <PatientInfo
            patient={ patient }
            subscribedLink={ subscribedLink }
            dischargedLink={ dischargedLink }
            tookClassLink={ tookClassLink }
            tookPracticalLink={ tookPracticalLink }
            key={ patient._id }
          />
        <hr/>
        </div>
      )
    });
    return components;
  },
  render(){
    var activePatients = this._getPatientInfoComponents(this.data.active);
    var dischargedPatients = this._getPatientInfoComponents(this.data.discharged);

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
