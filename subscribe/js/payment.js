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
			alert("Sorry, your credit card number must be a valid card number");
					return false;
        }
		}
		else
		{
		alert('Please enter your Name');
	return false;

}
}
