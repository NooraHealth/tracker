Meteor.methods
  "insertPatient" : ( patient )->
    
    #insert into the MongoDB 
    id = Patients.insert patient
    Meteor.call "sendToSalesforce", id

  
