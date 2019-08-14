$(document).ready(function() {
  $("#flavors").submit(function(event) {
  	var flavors = ["first", "second", "third", "fruit", "common"];

    flavors.forEach(function(flavor) {
    	var userInput = $("input#" + flavor).val();
    	$(".list").append("<li>" + userInput + "</li>");
    });

    alert("Here are my favorites...");

    event.preventDefault();
  });
});