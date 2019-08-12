function generateEmail() {
    let name = $("#name").val();
    let message = $("#message").val();
    location.href = "mailto:matt9663@gmail.com?subject=Portfolio%20Submission%20From%20" + name + "&body=" + message;
}

function sendMeAnEmail() {
    $(`#contact`).on('click', '.submitButton', function(event) {
        event.preventDefault();
        generateEmail();
    });
}

$(sendMeAnEmail);