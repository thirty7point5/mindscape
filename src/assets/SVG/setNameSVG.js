import * as React from "react"
import Svg, {
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
    Path,
    G,
  } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SetNameSvg(props) {
    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={595}
          height={900}
          viewBox="0 0 540 810"
          {...props}
        >
          <Defs>
            <LinearGradient
              id="prefix__a"
              x1={0.708}
              y1={1.045}
              x2={0.473}
              y2={0.225}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={1} stopColor="#a4a3bc" />
              <Stop offset={0} stopColor="#ede7e4" />
            </LinearGradient>
            <LinearGradient
              id="prefix__e"
              x1={0.319}
              y1={0.34}
              x2={0.639}
              y2={0.881}
             gradientUnits="objectBoundingBox"
            >
              <Stop offset={1} stopColor="#a4a3bc" />
              <Stop offset={0} stopColor="#ede7e4" />
            </LinearGradient>
            <ClipPath id="prefix__b">
              <Path d="M0 0h375v812H0z" />
            </ClipPath>
          </Defs>
          <G clipPath="url(#prefix__b)">
            <Path fill="#ede7e4" d="M0 0h375v812H0z" />
            <G filter="url(#prefix__c)">
              <Path
                data-name="Path 371"
                d="M.087 180.119S-5.918 50.815 81.751 18.144C133-.949 187.694-3.305 240.976 3.409 292.441 9.893 348.312 20.5 396.836 41.34c31.157 13.381 60.664 34.108 80.664 64.313 54.628 82.488 36.565 214.754 21.071 308.46-11.078 66.975-27.375 143.146-66.786 196.719-27.379 37.216-65.23 62.968-101.747 87.037-37.31 24.6-76.245 47.477-119.939 52.148-48.354 5.172-77.668-22.79-101.275-67.063C86.588 641.25 69.122 596.3 54.855 550.4 18.014 431.84 2.638 305.4.087 180.119z"
                transform="rotate(180 222.335 390.66)"
                fill="url(#prefix__a)"
              />
            </G>
            <G filter="url(#prefix__d)">
              <Path
                data-name="Path 372"
                d="M15.778 65.281a97.489 97.489 0 0115.068-27.338C54.53 8.579 92.646-.842 128.384.058c0 0 208.185 11.29 268.678 116.136 0 0 12.572 31.454 0 80.653-13.14 51.433-40.166 104.427-68.884 148.842-20.693 32-44.514 58.862-79.326 74.73-33.874 15.441-71.941 14.639-108.056 10.668-37.956-4.174-76.864-18.235-101.01-50.255C15.3 348.364 6.507 306.512 3.275 266.409c-3.616-44.857-4.965-91.451-.232-136.217 2.191-20.758 5.022-44.247 12.735-64.911z"
                transform="rotate(180 191.01 290.295)"
                fill="url(#prefix__e)"
              />
            </G>
          </G>
        </Svg>
      )
}

export default SetNameSvg
