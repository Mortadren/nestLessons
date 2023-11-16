import {Injectable} from '@nestjs/common'

@Injectable()
export class AuthService {
    private users = [
        {
            userId: 1, username: 'user1', password: 'pass1',
        }
    ]
    async validateUser(username: string, pass: string): Promise<any> {
        const user = this.users.find(u=>u.username === username && u.password === pass)
        if (user) {
            const { password, ...result } = user
            return result 
        } return null
    }
}