import jwt from 'jsonwebtoken'
export const generateToken = (user) => {
    // BY USING SIGN METHOD WE CAN GENERATE A TOKEN
    // SECOND PARAMETER IS JSON WEB TOKEN SECRET IS LIKE A KEY TO ENCRYPT THE DATA AND GENERATE THE TOKEN
    // HENCE KEY IS A SECRET DATA HENCE PUT IN .ENV FILE 
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,

    }, process.env.JWT_SECRET || 'somethingsecret',
        { expiresIn: '30d' }
    )
}

// Defining a middleware for the user generation while placing order
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {

        // AUTHORIZATION FORMAT:Bearer xxxx
        //Hence taking from 7 til end

        const token = authorization.slice(7, authorization.length);
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {

                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    //decode will contain the data of the user
                    req.user = decode;
                    // Passing the properties to the next middleware
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};



