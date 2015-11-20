Meteor.startup ()->
  Meteor.call "getSegmentId", ( err, id )->
    analytics.load id
    analytics.group "Hospital", { name: "Jayadeva" }

  App = new Framework7(
    material: true
    router:false
  )
