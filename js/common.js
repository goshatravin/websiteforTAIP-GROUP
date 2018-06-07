$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#php-over').css({ display: "block" });
			$('#form').css({ display: "none" });
			 $("#form").trigger("reset");
		});
		return false;
	});
	
});
$(document).ready(function() {

	$("#form-one").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('#php-over-one').css({ display: "block" });
			// $('#form-one').css({ display: "none" });
			 $("#form-one").trigger("reset");
		});
		return false;
	});
	
});