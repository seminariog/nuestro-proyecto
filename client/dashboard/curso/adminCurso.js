Template.adminCurso.helpers({
	curso: function () {
		return Cursos.findOne(FlowRouter.getParam('idCurso'));
	}
});
Template.adminCurso.events({
	'click .finCurso': function () {
		Meteor.call('finalizarCurso', FlowRouter.getParam('idCurso'));
		FlowRouter.go('/dashboard');
	}
});