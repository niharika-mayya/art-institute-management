const express=require("express")
const router=express.Router();
const {addInstitute, getInstitute}=require("../Controller/instituteController")

router.post("/addinstitute",addInstitute);
router.get("/getallinstitute",getInstitute);

module.exports=router
