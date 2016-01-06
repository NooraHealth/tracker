    
#Template.newPatient.events
  #"click #save_patient": ()->
    #phone = $("input[name=phone]").val()
    #lang = $("input[name=language]:checked").val()
    #subscribe = $("input[name=subscribe]").is ":checked"
    #date = moment().toDate()
    #hospital = getHospital()

    #if not lang
      #swal("Error", "Please select the patient language", "error")
      #return

    #if phone.length != 10
      #swal("Error", "Patient phone must be 10 digits", "error")
      #return

    #patient = {
      #phone: phone
      #language: lang
      #subscribes_to_ivr: subscribe
      #has_been_input_to_ivr_system: false
      #date_added: date
      #date_discharged: null
      #date_first_class: null
      #date_practical: null
      #hospital: hospital
    #}

    #Meteor.call "insertPatient", patient

    #analytics.track "Action", {
      #location: "newPatient",
      #text: "submit",
      #color: "blue"
    #}

    #FlowRouter.go "/"

#Template.newPatient.onRendered ()->
  #analytics.trackLink $("#back-button"), "click", {name: "back-button"}

