import Nedb from 'nedb'
import { User } from '../Shared/Model'
export class UserDbAccess {
    private nedb: Nedb

    constructor() {
        this.nedb = new Nedb('database/Users.db')
        this.nedb.loadDatabase()
    }

    public async putUser(user: User) {
        return new Promise((resolve, reject) => {
            this.nedb.insert(user, (err: Error | null) => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}