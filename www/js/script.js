//ready function waits for html page to load
$(function(){

    //click function will wait for a specific fruit to be clicked
    $(".fruitBox").click(function(event) {
        var heading = $(this).find(".fruitHeading").html();
        var description = $(this).find(".fruitDescription").text();
        var price = $(this).find(".fruitPrice").text();
        var img = $(this).find("img").attr("src");
        openModal(heading, description, price, img);
    });

    $(".dimmer").click(function(event) {
        closeModal();
    });

    //close modal on buy now button press
    $("#buyButton").click(function(event) {
        closeModal();
    });

    //close the modal
    function closeModal(){
        $('#buyModal').fadeOut("fast");
        $(".pageContainer").removeClass("is-blurred");
        $(".navbarContainer").removeClass("is-blurred");
        $(".dimmer").css("display","none");
    }

    //open the modal
    function openModal(heading, description, price, img){
        //add content to the modal
        $(".dimmer").css("display","block");
        $(".pageContainer").addClass("is-blurred");
        $(".navbarContainer").addClass("is-blurred");
        $("#modalImage").attr("src",img);
        $("#modalHeading").html(heading);
        $("#modalHeading p").text(heading);
        $("#modalDescription").text(description);
        $("#modalPrice").text(price);
        $('#buyModal').fadeIn("fast");
    };

});