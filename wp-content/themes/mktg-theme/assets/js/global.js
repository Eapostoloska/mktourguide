jQuery(document).ready(function ($) {

    console.log($("b-loaded"));


    $('.b-loaded').click(function () {
        // var postUrl = $(this).find('a').attr("href");
        console.log($(this));

        window.location.replace(postUrl);
    })
});
