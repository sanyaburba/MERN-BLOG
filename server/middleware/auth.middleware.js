import jwt from 'jsonwebtoken';

const auth = async ( req, res, next) => {
    try {
        const token =  req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'alexander');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; // id to differentiate every single google user
        }

        next();
    } catch (e) {
        console.log(e)
    }
}

export default auth;