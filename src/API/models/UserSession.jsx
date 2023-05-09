export default class userSessionModel {
  constructor(data) {
    this.userId = data.userId
    this.sessionsOfDay = this.Day(data.sessions.day)
    this.sessions = data.sessions.map((session, index) => ({
      sessionLength: session.sessionLength,
      day: this.sessionsOfDay[index],
    }))
  }

  Day() {
    const formatOfDay = ["L", "M", "M", "J", "V", "S", "D"]
    return formatOfDay
  }
}
