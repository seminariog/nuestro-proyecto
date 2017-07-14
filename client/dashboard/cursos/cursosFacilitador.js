Template.cursosFacilitador.events({
	'submit #formCrearCurso': function (e) {
		e.preventDefault();
		var target = e.target;
		//console.log(target.imagen.files[0]);
		var upload = ImagenesCursos.insert({
			file: target.imagen.files[0],
			streams: 'dynamic',
			chunkSize: 'dynamic',
		});
		var curso = {
			titulo: target.titulo.value,
			descripcion: target.descripcion.value,
			inicio: target.inicio.value,
			idImg: upload.config.fileId,
			activo: true,
			createdAt: new Date(),
		}
		Meteor.call('crearCurso', curso, function (error, result) {});
		target.titulo.value = '';
		target.descripcion.value = '';
		target.inicio.value = '';
		target.imagen.value = '';
		$("#crearCurso").modal("hide");
  	e.stopPropagation();
	},
	'click .btnEliminarCurso': function(){
		var idCurso = this._id;
		swal({
		  title: '¿Eliminar Curso?',
		  text: "Esta seguro que desea eliminar el curso",
		  type: 'warning',
		  showCloseButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Si, Eliminar Curso',
		  cancelButtonText: 'No, Cancelar',
		  confirmButtonClass: 'btn btn-success btn-block',
		  cancelButtonClass: 'btn btn-danger btn-block',
		  buttonsStyling: false
		}).then(function () {
			Meteor.call('eliminarCurso', idCurso);
		  swal(
		    'Eliminado!',
		    'El curso ha sido eliminado',
		    'success',
		  )
		});
	},
	'click .btnIncripcion': function(){
		var inscripcion = {
			idCurso: this._id,
		}
		Meteor.call('agregarInscripcion', inscripcion);
		swal({
		  title: 'Registrado',
		  html: 'Usted se ha registrado al curso <strong>'+this.titulo+'</strong>. Ahora puede Ingresar al contenido del curso',
		  type: 'success',
		  confirmButtonText: 'OK'
		});
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
    return ImagenesCursos.findOne(this.idImg);
  },
	moment: function(dateTime){
		return moment(dateTime).format('DD MMMM YYYY');
	},
	inscrito: function(){
		var ins = Inscripciones.find({idCurso:this._id}).count();
		if(ins){
			return true;
		}
		return false;
	},
});
