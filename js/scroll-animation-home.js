$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    scrub: 0.1,
  });

  //Main pin
  ScrollTrigger.create({
    trigger: "html",
    start: "top bottom",
    end: "bottom bottom",
    endTrigger: ".main-section-wrapper",
    onLeave() {
      $(".main-bg-wrapper").removeClass("pinned-main-bg");
      $(".green-circle").removeClass("pinned-green-ball");
    },
    onEnterBack() {
      $(".main-bg-wrapper").addClass("pinned-main-bg");
      $(".green-circle").addClass("pinned-green-ball");
    },
    markers: false,
  });

  let MainBackgroundGoTop = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards-section-wrapper",
      start: "top bottom",
      end: "bottom 20%",
      endTrigger: ".main-section-wrapper",
      markers: false,
    },
  });

  MainBackgroundGoTop.to(".green-circle", { transform: "translateY(10%)" }).to(
    ".main-bg-wrapper",
    { transform: "translateY(-20%)" },
    0
  );

  //Big BAll Anim

  let BallGoTop = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards-section-wrapper",
      start: "bottom 100%",
      end: "bottom 55%",
      markers: false,
    },
  });

  BallGoTop.from(".ball-image", { transform: "translateY(20%)" });

  let BigBallSmallText = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball-second-title",
      start: "top bottom",
      end: "top 50%",
      markers: false,
    },
  });

  BigBallSmallText.to("#small-text-ball-anim", { x: "20%" });

  let BigBallMainText = gsap.timeline({
    scrollTrigger: {
      trigger: ".ball-title",
      start: "bottom bottom",
      end: "bottom 70%",
      markers: false,
    },
  });

  BigBallMainText.from("#main-title-ball", { transform: "translateY(100%)" });

  //Types main title anim
  let TypesMainTitle = gsap.timeline({
    scrollTrigger: {
      trigger: "#types-main-title-anim",
      start: "top bottom",
      end: "top 60%",
      markers: false,
    },
  });

  TypesMainTitle.from("#types-main-title-anim", { x: "10%" });

  //WhyUs animations
  let WhyMainTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".why-title",
      start: "bottom bottom",
      end: "bottom 70%",
      markers: false,
    },
  });

  WhyMainTitle.from("#whyUs-title-anim", { transform: "translateY(100%)" });

  let WhyDescription = gsap.timeline({
    scrollTrigger: {
      trigger: ".why-description",
      start: "top bottom",
      end: "top 50%",
      markers: false,
    },
  });

  WhyDescription.from(".why-description", { x: "-20%" });

  //Green banner anim
  let GreenBannerTitle = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-text-wrapper",
      start: "top bottom",
      end: "top 50%",
      markers: false,
    },
  });

  GreenBannerTitle.from("#green-banner-main-title", {
    x: "5%",
  }).from("#green-banner-description", { x: "5%" }, 0);

  //Red banner anim
  let RedBannerDiv = gsap.timeline({
    scrollTrigger: {
      trigger: ".red-banner",
      start: "top 90%",
      end: "top 40%",
      markers: false,
    },
  });

  RedBannerDiv.from(".red-square", {
    width: "80%",
  });

  //Astronaut background anim
  let AstrBack = gsap.timeline({
    scrollTrigger: {
      trigger: ".pre-bg-contact",
      start: "top bottom",
      end: "bottom top",
      markers: false,
    },
  });

  AstrBack.to(".pre-bg-contact", {
    objectPosition: "50% 100%",
  });

  if ($(window).width() > 700) {
    var whyUsObj = $(".whyUsFixed");

    let WhyPin = gsap.timeline({
      scrollTrigger: {
        trigger: ".whyUsTrigger",
        start: "bottom bottom",
        end: "bottom bottom",
        endTrigger: ".whyUs-section-wrapper",
        onEnter() {
          whyUsObj.addClass("why-fix");
        },
        onLeave() {
          whyUsObj.addClass("why-bottom-fix");
          whyUsObj.removeClass("why-fix");
        },
        onEnterBack() {
          whyUsObj.addClass("why-fix");
          whyUsObj.removeClass("why-bottom-fix");
        },
        onLeaveBack() {
          whyUsObj.removeClass("why-fix");
        },
        markers: false,
      },
    });

    let WhySectionsAnim1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".whyUsTrigger",
        start: "bottom bottom",
        end: "bottom bottom",
        endTrigger: ".whyUs-section-wrapper",
        markers: false,
      },
    });
    var widthImage = "220px",
      paddingTextClose = "40px 0px",
      paddingTextOpen = "40px 40px";

    WhySectionsAnim1.to("#book-1-img", { width: "0", duration: 0.33 })
      .to(
        "#book-1-text",
        { width: "0", padding: paddingTextClose, duration: 0.33 },
        0
      )
      .to("#book-2-img", { width: widthImage, duration: 0.33 }, 0)
      .to(
        "#book-2-text",
        { width: "auto", padding: paddingTextOpen, duration: 0.33 },
        0
      )

      .to("#book-2-img", { width: "0", duration: 0.33 })
      .to(
        "#book-2-text",
        { width: "0", padding: paddingTextClose, duration: 0.33 },
        0.33
      )
      .to("#book-3-img", { width: widthImage, duration: 0.33 }, 0.33)
      .to(
        "#book-3-text",
        { width: "auto", padding: paddingTextOpen, duration: 0.33 },
        0.33
      )

      .to("#book-3-img", { width: "0", duration: 0.33 })
      .to(
        "#book-3-text",
        { width: "0", padding: paddingTextClose, duration: 0.33 },
        0.66
      )
      .to("#book-4-img", { width: widthImage, duration: 0.33 }, 0.66)
      .to(
        "#book-4-text",
        { width: "auto", padding: paddingTextOpen, duration: 0.33 },
        0.66
      );
  }
});
