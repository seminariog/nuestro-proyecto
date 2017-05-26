FlowRouter.route('/',{
	action: function(){
		BlazeLayout.render('principal');
		
	}
});
FlowRouter.route('/dashboard',{
	action: function(){
		BlazeLayout.render('dashboard');		
	}
});
