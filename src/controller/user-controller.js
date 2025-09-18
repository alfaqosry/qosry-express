import userService from "../service/user-service.js"


const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }


}


const login = async (req, res, next) => {

    try {
        const result = await userService.login(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);

    }
}

export const profile = async (req, res) => {

    res.json({ data: req.user });
};

export default {
    register,
    login
}