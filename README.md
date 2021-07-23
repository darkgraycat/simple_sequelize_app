# Simple Sequelize Application
### using *Sequelize***Typescript**

---
User.routes

POST - create user
http://localhost:3000/users
```
{
  uuid?: string,
  name: string,
  email: string
}
```
PATCH - add role to user
http://localhost:3000/users
```
{
  roleId: string,
  userId: string
}
```

Role.routes

GET - get roles with permissions. use JOIN perhaps
http://localhost:3000/roles

POST - create role with permissions
http://localhost:3000/roles
```
{
  name: string,
  permissionsIds: string[]
}
```

Permission.routes

GET - get permissions list
http://localhost:3000/permissions

POST - create permission
http://localhost:3000/permissions
```
{
  type: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE'
}
```

DELETE - delete permission, cascade
http://localhost:3000/permissions/permissionId
