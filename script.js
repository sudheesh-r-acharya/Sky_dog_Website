function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, {x: 0});
    totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
          .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex+1, vars);
    tl.previous = vars => toIndex(curIndex-1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
    }

    const rightrow = gsap.utils.toArray("#right-row");
    const rightloop = horizontalLoop(rightrow, {paused: false , repeat: -1 });
    const leftrow = gsap.utils.toArray("#left-row");
    const leftloop = horizontalLoop(leftrow, {paused: false , repeat: -1 });

    gsap.from("#b",{
        y: 50,
        duration:0.7,
        repeat:-1,
        yoyo:true,

    })
    gsap.from(".b1b2",{
        y: 50,
        duration:0.8,
        repeat:-1,
        yoyo:true,

    })
    gsap.from(".b3b4",{
        y: 50,
        duration:0.9,
        repeat:-1,
        yoyo:true,

    })
    gsap.from(".b5b6",{
        y: 50,
        duration:1,
        repeat:-1,
        yoyo:true,

    })
    gsap.from("#headname",{
        y: 400,
        duration:1.2,
        
    })
    gsap.from(".S-2content",{
        x: 600,
        duration:3,
        stagger:1,
        scrollTrigger:{
            trigger: ".S-2content",
            start: "top 65%",
            end:"top 75%",
            // markers: "true"
        }

    })
 
    gsap.from("#card1",{
        x:-2000,
        duration:2,
        
        scrollTrigger:{
            trigger: "#card1",
            start: "top 70%"
        }

    })
    gsap.from("#card2",{
        x:-2000,
        duration:2,
        
        scrollTrigger:{
            trigger: "#card2",
            start: "top 70%"
        }
    })
    gsap.from("#card3",{
        x:-2000,
        duration:2,
        
        scrollTrigger:{
            trigger: "#card3",
            start: "top 70%"
        }
    })
    gsap.from("#card4",{
        x:-2200,
        duration:2,
        
        scrollTrigger:{
            trigger: "#card4",
            start: "top 70%"
        }
    })
    gsap.from("#card5",{
        x:2000,
        duration:2,
        scrollTrigger:{
            trigger: "#card5",
            start: "top 70%"
        }
    })
    gsap.from("#card6",{
        x:2000,
        duration:2,
        scrollTrigger:{
            trigger: "#card6",
            start: "top 70%"
        }
    })
    gsap.from("#card7",{
        x:2000,
        duration:2,
        scrollTrigger:{
            trigger: "#card7",
            start: "top 70%"
        }
    })
    gsap.from("#card8",{
        x:2000,
        duration:2,
        scrollTrigger:{
            trigger: "#card8",
            start: "top 70%"
        }
    })
   
    gsap.from("#banner",{
        y: 400,
        duration:2,
        scrollTrigger:{
            trigger: "#banner",
            start: "top 80%"
        }

    })
    gsap.from(".box",{
        y: 200,
        duration:0.7,
        repeat:-1,
        yoyo:true,

    })
    