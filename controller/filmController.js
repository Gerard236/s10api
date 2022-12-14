const userService = require(`../services/userService`);

module.exports.findById = async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
        const userId = req.params.id;
        const responseFromService = await userService.findById(userId);
        if (responseFromService.status) {
            if (responseFromService.result) {
                responseObj.body = responseFromService.result;
                responseObj.message = `User fetched successfully`;
                responseObj.status = 200;
            } else {
                responseObj.message = `User not found`;
                responseObj.status = 404;
            }
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-userController-findById: ${error}`);
    }
return res.status(responseObj.status).send(responseObj);
};