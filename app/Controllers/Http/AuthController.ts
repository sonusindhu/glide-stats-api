import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const token = await auth.use('jwt').attempt(email, password, {
      expiresIn: '10 days',
    })
    return token.toJSON()
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use('jwt').revoke()
    return {
      revoked: true,
    }
  }

  public async register({ request, response }: HttpContextContract) {
    // console.log(request)
    // return request.body()
    const firstName = request.input('firstName')
    const lastName = request.input('lastName')
    const newUser = new User()
    newUser.type = 4
    newUser.email = request.input('email')
    newUser.password = request.input('password')
    newUser.firstName = request.input('firstName')
    newUser.lastName = request.input('lastName')
    newUser.lastName = `${firstName} ${lastName}`
    newUser.jobTitle = request.input('jobTitle')
    newUser.department = request.input('department')
    newUser.phoneNumber = request.input('phoneNumber')
    newUser.extension = request.input('extension')
    newUser.location = request.input('location')
    newUser.status = 1
    await newUser.save()
    return newUser
    // const token = await auth.use('api').login(newUser, {
    //   expiresIn: '10 days',
    // })
    // return token.toJSON();
  }

  public async addAdmin({ request, response }: HttpContextContract) {
    // console.log(request)
    // return request.body()
    const firstName = request.input('firstName')
    const lastName = request.input('lastName')
    const newUser = new User()
    newUser.type = 1
    newUser.email = request.input('email')
    newUser.password = request.input('password')
    newUser.firstName = request.input('firstName')
    newUser.lastName = request.input('lastName')
    newUser.lastName = `${firstName} ${lastName}`
    newUser.jobTitle = request.input('jobTitle')
    newUser.department = request.input('department')
    newUser.phoneNumber = request.input('phoneNumber')
    newUser.extension = request.input('extension')
    newUser.location = request.input('location')
    newUser.status = 1
    await newUser.save()
    return newUser
    // const token = await auth.use('api').login(newUser, {
    //   expiresIn: '10 days',
    // })
    // return token.toJSON();
  }

  public async reset({ request, response }: HttpContextContract) {
    console.log(request, response)
  }
}
