export default class userActivityModel {
  constructor(data) {
    this.userId = data.userId
    this.sessions = data.sessions.map((session, index) => ({
      kilogram: session.kilogram,
      calories: session.calories,
      day: index + 1,
    }))
  }
}
