import * as React from "react"
import { Platform } from "react-native"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function PersonaSVG(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" 
    width={Platform.OS == "ios" ? 545 : 420}
      height={Platform.OS == "ios" ? 900 : 840}
      viewBox={Platform.OS == "ios" ? "70 100 210 690" : "0 0 399 800"}
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__c"
          x1={0.708}
          y1={1.045}
          x2={0.562}
          y2={0.692}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ede7e4" />
          <Stop offset={0.328} stopColor="#dbd6da" />
          <Stop offset={1} stopColor="#a4a3bc" />
        </LinearGradient>
        <LinearGradient
          id="prefix__e"
          x1={0.742}
          y1={1.027}
          x2={0.562}
          y2={0.605}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ede7e4" />
          <Stop offset={0.588} stopColor="#d1cdd5" />
          <Stop offset={1} stopColor="#a4a3bc" />
        </LinearGradient>
        <ClipPath id="prefix__a">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Step 1 \u2013 1" clipPath="url(#prefix__a)">
        <Path fill="#ede7e4" d="M0 0h375v812H0z" />
        <G filter="url(#prefix__b)">
          <Path
            data-name="Path 371"
            d="M.134 276.844S-9.1 78.1 125.652 27.888C204.414-1.458 288.485-5.08 370.381 5.239c79.1 9.967 164.975 26.277 239.556 58.3 47.889 20.568 93.244 52.424 123.982 98.85 83.964 126.784 56.2 330.078 32.387 474.1-17.026 102.945-42.075 220.02-102.65 302.361-42.081 57.2-100.259 96.782-156.386 133.776-57.345 37.8-117.189 72.973-184.347 80.152-74.32 7.949-119.376-35.028-155.661-103.076-34.177-64.1-61.022-133.186-82.949-203.738C27.687 663.738 4.055 469.4.134 276.844z"
            transform="rotate(180 293.38 865.83)"
            fill="url(#prefix__c)"
          />
        </G>
        <G filter="url(#prefix__d)">
          <Path
            data-name="Path 372"
            d="M14.92 61.732A92.189 92.189 0 0129.169 35.88C51.566 8.112 87.609-.8 121.4.055c0 0 196.866 10.677 254.07 109.822 0 0 11.888 29.744 0 76.268-12.425 48.637-37.982 98.749-65.139 140.749-19.568 30.262-42.094 55.662-75.013 70.667-32.033 14.6-68.029 13.843-102.181 10.088-35.892-3.947-72.685-17.243-95.518-47.523-23.153-30.7-31.47-70.278-34.526-108.2-3.42-42.418-4.7-86.479-.22-128.811 2.076-19.631 4.754-41.843 12.047-61.383z"
            transform="rotate(180 182.035 569.99)"
            fill="url(#prefix__e)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default PersonaSVG
