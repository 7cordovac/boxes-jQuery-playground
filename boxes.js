/*
Find all child divs of the first row. Set the class for each div to boxType3.  keep the box class .
Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
Change all red boxes to white.
Get the first two divs in the second row. Take away all styling from the divs.
Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.*/

$( document ).ready(function() {
    console.log( "Ready for DOM manipulation" );
$("#secretBox").append("<h1>secret box!</h1>");
$("#secretBox").css("background-color","white");
//$("#row1 div").children()("box boxType3");

$("#row4").children().eq(3).css("display","none");
$("#row2").children().slice(0,2).attr("class","box");

$("div").not(".row").css("width","2px");





});
