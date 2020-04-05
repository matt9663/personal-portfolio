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

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if(!immediate) func.apply(context, args)
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args)
  };
};


function checkScroll(e) {
  const cards = document.querySelectorAll('.slide-in');
  cards.forEach(card => {
    const slideInAt = (window.scrollY + window.innerHeight) - (card.offsetHeight * .10);
    const isQuarterShown = slideInAt > card.offsetTop;

    if (isQuarterShown) {
      card.classList.add('active')
    }
  });
}

$(window).on('scroll', debounce(checkScroll, 80));

$(sendMeAnEmail);