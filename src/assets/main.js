$(function() {
  console.log(0946);
  // your code will go here
  var myReportCard = 'https://www.codeschool.com/users/mjwang.json';
  $.ajax({
    url: myReportCard,
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $.each(response.courses.completed, function(key, value){
        //currentBadges = value.badge;
        value.badge = '<div class="course">' + value.badge + '</div>';
        value.title = '<h3>' + value.title + '</h3>';
        value.img = value.badge;
      
        value.a = '<a href="' + value.url + '" target="_blank" class="btn btn-primary">';
        console.log(value);

        //console.log(value.badge);
      });

    }
  });

});
