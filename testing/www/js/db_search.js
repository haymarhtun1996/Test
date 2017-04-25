$(document).ready(function () {
  $("button#db_btn").click(function () {
    var search=$("#search").val();
    var data="q="+search;

    $.ajax({
      method:"post",
      url:"js/db_results.php?",
      data:data,
      success:function (data)
       {
        $("#db_results").html(data);
       }
    });

  });
});
