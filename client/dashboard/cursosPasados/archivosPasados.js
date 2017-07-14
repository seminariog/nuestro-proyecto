Template.archivosPasados.helpers({
	archivos: function (idMat) {
		return Archivos.find({idMaterial:idMat});
	},
	archivoFile(){
		return ArchivosMaterial.findOne(this.idArchivo);
	}
});
