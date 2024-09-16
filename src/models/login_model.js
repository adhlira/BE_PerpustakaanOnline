class login_model {
  constructor(userId, token, expired_at, created_at, updated_at, username, password) {
    (this.userId = userId), (this.token = token), (this.expired_at = expired_at), (this.created_at = created_at), (this.updated_at = updated_at), (this.username = username), (this.password = password);
  }
}
export default login_model;
