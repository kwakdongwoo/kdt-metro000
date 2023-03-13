// map onload

window.onload = () => {
    $('#wrap').html(getHtmlText())

    $(".subway-map").subwayMap({
        debug: true
    });
}

window.onresize = () => {
    $('#wrap').html('')

    $('#wrap').html(getHtmlText())

    $(".subway-map").subwayMap({
        debug: true
    })

    if ($(window).width() < 1249) {
        $('.subway-map').css("zoom", $(window).width() / $('canvas').width())
    }
};


$('#wrap').html('')

$(".subway-map").subwayMap({
    debug: true
})

if ($(window).width() < 1249) {
    $('.subway-map').css("zoom", $(window).width() / $('canvas').width())
}


$(document).on('click','.text',function(){
    var statn_nm = $(this).text().slice(1,-1)
    console.log(statn_nm)
    localStorage.recentSearch = JSON.stringify(statn_nm)

})


