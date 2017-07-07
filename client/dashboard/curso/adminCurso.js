Template.adminCurso.helpers({
	curso: function () {
		return Cursos.findOne(FlowRouter.getParam('idCurso'));
	}
});