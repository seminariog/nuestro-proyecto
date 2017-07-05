Template.usuarios.helpers({
	usuarios: function () {
		return Meteor.users.find({username: {$ne:'admin'}});
	}
});

Template.usuarios.events({
	'click .btn-administrador': function () {
		Meteor.call('rolAdministrador', this._id);
	},
	'click .btn-facilitador': function () {
		Meteor.call('rolFacilitador', this._id);
	},
	'click .btn-estudiante': function () {
		Meteor.call('rolEstudiante', this._id);
	}
});