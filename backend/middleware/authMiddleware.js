const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // Replace 'config' with the file containing your secret key

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization || req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Forbidden: Invalid token.' });
  }
};

module.exports = authMiddleware;
