Template.trackClasses.helpers
  completed: ()->
    return Patients.find { took_first_class: true }

  patients: ()->
    return Patients.find {$and: [ { discharged: false }, { took_first_class: false }]}

  isTrue: ( query )->
    patient = Template.currentData()
    console.log patient
    console.log patient[query]
    return patient[query] == true

Template.trackClasses.onRendered ()->
  $(".collapsible").collapsible
    accordion: false

Template.trackClasses.events
  "click .editpatient": ( e )->
    Router.go "editPatient", { id: @._id }

  "change input[name=discharged]": ( e )->
    discharged = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { discharged: discharged }}

  "change input[name=took_first_class]": ( e )->
    tookClass = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { took_first_class: tookClass} }

