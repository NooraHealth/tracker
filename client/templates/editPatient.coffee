Template.editPatient.events
  "click .submit": ()->
    patientName = $("input[name=patient_name]").val()
    condition = $('select[name=condition').val()
    phone = $("input[name=phone]").val()
    dateOfAdmission = $("#date_of_admission").val()
    console.log dateOfAdmission

    patient = Patients.insert {
      name: patientName
      phone: phone
      condition: condition
      date_of_admission: dateOfAdmission
      discharged: false
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
