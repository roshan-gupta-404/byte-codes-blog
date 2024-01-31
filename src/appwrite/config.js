import { Client, Storage, Databases, Query, ID } from "appwrite";
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
          return await this.databases.createDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug, {title, slug, content, status, featured_image, description, user_id, date});
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error); 
            return false
        }
    }

    async updatePost(slug, {title, content, status, featured_image, description}){
        try {
          return await this.databases.updateDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug, {title, content, status, featured_image, description});
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error); 
            return false
        }
    }

    async deletePost(slug){
        try {
          await this.databases.deleteDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug);
          return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error); 
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error); 
            return false
            
        }
        //TODO: we can improve the security by asking the user_id and doing a query on it.
    }

    async getAllPosts(){
        try {
            return await this.databases.listDocuments(conf.appwriteDbId, conf.appwriteCollectionId);
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error); 
            return false
            
        }
    }

    async getActivePosts(){
        try {
            return await this.databases.listDocuments(conf.appwriteDbId, conf.appwriteCollectionId,[Query.equal("status","Active")]);
        } catch (error) {
            console.log("Appwrite service :: getActivePosts :: error", error); 
            return false            
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file) //returns file $id, bucketId , etc.
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error); 
            return false            
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(conf.appwriteBucketId, fileId)
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error); 
            return false            
        }
    }

    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(conf.appwriteBucketId, fileId) // TODO:  add params for compressed images
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error); 
            return false            
        }
    }
}

const services = new Services();

export default services