boxMat = new ReactiveVar();
boxMat.set('archivos');
Template.materiales.helpers({
	boxMaterial: function () {
		return boxMat.get();
	},
	materiales: function(){
		return Materiales.find();
	}
});

Template.materiales.events({
	'click .btnArchivos': function () {
		boxMat.set('archivos');
	},
	'click .btnChat': function () {
		boxMat.set('chat');
	},
});