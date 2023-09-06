import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"
import "../../scss/index.scss"

export default function DataRadarChart({ radarDataValue }) {
  const data = radarDataValue

  return (
    <section className="radarchart">
      <ResponsiveContainer width="100%" minWidth={185} height={200}>
        <RadarChart outerRadius="60%" data={data}>
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
      </ResponsiveContainer>
    </section>
  )
}

DataRadarChart.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
}
