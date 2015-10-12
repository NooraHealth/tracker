
Template.trackPracticals.helpers
  completed: ()->
    return Patients.find { $and: [{took_first_class: true }, {took_practical: true}]}

  patients: ()->
    return Patients.find {$and: [ { discharged: false }, { took_first_class: true }, { took_practical: false }]}

Template.trackPracticals.onRendered ()->
  $(".collapsible").collapsible
    accordion: false

Template.trackPracticals.events
  "change input[name=discharged]": ( e )->
    discharged = $(e.target).is ":checked"
    console.log discharged
    Patients.update { _id: @._id }, { $set: { discharged: discharged} }

  "change input[name=took_practical]": ( e )->
    tookPractical = $(e.target).is ":checked"
    Patients.update { _id: @._id }, { $set: { took_practical: tookPractical} }

