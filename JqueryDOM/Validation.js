$(document).ready(function() {
	// body...

		function verifier(regularExp,inputValue){
			if(regularExp.test(inputValue) && (inputValue.length > 1) && (inputValue.length < 30)){
				$(".form-control").css({
					"border-color" : "#54BE4A"
				})
				$(".span").hide();
			}else{
				$(".form-control").css({
					"border-color" : "red"
				})
				$(".span").show();
			}
		}
	
		$("#validate").click(function() {
			// body...
			var regEx = /^[A-Z][a-zA-Z]+$/;
			var name = $("#name").val();
			var lastname = $("#lastname").val();
			console.log(lastname);
			console.log(regEx.test(name));

			verifier(regEx,name);
			if (lastname) {
				verifier(regEx,lastname);
			}
			
		})

		$("#add").click(function() {
			$(".some").append("<div class = input-group><input type = text aria-label = firstname id = firstname class = form-control placeholder = Prenom ></div>");
			$("#add").hide();
		})

	
})