Template.registrar.events({
	'click #linkIngresar': function () {
		//cambiando la variable reactiva a ingresar
		credencialTemplate.set('ingresar');
	},
	'submit #formRegistrar': function(e){
		e.preventDefault();
		var target = e.target;
		//obteniendo el usuario del formulario
		var usuario = {
			username: target.username.value,
			email: target.email.value,
			password: target.password.value,
			profile:{
				paterno: target.paterno.value,
				materno: target.materno.value,
				nombres: target.nombres.value,
			} 
		};
		$("#ingresar").modal("hide");
  	e.stopPropagation();
		var idUsuario = Accounts.createUser(usuario, function(error){
			if(error){
				alert(error);
			}
		});
		Meteor.loginWithPassword(usuario.username,usuario.password, function(err){
			if(err)
				alert(err);
			else
				Meteor.call('rolUsuario', Meteor.userId());
				FlowRouter.go("/dashboard");
		});
	}
});
