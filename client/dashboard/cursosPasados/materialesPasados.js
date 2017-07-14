Template.materialesPasados.helpers({
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