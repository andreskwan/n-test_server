//namespace para poder manipular desde la consola
//obj literal en js
Sfotipy          = {};
Sfotipy.Song     = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName  : 'li',
	className: 'item border-bottom',

	//function para dibujar la vista 
	render: function () {
		var song   = this.model;
		var name   = song.get('name');
		var author = song.get('author');
 
 		//helper de jquery
 		//para ingresar contenido a la vista
		this.$el.html("<span>"+ author +"</span> - <span>"+ name +"</span>")
	}
});
//para ponerlo global
window.Sfotipy = Sfotipy;