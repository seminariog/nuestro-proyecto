import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	/*---- Publicaciones ----*/
	Meteor.publish('datosUsuario', function(){
		return Meteor.users.find({_id: this.userId});
	});
	Meteor.publish('cursos', function(){
		return Cursos.find();
	});
	/*---- Methods ----*/
	Meteor.methods({
		'crearCurso': function(curso){
			Cursos.insert(curso);
		}
	});
});
