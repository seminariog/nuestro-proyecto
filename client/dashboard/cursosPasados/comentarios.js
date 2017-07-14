var tiempo = new ReactiveVar();
Template.comentarios.events({
	'submit form': function (e) {
		e.preventDefault();
		var target = e.target;
		var respuesta = {
			idPregunta : target.idPregunta.value,
			idUsuario : Meteor.userId(),
			texto : target.respuesta.value,
			createdAt : new Date(),
		}
		Meteor.call('insertarRespuesta', respuesta);
		target.respuesta.value = '';
	},
	'click .btnLikeAnswer': function(){
		var votoRespuesta = {
			idRespuesta : this._id,
			idUsuario : Meteor.userId(),
			createdAt : new Date(),
		};
		Meteor.call('insertarVotoRespuesta', votoRespuesta);
	},
	'click .btnNotLikeAnswer': function(){
		Meteor.call('eliminarVotoRespuesta', this._id);
	}
});

Template.comentarios.helpers({
	respuestas : function(idMaterial){
		return Respuestas.find({idPregunta:idMaterial});
	},
	autorRespuesta : function(){
		return Meteor.users.findOne({_id : this.idUsuario});
	},
	moment: function(fecha){
		tiempo.set(moment(fecha).fromNow());
		return tiempo.get();
	},
	votoResp: function(){
		return VotosRespuestas.find({idRespuesta:this._id}).count();
	},
	votadoRespuesta:function(){
		var voto = VotosRespuestas.find({$and:[
			{idRespuesta:this._id},
			{idUsuario:Meteor.userId()}
		]}).count();
		if(voto > 0)
			return true;
		return false;
	}
});