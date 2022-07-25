$(document).ready(function(){
    // console.log('hay');
 // Start Nav Button

$('.navbuttons').click(function(){
    // console.log('i am working');
    $('.navbuttons').toggleClass('changes');
});

$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }
})

// End Nav Button


//Start Mission Section

// $(window).scroll(function(){
//     let getscrolly = $(this).ScrollTop();

//     if(getscrolly >= 650){
//         $('.camerimgs').addClass('formlefts');
//         $('.missiontexts').addClass('fromrights');
//     }else{
//         $('.camerimgs').removeClass('formlefts');
//         $('.missiontexts').removeClass('fromrights');
//     }
// })
//End Mission Section


//Start Gallery Selection
$('.glarylists').click(function(){
    let datafilter = $(this).attr('data-filter');
    console.log(datafilter);

    if(datafilter === "all"){
            $('.filters').show(400);
    }else{
            $('.filters').not('.'+datafilter).hide(400);

            $('.filters').filter('.'+datafilter).show(400);
    }
});

//for u avtive
$('.glarylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
})
//remove current active item

//End Gallery Selection

//Start footer Section

//End Footer Section