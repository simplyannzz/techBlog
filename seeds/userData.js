// import model
const { user } = require("./model");

const userData = [
    {
        username: "yololo",
        email: "yololo@example.com",
        password: "password1",
    },
    {
        username: "user1",
        email: "user1@example.com",
        password: "password12",
    },
    {
        username: "user2",
        email: "user2@example.com",
        password: "password",
    },
];
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;