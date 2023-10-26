//import liraries
import { LinearBackground } from "~/components/configs/LinearBackground";
import React from "react";
import { primary, toscaColor } from "~/components/configs/Colors";
import SwiperLib from "~/components/Swiper/SwiperLib";
import { useDispatch, useSelector } from "react-redux";

const SwiperHome = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user?.username);

  if (username != "undefined") console.log("\n Login User as : ", username);

  const BackgrounSwiperHeight = 180;
  return (
    <>
      <LinearBackground
        colors={[toscaColor, primary]}
        style={{
          backgroundColor: "darkgreen",
          opacity: 0.8,
          height: BackgrounSwiperHeight,
        }}
      >
        <SwiperLib />
      </LinearBackground>
    </>
  );
};
export default SwiperHome;
