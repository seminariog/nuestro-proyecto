Template.registro.events({
	'submit form'(e){
		e.preventDefault();
		var user = {
			paterno : e.target.paterno.value,
			materno : e.target.materno.value,
			nombres : e.target.nombres.value,
		};
		Usuarios.insert(user);
	}
});