Template.nuevoMaterial.events({
	'submit form': function (e) {
		e.preventDefault();
		var target = e.target;
				
		var upload = MaterialesCursos.insert({
			file: target.video.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});

		var material = {
			titulo: target.titulo.value,
			idVideo: upload.config.fileId,
			idCurso: FlowRouter.getParam('idCurso'),
			chatActivo: false,
		}

		Meteor.call('agregarMaterial', material);

		$("#modalNuevoMaterial").modal("hide");
  	e.stopPropagation();
	}
});