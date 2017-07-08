$(document).ready(function(){
  $("#btn").on("click", function(){
    $.getJSON("movies_20.json", function(json){
      var html = '';
      json.forEach(function(val){
        console.log(val);
        html += "<div id='request'>";
        html +="<h3>" + val.title + ' ( ' + val.year + ")</h3>";
        html += "<img src='" + val.posterurl + "'>"
        html += "<p>" + val.storyline + "</p>";
        html += "</div>";
      });
      $("#btn").html(html);
    });
  });
});
