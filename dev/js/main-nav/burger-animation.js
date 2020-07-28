var burgerAnimationTimeline = gsap.timeline({paused:true});
var burgerAnimationSpeed = 0.25;

// reset transformOrigin point for each burger line
gsap.set(".lines",{transformOrigin:"center"});

// reference timeline burgerAminationTimeline, what do you animate, what properties do you animate
burgerAnimationTimeline.to("#middle-line",{duration:burgerAnimationSpeed, alpha:0}, "burgerStart")
                        .to("#top-line",{duration:burgerAnimationSpeed, rotation:45, y:22}, "burgerStart")
                        .to("#bottom-line",{duration:burgerAnimationSpeed, rotation:-45, y:-10}, "burgerStart");


function animateBurger(){
    // check canYouSeeTheMenu function value 
    console.log("animate burger");

    if(canYouSeeTheMenu === true){
        // turn burger into an X
        burgerAnimationTimeline.play();

    }else{
        // turn X into a burger
        burgerAnimationTimeline.reverse();
    }
}