const Institute = require('../Models/Institute')

const addInstitute = async (req, res) => {
    try {
        const institute = new Institute(req.body);
        await institute.save();
        res.status(201).json({
            success: true,
            message: "Institute added",
            data: institute
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const getInstitute = async (req, res) => {
    try {
        const institute = await Institute.find()
        console.log("hit",institute)
        res.status(200).json({
            success: true,
            data: institute
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = { addInstitute, getInstitute };
