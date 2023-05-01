import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"
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
    <section className="linechart">
      <div className="legend-linechart">
        <h3>Durée moyenne des sessions</h3>
      </div>
      <ResponsiveContainer width="100%" minWidth={185} height={200}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.40)" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
          <Tooltip content={CustomTooltip} />
          <XAxis
            stroke="rgba(255, 255, 255, 0.5)"
            data={dataDay}
            fontSize="12px"
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            strokeWidth={2}
            fill="url(#colorUv)"
            fillOpacity={1}
            activeDot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  )
}

DataLineChart.propTypes = {
  data: PropTypes.shape({
    day: PropTypes.number.isRequired,
    sessionLength: PropTypes.number.isRequired,
  }),
}
