Template.cursosEstudiante.helpers({
	cursosList: function () {
		return Cursos.find();
	}
});

Template.cursosEstudiante.onRendered(function(){
	Meteor.subscribe('cursos');
});