import { Client, Storage, Databases } from "appwrite";
import conf from "../conf/conf"

export class Services{
    client = new Client();
    databases;
    storage;
    
    constructor(){
        this.client
                    .setEndpoint(conf.appwriteUrl)
                    .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title, slug, content, status, featured_image, description, user_id, date}){
        try {
          return await databases.createDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug, {title, slug, content, status, featured_image, description, user_id, date});
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error); 
            return false
        }
    }

    async updatePost(slug, {title, content, status, featured_image, description}){
        try {
          return await databases.updateDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug, {title, content, status, featured_image, description});
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error); 
            return false
        }
    }

    async deletePost(slug){
        try {
          await databases.deleteDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug);
          return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error); 
            return false
        }
    }
}

const services = new Services();

export default services