
$(document).ready(function() {

  "use strict";

$("#sliderButton").click(function(){
  $("#sliderFooter").slideToggle()
});


$("#cloudButton").click(function(){
  $("#cloudButton").animate({left: '800px'}, 10000)
});


$("#cloudButton2").click(function(){
  $("#cloudButton2").animate({left: '800px'}, 8000)
});



  var resultList = $("#resultList");
  resultList.text("Clouds make rain!");

  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function() {
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") toggleButton.text("Show");
    else toggleButton.text("Hide");
  });



  



  $("#gitHubSearchForm").on("submit", function() {

    var searchPhrase = $("#searchPhrase").val();
    
    

    if (searchPhrase) {

      resultList.text("Performing search...");

      var gitHubSearch = "https://data.wa.gov/resource/2p85-9ms3.json?nspecies=COUGAR" + encodeURIComponent(searchPhrase);

      

      $.get(gitHubSearch)
        .success(function(r) {
          
          displayResults(r.items);
        })
        .fail(function(err) {
          console.log("Failed to query GitHub");
        })
        .done(function() {
          //
        });
    }

    return false;
  });



  

  function displayResults(results) {
    resultList.empty();
    $.each(results, function(i, item) {

      

      newResult.hover(function() {
        
        $(this).css("background-color", "lightgray");
      }, function() {
        
        $(this).css("background-color", "transparent");
      });

      resultList.append(newResult);

    });
  }


});
