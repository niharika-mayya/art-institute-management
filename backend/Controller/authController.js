const User = require("../Models/User")
const jwt=require("jsonwebtoken")

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }

        if (user.status !== "active") {
            return res.status(400).json({ message: "User inactive" });
        }

        // Create token
        const token=jwt.sign(
            {
                id:user._id,
                username:user.username,
                userType:user.userType
            },
            "secretkey123",
            {expiresIn:"1d"}
        )

        return res.json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}