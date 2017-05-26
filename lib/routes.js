FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render('principal',{banner:"chat"});
		
	}
});
FlowRouter.route('/dashboard',{
	action: function(){
		BlazeLayout.render('dashboard');		
	}
});
