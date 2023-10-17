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
      start: "top 40%",
      end: "top 45%",
      // markers:true,
      scrub: 10,
    },
  });

  var btn1 = document.querySelector(".head1");
  var btn2 = document.querySelector(".head2");

  var collection1 =  document.getElementById("listed_content1");
  var collection2 =  document.getElementById("listed_content2");

  var flag = 1
  btn2.addEventListener("click",function(){
    if(flag==1)
    {
      collection2.style.opacity = "1"
      collection2.style.transition = "ease 1s"
      collection1.style.opacity = "0"
      collection1.style.transition = "ease 1s"
      flag = 0

    }
  })
  btn1.addEventListener("click",function(){
    if(flag==0)
    {
      collection1.style.opacity = "1"
      collection2.style.opacity = "0"
      flag = 1
    }
  })