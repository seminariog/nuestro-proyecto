Template.cursosPasados.helpers({
	cursos: function(){
		return Cursos.find({},{$sort : {titulo : -1}});
	},
	cursoAutor: function(){
		return Meteor.users.findOne(this.autor);
	},
	imagen() {
    return ImagenesCursos.findOne(this.idImg);
  },
	moment: function(dateTime){
		return moment(dateTime).format('DD MMMM YYYY');
	},
	creador: function(){
		if (this.autor === Meteor.userId()){
			return true;
		}
		return false;
	},
});