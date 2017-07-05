if(Meteor.users.find().count() === 0){
	var userAdmin = {
		username: 'admin',
		email: 'admin@email.com',
		password: 'admin'
	};
	var idUsuario = Accounts.createUser(userAdmin);
	Roles.addUsersToRoles(idUsuario, ['administrador']);
}