
FlowRouter.route('/', {
  action: function(){
    ReactLayout.render( MainLayout, {
      header: <Logo/>,
      content: <HomePage/>
    });
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
      header: <BackButton/>,
      content: <NewPatientPage/>
    });
  }
});

