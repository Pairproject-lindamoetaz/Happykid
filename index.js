$(document).ready(function() {
    // Required. Specifies the function to run after the document is loaded
    $("#submit").on("click", function() {
        
        var age = parseInt($("#age").val())
        // var age = parseInt($("#age").val());: This line retrieves the value entered in the age input field, converts it to an integer using parseInt, and stores it in the variable age.

        if (age>7) {
            
            window.location.href = "agesGreatertha7.html";
        } else {
           
            window.location.href = "agelessThan7.html";
        }
    });
});




