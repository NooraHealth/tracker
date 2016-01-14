
FlowRouter.route('/', {
  action: function(){
    ReactLayout.render( MainLayout, {
      header: <Logo key='logo'/>,
      content: <HomePage key='homepage'/>
    });
    analytics.page("home");
  }
});

FlowRouter.route('/trackPatients', {
  action: function(){
    //BlazeLayout.render("trackPatients");
    ReactLayout.render( MainLayout, {
      header: <BackButton key='backbutton'/>,
      content: <TrackPatientsPage key='trackpatientspage' hospital={ getHospital() }/>
    });
    analytics.page("trackPatients");
  }
});

FlowRouter.route('/newPatient', {
  action: function(){
    //BlazeLayout.render "newPatient"
    //analytics.page("newPatient")
    ReactLayout.render( MainLayout, {
      header: <BackButton key='backbutton'/>,
      content: <NewPatientPage key='newpatientpage'/>
    });
  }
});

