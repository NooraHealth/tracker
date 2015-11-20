Meteor.startup ()->
  Session.setPersistent "hospital", "Jayadeva"
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
