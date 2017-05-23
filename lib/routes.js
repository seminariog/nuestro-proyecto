FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render('principal');
		
	}
});
FlowRouter.route('/usuarios',{
	action: function(){
		BlazeLayout.render('usuarios');
	}
});