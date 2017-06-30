Template.cursosFacilitador.events({
	'submit #formCrearCurso': function (e) {
		e.preventDefault();
		var target = e.target;
		var curso = {
			titulo: target.titulo.value,
			descripcion: target.descripcion.value,
			inicio: target.inicio.value,
		}
		Meteor.call('crearCurso', curso, function (error, result) {});
	}
});
Template.cursosFacilitador.helpers({
	cursos: function(){
		return Cursos.find();
	},
	cursoAutor: function(){
		return Meteor.users.findOne(this.autor);
	},
	moment: function(dateTime){
		moment.locale('es');
		return moment(dateTime).format('DD MMMM YYYY');
	}
});