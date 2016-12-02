// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(name) {
  this.name = name;
  this.songs = [];
}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is set to 0
function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.playCount = 0;

  this.artist.songs.push(this.title);
  console.log(vanHalen);

  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...

}
// I tried... got stuck in a loop of unknowing.
// var numberOfPlays =
//   function play() {
//     for(var i = 0; play = songs.length; i++)
//      this.playCount++;
//   }

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
var runnin = new Song("Runnin' with the Devil", vanHalen);
