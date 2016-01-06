
###
# Home
###
FlowRouter.route( '/', function(){
  action: ()->
    BlazeLayout.render "home"
    analytics.page("home")
});

###
# Add a new patient
###
FlowRouter.route '/trackPatients', {
  action: ()->
    BlazeLayout.render "trackPatients"
    analytics.page("trackPatients")
}

###
# Track active and discharged patients
###
FlowRouter.route '/newPatient', {
  action: ()->
    React.render <NewPatientPage/>, $("body")
    #BlazeLayout.render "newPatient"
    #analytics.page("newPatient")
}

