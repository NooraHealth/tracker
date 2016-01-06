
FlowRouter.route('/', {
  action: function(){
    //BlazeLayout.render("home");
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
    ReactLayout.render( MainLayout, {
      content: <NewPatientPage/>,
      header: <BackButton/>
    });
    //BlazeLayout.render "newPatient"
    //analytics.page("newPatient")
  }
});

