export default class userActivityModel {
  constructor(data) {
    this.userId = data.userId
    //this.date = data.sessions.day
    this.sessions = data.sessions.map((session) => ({
      kilogram: session.kilogram,
      calories: session.calories,
      date: session.day,
      day: this.newDay(),
      //day: index + 1,
    }))
  }
  newDay() {
    const day = new Date(this.sessions.day)
    return day.getDate()
  }
}
