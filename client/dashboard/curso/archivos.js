Template.archivos.events({
	'submit form': function (e) {
		e.preventDefault();
		var target = e.target;
		var upload = ArchivosMaterial.insert({
			file: target.archivo.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});
		var archivo = {
			idMaterial : target.material.value,
			idArchivo : upload.config.fileId
		}
		console.log(archivo);
		Meteor.call('insertarArchivo', archivo);
		console.log(archivo);
		$("#addArchivo"+target.material.value).modal("hide");
  	e.stopPropagation();
	},
	'click .btnEliminarArchivo':function(){
		Meteor.call('eliminarArchivo', this._id);
	}
});

Template.archivos.helpers({
	archivos: function (idMat) {
		return Archivos.find({idMaterial:idMat});
	},
	archivoFile(){
		return ArchivosMaterial.findOne(this.idArchivo);
	}
});
