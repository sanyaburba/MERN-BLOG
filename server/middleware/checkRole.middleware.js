import jwt from "jsonwebtoken";

export default function checkRole(role) {
    return function (req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const isCustomAuth = token.length < 500;

            let decodedData;

            if (token && isCustomAuth) {
                decodedData = jwt.verify(token, process.env.SECRET_KEY);
                if (decodedData.role !== role) {
                    return res.status(403).json({message: 'No access'})
                }

                req.userId = decodedData?.id;
            } else {
                decodedData = jwt.decode(token);

                req.userId = decodedData?.sub; // id to differentiate every single google user
            }

            next();
        } catch (e) {
            throw new Error(e.message);
        }
    };
}
