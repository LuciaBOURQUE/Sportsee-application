import { LineChart, Line, XAxis, Tooltip } from "recharts"
import "../../scss/index.scss"
// Créer ici le PropTypes barValue

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
    <LineChart width={200} height={200} data={data}>
      <Tooltip content={CustomTooltip} />
      <XAxis stroke="rgba(255, 255, 255, 0.5)" data={dataDay} fontSize="12px" />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="rgba(255, 255, 255, 0.4032)"
        strokeWidth={2}
        activeDot={{ r: 3 }}
      />
    </LineChart>
  )
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
*/
