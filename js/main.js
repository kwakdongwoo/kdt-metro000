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

var id = 0;
const recentSearch = [];

if (localStorage.recentSearch) {
    recentSearch = JSON.parse(localStorage.recentSearch)
    if (recentSearch) {
        id = recentSearch[recentSearch.length - 1]['id']
    }
}

$(document).on('click', '.text', function () {
    id++
    let statn_nm = $(this).text().slice(1, -1)
    let obj = {id:id, text:statn_nm}
    console.log(recentSearch)
   recentSearch.push(obj)
   console.log(recentSearch)
    localStorage.recentSearch = JSON.stringify(statn_nm)
})