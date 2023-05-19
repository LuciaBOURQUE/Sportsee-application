export default class userActivityModel {
  constructor(data) {
    this.userId = data.userId
    this.sessions = data.sessions.map((session, day) => ({
      kilogram: session.kilogram,
      calories: session.calories,
      day: new Date(session.day).getDate(),
    }))
  }
}
