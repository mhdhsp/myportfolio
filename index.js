 function toggleMenu()
        {
            document.getElementById("res-listid").classList.toggle("res-list2");
        }


$(".res-list ul li a").click(function(){
    $(".res-list").toggleClass("res-list2");
    // document.getElementById("res-listid").classList.toggle("res-list2");
    // alert("hello");
});
$("#project1").click(function(){
    $("#img-contain1").toggleClass("show");
});
$("#project2").click(function(){
    $("#img-contain2").toggleClass("show");
});
$("#project3").click(function(){
    $("#img-contain3").toggleClass("show");
});



$("#close1").click(
    function()
    {
        $("#img-contain1").toggleClass("show");
    }
);

$("#close2").click(
    function()
    {
        $("#img-contain2").toggleClass("show");
    }
);
$("#close3").click(
    function()
    {
        $("#img-contain3").toggleClass("show");
    }
);