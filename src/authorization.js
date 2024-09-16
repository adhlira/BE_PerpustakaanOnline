export const Role = {
  ADMIN: "Admin",
  STAFF: "Staff",
  MEMBER: "Member",
};

export const Permission = {
  BROWSE_USERS: "browse_users",
  ADD_USERS: "add_users",
  EDIT_USERS: "edit_users",
  DELETE_USERS: "delete_users",

  BROWSE_BOOK: "browse_book",
  ADD_BOOK: "add_book",
  EDIT_BOOK: "edit_book",
  DELETE_BOOK: "delete_book",

  BROWSE_LOAN_MEMBER: "browse_loan_member",
  ADD_LOAN_MEMBER: "add_loan_member",
  EDIT_LOAN_MEMBER: "edit_loan_member",
  DELETE_LOAN_MEMBER: "delete_loan_member",

  BROWSE_LOAN_VISITOR: "browse_loan_visitor",
  ADD_LOAN_VISITOR: "add_loan_visitor",
  EDIT_LOAN_VISITOR: "edit_loan_visitor",
  DELETE_LOAN_VISITOR: "delete_loan_visitor",

  BROWSE_VISITOR: "browse_visitor",
  ADD_VISITOR: "add_visitor",
  EDIT_VISITOR: "edit_visitor",
  DELETE_VISITOR: "delete_visitor",
};

export const PermissionAssignment = {
  [Role.ADMIN]: [
    Permission.BROWSE_USERS,
    Permission.ADD_USERS,
    Permission.EDIT_USERS,
    Permission.DELETE_USERS,

    Permission.BROWSE_BOOK,
    Permission.ADD_BOOK,
    Permission.EDIT_BOOK,
    Permission.DELETE_BOOK,

    Permission.BROWSE_LOAN_MEMBER,
    Permission.ADD_LOAN_MEMBER,
    Permission.EDIT_LOAN_MEMBER,
    Permission.DELETE_LOAN_MEMBER,

    Permission.BROWSE_LOAN_VISITOR,
    Permission.ADD_LOAN_VISITOR,
    Permission.EDIT_LOAN_VISITOR,
    Permission.DELETE_LOAN_VISITOR,

    Permission.BROWSE_VISITOR,
    Permission.ADD_VISITOR,
    Permission.EDIT_VISITOR,
    Permission.DELETE_VISITOR,
  ],

  [Role.STAFF]: [
    Permission.BROWSE_BOOK,

    Permission.BROWSE_LOAN_MEMBER,
    Permission.ADD_LOAN_MEMBER,
    Permission.EDIT_LOAN_MEMBER,

    Permission.BROWSE_LOAN_VISITOR,
    Permission.ADD_LOAN_VISITOR,
    Permission.EDIT_LOAN_VISITOR,

    Permission.BROWSE_VISITOR,
    Permission.ADD_VISITOR,
    Permission.EDIT_VISITOR,
  ],

  [Role.MEMBER]: [Permission.BROWSE_BOOK],
};
