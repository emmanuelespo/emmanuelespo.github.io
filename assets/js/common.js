checkPageClickBibtex = false;

$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        checkPageClickBibtex = true;
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    // Added by me
    $(window).click(function() {
        target = $(document).find(".bibtex.hidden.open");
        if(checkPageClickBibtex && target && !event.composedPath().includes(target)) {
            target.toggle("open");
            checkPageClickBibtex = false;
        }
    });
});
