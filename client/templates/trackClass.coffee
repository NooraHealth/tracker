Template.trackClasses.helpers
  completed: ()->
    Meteor.initializeCollapsible()
    return Patients.find { took_first_class: true }

  patients: ()->
    Meteor.initializeCollapsible()
    return Patients.find {$and: [ { discharged: false }, { took_first_class: false }]}

  isTrue: ( query )->
    patient = Template.currentData()
    return patient[query] == true

Template.trackClasses.onRendered ()->
    Meteor.initializeCollapsible()

Template.trackClasses.events
  "click .editpatient": ( e )->
    Router.go "editPatient", { id: @._id }

  "change input[name=discharged]": ( e )->
    discharged = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { discharged: discharged }}
    Meteor.initializeCollapsible()

  "change input[name=took_first_class]": ( e )->
    tookClass = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { took_first_class: tookClass} }
    Meteor.initializeCollapsible()

