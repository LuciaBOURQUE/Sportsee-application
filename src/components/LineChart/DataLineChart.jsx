import { LineChart, Line, XAxis, Tooltip } from "recharts"
import PropTypes from "prop-types"
import "../../scss/index.scss"

export default function DataLineChart({ barValue }) {
  const data = barValue
  const dataDay = ["L", "M", "M", "J", "V", "S", "D"]

  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className="tooltip">
          <p>{payload[0].value} min</p>
        </div>
      )
    }
  }

  return (
    <LineChart width={185} height={200} data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="40%" stopColor="rgba(255, 255, 255, 0.40)" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs>
      <Tooltip content={CustomTooltip} />
      <XAxis stroke="rgba(255, 255, 255, 0.5)" data={dataDay} fontSize="12px" />
      <Line
        type="monotone"
        dataKey="sessionLength"
        strokeWidth={2}
        fill="url(#colorUv)"
        fillOpacity={1}
        activeDot={{ r: 3 }}
      />
    </LineChart>
  )
}

DataLineChart.propTypes = {
  data: PropTypes.shape({
    day: PropTypes.number.isRequired,
    sessionLength: PropTypes.number.isRequired,
  }),
}

/*
  return (
    <div>
      <div className="legend-linechart">
        <h3>Durée moyenne des sessions</h3>
      </div>
      <LineChart width={200} height={200} data={data}>
        <Tooltip content={CustomTooltip} />
        <XAxis
          stroke="rgba(255, 255, 255, 0.5)"
          data={dataDay}
          fontSize="12px"
        />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.4032)"
          strokeWidth={2}
          activeDot={{ r: 3 }}
        />
      </LineChart>
    </div>
  )
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="50%" stopColor="#ff0000" stopOpacity={0.5} />
          <stop offset="95%" stopColor="#00ff4067 81.27%" stopOpacity={0.1} />
        </linearGradient>
*/
