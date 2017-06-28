Cursos = new Mongo.Collection('cursos');
var cursosSchema = new SimpleSchema({
	titulo: {
		type: String
	},
	autor: {
		type: String
	},
	descripcion: {
		type: String
	}
});
Cursos.attachSchema(cursosSchema);