$(function() {
    $('.plat-items').off("mouseover").on("mouseover", function () {
        $('.plat-items').removeClass('active-plat');
        $(this).addClass('active-plat');
        var idstr = $(this).find("i").attr("id");
        $(this).find('i').removeClass(idstr).addClass(idstr + '-over');
        $(this).siblings().find("i").each(function () {
            $(this).removeClass($(this).attr("id") + '-over').addClass($(this).attr("id"));
        });
        if ($.trim($(this).text()) == '人事外包') {
            $('.wbewmimg').hide();
            $('.wxewmimg').hide();
            $('.rsewmimg').show();
        }
        else if ($.trim($(this).text()) == '微信公众平台') {
            $('.wbewmimg').hide();
            $('.rsewmimg').hide();
            $('.wxewmimg').show();
        } else {
            $('.rsewmimg').hide();
            $('.wxewmimg').hide();
            $('.wbewmimg').show();
        }
    });
})