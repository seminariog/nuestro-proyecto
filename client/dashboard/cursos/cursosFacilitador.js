Template.cursosFacilitador.helpers({
	cursosList: function () {
		return Cursos.find();
	}
});
Template.cursosFacilitador.onRendered(function(){
	Meteor.subscribe('cursos');
});