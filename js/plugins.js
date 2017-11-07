// Syntax: Jquery
// $(document).ready(fauntion(){
// Your Code Here
//});

$(document).ready(function(){

  //mouseenter
  $("#eventlike").mouseenter(function(){
    $("#savead").css("display","block");
  })
  //mouseleave
  $("#eventlike").mouseleave(function(){
    $("#savead").hide(1000);
  })
    $("#eventlike").click(function(){
      $("#eventhart").show(1000);
      $("#eventhart").css("color","red");
      $("#eventlike").hide(1000);
    }) 
    $("#eventhart").mouseenter(function(){
      $("#adsaved").show(1000);
    }) 
    $("#eventhart").mouseleave(function(){
      $("#adsaved").hide(1000);
    }) 
     $("#eventhart").click(function(){
      $("#eventlike").show(1000);
      $("#eventhart").hide(1000);
    }) 

  //=============== syntax:===============
  $("#syntax").css("color","red");
  //=============== Events:================
  //click,
  $(".event-cls").click(function(){
    $("#syntax").css("color","blue");
  })
  //dblclick,
  $(".event-cls").dblclick(function(){
    $("#syntax").css("color","green");
  })
  //mouseenter
  $(".event-cls").mouseenter(function(){
    $("#syntax").css("color","black");
  })
  //mouseleave
  $(".event-cls").mouseleave(function(){
    $("#syntax").css("color","pink");
  })
  //hover
  // $("#eventlike").hover(
  //   function(){
  //     $("#eventshow").css("display","block");
  //   });
  //  $("#eventlike").mouseleave(
  //   function(){
  //     $("#eventshow").css("display","non");
  //   });

//========== Effects ====================
$(".eff-cls").click(function(){
  //hide show, toggle (speed, callback);
  $("#eff-id").hide(2000, function(){ $(".sp").toggle() });
});

//Effects: fadeIn, fadeOut, fadeToggle, fadeTo(speed, Opacity, callback);
$(".eff-cls1").click(function () {
  $(".div1").fadeTo(2000, 0.5, function(){ $(".sp1").fadeOut(2000); });
});

//Effects: slideDown, slideUp, slideToggle(speed, callback)
$(".open").click(function(){
  $(".box").slideToggle(2000);
});

//========= Animate({ speed, callback }) ===========
//animate ({ css properties}, speed, callback function);
$(".Anim-cls").animate({
  width:'toggle', //toggle, hide,
  height:'50px', //+=
  opacity:'0.7',
  borderRadius:'30px'
//css: borderRadius, fontSize
},2000);
$(".Anim-cls").animate({
  left:'100px',
  width:'toggle',
  height:'80px',
  opacity:'0.5',
},2000);

// Animate: Stop
$(".stop").click(function(){
  //stop(clearQueue, goToEnd); true and false
  $(".Anim-cls1").stop();
});
$(".Anim-cls1").animate({
  width:'400px',
  height:'100px',
},1000);

$(".Anim-cls1").animate({
  width:'300px',
  height:'50px',
},1000);

$(".Anim-cls1").animate({
  borderRadius:'30px',
},1000);

$(".Anim-cls1").animate({
  fontSize:'30px',
},1000);

//Effects Chain
$(".Anim-cls2")
.css({ background: 'red'}) // Change background Color
.slideUp(1000)
.slideDown(1000)
.fadeOut(1000)
.fadeIn(1000)
.hide(1000)
.show(1000)
.animate({width:'600px'}, 1000);

// ========= Get Set Element And Attributes =================
// Text, Html, val
var div = $(".get-cls").html(); // Will Produce "The tag"
$("#get-id").text(div); // Will Produce "The Text"
//Value
$(".va").click(function(){
  $("div.result").text("You Have Wrote: " + $("input").val() );
 $("a").attr({
   "target":"xx",
   "href":"https://www.facebook.com",
   "class":"jquery"
 });
 alert($("a").attr("href"))
});

//Append, AppendTo, Prepend, PrependTo, Before, After
$(".Add-Element").append("<p>Hello Append</p>"); //All Html
$(".Add-Element").prepend("<p>Hello Prepend</p>");
$(".add-sp").click(function(){
  $("input").after("<br><input type='file'>");
});

//remove("class.name"); empty();
$(".rem-v").click(function () {
  $(".Rem-ove").remove();
});

//Dealing With Css Classes: addClass(); removeClass(); toggleClass();
$("#css-id").click(function () {
  $(".css-cls:eq(1)").toggleClass("custom br").removeClass("br");
});
$(".css-cls1").click(function () {
  $(this).toggleClass("border");
});

//Css Get And Set
$("#css-get").click(function () {
$(".css-get").css({
  "background":"red",
  "color":"#000",
  "padding":"20px"
});
});

//Dimensions: Width(200); height(200); InnerWidth(); OuterWidth(true);
$(".Dimen-sions").click(function () {
  var dv = $(this).width("+=" + 50);
  $(this).text("Your Div Width IS " + $(this).width() + "px");
});
$(".cont").click(function () {
  $(this).width("+=" + 50);
  $(this).text($(this).width());
  if($(this).width() == 700){
    $(this).text("Your Div Width IS 50px");
    $(this).css({
      width:"50px",
      background:"red",
    });
  }
  if($(this).width() == 100){
    $(this).css({
      background:"#DDD"
    });
  }
});

//Traversing: Parent Parents, ParentsUntil
// parents("name.class") For All Html Page
//ParentsUntil("name.class") For Last Class
var x = $(".traversing-span").parents(".traversing-section").css
({
  border:"4px solid blue",
  padding:"20px",
});

//Traversing: Children Find
//Find class Or World
$(".Children-sec").find("*").css("border","1px solid red");

//Traversing: Siblings("name.class"), Next("name.class"), Previous("name.class");
//nexAll and nextUntil
$(".Siblings-dv, p").click(function () {
  $(this) //refer to div or P
  .next() // Next Element
  .css("background","green"); //change background color
});

//Traversing: First, Last, Eq(number), Filter("name.class or World and $() and function ")
// Not Don't do to It
$(".Siblings1-dv").first().next().css("border","3px solid red");

// Reference
// Animate the Div
$(".Reference-div").animate({width: '500px'}, 7000);
$(".Reference-p").animate({width: '500px'}, 8000);
// Click on the H1 To change Colors of the animate Div
$(".Reference-h1").click(function () {
  $(":animated").css({background: '#f00', color:'#FFF'});
});

$(".Reference-input").focus();

$("div:contains('Javascript')").animate({width: '500px'}, 8000).css("background", "#00F");
$(".Reference-div3:has('p')").animate({width: '500px'}, 8000).css("background", "#008");

$(".empty").css("background", "green");

 


});


// loading screen
$(window).on('load', function()
{
  $(".loading-overly .sk-circle").fadeOut(1000, function(){
    $(this).parent().fadeOut(2000, function(){
       $("body").css("overflow","auto");
      $(this).remove();
    });
  });
});
