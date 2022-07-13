import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '10 days',
    })
    return token.toJSON()
  }
  public async register({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const firstName = request.input('firstName')
    const lastName = request.input('lastName')
    const jobTitle = request.input('jobTitle')
    const department = request.input('department')
    const phoneNumber = request.input('phoneNumber')
    const extension = request.input('extension')
    const location = request.input('location')
    const newUser = new User()
    newUser.email = email
    newUser.password = password
    newUser.firstName = firstName
    newUser.lastName = lastName
    newUser.lastName = `${firstName} ${lastName}`
    newUser.jobTitle = jobTitle
    newUser.department = department
    newUser.phoneNumber = phoneNumber
    newUser.extension = extension
    newUser.location = location
    await newUser.save()
    const token = await auth.use('api').login(newUser, {
      expiresIn: '10 days',
    })
    return token.toJSON()
  }
}
