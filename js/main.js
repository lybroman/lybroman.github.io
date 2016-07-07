$(document).ready(function(){

var inview = new Waypoint.Inview({
  element: $('#Home')[0],
  enter: function(direction) {
    notify('Enter triggered with direction ' + direction)
  },
  entered: function(direction) {
    notify('Entered triggered with direction ' + direction)
  },
  exit: function(direction) {
    notify('Exit triggered with direction ' + direction)
  },
  exited: function(direction) {
    notify('Exited triggered with direction ' + direction)
  }
})
})