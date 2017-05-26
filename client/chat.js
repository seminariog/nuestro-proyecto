Template.chat.events({
	"submit form":function(e){
		
		var msn = $("#txtchat").val();
		CHAT.insert({autor:"seminario",msn:msn});
		$("#txtchat").val("");
		console.log(msn);
		return false;
	}
});
Template.chat.helpers({
	chat: function(){
		return CHAT.find();
	}
});