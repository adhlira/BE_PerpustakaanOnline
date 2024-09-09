class users_model {
  //   constructor(prisma) {
  //     this.prisma = prisma;
  //   }

  //   async getAllUsers() {
  //     return await this.prisma.user.findMany();
  //   }

  constructor(role_id, username, password, name, email, phone_number, created_at, updated_at) {
    (this.role_id = role_id), (this.username = username), (this.password = password), (this.name = name), (this.email = email), (this.phone_number = phone_number), (this.created_at = created_at), (this.updated_at = updated_at);
  }
}

export default users_model;
