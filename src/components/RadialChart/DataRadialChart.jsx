import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"
import "../../scss/index.scss"

export default function DataRadialChart({ radialDataValue }) {
  let options = {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }
  let numberFormat = new Intl.NumberFormat("fr-FR", options)
  let newFormat = numberFormat.format(radialDataValue)
  const data = [{ value: radialDataValue * 100 }]

  return (
    <section className="radialchart">
      <div className="radialchart-info">
        <span>{newFormat}</span>
        <h3> de votre objectif</h3>
      </div>
      <ResponsiveContainer width="100%" minWidth={185} height={200}>
        <RadialBarChart
          innerRadius="100%"
          outerRadius={200}
          barSize={10}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            dataKey={"value"}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            cornerRadius={10}
            minAngle={15}
            fill="red"
            background
            clockWise={true}
            dataKey="value"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </section>
  )
}

DataRadialChart.propTypes = {
  todayScore: PropTypes.number,
}
