$(document).ready(function(){

	$.confirm({
		title: 'Thank you!',
		content: 'Click Confirm button to connect again.',
		type: 'purple',
		typeAnimated: true,
		boxWidth: '75%',
		useBootstrap: false,
		buttons: {
			confirm: function () { 
				login();
			}
		}
	});

});

function login(){ 
	var link = $('#redirect_to_login_url').val(); 
	redirectTo(link); 
 }
