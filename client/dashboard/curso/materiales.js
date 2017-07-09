Template.materiales.helpers({
	materiales: function(){
		return Materiales.find();
	},
	video: function(){
    return MaterialesCursos.findOne(this.idVideo);
  },
  readyVideos: function(){
  	return FlowRouter.subsReady('getVideos');
  }
});

Template.materiales.events({
	'click .btnActivarChat': function(){
		Meteor.call('activarChat', this._id);
	},
	'click .btnDesactivarChat': function(){
		Meteor.call('desactivarChat', this._id);
	}
});