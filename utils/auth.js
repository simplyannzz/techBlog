const withAuth = (req, res, next) => {
    // If user is not logged in, redirect to login page
    if (!req.session.logged_in) {
        res.redirect("/login");
    } else {
        // If user is logged in, continue to next middleware or route
        next();
    }
};

module.exports = withAuth;