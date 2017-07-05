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
	}
});
Cursos.attachSchema(cursosSchema);
/*---Collection inscripciones*/
/*Inscripcion = new Mongo.Collection('inscripcion');

var inscripcionSchema = new SimpleSchema({
	idCurso: {
		type: String
	},
	id
});*/