var tiempo = new ReactiveVar();
Template.preguntas.events({
	'submit #nuevaPregunta': function (e) {
		e.preventDefault();
		var target = e.target;
		var pregunta = {
			idCurso: FlowRouter.getParam('idCurso'),
			texto: target.pregunta.value,
			votos: 0,
		};
		Meteor.call('insertarPregunta', pregunta);
	}
});

Template.preguntas.helpers({
	listaPreguntas: function(){
		return Preguntas.find();
	},
	moment(fecha){
		tiempo.set(moment(fecha).fromNow());
		return tiempo.get();
	}
});