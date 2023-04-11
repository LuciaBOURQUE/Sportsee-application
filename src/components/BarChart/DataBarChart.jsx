import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import "../../scss/index.scss"
// Créer ici le PropTypes

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
    <div>
      <div className="legend-barchart">
        <h3>Activité quotidienne</h3>
        <div className="poids-calories">
          <div className="poids">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#282D30"
              />
            </svg>
            <span>Poids (kg)</span>
          </div>
          <div className="calories">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                fill="#E60000"
              />
            </svg>
            <span>Calories (kCal)</span>
          </div>
        </div>
      </div>
      <BarChart width={500} height={200} data={data}>
        <Tooltip content={CustomTooltip} />
        <CartesianGrid vertical={false} stroke="#ccc" strokeDasharray="2 2" />
        <XAxis stroke="#9B9EAC" />
        <YAxis domain={[0, "dataMax + 10"]} stroke="#9B9EAC" tickCount={3} />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={10}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#FF0101"
          barSize={10}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  )
}
