Template.listPatients.helpers
  discharged: ()->
    search = Session.get "search_query"
    re = new RegExp search
    #return Patients.find {$or: [{ name: { $regex: re }, phone: { $regex: re }, condition: { $regex: re} }]  }
    return Patients.find {$or: [ {name: { $regex: re } }, {phone: {$regex: re}}, {condition: { $regex: re }}] , $and: [{ discharged: true }] } , { $sort: { name: -1 }}

  patients: ()->
    search = Session.get "search_query"
    re = new RegExp search
    return Patients.find {$or: [ {name: { $regex: re } }, {phone: {$regex: re}}, {condition: { $regex: re }}] , $and: [{ discharged: false }] } , { $sort: { name: -1 }}

Template.listPatients.events
  "click .patient": ( e )->
    id = $(e.target).attr "id"
    console.log "ID", id
    Router.go "editPatient", { id: id }

  "keyup #search": ( e )->
    search = $("#search").val()
    Session.set "search_query", search

  "change input[name=subscribed]": ( e )->
    console.log "Changed the subscribed value"
    subscribed = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { subscribes_to_ivr: subscribed }}
    Meteor.call "updatePatient", { Id: @.salesforce_id, "Subscribed_to_IVR__c": subscribed }

  "change input[name=took_practical]": ( e )->
    console.log "Practical checked"
    console.log @
    tookPractical = $(e.target).is ":checked"
    console.log "Took practical?", tookPractical
    if tookPractical
      date = moment().toDate()
    else
      date = null
    Patients.update { _id: @._id }, { $set: { took_practical: tookPractical , date_took_practical: date}}
    Meteor.call "updatePatient", { Id: @.salesforce_id, "took_practical__c": tookPractical, "Date_took_practical__c" : date }

  "change input[name=discharged]": ( e )->
    console.log "Discharged checked"
    console.log @
    discharged = $(e.target).is ":checked"
    id = $(e.target).find("form").attr "id"
    if discharged
      date = moment().toDate()
    else
      date = null
    Patients.update { _id: @._id }, { $set: { discharged: discharged , date_discharged: date }}
    Meteor.call "updatePatient", { Id: @.salesforce_id, "Discharged__c": discharged, "Date_discharged__c" : date }

  "change input[name=took_first_class]": ( e )->
    console.log "Took First Class checked"
    console.log @
    tookClass = $(e.target).is ":checked"
    if tookClass
      date = moment().toDate()
    else
      date = null
    Patients.update { _id: @._id }, { $set: { took_first_class: tookClass, date_first_class: date } }
    Meteor.call "updatePatient", { Id: @.salesforce_id, "Took_Class__c": tookClass, "Date_first_class__c" : date }

Template.patientInfo.helpers
  isTrue: ( query )->
    patient = Template.currentData()
    return patient[query] == true

