import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import "../../scss/index.scss"
// Créer ici le PropTypes radarDataValue

export default function DataRadarChart({ radarDataValue }) {
  const data = radarDataValue

  return (
    <RadarChart outerRadius="80%" width={200} height={200} data={data}>
      <PolarGrid gridType="polygon" radialLines={false} />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis tick={false} axisLine={false} />
      <Radar
        name="kind"
        dataKey="value"
        stroke="#FFFFFF"
        fill="rgba(230, 0, 0, 0.7)"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}
