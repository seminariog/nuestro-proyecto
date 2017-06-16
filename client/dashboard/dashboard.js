Template.dashboard.helpers({
	usuario: function () {
		return Meteor.user();
	},
	ready: function(){
		return FlowRouter.subsReady('datosUsuario');
	}
});
Template.dashboard.events({
	'click #linkSalir': function (e) {
		e.preventDefault();
		Meteor.logout();
		FlowRouter.go("/");
		$('.modal-backdrop').remove();
	}
});