import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts"
import PropTypes from "prop-types"
import "../../scss/index.scss"

export default function DataRadialChart({ radialDataValue }) {
  let options = {
    style: "percent",
    //signDisplay: "always",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    //notation: "compact",
    //currencyDisplay: "name",
  }
  let numberFormat = new Intl.NumberFormat("fr-FR", options)
  let newFormat = numberFormat.format(radialDataValue)

  const data = [{ value: 12, fill: "#ff0000" }]

  return (
    <div>
      <div className="radialchart-info">
        <span>{newFormat}</span>
        <h3> de votre objectif</h3>
      </div>
      <div className="radialchart-graphic">
        <RadialBarChart
          width={185}
          height={200}
          innerRadius={50}
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
      </div>
    </div>
  )
}

DataRadialChart.propTypes = {
  todayScore: PropTypes.number,
}
