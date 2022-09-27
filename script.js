var tl = gsap.timeline();

tl
.from(".head-img #img",{
    rotate:360,
    duration:2,
})
 .from(".main-p h1",{
    x:-400,
    delay:-1.5,
    duration:2,
    opacity:0,
})
.from(".main-p h2",{
    y:100,
    duration:1,
    opacity:0,
})
.from(".sec-2-1",{
        delay:1,
        x:-200,
        opacity:0,
        duration:1,

})
.from(".sec-2-2 img",{
    scale:-1.2,
        x:200,
        opacity:0,
        duration:1,
    
})
.from(".boxes .box",{
    y:400,
    delay:1,
    duration:1.5,
    opacity:0,
})
.from(".dox",{
    y:400,
    delay:1,
    opacity:0,
    duration:1.5,
})
.from(".section",{
    y:400,
    delay:1,
    opacity:0,
    duration:1.5,
})
.from(".con-11",{
    x:-400,
    delay:1,
    opacity:0,
    duration:.5,
})
.from(".con-12",{
    x:400,
    delay:.5,
    opacity:0,
    duration:.5,
})