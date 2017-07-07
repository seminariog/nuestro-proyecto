Template.cursosEstudiante.helpers({
	cursos: function(){
		return Cursos.find({},{$sort : {titulo : -1}});
	},
	cursoAutor: function(){
		return Meteor.users.findOne(this.autor);
	},
	inscrito: function(){
		var ins = Inscripciones.find({idCurso:this._id}).count();
		if(ins){
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

});

Template.cursosEstudiante.events({
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