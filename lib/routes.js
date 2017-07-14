FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render('principal');
	}
});
//rutas para usuarios registrados
var registerSection = FlowRouter.group({
  prefix: "/dashboard",
  triggersEnter: [function(context, redirect) {
    if (Meteor.loggingIn() || Meteor.user() ) {
			BlazeLayout.render('dashboard');
		}
		else{
			redirect("/");
		}
  }]
});
registerSection.route('/',{
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('listaCursos', Meteor.subscribe('listaCursos'));
		this.register('getImagenesCursos', Meteor.subscribe('getImagenesCursos'));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'cursos'});
	}	
});

registerSection.route('/perfil',{
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'perfil'});
	}	
});

registerSection.route('/cursos/:idCurso', {
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('curso', Meteor.subscribe('curso', params.idCurso));
		this.register('materiales', Meteor.subscribe('materiales', params.idCurso));
		this.register('getVideos', Meteor.subscribe('getVideos'));
		this.register('getArchivos', Meteor.subscribe('getArchivos'));
		this.register('preguntas', Meteor.subscribe('preguntas', params.idCurso));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'estudianteCurso'});
	}
});
/*---- modulo Cursos Pasados -----*/

registerSection.route('/cursosPasados',{
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('listaCursosPasados', Meteor.subscribe('listaCursosPasados'));
		this.register('getImagenesCursos', Meteor.subscribe('getImagenesCursos'));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'cursosPasados'});
	}
});

registerSection.route('/cursosPasados/:idCurso', {
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('curso', Meteor.subscribe('curso', params.idCurso));
		this.register('materiales', Meteor.subscribe('materiales', params.idCurso));
		this.register('getVideos', Meteor.subscribe('getVideos'));
		this.register('getArchivos', Meteor.subscribe('getArchivos'));
		this.register('discusion', Meteor.subscribe('discusion', params.idCurso));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'cursoFinalizado'});
	}
});
//rutas para usuarios administradores
var adminSection = registerSection.group({
  prefix: "/config",
  triggersEnter: [function(context, redirect) {
    if (Roles.userIsInRole(Meteor.userId(), 'administrador')) {
			BlazeLayout.render('dashboard');
		}
		else{
			redirect("/dashboard");
		}
  }]
});

adminSection.route('/',{
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'configuracion', contentConfig:'config'});
	}	
});

adminSection.route('/users',{
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('roles', Meteor.subscribe('roles'));
		this.register('usuarios', Meteor.subscribe('usuarios'));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'configuracion', contentConfig:'usuarios'});
	}	
});
/*--- Rutas para facilitadores ---*/
var facilitadorSection = registerSection.group({
  triggersEnter: [function(context, redirect) {
    if (Roles.userIsInRole(Meteor.userId(), 'administrador') || Roles.userIsInRole(Meteor.userId(), 'facilitador')) {
			BlazeLayout.render('dashboard');
		}
		else{
			redirect("/dashboard");
		}
  }]
});
facilitadorSection.route('/adminCurso/:idCurso',{
	subscriptions: function(params, getParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('curso', Meteor.subscribe('curso', params.idCurso));
		this.register('materiales', Meteor.subscribe('materiales', params.idCurso));
		this.register('getVideos', Meteor.subscribe('getVideos'));
		this.register('getArchivos', Meteor.subscribe('getArchivos'));
		this.register('preguntas', Meteor.subscribe('preguntas', params.idCurso));
	},
	action: function(params, getParams){
		BlazeLayout.render('dashboard', {contentDasboard:'adminCurso'});
	}
});
facilitadorSection.route('/cursosPasados/:idCurso/admin', {
	subscriptions: function(params, queryParams){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
		this.register('curso', Meteor.subscribe('curso', params.idCurso));
		this.register('materiales', Meteor.subscribe('materiales', params.idCurso));
		this.register('getVideos', Meteor.subscribe('getVideos'));
		this.register('getArchivos', Meteor.subscribe('getArchivos'));
		this.register('discusion', Meteor.subscribe('discusion', params.idCurso));
	},
	action: function(params, queryParams){
		BlazeLayout.render('dashboard', {contentDasboard:'cursoFinalizado'});
	}
});