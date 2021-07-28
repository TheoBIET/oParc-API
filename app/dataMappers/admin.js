const bcrypt = require("bcrypt");
const client = require("../database");

module.exports = {
    login: async (data) => {
        const results = await client.query(
            `SELECT * FROM "agent" WHERE email=$1`,
            [data.email]
        );
        const agent = results.rows[0];

        if (!agent) {
            return {
                message: "Email doesn't exists",
                email: false,
                password: false,
                data: null,
            };
        }

        const isPasswordValid = await bcrypt.compare(
            data.password,
            agent.password
        );

        if (!isPasswordValid) {
            return {
                message: "Password is incorrect",
                email: true,
                password: false,
                data: null,
            };
        }

        // More security
        delete agent.password;

        return {
            message: "Login successful",
            email: true,
            password: true,
            data: agent,
        };
    },
};
