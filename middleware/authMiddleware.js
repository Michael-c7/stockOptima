import { 
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from "../errors/customError.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) throw new UnauthenticatedError('authentication invalid');
  
    try {
      const { userId, role } = verifyJWT(token);
      const demoUser = userId === "650f7b980e0d08a4085eaac2"
      req.user = { userId, role, demoUser};
      next();
    } catch (error) {
      throw new UnauthenticatedError('authentication invalid');
    }
  };



  export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
      if(!roles.includes(req.user.role)) {
        throw new UnauthorizedError("unauthorized to access this route")
      }
      console.log(roles)
      next()
    } 
  }



  export const checkForDemoUser = (req, res) => {
    if(req.user.demoUser) throw new BadRequestError("Demo user. Read only")
    next()
  }