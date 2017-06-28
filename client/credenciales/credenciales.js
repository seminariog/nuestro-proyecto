credencialTemplate = new ReactiveVar();
credencialTemplate.set('ingresar');

Template.credenciales.helpers({
	credencial: function () {
		return credencialTemplate.get();
	}
});