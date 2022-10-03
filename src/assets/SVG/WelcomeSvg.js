import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from "react-native-svg"
import { Dimensions, Platform } from 'react-native'
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const {height, width} = Dimensions.get('screen')
function WelcomeSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={Platform.OS == "ios" ? 545 : 420}
      height={Platform.OS == "ios" ? 900 : 840}
      viewBox={Platform.OS == "ios" ? "70 0 210 690" : "0 0 399 800"}
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.27}
          y1={0.165}
          x2={0.73}
          y2={0.758}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={1} stopColor="#8F8EA8" />
          <Stop offset={0} stopColor="#8F8EA8" />
        </LinearGradient>
        <LinearGradient
          id="prefix__e"
          x1={0.319}
          y1={0.34}
          x2={0.639}
          y2={0.881}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#8c8ba5" />
          <Stop offset={1} stopColor="#a4a3bc" />
        </LinearGradient>
        <LinearGradient
          id="prefix__g"
          x1={0.527}
          y1={0.752}
          x2={0.165}
        >
          <Stop offset={0} stopColor="#a4a3bc" />
          <Stop offset={1} stopColor="#a4a3bc" />
        </LinearGradient>
        <LinearGradient
          id="prefix__i"
          x1={0.298}
          y1={0.172}
          x2={0.63}
          y2={0.81}
        >
          <Stop offset={1} stopColor="#8F8EA8" />
          <Stop offset={0} stopColor="#8F8EA8" />
        </LinearGradient>
        <LinearGradient
          id="prefix__k"
          x1={0.537}
          y1={0.542}
          x2={0.183}
          y2={0.235}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#8887a2" />
          <Stop offset={1} stopColor="#a4a3bc" />
        </LinearGradient>
        <ClipPath id="prefix__b">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Welcome \u2013 1" clipPath="url(#prefix__b)">
        <Path fill="#9493ad" d="M0 0h375v812H0z" />
        <G filter="url(#prefix__c)">
          <Path
            data-name="Path 371"
            d="M.087 180.119S-5.918 50.815 81.751 18.144C133-.949 187.694-3.305 240.976 3.409 292.441 9.893 348.312 20.5 396.836 41.34c31.157 13.381 60.664 34.108 80.664 64.313 54.628 82.488 36.565 214.754 21.071 308.46-11.078 66.975-27.375 143.146-66.786 196.719-27.379 37.216-65.23 62.968-101.747 87.037-37.31 24.6-76.245 47.477-119.939 52.148-48.354 5.172-77.668-22.79-101.275-67.063C86.588 641.25 69.122 596.3 54.855 550.4 18.014 431.84 2.638 305.4.087 180.119z"
            transform="rotate(180 222.61 390.5)"
            fill="url(#prefix__a)"
          />
        </G>
        <G filter="url(#prefix__d)">
          <Path
            data-name="Path 372"
            d="M14.92 61.732A92.189 92.189 0 0129.169 35.88C51.566 8.112 87.609-.8 121.4.055c0 0 196.866 10.677 254.07 109.822 0 0 11.888 29.744 0 76.268-12.425 48.637-37.982 98.749-65.139 140.749-19.568 30.262-42.094 55.662-75.013 70.667-32.033 14.6-68.029 13.843-102.181 10.088-35.892-3.947-72.685-17.243-95.518-47.523-23.153-30.7-31.47-70.278-34.526-108.2-3.42-42.418-4.7-86.479-.22-128.811 2.076-19.631 4.754-41.843 12.047-61.383z"
            transform="rotate(180 182.31 311.21)"
            fill="url(#prefix__e)"
          />
        </G>
        <G filter="url(#prefix__f)">
          <Path
            data-name="Path 407"
            d="M1.394 157.254c.966-11.427 2.35-22.74 3.881-33.635 2.829-20.136 6.62-40.328 13.687-59.4 4.548-12.282 9.86-24.794 18.6-34.6 9.975-11.194 22.613-15.4 36.407-19.44C103.265 1.6 134.335-2.3 164.7 1.385c29.067 3.526 56.955 14.524 79.954 33.276 0 0 38.8 36.033 29.561 77.759-6.025 27.209-21.737 52.177-37.1 74.74-33.319 48.925-68.671 98.687-132.249 99.116 0 0-93.6.633-102.84-66.383-2.773-20.047-2.412-41.545-.632-62.639z"
            transform="rotate(180 158.005 276.07)"
            fill="url(#prefix__g)"
          />
        </G>
        <G filter="url(#prefix__h)">
          <Path
            data-name="Path 373"
            d="M1.394 157.254c.966-11.427 2.35-22.74 3.881-33.635 2.829-20.136 6.62-40.328 13.687-59.4 4.548-12.282 9.86-24.794 18.6-34.6 9.975-11.194 22.613-15.4 36.407-19.44C103.265 1.6 134.335-2.3 164.7 1.385c29.067 3.526 56.955 14.524 79.954 33.276 0 0 38.8 36.033 29.561 77.759-6.025 27.209-21.737 52.177-37.1 74.74-33.319 48.925-68.671 98.687-132.249 99.116 0 0-93.6.633-102.84-66.383-2.773-20.047-2.412-41.545-.632-62.639z"
            transform="rotate(180 158.005 275.635)"
            fill="url(#prefix__i)"
          />
        </G>
        <G data-name="Group 119">
          <G
            transform="translate(-.002)"
            filter="url(#prefix__j)"
            data-name="Group 118"
          >
            <Path
              data-name="Path 424"
              d="M978.392 352.39c-24.666 0-44.742 20.649-44.742 46v46h44.742c24.666 0 44.742-20.623 44.742-46 0-25.351-20.076-46-44.742-46zm0 81.048h-34.137V398.39c0-19.314 15.3-35.021 34.137-35.021s34.163 15.707 34.163 35.021c0 19.34-15.327 35.048-34.163 35.048z"
              transform="translate(-790.89 19.05)"
              fill="url(#prefix__k)"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default WelcomeSvg
