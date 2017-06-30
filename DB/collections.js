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
	}
});
Cursos.attachSchema(cursosSchema);
Files = new FilesCollection({
  storagepath: 'E:/meteor/files_plataforma',
  downloadRoute: 'E:/meteor/files_plataforma/download',
  collectionName: 'files',
  allowClientCode: false,
  
});