 function toggleMenu()
        {
            document.getElementById("res-listid").classList.toggle("res-list2");
        }

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