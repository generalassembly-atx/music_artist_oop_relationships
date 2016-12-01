// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start

function Artist(name, songs) {
  this.name = name;
  this.songs = [];
  console.log(this);
}


// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is set to 0
function Song(title, artist) {
 this.title = title;
 this.artist = artist;
 this.playcount = 0;
  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...
  console.log(this);
this.artist.songs.push(this);

}
Song.prototype.play = function() {
  this.playCount += 1;
  console.log(this.playCount);
 }
// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
