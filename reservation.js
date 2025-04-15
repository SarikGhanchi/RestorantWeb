$(document).ready(function () {
    // Live Character Count for Name
    $("#name").on("input", function () {
        let charCount = $(this).val().length;
        $("#char-count").text(`${charCount}/30`);

        if (charCount > 30) {
            $(this).val($(this).val().substring(0, 30));
            $("#char-count").text("30/30");
        }
    });

    // Form Submission with Validation
    $("#reservation-form").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let date = $("#date").val();

        // Email Validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulating AJAX request with loading animation
        $(".btn-gold").text("Processing...").prop("disabled", true);

        setTimeout(function () {
            $("#confirmation-message").fadeIn().delay(4000).fadeOut();
            $("#reservation-form")[0].reset();
            $(".btn-gold").text("Reserve Now").prop("disabled", false);
            $("#char-count").text("0/30");
        }, 2000);
    });

    // Email Format Validation Function
    function validateEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
