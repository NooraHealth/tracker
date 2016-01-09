
FlowRouter.route('/', {
  action: function(){
    analytics.page("home");
  }
});

FlowRouter.route('/trackPatients', {
  action: function(){
    //BlazeLayout.render("trackPatients");
    analytics.page("trackPatients");
  }
});

FlowRouter.route('/newPatient', {
  action: function(){
    //BlazeLayout.render "newPatient"
    //analytics.page("newPatient")
    ReactLayout.render( MainLayout, {
      content: <NewPatientPage/>,
      header: <BackButton/>
    });
  }
});

