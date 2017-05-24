Template.registro.events({
	'submit form'(e){
		e.preventDefault();
		
		var persona = {
			username : e.target.username.value,
			password : e.target.password.value,
		};
		Accounts.loginWithPassword(persona);
		return false
	}
});