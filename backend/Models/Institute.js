const mongoose=require("mongoose")

const instituteSchema=new mongoose.Schema({
    instituteName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
        phone:{
        type:String,
        required:true
    },
        address:{
        type:String,
        required:true
    },
        country:{
        type:String,
        required:true
    },
        state:{
        type:String,
        required:true
    },
        city:{
        type:String,
        required:true
    },
        pincode:{
        type:String,
        required:true
    },
        description:{
        type:String,
    },
        gstNumber:{
        type:String,
    },
    status:{
        type:String,
        enum:["active","deactive"],
        default:"active"
    }
}, { timestamps: true });

module.exports = mongoose.model("Institute", instituteSchema);