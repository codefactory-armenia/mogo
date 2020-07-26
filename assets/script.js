$(document).ready(function(){
    $(".drop_down").click(function () {
            $(this).next().toggle("");
            $(".containing").not($(this).next()).hide("");
        }
    )
});