function Artist(name, songs) {
	this.name = name;
	this.songs = [];
}

function Song(title, artist) {
	this.title = title;
	this.artist = artist;
	this.playcount = 0;
	this.artist.songs.push(this.title)

}

var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);

console.log(vanHalen.songs);
console.log(vanHalen.name);
