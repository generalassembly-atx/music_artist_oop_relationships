var t = "";
var n = "";
var a = n;

// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(n) {
  this.name = n,
  this.songs = [];
}
// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is set to 0
function Song(t, a) {
this.title = t,
this.artist = a,
this.playCount = 0;
  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...
}
Song.prototype.play =
function () {
  return "song title: "+ (Song.title) + "artist: " + (Song.artist)+ "track #: " + Song.playCount;
}
Song.prototype.add =
function () {
   for(i=0; i<playCount;i++) {
     if(Song.play() !=== playCount[i]) {
       playCount +=;
     }
     else {
       return false;
     }
   }
}
// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
