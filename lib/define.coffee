this.getHospital = ()->
  return "jayadeva"

this.Patients = new Mongo.Collection Meteor.settings.public.patients_collection

Ground.Collection this.Patients
