
###
# Patient
###

PatientSchema = new SimpleSchema
  phone:
    type:String
    label: "Phone"
    max: 10
  date_added:
    type: String
    max: 20
  date_discharged:
    type: String
    max: 20
    optional: true
  date_first_class:
    type: String
    max: 20
    optional: true
  date_practical:
    type: String
    max: 20
    optional: true
  subscribes_to_ivr:
    type: Boolean
  hospital:
    type: String
    max: 100

Patients.attachSchema PatientSchema
