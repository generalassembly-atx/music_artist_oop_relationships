function Artist(name, songs) {
  this.name = name;
  this.songs = [];

}

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.playCount = 0;

    (this.artist).songs.push(this.title);
console.log(vanHalen.songs);

}

// function play(playCount){
//   for (i=0; i>playCount; i++)
//   return playCount++;
// }
// play();

var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
