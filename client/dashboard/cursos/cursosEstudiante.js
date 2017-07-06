Template.cursosEstudiante.helpers({
	cursos: function(){
		return Cursos.find({},{$sort : {titulo : -1}});
	},
	cursoAutor: function(){
		return Meteor.users.findOne(this.autor);
	},
	inscrito: function(){
		var ins = Inscripciones.find({idCurso:this._id}).count();
		if(ins){
			return true;
		}
		return false;
	},
	imagen() {
    return Files.findOne(this.idImg);
  },
	moment: function(dateTime){
		return moment(dateTime).format('DD MMMM YYYY');
	},

});

Template.cursosEstudiante.events({
	'click .btnIncripcion': function(){
		var inscripcion = {
			idCurso: this._id,
		}
		Meteor.call('agregarInscripcion', inscripcion);
	}
});