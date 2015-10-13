Template.listPatients.helpers
  patients: ()->
    Meteor.initializeCollapsible()
    search = Session.get "search_query"
    console.log typeof search
    re = new RegExp search
    console.log re
    #return Patients.find {$or: [{ name: { $regex: re }, phone: { $regex: re }, condition: { $regex: re} }]  }
    return Patients.find {$or: [ {name: { $regex: re } }, {phone: {$regex: re}}, {condition: { $regex: re }}] , $and: [{ discharged: false }] }

  isTrue: ( query )->
    patient = Template.currentData()
    console.log patient
    console.log patient[query]
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
