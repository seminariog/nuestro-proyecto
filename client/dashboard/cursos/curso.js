Template.curso.helpers({
	curso: function () {
		return Cursos.findOne();
	},
	hola: 'este es un mensaje',
});