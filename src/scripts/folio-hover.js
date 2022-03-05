import $ from 'jquery'

const FolioHover = () => {
    const hidworit = $('.hidden-works-item')
    const hidworit_length = hidworit.length;
    $("<div class='bg'></div>").duplicate(hidworit_length).appendTo(".bg-ser");
    var hidworit_actin = $('.hidden-works-item:first-child'),
        actbgindex = hidworit_actin.data("bgscr");
    hidworit_actin.addClass("act-index");
    $('.bg-ser .bg:first-child').addClass('active').css("background-image", "url(" + actbgindex + ")");
    $('.hidden-works-item').on('mouseover', function () {
        $('.hidden-works-item').removeClass("act-index");
        $(this).addClass("act-index");
        var hidworit_index = $('.hidden-works-item').index(this),
            hidworit_index_each = $(this).data("bgscr");
        $('.bg-ser .bg').removeClass('active').eq(hidworit_index).addClass('active').css("background-image", "url(" + hidworit_index_each + ")");
    });
}

export default FolioHover
