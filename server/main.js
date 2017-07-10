import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	/*---- Publicaciones ----*/
	Meteor.publish('getImagenesCursos', function(){
		return ImagenesCursos.find().cursor;
	});
	Meteor.publish('getVideos', function(){
		return MaterialesCursos.find().cursor;
	});
	Meteor.publish('getArchivos', function(){
		return ArchivosMaterial.find().cursor;
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
	publishComposite('materiales', function(idCurso){
		return {
			find(){
				return Materiales.find({idCurso:idCurso});
			},
			children:[
			{
				find(material){
					return Chat.find({idMaterial:material._id});
				}
			},
			
			{
				find(material){
					return Archivos.find({idMaterial:material._id});
				}
			}

			]
		}
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
		},
		'agregarMaterial': function(material){
			Materiales.insert(material);
		},
		'activarChat': function(idMaterial){
			Materiales.update(idMaterial, {$set: {chatActivo: true}});
		},
		'desactivarChat': function(idMaterial){
			Materiales.update(idMaterial, {$set: {chatActivo: false}});
		},
		'insertarMensaje': function(mensaje){
			Chat.insert(mensaje);
		},
		'insertarArchivo': function(archivo){
			Archivos.insert(archivo);
		},
		'eliminarArchivo': function(idArchivo){
			idArchivoFile = Archivos.findOne(idArchivo).idArchivo;
			Archivos.remove(idArchivo);
			ArchivosMaterial.remove(idArchivoFile);
		}
	});
});