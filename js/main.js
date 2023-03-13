$(document).on('click','.text',function(){
    var statn_nm = $(this).text()
    console.log(statn_nm)
    localStorage.gdata = JSON.stringify(statn_nm)
})