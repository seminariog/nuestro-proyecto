Template.ingresar.events({
	'click #linkRegistrar': function (e) {
		credencialTemplate.set('registrar');
	},
	'submit #formIngresar': function(e){
		e.preventDefault();
		var target= e.target;
		$("#ingresar").modal("hide");
  	e.stopPropagation();
		Meteor.loginWithPassword(target.username.value, target.password.value, function(error){
			if(error){
				alert(error);
			}
			else{
				FlowRouter.go("/dashboard");
			}
		});
	}
});