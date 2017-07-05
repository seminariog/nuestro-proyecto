Template.cursosFacilitador.events({
	'submit #formCrearCurso': function (e) {
		e.preventDefault();
		var target = e.target;
		//console.log(target.imagen.files[0]);
		var upload = Files.insert({
			file: target.imagen.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});
		var curso = {
			titulo: target.titulo.value,
			descripcion: target.descripcion.value,
			inicio: target.inicio.value,
			idImg: upload.config.fileId,
		}
		Meteor.call('crearCurso', curso, function (error, result) {});
		target.titulo.value = '';
		target.descripcion.value = '';
		target.inicio.value = '';
		target.imagen.value = '';
		$("#crearCurso").modal("hide");
  	e.stopPropagation();
	}
});
Template.cursosFacilitador.helpers({
	cursos: function(){
		return Cursos.find();
	},
	cursoAutor: function(){
		return Meteor.users.findOne(this.autor);
	},
	creador: function(){
		if (this.autor === Meteor.userId()){
			return true;
		}
		return false;
	},
	imagen() {
    return Files.findOne(this.idImg);
  },
	moment: function(dateTime){
		return moment(dateTime).format('DD MMMM YYYY');
	}
});