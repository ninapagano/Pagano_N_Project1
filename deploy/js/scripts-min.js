console.log("hello fancy box"),console.log("tiny slider is working"),$(document).ready((function(){console.log($(".slides").hasClass("my-slider")),$(".slides").hasClass("my-slider")&&tns({container:".my-slider",items:1,slideBy:"page",autoplay:!0})}));var burgerAnimationTimeline=gsap.timeline({paused:!0}),burgerAnimationSpeed=.25;function animateBurger(){console.log("animate burger"),!0===canYouSeeTheMenu?burgerAnimationTimeline.play():burgerAnimationTimeline.reverse()}gsap.set(".lines",{transformOrigin:"center"}),burgerAnimationTimeline.to("#middle-line",{duration:burgerAnimationSpeed,alpha:0},"burgerStart").to("#top-line",{duration:burgerAnimationSpeed,rotation:45,y:22},"burgerStart").to("#bottom-line",{duration:burgerAnimationSpeed,rotation:-45,y:-10},"burgerStart");var canYouSeeTheMenu=!1;gsap.set("#main-nav",{y:-300});var navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowNav(){!1===canYouSeeTheMenu?(console.log("show the menu"),canYouSeeTheMenu=!0,animateBurger(),mainNavTimeline.play()):(console.log("hide the menu"),canYouSeeTheMenu=!1,animateBurger(),mainNavTimeline.reverse())}mainNavTimeline.to("#main-nav",{duration:.5,y:0}),console.log($("#main-nav").outerHeight()+" is the outer height of the main nav"),$("#burger").on("click",hideShowNav),$(document).ready((function(){console.log("test")}));