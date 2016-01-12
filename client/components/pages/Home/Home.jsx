var HomePage = React.createClass({
  render(){
    return (
      <div className="list-block inset">
        <p><a 
          href="/newPatient"
          className="button button-round button-fill large-button"
          > New Patient
        </a></p>
        <p><a 
          href="/trackPatients"
          className="button button-round button-fill large-button"
          > Track Patients
        </a></p>
      </div>
    )
  }
});

this.HomePage = HomePage;
