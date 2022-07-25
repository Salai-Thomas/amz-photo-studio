// Start Nav Button
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    // console.log('hay');
    const getscrolly = window.scrollY;
    console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
})
// End Nav Button

//Start Gallery Selection
const gallerylists = document.querySelectorAll('.glarylists');
const filternews = document.querySelectorAll('.filters.new');
const filterfrees= document.querySelectorAll('.filters.free');
const  filterpros = document.querySelectorAll('.filters.pro');

gallerylists.forEach((gallerylist)=>{
   

    gallerylist.addEventListener('click',(e)=>{
       
        let datafilter = gallerylist.getAttribute('data-filter');
         console.log('hay');
        if(datafilter === "all"){
            removeactiveitem();
            e.target.classList.add('activeitems');
        }else if(datafilter === "new"){
            removeactiveitem();
            e.target.classList.add('activeitems');

            filternews.forEach(filternew=>{
                filternew.style.display="inline-block";
            })

            filterfrees.forEach(filterfree=>{
                filterfree.style.display="none";
            })

            filterpros.forEach(filterpro=>{
                filterpro.style.display="none";
            })

        }else if(datafilter === "free"){
            removeactiveitem();
            e.target.classList.add('activeitems');
            
            filterfrees.forEach(filterfree=>{
                filterfree.style.display="inline-block";
            })

            filternews.forEach(filternew=>{
                filternew.style.display="none";
            })

            filterpros.forEach(filterpro=>{
                filterpro.style.display="none";
            })
        }else{
            removeactiveitem();
            e.target.classList.add('activeitems');

            
            filterpros.forEach(filterpro=>{
                filterpro.style.display="inline-block";
            })

            filterfrees.forEach(filterfree=>{
                filterfree.style.display="none";
            })

            filternews.forEach(filternew=>{
                filternew.style.display="none";
            })
        }
    })
});

//remove current active item
function removeactiveitem(){
    gallerylists.forEach(gallerylist=>{
        gallerylist.classList.remove('activeitems');
    })
}

//End Gallery Selection

//Start footer Section
const showyear = document.getElementById('showyear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;
//End Footer Section