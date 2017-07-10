$(document).ready(function(){
  $("#search").on("keyup", function(){
    $.getJSON("movies_20.json", function(json){
      var html = '';
      var search = $("#search").val();

      // iterate over each movie to decide wherether to render it or not
      json.forEach(function(val){

        var values = Object.values(val);

        // if even one of the values matches our search criteria
        var hasSearch = values.some(function(value){
          // only search within if it's type of string
          if(typeof value == "string")
            return value.indexOf(search) > -1;
          else
            return false;
          // TODO: try to also look into arrays
        });

        if(hasSearch){
          // console.log(val);
          // TODO: replace with template
          // use $.attr() to alter img src http://api.jquery.com/attr/
          html += "<div id='request'>";
          html +="<h3>" + val.title + ' ( ' + val.year + ")</h3>";
          html += "<img src='" + val.posterurl + "'>"
          html += "<p>" + val.storyline + "</p>";
          html += "</div>";
        }
      });
      $("#button>div").html(html);
    });
  });
});
