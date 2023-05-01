export default class userMainModel {
  constructor(data) {
    this.id = data.id
    this.firstName = data.userInfos.firstName
    this.todayScore = data.todayScore || data.score
    this.score = data.score
    this.keyData = data.keyData
  }
}
