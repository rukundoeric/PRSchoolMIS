import models from '../../sequelize/models/index'

const { Users:User } = models

class Users{
  static async signup(req, res){
    const { firstName, lastName, username, email, password, userrole } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
      userrole
    })
    if(!user){
      res.status(500).json({
        message: "Users not created"
      })
    }
    res.status(201).json({
      status: 201,
      data: user
    })
  }
}
export default Users