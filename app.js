// Nav Bar animation 

window.onload = function () {

let tl = new TimelineMax();

tl
    .from('.nav', 1.5, {y: -300, opacity: 0, ease: Expo.easeOut})
    .from('.nav-text', 1, {color: '#fff'})
    .from('.moi', 1, {opacity: 0})


// Animation ScrollMagic Portfolio

    var width = window.innerWidth;
    var height = window.innerHeight;
    console.log(width + ' and ' + height)

    var controller = new ScrollMagic.Controller();



    // ScrollMagic Section Portfolio


if (width > 768) {

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.container',
        offset: 300
    })
        .setTween(TweenMax.from(".galerie-img", 1, {opacity: 0, ease: Expo.easeOut}))
        //.addIndicators({name:'anim1',indent: 200, colorStart: "#000"})
        .addTo(controller);



        // ScrollMagic Section Tarif Titre



    if (width > 1024) {

        var scene2 = new ScrollMagic.Scene({
            triggerElement: '.services',
            offset: 250
        })
            .setTween(TweenMax.from(".services-title", 1, {opacity: 0, ease: Expo.easeOut}))
            //.addIndicators({name:'anim2',indent: 200, colorStart: "yellow"})
            .addTo(controller);

    } else if (width <= 1024) {

        var scene2 = new ScrollMagic.Scene({
            triggerElement: '.services',
            offset: 150
        })
            .setTween(TweenMax.from(".services-title", 1, {opacity: 0, ease: Expo.easeOut}))
            // .addIndicators({name:'anim2',indent: 200, colorStart: "yellow"})
            .addTo(controller);

    }


        
        // ScrollMagic Section Tarif Tarif



    if (width > 1024) {

        var scene3 = new ScrollMagic.Scene({
            triggerElement: '.services',
            offset: 550
        })
            .setTween(TweenMax.from(".services-tarif", 1, {opacity: 0, ease: Expo.easeOut}))
            //.addIndicators({name:'anim3',indent: 200, colorStart: "#fff"})
            .addTo(controller);

    } else if (width <= 1024) {

        var scene3 = new ScrollMagic.Scene({
            triggerElement: '.services',
            offset: 350
        })
            .setTween(TweenMax.from(".services-tarif", 1, {opacity: 0, ease: Expo.easeOut}))
        //  .addIndicators({name:'anim3',indent: 200, colorStart: "#fff"})
            .addTo(controller);

    }



        // ScrollMagic Contact



    if (width > 1500) {

        var scene4 = new ScrollMagic.Scene({
            triggerElement: '.contact',
        })
            .setTween(TweenMax.from(".contact-i", 1, {opacity: 0, ease: Expo.easeOut}))
            //.addIndicators({name:'anim3',indent: 200, colorStart: "red"})
            .addTo(controller);

        }
    }
}