Template.editPatient.events
  "click .submit": ()->
    patientName = $("input[name=patient_name]").val()
    attender = $("input[name=attender_name]").val()
    phone = $("input[name=phone]").val()
    subscribes = $("input[name=subscribes]").val()

    patient = Patients.insert {
      name: patientName
      attender: attender
      phone: phone
      subscribes_to_ivr: subscribes
    }

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
