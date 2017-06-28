Template.agregarCurso.events({
	'submit #formAddCurso': function (e) {
		e.preventDefault();
		var target = e.target;
		var curso = {
			titulo: target.titulo.value,
			autor: Meteor.userId(),
			descripcion: target.descripcion.value
		};
		$('#modalAddCurso').modal('hide');
		Meteor.call('crearCurso', curso);
	}
});