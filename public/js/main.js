//namespace para poder manipular desde la consola
//obj literal en js
Sfotipy          = {};
Sfotipy.Song     = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName  : 'li',
	className: 'item border-bottom',
	template: Handlebars.compile($("#song-template").html()),

	//function para dibujar la vista 
	render: function () {
		var html = this.template(this.model.toJSON());
 		//helper de jquery
 		//para ingresar contenido a la vista
		this.$el.html(html);
	}
});
//para ponerlo global
window.Sfotipy = Sfotipy;