import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import { TargetItems } from "./home-animation-supports";

export const HomeScrollAnimation = ({ resize }) => {
  console.log(resize);
  return (
    <Controller>
      <Scene duration={1000} triggerElement={"#animation"} triggerHook={0.15}>
        {(progress) => (
          <Timeline totalProgress={progress} paused target={<TargetItems />}>
            {resize > 3800 ? (
              // ----- DESKTOP RESPONSIVE 3800 up -----
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
                    maxHeight: "3400px",
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
                    objectPosition: resize > 4500 ? "50% 20%" : "50% -10%",
                    scrollTrigger: {
                      trigger: "#mainImg",
                      start: "0 21%",
                      end: "100% top",
                      scrub: resize > 4500 ? 2 : 1.8,
                    },
                  }}
                  target="img3"
                  position="0"
                  duration={1}
                />
                {/* shadow */}
                <Tween
                  to={{
                    top: resize > 4500 ? "70vh" : "90vh",
                    width: "100vw",
                    right: "0",
                    display: "flex",
                    height: "900px",
                    scrollTrigger: {
                      trigger: "#shadow",
                      start: "-200% center",
                      end: "140% center",
                      markers: true,
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
                      end: "100% center",
                      scrub: 2,
                    },
                  }}
                  target="detailText"
                  duration={0}
                />
              </>
            ) : resize < 3000 ? (
              // -----  DESKTOP RESPONSIVE 3000px down  -----
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
                    objectPosition: "50% -40%",
                    scrollTrigger: {
                      trigger: "#mainImg",
                      start: "0 21%",
                      end: "100% 35%",
                      scrub: 1.5,
                    },
                  }}
                  target="img3"
                  position="0"
                  duration={1}
                />
                {/* shadow */}
                <Tween
                  to={{
                    top: "90vh",
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
              </>
            ) : (
              // -----  DESKTOP RESPONSIVE 3800px down  -----
              <>
                <Tween
                  to={{
                    y: "5vh",
                    x: "-25vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% 35%",
                      scrub: 1.5,
                    },
                  }}
                  target="img1"
                  position="0"
                  duration={1}
                />
                <Tween
                  to={{
                    y: "5vh",
                    x: "-25vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% 35%",
                      scrub: 1.5,
                    },
                  }}
                  target="img2"
                  position="0"
                  duration={1}
                />
                <Tween
                  to={{
                    y: "5vh",
                    x: "25vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% 35%",
                      scrub: 1.5,
                    },
                  }}
                  target="img4"
                  position="0"
                  duration={1}
                />
                <Tween
                  to={{
                    y: "5vh",
                    x: "25vw",
                    scrollTrigger: {
                      trigger: "#img",
                      start: "0 25%",
                      end: "100% 35%",
                      scrub: 1.5,
                    },
                  }}
                  target="img5"
                  position="0"
                  duration={1}
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
                    objectPosition: "50% -15%",
                    scrollTrigger: {
                      trigger: "#mainImg",
                      start: "0 21%",
                      end: "140% 20%",
                      scrub: 1.5,
                    },
                  }}
                  target="img3"
                  position="0"
                  duration={1}
                />
                {/* shadow */}
                <Tween
                  to={{
                    top: "105vh",
                    width: "100vw",
                    right: "0",
                    display: "flex",
                    height: "900px",
                    scrollTrigger: {
                      trigger: "#shadow",
                      start: "0 bottom",
                      end: "140% center",
                      // markers: true,
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
              </>
            )}
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
