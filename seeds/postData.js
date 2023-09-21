const { post } = require("../models");

const postData = [
    {
        title: "Welcome to the blog",
        content: "This is the content of the first blog post.",
        user_id: 1,
    },
    {
        title: "Robots is taking over the world",
        content: "This is the content of the second blog post.",
        user_id: 2,
    },
    {
        title: "Ai is the new world??",
        content: "This is the content of the third blog post.",
        user_id: 3,
    }

];

const seedPosts = () => post.bulkCreate(postData);

module.exports = seedPosts;