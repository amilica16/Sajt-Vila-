$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

function addNow() {
  nowDate = moment().tz("Europe/London").format('YYYY-MM-DD');
  nowTime = moment().tz("Europe/London").format('HH:mm');
  document.getElementById('registration-date').value = nowDate;
  document.getElementById('registration-time').value = nowTime;
  set = setTimeout(function () { addNow(); }, 1000);
}

function stopNow() {
  clearTimeout(set);
}
$(document).ready(function(){
     addNow();
     stopNow();
    $('#characterLeft').text('još 140 karaktera');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Dostigli ste limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' ostalo karaktera');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });


// process the form
$('form').submit(function(event) {
debugger;
var checked = '';
$("input[name='service[]']:checked").each(function ()
{
    checked = checked + $(this).val() + ',';
});
checked = checked.slice(0, -1);
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            "venueid":"55",
            'Ime':$('input[name=name]').val(),
            'Email':$('input[name=emailid]').val(),
            'Kontakt':$('input[name=contact]').val(),
        //"appointdate":"2015/11/23",
        //"appointtime":"13:00",
        "Datum dolaska":$('input[name=appointdate]').val(),
        "Vreme dolaska":$('input[name=appointtime]').val(),
        "Datum odlaska":$('input[name=appointdate1]').val(),
        "Vreme odlaska":$('input[name=appointtime1]').val(),
        "Aprtman":$('select[name=branch]').val(),
        "Upit":$('textarea[name=additional_services]').val(),
        };
console.log(formData);
        // process the form
        $.ajax({
            type:'POST', // define the type of HTTP verb we want to use (POST for our form)
            url:'', // the url where we want to POST
            data:JSON.stringify(formData), // our data object
            dataType:'json', // what type of data do we expect back from the server
            encode:true
        })
          // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });
});

//apartmanss slideshow
;(function($){
   $(document).ready(function() {
    $('.information_menu').find('li').hover(function(e) {
         $('.information_menu').find('li').removeClass('active');
        $(this).addClass('active');
        $(".overlay-item").removeClass("active");
        $(".overlay-item").removeClass("inactive");
		$(".overlay-id"+$(this).data("id")).addClass("active").removeClass("inactive");

         $(".overlay-id"+$(this).data("id")).prev().addClass("inactive")
    });

    $('.slideshow').children().on('mouseleave',function(e) {
		$(this).removeClass("active");
	});

    $('.carousel').carousel();
   });
})(jQuery);
