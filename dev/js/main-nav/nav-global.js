var canYouSeeTheMenu = false;

// move main nav menu off screen
gsap.set("#main-nav", {y:-300});

var navHeight = $("#main-nav").outerHeight();
// move main nav menu off screen along y axis
gsap.set("#main-nav",{y:-navHeight})

var mainNavTimeline = gsap.timeline({paused:true})
    mainNavTimeline.to("#main-nav",{duration:0.5  , y:0})

// height of main nav menu
// console.log($("#main-nav").height() + " is the height of the main nav");

// includes total height of main height menu
console.log($("#main-nav").outerHeight() + " is the outer height of the main nav");


// function handles showing and hiding main nav menu
function hideShowNav(){
    // first way with toggle
    // console.log("hide or show main nav");
    // $("#main-nav").toggle();
    
    if(canYouSeeTheMenu === false){
        console.log("show the menu");
        // reset back to true, menu hides
        canYouSeeTheMenu = true;
        // turn burger into an X
        animateBurger();
        // play main nav into view- pull down
        mainNavTimeline.play();


    }else{
        console.log("hide the menu");
        // reset back to false, menu shows up
        canYouSeeTheMenu = false;
            // turn X into a burger
            animateBurger();
            // play main nav out of view- push up
            mainNavTimeline.reverse();
    }

}