import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	/*---- Publicaciones ----*/
	Meteor.publish('datosUsuario', function(){
		return Meteor.users.find({_id: this.userId});
	});
});
