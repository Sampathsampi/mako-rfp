var controller = new ScrollMagic.Controller();
    // build scenes
    var revealElements = document.getElementsByClassName("digit");
    var revealElements1 = document.getElementsByClassName("fade-ani");
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                            offset: 275,												 // start a little later
                            triggerHook: 0.9,
                        })
                        .setClassToggle(revealElements[i], "visible") // add class toggle
                       // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                        .addTo(controller);
    }
    for (var i=0; i<revealElements1.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElements1[i], // y value not modified, so we can use element as trigger as well
                            offset: 275,												 // start a little later
                            triggerHook: 0.9,
                        }) // add class toggle
                        .setClassToggle(revealElements1[i], "showing")
                       // .addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
                        .addTo(controller);
    }
    $(window).scroll(function() {

        if($(window).scrollTop() > 100){
            jQuery('.creating-best').addClass('back-fixed');

        } else {
            jQuery('.creating-best').removeClass('back-fixed');
        }
    });