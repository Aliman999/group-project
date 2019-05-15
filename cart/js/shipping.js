function ValidateForm()
{
    if (document.forms["myForm"]["Address"].value == null
				|| document.forms["myForm"]["Address"].value == "")
					{
					alert("Please Enter Your Shipping Address");
					return false;
					}
                if (document.forms["myForm"]["City"].value == null
						|| document.forms["myForm"]["City"].value == "")
						{
						alert("Please enter a City");
						return false;
						}
                    if (document.forms["myForm"]["State"].value == null
						|| document.forms["myForm"]["State"].value == "")
						{
						alert("Please enter a State");
						return false;
						}
                    if (document.forms["myForm"]["Zip"].value == null
						|| document.forms["myForm"]["Zip"].value == "")
						{
						alert("Please enter a Zipcode");
						return false;
						}
				if (document.forms["myForm"]["contact"].value == null
				|| document.forms["myForm"]["contact"].value == "")
					{
					alert("Please enter a contact number");
					return false;
					}
						if (document.forms["myForm"]["email"].value == null
						|| document.forms["myForm"]["email"].value == "")
						{
						alert("Please enter an Email address");
						return false;
						}
return true;
}
