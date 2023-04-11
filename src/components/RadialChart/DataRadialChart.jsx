import { RadialBarChart, RadialBar } from "recharts"
import "../../scss/index.scss"
// Créer ici le PropTypes radialDataValue

export default function DataRadialChart({ radialDataValue }) {
  const data = radialDataValue

  return (
    <RadialBarChart
      width={200}
      height={200}
      innerRadius="10%"
      outerRadius="80%"
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="sessionLength"
      />
    </RadialBarChart>
  )
}
