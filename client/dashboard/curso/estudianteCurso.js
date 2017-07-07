Template.estudianteCurso.helpers({
	curso: function () {
		return Cursos.findOne(FlowRouter.getParam('cursoId'));
	}
});