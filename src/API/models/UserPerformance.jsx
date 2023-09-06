export default class userPerformanceModel {
  constructor(data, kind) {
    this.userId = data.userId
    this.kind = this.kindPerformance(kind)
    this.data = data.data.map((value, kind) => ({
      kind: this.kind[kind],
      value: value.value,
    }))
    this.performData = this.data.reverse()
  }
  kindPerformance() {
    const formatPerform = [
      "Cardio",
      "Energie",
      "Endurance",
      "Strength",
      "Speed",
      "Intensity",
    ]
    return formatPerform
  }
}
