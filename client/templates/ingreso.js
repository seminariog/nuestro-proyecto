Template.ingreso.events({
	'submit form'(e){
		e.preventDefault();
		var username = e.target.username.value;
		var password = e.target.password.value;
		console.log(username);
		e.target.username.value="";
		e.target.password.value="";
		Meteor.loginWithPassword(username, password);
		$('#ingresar').modal('hide');
		FlowRouter.go('/dashboard');
	}
});