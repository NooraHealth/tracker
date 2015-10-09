Template.listPatients.helpers
  patients: ()->
    search = Session.get "search_query"
    console.log typeof search
    re = new RegExp search
    console.log re
    #return Patients.find {$or: [{ name: { $regex: re }, phone: { $regex: re }, condition: { $regex: re} }]  }
    return Patients.find {$or: [ {name: { $regex: re } }, {phone: {$regex: re}}, {condition: { $regex: re }}]  }

Template.listPatients.events
  "click .patient": ( e )->
    id = $(e.target).attr "id"
    console.log "ID", id
    Router.go "editPatient", { id: id }

  "keyup #search": ( e )->
    console.log "Setting search"
    search = $("#search").val()
    console.log search
    Session.set "search_query", search
