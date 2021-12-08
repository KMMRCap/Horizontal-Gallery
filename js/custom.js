$('#main').click(()=>{
    $('#mySidebar').toggleClass('active');
})


// -------------------------------------



$('.filters ul li').click(function(){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
});

var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
        columnWidth: ".all"
    }
})