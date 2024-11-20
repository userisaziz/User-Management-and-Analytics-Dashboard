import jwt from 'jsonwebtoken';

// Middleware to authenticate the token
export const authenticateToken = (req, res, next) => {
   const token = req.header('Authorization')?.split(' ')[1];
   if (!token) return res.status(401).json({ message: 'Access denieds' });

   try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      console.log('Authenticated user:', req.user); // Debugging log
      next();
   } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
   }
};

// Middleware to authorize roles
export const authorizeRoles = (...roles) => {
   return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
         console.log(`Access denied for role: ${req.user.role}`); // Debugging log
         return res.status(403).json({ message: 'Access deniedw' });
      }
      next();
   };
};