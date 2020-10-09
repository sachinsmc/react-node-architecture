const jwt = require('jsonwebtoken');

module.exports = {

  generateToken: (user) => {
    return jwt.sign(user, 'secret', { expiresIn: '7 days' });
  },

  validateToken: (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    if (authorizationHeaader) {
        console.log(authorizationHeaader);
      const token = req.headers.authorization.split(' ')[1];
      console.log(token)
      try {
        result = jwt.verify(token, 'secret', { expiresIn: '7 days' });
        console.log(result);
        req.decoded = result;
        next();
      } catch (err) {
          console.log(err);
        throw new Error(err);
      }
    } else {
      result = { 
        error: `Authentication error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
  },

  // TODO
  refreshToken: () => {}

};