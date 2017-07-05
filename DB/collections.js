Files = new FilesCollection({
  storagePath: '/meteor/files_plataforma',
  downloadRoute: '/meteor/files_plataforma/download',
  collectionName: 'files',
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