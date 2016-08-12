// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(name, songs) {
  this.name = name,
  this.songs = []

}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is an empty array to start
function Song(title, artist, playcount) {
  this.title = "Jump!",
  this.artist = VanHalen,
  this.playcount = [0]
}
  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...
  Song.prototype.play = function () {
  for (var i = 0; i < this.playCount.length; i++) {
    this.playCount[i]
  }

}

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
