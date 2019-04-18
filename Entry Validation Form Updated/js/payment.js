function Payment(Name, CardNum)
{
   this.Name = Name;
   this.CardNum = CardNum;
}
function Paymentform(Name,CardNum)
{
	var letters = /^[A-Za-z\s]+$/;
	if(Name.value.match(letters))
		{
		  alert('Thank you, Your input was valid');
			  var cardno = /^([0-9]{16})$/;
			  if(CardNum.value.match(cardno))
					{
				  alert('Thank you, Your card number is valid');
					}
				  else
					{
			alert("Sorry, your credit card number must be 16 numeric digits");
					return false;
        }
		}
		else
		{
		alert('Your name could not be accepted, please make sure it  contains letters only from the english alphabet');
	return false;

}
}
