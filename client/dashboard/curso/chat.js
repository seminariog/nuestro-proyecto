Template.chat.helpers({
	activar: function (salaChat) {
		if (!salaChat) {
			return 'disabled';
		}
		return '';
	},
	mensajes: function(idMat){
		return Chat.find({idMaterial:idMat});
	},
	claseMensaje: function(idUs){
		if (idUs === Meteor.userId()) {
			return 'col-md-10 col-md-offset-2 i-user'
		}
		return 'col-md-10 other-user';

	}
});

Template.chat.events({
	'submit form': function (e) {
		e.preventDefault();
		var mensaje = {
			idMaterial: e.target.material.value,
			texto: e.target.texto.value
		};
		Meteor.call('insertarMensaje', mensaje);
		e.target.texto.value = '';
	}
});