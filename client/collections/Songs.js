// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        this.ajaxSuccess(data);
      }.bind(this),
      error: function (data) {
        console.error('Failed to load songs', data);
      }
    });
  },

  ajaxSuccess: function (data) {
    for (var key in data.results) {
      this.add(data.results[key]);
    }
    this.trigger('ajaxSuccess', this);
  }

  // getSongs: function () {
  //   var xhr = new XMLHttpRequest();
  //   var url = 'https://api.parse.com/1/classes/songs';
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       console.log('successful');
  //     }
  //   };
  //   xhr.open('GET', url);
  //   xhr.send();
  // }

});