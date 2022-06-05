const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = (req, res) => {
    res.send('Welcome signup');
};

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = (req, res) => {
    res.send('Welcome signin');
};

usersCtrl.logout = (req, res) => {
    res.send('Bye logout');
};


module.exports = usersCtrl;