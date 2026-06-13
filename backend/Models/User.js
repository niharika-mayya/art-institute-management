const mongoose =require("mongoose")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name:{
    type:String,
    required:true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
    phone:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
    userType: {
    type: String,
    enum: ["superadmin", "admin", "student"],
  },
  instituteId: {          
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute"
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);