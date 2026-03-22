const User = require("../Models/User")

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

        return res.json({
            message: "Login successful",
            userType: user.userType
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}