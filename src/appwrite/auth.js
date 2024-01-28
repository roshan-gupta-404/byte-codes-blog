import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    // SIGNING UP THE USER
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //login the user
                this.login({ email, password })
            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    // LOGIN
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    // GETTING CURRENT USER/ACCOUNT
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null
    }

    // LOGOUT
    async logout(){
        try {
            await this.account.deleteSessions(); // this will delete all sessions.
            return true
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
        return false
    }
}

const authServices = new AuthServices()

export default authServices