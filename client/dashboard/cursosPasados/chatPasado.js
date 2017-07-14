Template.chatPasado.helpers({
	mensajes: function(idMat){
		return Chat.find({idMaterial:idMat});
	},
	mensajeAutor: function(){
		return Meteor.users.findOne(this.idUsuario);
	},
});
Template.chatPasado.events({
	'click .btnEnviarDiscusion': function() {
		var pregunta = {
			idCurso: FlowRouter.getParam('idCurso'),
			idUsuario: this.idUsuario,
			texto: this.texto,
			votos: 0,
			discusion: true,
			createdAt: new Date()
		};
		Meteor.call('insertarPregunta', pregunta);
		Meteor.call('modificarMensaje', this._id);
	}
});