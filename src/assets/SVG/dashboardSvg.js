import * as React from "react"
import { Platform } from "react-native"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
  Rect,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function DashboardSvg(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" 
          width={Platform.OS == "ios" ? 545 : 420}
          height={Platform.OS == "ios" ? 900 : 840}
          viewBox={Platform.OS == "ios" ? "70 0 210 690" : "0 0 399 800"}
          {...props}
          {...props}>
        <Defs>
          <LinearGradient
            id="prefix__b"
            x1={0.5}
            y1={0.867}
            x2={0.5}
            y2={-0.071}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#a1a0b9" />
            <Stop offset={1} stopColor="#6b6b8d" />
          </LinearGradient>
          <LinearGradient
            id="prefix__c"
            x1={0.292}
            y1={0.841}
            x2={0.131}
            y2={0.914}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#fff" />
            <Stop offset={1} stopColor="#a1a0b9" />
          </LinearGradient>
          <LinearGradient
            id="prefix__d"
            x1={0.5}
            y1={-1.118}
            x2={0.475}
            y2={0.631}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#6b6b8d" />
            <Stop offset={1} stopColor="#a1a0b9" />
          </LinearGradient>
          <LinearGradient
            id="prefix__f"
            x1={0.5}
            y1={0.102}
            x2={0.5}
            y2={2.842}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#a1a0b9" />
            <Stop offset={0.308} stopColor="#828298" />
            <Stop offset={1} stopColor="#6b6b8d" />
          </LinearGradient>
          <LinearGradient
            id="prefix__h"
            x1={0.5}
            y1={2.931}
            x2={0.27}
            y2={0.5}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#8c8ba5" />
            <Stop offset={1} stopColor="#d3d2ed" />
          </LinearGradient>
          <LinearGradient
            id="prefix__l"
            x1={0.049}
            y1={0.091}
            x2={0.67}
            y2={0.604}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#fff" />
            <Stop offset={1} stopColor="#a4a3bc" />
          </LinearGradient>
          <ClipPath id="prefix__a">
            <Path d="M0 0h375v812H0z" />
          </ClipPath>
        </Defs>
        <G data-name="Dashboard 1" clipPath="url(#prefix__a)">
          <Path fill="url(#prefix__b)" d="M0 0h375v812H0z" />
          <G data-name="Dashboard Frame">
            <Path
              data-name="Path 450"
              d="M2388 496.454v221.511h376.913l-1.483-222.353a334.608 334.608 0 00-375.05.748"
              transform="translate(-2388 77.035)"
              opacity={0.368}
              fill="url(#prefix__c)"
            />
            <Path
              data-name="Path 449"
              d="M2388 494.795v215.17h376.913l-1.483-215.988a342.8 342.8 0 00-375.05.726"
              transform="translate(-2388 103.035)"
              fill="url(#prefix__d)"
            />
            <G filter="url(#prefix__e)">
              <Path
                data-name="Path 448"
                d="M2762.965 593.071a280.625 280.625 0 00-375-1.471v135.535h374.609z"
                transform="translate(-2387.97 85.86)"
                fill="url(#prefix__f)"
              />
            </G>
            <G data-name="Menu Icon">
              <G filter="url(#prefix__g)">
                <Rect
                  data-name="Rectangle 128"
                  width={26}
                  height={3}
                  rx={1.5}
                  transform="translate(-107 750)"
                  fill="url(#prefix__h)"
                />
              </G>
              <G filter="url(#prefix__i)">
                <Rect
                  data-name="Rectangle 129"
                  width={26}
                  height={3}
                  rx={1.5}
                  transform="translate(-107 758)"
                  fill="url(#prefix__h)"
                />
              </G>
              <G filter="url(#prefix__j)">
                <Rect
                  data-name="Rectangle 130"
                  width={26}
                  height={3}
                  rx={1.5}
                  transform="translate(-107 766)"
                  fill="url(#prefix__h)"
                />
              </G>
            </G>
            <G data-name="Dashboard Icon">
              <G
                transform="translate(.001)"
                filter="url(#prefix__k)"
                data-name="Group 118"
              >
                <Path
                  data-name="Path 424"
                  d="M947.267 352.39a13.832 13.832 0 00-13.617 14v14h13.617a14.005 14.005 0 000-28zm0 24.667h-10.39V366.39a10.4 10.4 0 1110.39 10.667z"
                  transform="translate(-1345.08 392.61)"
                  fill="url(#prefix__l)"
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
  )
}

export default DashboardSvg
