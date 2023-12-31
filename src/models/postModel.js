import mongoose from "mongoose";
import postCtrl from "../controllers/postController.js";
const {Schema, model} = mongoose;

const postSchema = new Schema({
    title : {
        type: String,
        required: [true, "El campo title es obligatorio"],
    },

    description : {
        type: String,
        required: [true, "El campo description es obligatorio"],
    },

    imgUrl:{
        type:String,
        default : null
    },

    // nameImage: String
    public_id : String
    },
    {
        timestamps : true,
    }
);

// postSchema.methods.setImg = function setImg(filename){
//     const url = 'http://localhost:5000/public/'
//     this.imgUrl = url + filename;
//     this.nameImage = filename;
//     }


postSchema.methods.setImg = function setImg({secure_url, public_id}){
    this.imgUrl = secure_url;
    this.public_id = public_id;
};

export const postModel = model ("post", postSchema);