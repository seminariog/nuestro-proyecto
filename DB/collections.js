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
	idImg:{
		type: String
	},
	createdAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
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