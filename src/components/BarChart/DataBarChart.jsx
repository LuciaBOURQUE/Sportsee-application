import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import "../../scss/index.scss"
// Créer ici le PropTypes

export default function DataBarChart({ barValue }) {
  const data = barValue

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
