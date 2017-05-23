Template.usuarios.helpers({
	registrados : function(){
		return Usuarios.find();
	}
});