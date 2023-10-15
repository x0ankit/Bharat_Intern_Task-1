gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });


  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });

  gsap.from(".Img3,.About_Me",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      start: "top 20%",
      end: "top 25%",
    //   markers:true,
      scrub: 2,
    },
  });

  gsap.from(".card",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 20%",
      end: "top 25%",
    //   markers:true,
      scrub: 2,
    },
  });
