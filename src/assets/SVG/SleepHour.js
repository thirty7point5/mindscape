import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath,
  Path,
  G,
  Ellipse,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SleepHourSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={420}
      height={840}
      viewBox="0 0 399 800"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          y1={0.867}
          x2={0.5}
          y2={-0.071}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#a1a0b9" />
          <Stop offset={1} stopColor="#6b6b8d" />
        </LinearGradient>
        <RadialGradient
          id="prefix__c"
          cx={0.5}
          cy={0.423}
          r={0.503}
          gradientTransform="matrix(0 1 -.72 0 .819 -.056)"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#e39684" />
          <Stop offset={1} stopColor="#706f93" stopOpacity={0} />
        </RadialGradient>
        <ClipPath id="prefix__b">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Sleep Log A \u2013 4" clipPath="url(#prefix__b)">
        <Path fill="url(#prefix__a)" d="M0 0h375v812H0z" />
      </G>
    </Svg>
  )
}

export default SleepHourSvg
