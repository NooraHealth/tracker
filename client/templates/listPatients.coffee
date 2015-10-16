Template.listPatients.helpers
  discharged: ()->
    Meteor.initializeCollapsible()
    console.log "SEARCHING"
    search = Session.get "search_query"
    console.log typeof search
    re = new RegExp search
    console.log re
    #return Patients.find {$or: [{ name: { $regex: re }, phone: { $regex: re }, condition: { $regex: re} }]  }
    return Patients.find { discharged: true }

  patients: ()->
    Meteor.initializeCollapsible()
    console.log "SEARCHING"
    search = Session.get "search_query"
    console.log typeof search
    re = new RegExp search
    console.log re
    #return Patients.find {$or: [{ name: { $regex: re }, phone: { $regex: re }, condition: { $regex: re} }]  }
    return Patients.find {$or: [ {name: { $regex: re } }, {phone: {$regex: re}}, {condition: { $regex: re }}] , $and: [{ discharged: false }] }

  isTrue: ( query )->
    patient = Template.currentData()
    console.log query
    console.log patient
    console.log patient[query] == true
    return patient[query] == true

Template.listPatients.onRendered ()->
    Meteor.initializeCollapsible()

Template.listPatients.events
  "click .patient": ( e )->
    id = $(e.target).attr "id"
    console.log "ID", id
    Router.go "editPatient", { id: id }

  "keyup #search": ( e )->
    console.log "Setting search"
    search = $("#search").val()
    console.log search
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
    Patients.update { _id: @._id }, { $set: { discharged: discharged }}
    Meteor.initializeCollapsible()

  "change input[name=took_first_class]": ( e )->
    tookClass = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { took_first_class: tookClass} }
    Meteor.initializeCollapsible()
