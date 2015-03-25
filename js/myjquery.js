$(document).ready(function(){
$("img#head").css({"-webkit-animation":"headers2 0.5s"});
$("img#head").css({"animation":"headers2 0.5s"});

var a=setTimeout(function(){
$("img#head").css({"-webkit-animation":"header 0.5s alternate infinite"});
$("img#head").css({"animation":"header 0.5s alternate infinite"});

},500);

$("img#pics1").css({"-webkit-animation":"pics1 3.9s alternate infinite","box-shadow":"1px 1px 5px black"});
$("img#pics2").css({"-webkit-animation":"pics2 4.3s alternate infinite","box-shadow":"1px 1px 5px black"});
$("img#pics1").css({"animation":"pics1 3.9s alternate infinite","box-shadow":"1px 1px 5px black"});
$("img#pics2").css({"animation":"pics2 4.3s alternate infinite","box-shadow":"1px 1px 5px black"});

$("img#start1").css({"-webkit-animation":"header 1.3s alternate infinite"});
$("img#start1").css({"animation":"header 1.3s alternate infinite"});
$("img#start2").css({"-webkit-animation":"header 1.3s alternate infinite"});
$("img#start2").css({"animation":"header 1.3s alternate infinite"});
$("img#start1").css({"animation":"pics2 4.3s alternate infinite","box-shadow":"1px 1px 5px black"});
$("img#start2").css({"animation":"pics2 4.3s alternate infinite","box-shadow":"1px 1px 5px black"});
$("img#start1").css({"animation":"pics1 3.9s alternate infinite","box-shadow":"1px 1px 5px black"});
$("img#start2").css({"animation":"pics2 4.3s alternate infinite","box-shadow":"1px 1px 5px black"});


});