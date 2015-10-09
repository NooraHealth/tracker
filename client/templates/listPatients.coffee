Template.listPatients.helpers
  patients: ()->
    return Patients.find {}

Template.listPatients.events
  "click .patient": ( e )->
    id = $(e.target).attr "id"
    console.log "ID", id
    Router.go "editPatient", { id: id }
