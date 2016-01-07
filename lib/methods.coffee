Meteor.methods
  "insertPatient": ( patient )->
    id = Patients.insert patient
    #Meteor.call "sendToSalesforce", id

  'getToday': ()->
    return moment().toDate()

  
