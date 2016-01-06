
FlowRouter.route('/', {
  action: function(){
    BlazeLayout.render("home");
    analytics.page("home");
  }
});

FlowRouter.route('/trackPatients', {
  action: function(){
    BlazeLayout.render("trackPatients");
    analytics.page("trackPatients");
  }
});

FlowRouter.route('/newPatient', {
  action: function(){
    React.render(<NewPatientPage/>, $("body"));
    //BlazeLayout.render "newPatient"
    //analytics.page("newPatient")
  }
});

