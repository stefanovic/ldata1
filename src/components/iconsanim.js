//ICONS ANIM
 //import "./minified/gsap.min.js"; 
 //import "./minified/ScrollTrigger.min.js";
 //import "./minified/InertiaPlugin.min.js"; 
 import gsap from 'gsap';
 import "https://code.jquery.com/jquery-3.6.4.min.js";

 function myIconsAnim() {

 //BOX STAGGER
var box1 = document.querySelector("#myBox1")
var box2 = document.querySelector("#myBox2")
var box3 = document.querySelector("#myBox3")
var box4 = document.querySelector("#myBox4")
var box5 = document.querySelector("#myBox5")
var box6 = document.querySelector("#myBox6")
var box7 = document.querySelector("#myBox7")
var box8 = document.querySelector("#myBox8")
var box9 = document.querySelector("#myBox9")
var box10 = document.querySelector("#myBox10")
var box11 = document.querySelector("#myBox11")
var box12 = document.querySelector("#myBox12")

 //gsap.registerPlugin(InertiaPlugin, ScrollTrigger)


var iconsAnimContainer = document.querySelectorAll('#iconBlock1, #iconBlock2');

var totalDistance = 0;
var lastSeenAt = {x: null, y: null};
var cursorThreshold = 86;
var cursorThreshold2 = 86;
var cursorThreshold3 = 86;
var cursorThreshold4 = 86;
var cursorThreshold5 = 86;
var cursorThreshold6 = 86;
var cursorThreshold7 = 86;
var cursorThreshold8 = 86;
var cursorThreshold9 = 86;
var cursorThreshold10 = 86;
var cursorThreshold11 = 86;
var cursorThreshold12 = 86;

let tl = gsap.timeline();
let tl_2 = gsap.timeline();
let tl_3 = gsap.timeline();
let tl_4 = gsap.timeline();
let tl_5 = gsap.timeline();
let tl_6 = gsap.timeline();
let tl_7 = gsap.timeline();
let tl_8 = gsap.timeline();
let tl_9 = gsap.timeline();
let tl_10 = gsap.timeline();
let tl_11 = gsap.timeline();
let tl_12 = gsap.timeline();

//FIRST INTRO
let globalCounter = 0;

let constobj1=[

//{ id: 1, file: 'box3.png', name: "DIGITAL  <br> THINKERS<br><span class='myYellow'><a href='about'>.</a></span>Livedata", info: "Personalizziamo soluzioni digitali per adattarle ai tuoi obiettivi e soddisfare le esigenze del tuo pubblico", url:""},

/*{ id: 0, file: 'https://webapps.livedata.it/img/json.png', name: "", info: "", url:""}, 

{ id: 1, file: 'https://webapps.livedata.it/img/javascript.png', name: "", info: "", url:""},

{ id: 2, file: 'https://webapps.livedata.it/img/gulp.png', name: "", info: "", url:""},

{ id: 3, file: 'https://webapps.livedata.it/img/pw.png', name: "", info: "", url:""},

{ id: 4, file: 'https://webapps.livedata.it/img/node.png', name: "", info: "", url:""}, 

{ id: 5, file: 'https://webapps.livedata.it/img/css3.png', name: "", info: "", url:""},

{ id: 6, file: 'https://webapps.livedata.it/img/gsap2.png', name: "", info: "", url:""},

{ id: 7, file: 'https://webapps.livedata.it/img/sass.png', name: "", info: "", url:""},

{ id: 8, file: 'https://webapps.livedata.it/img/gimp.png', name: "", info: "", url:""},

{ id: 9, file: 'https://webapps.livedata.it/img/html5.png', name: "", info: "", url:""},

{ id: 10, file: 'https://webapps.livedata.it/img/mysql.png', name: "", info: "", url:""},

{ id: 11, file: 'https://webapps.livedata.it/img/codeigniter.png', name: "", info: "", url:""}*/

{ id: 0, file: 'https://webapps.livedata.it/img/myicons/mela.png', name: "", info: "", url:""}, 

{ id: 1, file: 'https://webapps.livedata.it/img/myicons/limone.png', name: "", info: "", url:""},

{ id: 2, file: 'https://webapps.livedata.it/img/myicons/fragola.png', name: "", info: "", url:""},

{ id: 3, file: 'https://webapps.livedata.it/img/myicons/carota.png', name: "", info: "", url:""},

{ id: 4, file: 'https://webapps.livedata.it/img/myicons/pera.png', name: "", info: "", url:""}, 

{ id: 5, file: 'https://webapps.livedata.it/img/myicons/banana.png', name: "", info: "", url:""},

{ id: 6, file: 'https://webapps.livedata.it/img/myicons/avocado.png', name: "", info: "", url:""},

{ id: 7, file: 'https://webapps.livedata.it/img/myicons/ciliege.png', name: "", info: "", url:""},

{ id: 8, file: 'https://webapps.livedata.it/img/myicons/uva.png', name: "", info: "", url:""},

{ id: 9, file: 'https://webapps.livedata.it/img/myicons/peperoncino.png', name: "", info: "", url:""},

{ id: 10, file: 'https://webapps.livedata.it/img/myicons/arancio.png', name: "", info: "", url:""},

{ id: 11, file: 'https://webapps.livedata.it/img/myicons/anguria.png', name: "", info: "", url:""},

{ id: 12, file: 'https://webapps.livedata.it/img/myicons/kiwi.png', name: "", info: "", url:""},

{ id: 13, file: 'https://webapps.livedata.it/img/myicons/paprika.png', name: "", info: "", url:""},

{ id: 14, file: 'https://webapps.livedata.it/img/myicons/aglio.png', name: "", info: "", url:""},

{ id: 15, file: 'https://webapps.livedata.it/img/myicons/melanzana.png', name: "", info: "", url:""},

{ id: 16, file: 'https://webapps.livedata.it/img/myicons/broccoli.png', name: "", info: "", url:""},

{ id: 17, file: 'https://webapps.livedata.it/img/myicons/mango.png', name: "", info: "", url:""},

{ id: 18, file: 'https://webapps.livedata.it/img/myicons/grano.png', name: "", info: "", url:""},

{ id: 19, file: 'https://webapps.livedata.it/img/myicons/lattuga.png', name: "", info: "", url:""},

{ id: 20, file: 'https://webapps.livedata.it/img/myicons/mirtilli.png', name: "", info: "", url:""},

{ id: 21, file: 'https://webapps.livedata.it/img/myicons/porri.png', name: "", info: "", url:""}



];

console.log("Global Counter:", globalCounter);

$(iconsAnimContainer).mousemove(function(e) {

  

 if(lastSeenAt.x) {

      //Euclide get x or y distance 
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold){

if(tl.isActive() == false){

gsap.set("#myBox1 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl.set(box1, {x: e.pageX, y: e.pageY, rotation:-90})

tl.to(box1, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box1, 0.3, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box1, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")

.to(box1, 0.1, {rotation:0, yPercent:0, scale:0})


totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
   globalCounter++;

}else{      
         
         globalCounter = 0;
   }

}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});





$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold2){


if(tl_2.isActive() == false){

gsap.set("#myBox2 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_2.set(box2, {x: e.pageX, y: e.pageY, rotation:-90})

tl_2.to(box2, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box2, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box2, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box2, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
   globalCounter++;

}else{      
         
         globalCounter = 0;
   }

}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});



/*$(navImg).mouseenter(function(e) {

gsap.set(".box", {opacity:0, visibility: "hidden"});

});

$(navImg2).mouseenter(function(e) {

gsap.set(".box", {opacity:0, visibility: "hidden"});

});

$(fullScreen).mouseleave(function(e) {

gsap.set(".box", {opacity:1, visibility: "visible"});

});*/




$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold3){


if(tl_3.isActive() == false){

gsap.set("#myBox3 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_3.set(box3, {x: e.pageX, y: e.pageY, rotation:-90})

tl_3.to(box3, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box3, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box3, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box3, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

  //Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
             globalCounter = 0;
       }

}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});



$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold4){


if(tl_4.isActive() == false){

gsap.set("#myBox4 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_4.set(box4, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box4, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box4, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box4, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box4, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
             globalCounter = 0;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});


$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold5){



if(tl_5.isActive() == false){

gsap.set("#myBox5 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_5.set(box5, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box5, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box5, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box5, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box5, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
             globalCounter = 0;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});



$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold6){



if(tl_6.isActive() == false){

gsap.set("#myBox6 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_6.set(box6, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box6, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box6, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box6, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box6, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
             globalCounter = 0;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});



$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold7){



if(tl_7.isActive() == false){

gsap.set("#myBox7 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_7.set(box7, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box7, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box7, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box7, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box7, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
              globalCounter = 0;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});




$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold8){



if(tl_8.isActive() == false){

gsap.set("#myBox8 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_8.set(box8, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box8, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box8, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box8, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box8, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
      globalCounter++;
 
   }else{      
             
             globalCounter = 0;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});



$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold9){



if(tl_9.isActive() == false){

gsap.set("#myBox9 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_9.set(box9, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box9, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box9, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box9, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box9, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
     globalCounter++;
 
   }else{      
             
             globalCounter = 0;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});




$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold10){


if(tl_10.isActive() == false){

gsap.set("#myBox10 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_10.set(box10, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box10, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box10, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box10, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box10, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
              globalCounter = 0;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});



$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold11){


if(tl_11.isActive() == false){

gsap.set("#myBox11 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_11.set(box11, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box11, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box11, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box11, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box11, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
              globalCounter = 1;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;
});




$(iconsAnimContainer).mousemove(function(e) {
 if(lastSeenAt.x) {
     totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - e.clientY, 2) + Math.pow(lastSeenAt.x - e.clientX, 2));
     
 //$('span').text('So far your mouse ran this many pixels:   ' + Math.round(totalDistance));
       
 if (totalDistance >= cursorThreshold12){


if(tl_12.isActive() == false){

gsap.set("#myBox12 img", {attr: { src: ""+constobj1[globalCounter].file+"" }});

tl_12.set(box12, {x: e.pageX, y: e.pageY, rotation:-90})

.to(box12, 0.2, { opacity:1, rotation:0, scale:1, transformOrigin:"50% 50%", ease:"expoScale(0.5,7,none)"})
.to(box12, 0.2, {rotation:0, transformOrigin:"50% 50%", x: e.pageX+3})
.to(box12, {rotation:180, y:1000, transformOrigin:"50% 50%", ease:"power2.in", duration:0.6}, "-=0.16")
.to(box12, 0.1, {rotation:0, yPercent:0, scale:0})

totalDistance = 0;

//Set global counter for array objects
if(globalCounter<constobj1.length-1){
       
       globalCounter++;
 
   }else{      
             
         globalCounter = 1;
       }


}

}
 
 }
 lastSeenAt.x = e.clientX;
 lastSeenAt.y = e.clientY;

});

}//end myIconsAnim();


document.addEventListener('astro:page-load', myIconsAnim)