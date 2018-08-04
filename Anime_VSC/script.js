var obj2 = document.querySelector('.pro');


var obj1 = anime.timeline({
easing:'easeInOutSine',
loop: true,
direction:'alternate',
update: function(anim){
    obj2.value = anim.progress;
},
autoplay:false

});





obj1
.add({
targets:'.box1',
translateX: [ { value: 400 }, { value: 600 }, { value: 800 } ],
    translateY: [ { value: 30 }, { value: 90 }, { value: 180 } ],
duration: 2000,
offset:0,
rotate: 540,
scale:1.2,
elasticity: function(el,i,l){
    return 200 + (i*200);
}
})
.add({
targets: '.box2',
translateX: [ { value: 400 }, { value: 600 }, { value: 800 } ],
translateY: [ { value: 30 }, { value: -30 }, { value: -30 } ],
duration:2000,
offset:400,
rotate: -540,
scale:1.2,
elasticity: function(el,i,l){
    return 200 + (i*200);
}
})
.add({
    targets:'.box3',
    translateX: [ { value: 400 }, { value: 600 }, { value: 800 } ],
    translateY: [ { value: 30 }, { value: -150 }, { value: -30 } ],
    duration:2000,
    offset:800,
    rotate: 940,
    scale:1.2,
    elasticity: function(el,i,l){
        return 200 + (i*200);
    }
});


document.querySelector('.play').onclick = obj1.play;
document.querySelector('.pause').onclick = obj1.pause;
document.querySelector('.reverse').onclick = obj1.reverse;
document.querySelector('.restart').onclick = function(){
    obj1.play();
    obj1.restart();
}

obj2.addEventListener('input',function(){
    obj1.seek(obj1.duration * (obj2.value/100));
});

['input','change'].forEach(function(evt){

    obj2.addEventListener(evt ,function(){

            obj1.seek(obj1.duration * (obj2.value/100));
    });
});

