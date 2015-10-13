
Template.trackPracticals.helpers
  completed: ()->
    Meteor.initializeCollapsible()
    return Patients.find { $and: [{took_first_class: true }, {took_practical: true}]}

  patients: ()->
    Meteor.initializeCollapsible()
    return Patients.find {$and: [ { discharged: false }, { took_first_class: true }, { took_practical: false }]}

Template.trackPracticals.onRendered ()->
    Meteor.initializeCollapsible()

Template.trackPracticals.events
  "click .editpatient": ( e )->
    Router.go "editPatient", { id: @._id }

  "change input[name=discharged]": ( e )->
    discharged = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { discharged: discharged} }
    Meteor.initializeCollapsible()

  "change input[name=took_practical]": ( e )->
    tookPractical = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { took_practical: tookPractical} }
    Meteor.initializeCollapsible()

