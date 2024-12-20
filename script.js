// script.js
$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        let isValid = true;
        $("input, textarea").each(function () {
            if (!$(this).val()) {
                isValid = false;
                alert($(this).attr("name") + " cannot be empty.");
                return false;
            }
        });
        if (!isValid) e.preventDefault();
    });
});
