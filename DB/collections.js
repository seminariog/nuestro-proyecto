ImagenesAvatar = new FilesCollection({
  storagePath: '/meteor/files_plataforma/avatar',
  downloadRoute: '/meteor/files_plataforma/download',
  collectionName: 'avatar',
  allowClientCode: false,
});
/*------ imagenes de curso ------*/
ImagenesCursos = new FilesCollection({
  storagePath: '/meteor/files_plataforma/cursos',
  downloadRoute: '/meteor/files_plataforma/download',
  collectionName: 'imagenesCursos',
  allowClientCode: false,
});

/*--- Archivos ---*/
ArchivosMaterial = new FilesCollection({
  storagePath: '/meteor/files_plataforma/cursos/archivos',
  downloadRoute: '/meteor/files_plataforma/download',
  collectionName: 'archivosMaterial',
  allowClientCode: false,
});
/*--- Materiales de los cursos---*/
MaterialesCursos = new FilesCollection({
  storagePath: '/meteor/files_plataforma/cursos/materiales',
  downloadRoute: '/meteor/files_plataforma/download',
  collectionName: 'materialesCursos',
  allowClientCode: false,
});
/*---Colleccion de Cursos---*/
Cursos = new Mongo.Collection('cursos');
var cursosSchema = new SimpleSchema({
	titulo: {
		type: String
	},
	autor: {
		type: String,
		autoValue: function(){
			return Meteor.userId();
		},
	},
	descripcion: {
		type: String
	},
	inicio:{
		type: Date
	},
	fin:{
		type:Date,
		optional: true,
	},
	idImg:{
		type: String
	},
	activo:{
		type: Boolean
	},
	createdAt: {
		type: Date
	}
});
Cursos.attachSchema(cursosSchema);

/*---Collection inscripciones*/
Inscripciones = new Mongo.Collection('inscripciones');

var inscripcionesSchema = new SimpleSchema({
	idCurso: {
		type: String
	},
	idUsuario: {
		type: String,
		autoValue: function(){
			return Meteor.userId();
		},
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});
Inscripciones.attachSchema(inscripcionesSchema);

/*--- Collecion materiales ---*/
Materiales = new Mongo.Collection('materiales');

var materialesSchema = new SimpleSchema({
	titulo: {
		type: String
	},
	chatActivo: {
		type: Boolean,
	},
	idVideo: {
		type: String
	},
	idCurso: {
		type: String
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});

Materiales.attachSchema(materialesSchema);

/*--- Coleccion Chat ---*/
Chat = new Mongo.Collection('chat');

var chatSchema = new SimpleSchema({
	idUsuario: {
		type: String,
		autoValue: function(){
			return Meteor.userId();
		},
	},
	idMaterial: {
		type: String
	},
	texto:{
		type: String
	},
	discusion:{
		type: Boolean
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});

Chat.attachSchema(chatSchema);

/*--- Archivos ---*/
Archivos = new Mongo.Collection('archivos');

var archivosSchema = new SimpleSchema({
	idMaterial: {
		type: String
	},
	idArchivo: {
		type: String
	},
	createdAt:{
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});

Archivos.attachSchema(archivosSchema);

/*--- Preguntas ---*/

Preguntas = new Mongo.Collection('preguntas');

var preguntasSchema = new SimpleSchema({
	idCurso: {
		type: String
	},
	idUsuario:{
		type: String
	},
	discusion: {
		type: Boolean,
	},
	texto:{
		type: String
	},
	votos:{
		type: Number
	},
	createdAt: {
		type: Date
	}
});

Preguntas.attachSchema(preguntasSchema);

/*------- Votos Preguntas ------*/
VotosPreguntas = new Mongo.Collection('votosPreguntas');

var votosPreguntasSchema = new SimpleSchema({
	idPregunta : {
		type: String
	},
	idUsuario: {
		type: String
	},
	createdAt: {
		type: Date
	},
});

VotosPreguntas.attachSchema(votosPreguntasSchema);

/*--------------- Respuestas ---------------*/

Respuestas = new Mongo.Collection('respuestas');

var respuestasSchema = new SimpleSchema({
	idPregunta: {
		type: String
	},
	idUsuario: {
		type: String
	},
	texto: {
		type: String
	},
	createdAt: {
		type: Date
	}
});
Respuestas.attachSchema(respuestasSchema);
/***---------- Votos respuestas--------***/


VotosRespuestas = new Mongo.Collection('votosRespuestas');

var votosPreguntasSchema = new SimpleSchema({
	idRespuesta : {
		type: String
	},
	idUsuario: {
		type: String
	},
	createdAt: {
		type: Date
	},
});
