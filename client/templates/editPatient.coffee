Template.editPatient.events
  "click #save_patient": ()->
    console.log "Clicked submit"
    patientName = $("input[name=patient_name]").val()
    attender = $("input[name=attender_name]").val()
    phone = $("input[name=phone]").val()
    lang = $("input[name=language]:checked").val()
    subscribe = $("input[name=subscribe]").is ":checked"

    patient = Patients.insert {
      name: patientName
      attender: attender
      phone: phone
      language: lang
      subscribes_to_ivr: subscribe
      has_been_input_to_ivr_system: false
      discharged: false
    }

    console.log Patients.findOne { _id: patient}

Template.editPatient.onRendered ()->
  $("#date_of_admission").pickadate
    max: new Date()
  $("select").material_select()
  if Template.currentData()
    $("#date_of_admission").val Template.currentData().date_of_admission


Template.editPatient.helpers
  isCondition: (condition)->
    console.log "Is condition", condition
    console.log Template.currentData()
    if !Template.currentData()
      return condition == "Cardiac Surgery"
    return Template.currentData().condition == condition
