Meteor.startup ()->
  Session.setPersistent "hospital", "jayadeva"
  this.Perf = React.addons.Perf;
  Meteor.call "getSegmentId", ( err, id )->
    if err
      console.log "Error getting segmentId", err
    else
      analytics.load id
      hospital = getHospital()
      analytics.group "Hospital", { name: hospital }

  App = new Framework7(
    material: true
    router:false
  )
