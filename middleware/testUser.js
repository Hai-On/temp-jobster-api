const {BadRequestError} = require('../errors');

const testUser = (req, res, next) => {
    if (req.user.testUser === true) {
        throw new BadRequestError('Test User. Read only');
    }
    next()
};

module.exports = testUser;