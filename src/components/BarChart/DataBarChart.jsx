import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"
import "../../scss/index.scss"

export default function DataBarChart({ barValue }) {
  const data = barValue

  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className="tooltip">
          <p>{payload[0].value} kg</p>
          <p>{payload[1].value} kCal</p>
        </div>
      )
    }
  }

  return (
    <BarChart width={600} height={300} data={data}>
      <Tooltip />
      <XAxis stroke="#DEDEDE" />
      <YAxis />
      <Bar dataKey="kilogram" fill="#282D30" barSize={10} />
      <Bar dataKey="calories" fill="#FF0101" barSize={10} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    </BarChart>
  )
}

DataBarChart.propTypes = {
  data: PropTypes.shape({
    kilogram: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }),
}

//<XAxis dataKey="day" stroke="#9B9EAC" />
