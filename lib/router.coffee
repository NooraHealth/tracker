Router.map ()->
  
  ###
  # Home
  # Displays all lessons in curriculum
  ###
  this.route '/', {
    path: '/'
    name: "home"
    template: 'home'
    layoutTemplate: 'layout'
  }

  this.route '/listPatients', {
    path: '/listPatients'
    name: "listPatients"
    template: 'listPatients'
    layoutTemplate: 'layout'
  }

  this.route '/editPatient', {
    path: '/editPatient/:id?'
    name: "editPatient"
    template: 'editPatient'
    layoutTemplate: 'layout'
    data: ()->
      console.log "Going to edit patient"
      Session.set "search_query", ""
      return Patients.findOne {_id: this.params.id}
  }

