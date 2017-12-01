$(function() {
  console.log(0951);
  // your code will go here
  var myReportCard = 'https://www.codeschool.com/users/mjwang.json';
  $.ajax({
    url: myReportCard,
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      $.each(response.courses.completed, function(key, value){

        var content = '<div class="course"><h3>' + value.title + 
                      '</h3><img src="' + value.badge + '"><a href="' + value.url + '" target="_blank" class="btn btn-primary">See Course</a></div>';

        $('#badges').append(content);
      });

    }
  });

});
