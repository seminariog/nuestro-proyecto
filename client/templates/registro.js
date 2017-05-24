Template.registro.events({
	'submit form'(e){
		e.preventDefault();
		
		var persona = {
			username : e.target.usuario.value,
			email : e.target.email.value,
			password : e.target.password.value,
			profile : {
				carrera : e.target.carrera.value,
				paterno : e.target.paterno.value,
				materno : e.target.materno.value,
				nombres : e.target.nombres.value,
			}
		};
		console.log(persona);
		Accounts.createUser(persona);
		$('#registrar').modal('hide');
		return false
	}
});