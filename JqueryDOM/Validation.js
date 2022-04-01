$(document).ready(function()
{
		function verifier(regularExp,inputValue,id)
		{
			if(regularExp.test(inputValue) && (inputValue.length > 1) && (inputValue.length < 30))
			{
				$(id).css(
				{
					"border-color" : "#54BE4A"
				})
				$(".span").hide();
			}else{
				$(id).css(
				{
					"border-color" : "red"
				})
				$(".span").show();
			}
		}
	
		$("#validate").click(function()
		{
			// body...
			var regEx = /^[A-Z][a-zA-Z]+$/;
			var name = $("#name").val();
			var lastname = $("#firstname").val();
			

			verifier(regEx,name,"#name");
			if (lastname)
			{
				verifier(regEx,lastname,"#firstname");
			}
			
		})

		$("#add").click(function()
		{

			$(".some").append("<div class = input-group><input type = text aria-label = firstname id = firstname class = form-control placeholder = Prenom ></div>");
			$("#add").hide();
			
		})
		var regEx = /^[A-Z][a-zA-Z]+$/;
		var firstname = $("#firstname").val();

})















