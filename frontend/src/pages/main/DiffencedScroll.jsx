import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import classes from "../../assets/styles/home.module.scss";
import { specialImges } from "../../utils/constants";
import arrow from "../../assets/images/arrow-right-white.svg";
import bomber from "../../assets/images/301814479_1236987067091777_3190816943129078256_n.jpg";

export const DiffencedScroll = ({ resize }) => {
  return (
    <Controller>
      <Scene
        duration={2500}
        triggerElement={"#diffencedScroll"}
        triggerHook={resize < 850 ? 0.1 : 0}
      >
        {(progress) => (
          <Timeline totalProgress={progress} paused>
            <section id="diffencedScroll" className={classes.home_diff_scroll}>
              <div className={classes.home_diff_scroll_container}>
                {/* {specialImges.map((el, i) => (
                    <div key={i}>
                      <img src={el.url} alt="" />
                    </div>
                  ))} */}
                <Tween
                  from={{
                    y: resize < 680 ? "0" : "150vh",
                  }}
                  to={{
                    y: resize < 680 ? "0" : "-50vh",
                  }}
                  position={resize < 1200 ? 0 : 7}
                  duration={10}
                >
                  <div className={classes.home_diff_scroll_container_fitst_column}>
                    <div className={classes.home_diff_scroll_container_H}>
                      <img src={specialImges[0].url} alt="" />
                      <div className={classes.home_diff_scroll_container_hover}>
                        <h1>Winter bomber collect</h1>
                        <button>
                          View details <img src={arrow} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className={classes.home_diff_scroll_container_H}>
                      <img src={specialImges[1].url} alt="" />
                      <div className={classes.home_diff_scroll_container_hover}>
                        <h1>Winter bomber collect</h1>
                        <button>
                          View details <img src={arrow} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Tween>
                <Tween
                  from={{
                    y: resize < 680 ? "0" : resize < 3000 ? "-120vh" : "-80vh",
                  }}
                  to={{
                    y: resize < 680 ? "0" : resize > 3000 ? "80vh" : "250vh",
                  }}
                  position={resize < 1200 ? 0 : 7}
                  duration={10}
                >
                  <div className={classes.home_diff_scroll_container_second_column}>
                    <div className={classes.home_diff_scroll_container_H}>
                      <img src={specialImges[2].url} alt="" />
                      <div className={classes.home_diff_scroll_container_hover}>
                        <h1>Winter bomber collect</h1>
                        <button>
                          View details <img src={arrow} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className={classes.home_diff_scroll_container_H}>
                      <img src={specialImges[3].url} alt="" />
                      <div className={classes.home_diff_scroll_container_hover}>
                        <h1>Winter bomber collect</h1>
                        <button>
                          View details <img src={arrow} alt="" />
                        </button>
                      </div>
                    </div>
                    <div className={classes.home_diff_scroll_container_H}>
                      <img src={bomber} alt="" />
                      <div className={classes.home_diff_scroll_container_hover}>
                        <h1>Winter bomber collect</h1>
                        <button>
                          View details <img src={arrow} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Tween>
              </div>
            </section>
          </Timeline>
        )}
      </Scene>
    </Controller>
  );
};
