$(document).ready(function(){
    
    $('#profile-ripple').ripples({
        resolution: 512,
        dropRadius:5
    });

    const bars = document.querySelectorAll('.progress-bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        
    })

    //image filter

    var $wraper = $('profolio-wrap');

    $wraper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration : 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link =>{

        let selector = link.dataset.filter;
        link.addEventListener('click', function (e) {
            e.preventDefault();
            $wraper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration : 750,
                    easing: 'linear'
                }
            });
        })
    })
    
//magnify popup
    
});
