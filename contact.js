function emailSend(){
	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var message = document.getElementById('message').value;

	emailjs.init({
		publicKey: "iYHGIDlx4NdEE1Wc_",
	  });
	  
	emailjs.send("service_j5xe5qv","template_9jrh3po",{
		from_name: userName,
		email: email,
		phone: phone,
		text: message,
		});
}