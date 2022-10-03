import * as React from "react"
import { Platform } from "react-native"
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
  ClipPath,
  Path,
  G,
} from "react-native-svg"

function EmergencySvg(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" 
    width={Platform.OS == "ios" ? 545 : 420}
    height={Platform.OS == "ios" ? 900 : 840}
    viewBox={Platform.OS == "ios" ? "70 0 210 690" : "0 0 399 800"}
    {...props}>
      <Defs>
        <RadialGradient
          id="prefix__c"
          cx={0.762}
          cy={0.1258}
          r={0.856}
          gradientTransform="matrix(.647 .762 -.297 .521 .433 -.034)"
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#e5e4f7" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
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
        <ClipPath id="prefix__a">
          <Path d="M0 0h375v812H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path fill="url(#prefix__b)" d="M0 0h375v812H0z" />
        <Path
          data-name="Base Gradient"
          d="M529.675 0c292.531 0 529.675 275.122 529.675 614.5S822.207 1229 529.675 1229 0 953.884 0 614.5 237.144 0 529.675 0z"
          transform="translate(-308.175 -374.77)"
          fill="url(#prefix__c)"
        />
      </G>
    </Svg>
  )
}

export default EmergencySvg
