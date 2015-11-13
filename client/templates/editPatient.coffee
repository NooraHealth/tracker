Template.editPatient.events
  "click #save_patient": ()->
    console.log "Clicked submit"
    patientName = $("input[name=patient_name]").val()
    attender = $("input[name=attender_name]").val()
    phone = $("input[name=phone]").val()
    lang = $("input[name=language]:checked").val()
    subscribe = $("input[name=subscribe]").is ":checked"
    date = moment().toDate()

    patient = Patients.insert {
      name: patientName
      attender: attender
      phone: phone
      language: lang
      subscribes_to_ivr: subscribe
      has_been_input_to_ivr_system: false
      discharged: false
      date_added: date
    }

    console.log Patients.findOne { _id: patient}

