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
				},
				children:[
				{
					find(chat, material){
						return Meteor.users.find({_id : chat.idUsuario});
					}
				}

				]
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

	/*------ Publish Preguntas ------*/
	publishComposite('preguntas', function(idCurso){
		return {
			find(){
				return Preguntas.find({idCurso:idCurso}, {$sort:{votos:1}});
			},
			children: [
			{
				find(pregunta){
					return Meteor.users.find({_id:pregunta.idUsuario});
				}
			},

			{
				find(pregunta){
					return VotosPreguntas.find({idPregunta:pregunta._id});
				}
			},

			{
				find(pregunta){
					return Respuestas.find({idPregunta : pregunta._id});
				},
				children:[
				{
					find(respuesta, pregunta){
						return Meteor.users.find({_id:respuesta.idUsuario});
					}
				},
				{
					find(respuesta, pregunta){
						return VotosRespuestas.find({idRespuesta:respuesta._id});
					}
				}
				]
			}
			]
		}
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
		},
		/*------Modulo Preguntas ------*/
		'insertarPregunta': function(pregunta){
			Preguntas.insert(pregunta);
		},
		'votarPregunta': function(idPregunta){
			VotosPreguntas.insert({
				idPregunta: idPregunta,
				idUsuario: this.userId,
				createdAt: new Date(),
			});
			Preguntas.update(idPregunta, {$inc:{votos:1}});
		},
		'cancelarVotacion': function(idPregunta){
			VotosPreguntas.remove({$and:[
				{idPregunta:idPregunta},
				{idUsuario:this.userId}
			]});
			Preguntas.update(idPregunta, {$inc:{votos : -1}});
		},
		'insertarRespuesta': function(respuesta){
			Respuestas.insert(respuesta);
		},
		'insertarVotoRespuesta': function(votoRespuesta){
			VotosRespuestas.insert(votoRespuesta);
		},
		'eliminarVotoRespuesta': function(idRespuesta){
			VotosRespuestas.remove({$and:[
				{idRespuesta : idRespuesta},
				{idUsuario : Meteor.userId()}
			]});		
		}
	});
});