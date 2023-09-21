const { user } = require("../models");
// Array of dummy blog post data
const userData = [
    {
        username: "annie6993",
        email: "annie6993@example.com",
        password: "password1",
    },
    {
        username: "gogo2",
        email: "gogo2@example.com",
        password: "password2",
    },
    {
        username: "chicka3",
        email: "chicka3@example.com",
        password: "password3",
    }
];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => user.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;