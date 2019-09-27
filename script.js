function onSignIn(googleUser)
{
	var profile=googleUser.getBasicProfile();
	$(".g-signin2").css("display","none");
	$(".data").css("display","block");
	$("#pic").attr('scr',profile.getImageUrl());
	$("#email").text(profile.getEmail());
	
}