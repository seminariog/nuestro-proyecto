import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	/*---- Publicaciones ----*/
	Meteor.publish('getArchivos', function(){
		return ImagenesCursos.find().cursor;
	});
	Meteor.publish('getVideos', function(){
		return MaterialesCursos.find().cursor;
	});
	Meteor.publish('datosUsuario', function(){
		return Meteor.users.find({_id: this.userId});
	});
	Meteor.publish('usuarios', function (){
	  return Meteor.users.find();
	});
	Meteor.publish('roles', function (){
	  return Meteor.roles.find();
	});
	/*--- Lista de cursos --*/
	publishComposite('listaCursos', {
		find(){
			return Cursos.find();
		},
		children:[
			{
				find(curso){
					return Meteor.users.find({_id: curso.autor});
				}
			},
			{
				find(curso){
					return Inscripciones.find({$and:[
						{idCurso: curso._id},
						{idUsuario: this.userId}
					]});
				}
			}
		]
	});
	/*--- Curso con materiales y mensajes ---*/
	Meteor.publish('materiales', function(idCurso){
		return Materiales.find(idCurso: idCurso);
	});
	Meteor.publish('curso', function (idCurso) {
		return Cursos.find({_id:idCurso});		
	});
	Meteor.publish('inscripciones', function(){
		return Inscripciones.find();
	});
	/*---- Methods ----*/
	Meteor.methods({
		'rolUsuario': function(idUsuario){
			Roles.addUsersToRoles(idUsuario, 'estudiante');
		},
		'rolAdministrador': function(idUsuario){
			Roles.setUserRoles(idUsuario, 'administrador');
		},
		'rolFacilitador': function(idUsuario){
			Roles.setUserRoles(idUsuario, 'facilitador');
		},
		'rolEstudiante': function(idUsuario){
			Roles.setUserRoles(idUsuario, 'estudiante');
		},
		'crearCurso': function(curso){
			var idCurso = Cursos.insert(curso);
			return idCurso;
		},
		'eliminarCurso': function(idCurso){
			Cursos.remove(idCurso);
		},
		'agregarInscripcion': function(idCurso){
			Inscripciones.insert(idCurso);
		}

	});
});