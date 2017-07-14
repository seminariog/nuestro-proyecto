Template.cursoFinalizado.helpers({
	curso: function () {
		return Cursos.findOne(FlowRouter.getParam('idCurso'));
	}
});