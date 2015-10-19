Template.listPatients.helpers
  discharged: ()->
    Meteor.initializeCollapsible()
    search = Session.get "search_query"
    re = new RegExp search
    #return Patients.find {$or: [{ name: { $regex: re }, phone: { $regex: re }, condition: { $regex: re} }]  }
    return Patients.find { discharged: true }, { $sort: { name: -1 }}

  patients: ()->
    Meteor.initializeCollapsible()
    search = Session.get "search_query"
    re = new RegExp search
    return Patients.find {$or: [ {name: { $regex: re } }, {phone: {$regex: re}}, {condition: { $regex: re }}] , $and: [{ discharged: false }] } , { $sort: { name: -1 }}

  isTrue: ( query )->
    patient = Template.currentData()
    return patient[query] == true

Template.listPatients.onRendered ()->
    Meteor.initializeCollapsible()

Template.listPatients.events
  "click .patient": ( e )->
    id = $(e.target).attr "id"
    console.log "ID", id
    Router.go "editPatient", { id: id }

  "keyup #search": ( e )->
    search = $("#search").val()
    Session.set "search_query", search
    Meteor.initializeCollapsible()

  "change input[name=subscribed]": ( e )->
    subscribed = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { subscribed_to_ivr: subscribed }}
    Meteor.initializeCollapsible()

  "change input[name=took_practical]": ( e )->
    tookPractical = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { took_practical: tookPractical }}
    Meteor.initializeCollapsible()

  "change input[name=discharged]": ( e )->
    discharged = $(e.target).is ":checked"
    id = $(e.target).find("form").attr "id"
    Patients.update { _id: @._id }, { $set: { discharged: discharged }}
    Meteor.initializeCollapsible()

  "change input[name=took_first_class]": ( e )->
    tookClass = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { took_first_class: tookClass} }
    Meteor.initializeCollapsible()
