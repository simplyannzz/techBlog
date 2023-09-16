// import model
const { comments } = require("./model");

const commentsData = [
    {
        comment: "This is awesome",
        user_id: 1,
        post_id: 2,
    },
    {
        comment: "I didn't know this",
        user_id: 1,
        post_id: 3,
    },
    {
        comment: "Tech is cool",
        user_id: 2,
        post_id: 2,
    },

];
const seedComments = () => comments.bulkCreate(commentsData);
// Exporting seedPosts function for use in other files
module.exports = seedComments;