Meteor.startup ()->
  Meteor.call "getSegmentId", ( err, id )->
    if err
      console.log "Error getting segmentId", err
    else
      analytics.load id
      analytics.group "Hospital", { name: "Jayadeva" }

  App = new Framework7(
    material: true
    router:false
  )
