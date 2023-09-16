const user = require('./user');
const comments = require('./comments');
const blog = require('./blog');
//set up relation keys
user.hasMany(blog, {
    foreignKey: 'user_id',
});

blog.belongsTo(user, {
    foreignKey: 'user_id'
});

blog.hasMany(comments, {
    foreignKey: 'user_id',
});

user.hasMany(comments, {
    foreignKey: 'user_id',
});

comments.belongsTo(user, {
    foreignKey: 'user_id'
});

comments.belongsTo(blog, {
    foreignKey: 'user_id'
});

module.exports = { user, comments, blog };