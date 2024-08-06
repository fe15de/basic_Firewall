function emailSend(){
	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "federico.perez@utp.edu.co",	
    Password : "8D339DE9C51FA4B59699BA3547A3B4692B7A",
    To : 'federicoperezramirez@gmail.com',
    From : "federico.perez@utp.edu.co",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}