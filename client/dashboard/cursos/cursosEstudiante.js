Template.cursosEstudiante.helpers({
	cursos: function(){
		return Cursos.find();
	},
	cursoAutor: function(){
		return Meteor.users.findOne(this.autor);
	},
	imagen() {
    return Files.findOne(this.idImg);
  },
	moment: function(dateTime){
		moment.locale('es');
		return moment(dateTime).format('DD MMMM YYYY');
	}
});