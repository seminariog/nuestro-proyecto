FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render('principal');
	}
});
var adminSection = FlowRouter.group({
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
adminSection.route('/',{
	subscriptions: function(){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
	},
	action: function(){
		BlazeLayout.render('dashboard', {contentDasboard:'contenidoDasboard'});
	}	
});

adminSection.route('/perfil',{
	subscriptions: function(){
		this.register('datosUsuario', Meteor.subscribe('datosUsuario'));
	},
	action: function(){
		BlazeLayout.render('dashboard', {contentDasboard:'perfil'});
	}	
});