
//function Result(feels, health, cope) {

//  this.feels = feels;
//  this.health = health;
//  this.cope = cope;

//}

//Result.prototype.answer = function(feels, health, cope) {
//return this.feels + this.health + this.cope
//}

var counter = 0

if (counter <= 3) {
  $("#response1").append("Go for a walk")
} else if (counter <= 5) {
  $("#response1").append("Read a book")
} else {
  $("#response1").append("Consult a doctor")
}

$(document).ready(function(){
  $("form#feel").submit(function(event){


    $("input:checkbox[name=feels]:checked").each(function(){
      var feels = parseInt($(this).val());
       return counter += feels
    });
  //    $('#work-response1').append(feels + "<br>");
    $("input:checkbox[name=health]:checked").each(function(){
        var health = parseInt($(this).val());
        return counter += feels
      });
  //  $("#response1").show();
    $("input:checkbox[name=cope]:checked").each(function(){
      var cope = parseInt($(this).val());
      return counter += feels
    //  $('#response2').append(cope + "<br>");
      });
      //var sum = new Result(feels, health, cope)


  //
  event.preventDefault();
  $("#response1").show();


  });

  });


//$("input:checkbox[name=feels]:checked").val();
//$("input:checkbox[name=health]:checked").val();
//$("input:checkbox[name=cope]:checked").val();
  //  $("#response1").show();
    //$('#feel').hide();
