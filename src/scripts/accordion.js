import $ from 'jquery'
import perfectScrollbar from './plugins/perfect-scrollbar'

const Accordion = () => {
    $(".accordion a.toggle").on("click", function (a) {
        a.preventDefault()
        $(".accordion a.toggle").removeClass("act-accordion")
        $(this).addClass("act-accordion")
        if ($(this).next('div.accordion-inner').is(':visible')) {
            $(this).next('div.accordion-inner').slideUp()
        } else {
            $(".accordion a.toggle").next('div.accordion-inner').slideUp()
            $(this).next('div.accordion-inner').slideToggle()
        }
    })
    $('.cs-wrap .hero-wrap , .nav-holder').perfectScrollbar({})
}

export default Accordion
