import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import { TargetItems } from "./home-animation-supports";

export const HomeAnimation = () => {
  return (
    <Controller>
      <Scene
        duration={2000}
        indicators={true}
        triggerElement={"#animation"}
        triggerHook={0.3}
        pin={true}
      >
        {(progress) => (
          <Timeline totalProgress={progress} paused target={<TargetItems />}>
            <Tween
              to={{
                y: "-100vh",
              }}
              target="img3"
              position="0"
              duration={1}
            />
            {/* <Tween
        from={{
          position: "absolute",
          left: "20%",
          top: "80",
        }}
        to={{
          position: "absolute",
          left: "-30%",
          top: "80",
          // transform: `scale(1.5)`,
        }}
        target="div2"
        position="0"
        duration={1}
      />
      <Tween
        from={{
          position: "absolute",
          left: "41.5%",
          top: "30",
        }}
        to={{
          position: "absolute",
          left: "0%",
          top: "800",
          // transform: `scale(7)`,
          // opacity: "0",
          width: "100%",
          // heigth: "700px",
        }}
        // style={styles.containerWidth(matches)}
        target="div3"
        position="0"
        duration={1}
      />
      <Tween
        from={{
          position: "absolute",
          right: "20%",
          top: "0",
        }}
        to={{
          position: "absolute",
          right: "-30%",
          top: "0",
        }}
        target="div4"
        position="0"
        duration={1}
      />
      <Tween
        from={{
          position: "absolute",
          right: "0%",
          top: "80",
        }}
        to={{
          position: "absolute",
          right: "-30%",
          top: "80",
          // transform: `scale(1.5)`,
        }}
        target="div5"
        position="0"
        duration={1}
      />
      <Tween
        from={{
          // width: "315px",
          minHeight: "600px",
          height: "100% ",
        }}
        to={{
          width: "100%",
      
          // backgroundPosition: "50% 20%",
          maxHeight: "1700px",
          height: "100%",
          // transform: "translateY(50%)",
        }}
        // style={styles.containerWidth(matches)}
        target="div6"
        position="0"
        duration={1}
      />
      <Tween
        from={{
          position: "absolute",
          right: "0%",
          // top: "2000",
        }}
        to={{
          position: "absolute",
          right: "0%",
          // top: "2000",
          // transform: `scale(1.5)`,
        }}
        // style={styles.containerTop(matches)}
        target="div7"
        position="0"
        duration={1}
      /> */}
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};

(// ----- DESKTOP RESPONSIVE 3800 up -----
<>
  <Tween
    to={{
      y: "5vh",
      x: "-60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% top",
        scrub: 2.5,
      },
    }}
    target="img1"
    position="0"
    duration={0.5}
  />
  <Tween
    to={{
      y: "5vh",
      x: "-60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% top",
        scrub: 2.5,
      },
    }}
    target="img2"
    position="0"
    duration={0.5}
  />
  <Tween
    to={{
      y: "5vh",
      x: "60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% top",
        scrub: 2.5,
      },
    }}
    target="img4"
    position="0"
  />
  <Tween
    to={{
      y: "5vh",
      x: "60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% top",
        scrub: 2.5,
      },
    }}
    target="img5"
    position="0"
  />
  {/*  scrolling big image  */}
  <Tween
    to={{
      maxHeight: "4000px",
    }}
    target="img3"
    position="0"
    duration={0}
  />
  <Tween
    from={{
      top: "10%",
    }}
    to={{
      height: "190vh",
      width: "100vw",
      top: "60vh",
      objectPosition: "50% 10%",
      scrollTrigger: {
        trigger: "#mainImg",
        start: "0 21%",
        end: "100% top",
        scrub: 2,
      },
    }}
    target="img3"
    position="0"
    duration={1}
  />
</>)(
  // ----- PHONE RESPONSIVE -----
  <>
    <Tween
      to={{
        y: "5vh",
        x: "-50vw",
        scrollTrigger: {
          trigger: "#img",
          start: "-100% 14%",
          end: "100% 35%",
          scrub: 1.5,
        },
      }}
      target="img1"
      position="0"
      duration={0.5}
    />
    <Tween
      to={{
        y: "5vh",
        x: "-50vw",
        scrollTrigger: {
          trigger: "#img",
          start: "-100% 14%",
          end: "100% 35%",
          scrub: 1.5,
        },
      }}
      target="img2"
      position="0"
      duration={0.5}
    />
    <Tween
      to={{
        y: "5vh",
        x: "50vw",
        scrollTrigger: {
          trigger: "#img",
          start: "-100% 14%",
          end: "100% 35%",
          scrub: 1.5,
        },
      }}
      target="img4"
      position="0"
      duration={0.5}
    />
    <Tween
      to={{
        y: "5vh",
        x: "50vw",
        scrollTrigger: {
          trigger: "#img",
          start: "-100% 14%",
          end: "100% 35%",
          scrub: 1.5,
        },
      }}
      target="img5"
      position="0"
      duration={0.5}
    />
    {/*  scrolling big image  */}
    <Tween
      to={{
        maxHeight: "2500px",
      }}
      target="img3"
      position="0"
      duration={0}
    />
    <Tween
      from={{
        top: "10%",
      }}
      to={{
        width: "100vw",
        top: "60vh",
        objectPosition: "50% -55%",
        scrollTrigger: {
          trigger: "#mainImg",
          start: "-100% 10%",
          end: "100% 35%",
          scrub: 1,
        },
      }}
      target="img3"
      position="0"
      duration={1}
    />
    <Tween
      to={{
        height: "100vh",
        scrollTrigger: {
          trigger: "#mainImg",
          start: "-100% 10%",
          end: "100% 35%",
          scrub: 1,
        },
      }}
      target="img3"
      position="0.2"
      duration={1}
    />
    {/* shadow */}
    <Tween
      to={{
        width: "100vw",
        right: "0",
        display: "flex",
        height: "40vh",
        scrollTrigger: {
          trigger: "#shadow",
          start: "-100% bottom",
          end: "140% center",
          scrub: 1,
        },
      }}
      target="shadow"
      duration={0}
    />
    <Tween
      to={{
        top: "20%",
        scrollTrigger: {
          trigger: "#shadow",
          start: "0% center",
          end: "100% center",
          scrub: 1,
        },
      }}
      target="shadow"
      duration={1}
    />
    <Tween
      to={{
        top: "80%",
        scrollTrigger: {
          trigger: "#detailText",
          start: "0 center",
          end: "50% center",
          scrub: 1,
        },
      }}
      target="detailText"
    />
  </>
);
// -----  DESKTOP RESPONSIVE 3800px down  -----
<>
  <Tween
    to={{
      y: "5vh",
      x: "-60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% 35%",
        scrub: 1.5,
      },
    }}
    target="img1"
    position="0"
    duration={0.5}
  />
  <Tween
    to={{
      y: "5vh",
      x: "-60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% 35%",
        scrub: 1.5,
      },
    }}
    target="img2"
    position="0"
    duration={0.5}
  />
  <Tween
    to={{
      y: "5vh",
      x: "60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% 35%",
        scrub: 1.5,
      },
    }}
    target="img4"
    position="0"
  />
  <Tween
    to={{
      y: "5vh",
      x: "60vw",
      scrollTrigger: {
        trigger: "#img",
        start: "0 25%",
        end: "100% 35%",
        scrub: 1.5,
      },
    }}
    target="img5"
    position="0"
  />
  {/*  scrolling big image  */}
  <Tween
    to={{
      maxHeight: "2500px",
    }}
    target="img3"
    position="0"
    duration={0}
  />
  <Tween
    from={{
      top: "10%",
    }}
    to={{
      height: "190vh",
      width: "100vw",
      top: "60vh",
      objectPosition: "50% -60%",
      scrollTrigger: {
        trigger: "#mainImg",
        start: "0 21%",
        end: "100% 35%",
        scrub: 1,
      },
    }}
    target="img3"
    position="0"
    duration={1}
  />
  {/* shadow */}
  <Tween
    to={{
      top: "100%",
      width: "100vw",
      right: "0",
      display: "flex",
      height: "900px",
      scrollTrigger: {
        trigger: "#shadow",
        start: "-100% bottom",
        end: "140% center",
      },
    }}
    target="shadow"
    duration={0}
  />
  <Tween
    to={{
      top: "50%",
      scrollTrigger: {
        trigger: "#detailText",
        start: "0 bottom",
        end: "140% center",
      },
    }}
    target="detailText"
    duration={0}
  />
</>;
