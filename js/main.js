$("document").ready(function(){
  $(".fa-bars").click(function(){
   $("#menuList").animate({width: 250}, 1000);
   $(".fa-bars").hide(500)
})
  $(".fa-xmark").click(function(){
   $("#menuList").animate({width: 0}, 1000);
   $(".fa-bars").show();
  })
// $(".acord .frist").css("display", "block")
// // $(".acord h4").click(function(){
// //   $(this).next().slideToggle(1000);
// //   $(this).prev().slideToggle(1000);
// //   $(".acord p").not($(this).next()).slideUp(1000)

// // })
  $(".acord_tab").click(function(){
    $(".acord_tab").each(function(){
      $(this).parent().removeClass("active")
      $(this).removeClass("active");
    })
    $(this).parent().addClass("active");
    $(this).addClass("active"); 
  })

function makeTimer() {

    let endTime = new Date("25 september 2023 00:00:00 GMT+02:00");		 
    endTime = (Date.parse(endTime) / 1000);

    let now = new Date();
    now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now;

    let days = Math.floor(timeLeft / 86400); 
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days  + "<span> D</span>");
    $("#hours").html(hours + "<span> h</span>");
    $("#minutes").html(minutes + "<span> m</span>");
    $("#seconds").html(seconds + "<span> s</span>");		
    }
    setInterval(function() { makeTimer(); }, 1000);



$("#textArea").on("keyup",function () { 
  let len= $(this).val().length
  if($(this).val().length >= 100){
    $(".main-count").html(`<p class="main-count text-danger fs-4">your available character finished</p>`)
  } else{
    $(".main-count").html(`<p class="main-count"><span class="text-danger count">${100-len}</span> Charachter Reamining</p>`)
  }
});

//   $('#textArea').on('keyup', function() {
//     $('.count').html($(this).val().length);
//     if($(this).val().length > 100) {
//       $(this).val($(this).val().substring(0, 100));
//       $('.count').html("test");
//     }
//   });

$(".scroll").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

$(window).scroll(function(){
  if($(this).scrollTop() > $(".myAcordion").offset().top ){
    $(".scroll").fadeIn().css("display", "flex");
    $(".fa-bars").css("color", "rgb( 220,53,69")
  } else{
    $(".scroll").fadeOut()
    $(".fa-bars").css("color", "white")
  }
})

$(".menu li a").click(function(){
  let section = $(this).attr("href")
  let sectionFar = $(section).offset().top
  $("html, body").animate({ scrollTop: sectionFar }, 500);
})
let checker = false
$(".form-check-input").click(function(){
  if(checker== false){
    $(".menu, .myAcordion, #contact").addClass("bgPrime")
    $(".acord_tab").addClass("bgSec")
    $("h2, h4").addClass("textDanger")
    $("p").addClass("textMuted")
    $("input, textarea").addClass("inpDark")
    $(".menu li a, .fa-xmark, .myAcordion p").addClass("colorDark")

    checker = true
  } else {
    $(".menu, .myAcordion, #contact").removeClass("bgPrime")
    $(".acord_tab").removeClass("bgSec")
    $("h2, h4").removeClass("textDanger")
    $("p").removeClass("textMuted")
    $("input, textarea").removeClass("inpDark")
    $(".menu li a, .fa-xmark, .myAcordion p").removeClass("colorDark")
    checker = false
  }
})
})