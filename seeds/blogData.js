// import model
const { blog } = require("./model");

const blogData = [
    {
        title: "Future of IT",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris rhoncus. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Magna eget est lorem ipsum. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.",
        user_id: 1,
    },
    {
        title: "Future of Medical technology",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris rhoncus. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Magna eget est lorem ipsum. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.",
        user_id: 2,
    },
    {
        title: "Future of AI",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris rhoncus. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Magna eget est lorem ipsum. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.",
        user_id: 3,
    },

];
const seedBlog = () => blog.bulkCreate(blogData);
// Exporting seedPosts function for use in other files
module.exports = seedBlog;