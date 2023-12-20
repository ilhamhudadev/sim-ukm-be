const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getUsersById = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findById(id);
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getUkm = async (req, res) => {
    try {
        const users = await User.findUkm();
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getUkmById = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findUkmById(id);
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getAchievement = async (req, res) => {
    try {
        const users = await User.findAchievement();
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getAchievementById = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findAchievementById(id);
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getStructure = async (req, res) => {
    try {
        const users = await User.findStructure();
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getStructureById = async (req, res) => {
    const id = req.params.id;
    try {
        const users = await User.findStructureById(id);
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};
const addUser = async (req, res) => {
    const { firstName, lastName, age } = req.body;
    if (!firstName || !firstName.trim() || !lastName || !lastName.trim() || age == null || age < 0)
        return res.status(400).send({ statusCode: 400, statusMessage: 'Bad Request', message: null, data: null });

    try {
        const user = new User(firstName, lastName, age);
        await user.save();

        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created a user.',
            data: null,
        });
    } catch (err) {
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: null,
            data: null,
        });
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, age } = req.body;
    if (!firstName || !firstName.trim() || !lastName || !lastName.trim() || age == null || age < 0)
        return res.status(400).send({ statusCode: 400, statusMessage: 'Bad Request', message: null, data: null });

    try {
        await User.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated a user.',
            data: null,
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: null,
            data: null,
        });
    }
};

// const getMatkullAll = async (req, res) => {
//     try {
//         const users = await User.findMatkulAll();
//         console.log(users);
//         res.send({
//             statusCode: 200,
//             statusMessage: 'Ok',
//             message: 'Successfully retrieved findMatkulAll.',
//             data: users[0],
//         });
//     } catch (err) {
//         res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
//     }
// };

// const getMatkulById = async (req, res) => {
//     const id = req.params.id;
//     console.log('req params', id);
//     try {
//         const users = await User.findMatkulById(id);
//         console.log(users);
//         res.send({
//             statusCode: 200,
//             statusMessage: 'Ok',
//             message: 'Successfully retrieved KHS.',
//             data: users[0],
//         });
//     } catch (err) {
//         res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
//     }
// };

// const getProfileLectureById = async (req, res) => {
//     const id = req.params.id;
//     console.log('req params', id);
//     try {
//         const users = await User.findProfileLecturer(id);
//         console.log(users);
//         res.send({
//             statusCode: 200,
//             statusMessage: 'Ok',
//             message: 'Successfully retrieved KHS.',
//             data: users[0],
//         });
//     } catch (err) {
//         res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
//     }
// };

// const getProfileStudentsById = async (req, res) => {
//     const id = req.params.id;
//     console.log('req params', id);
//     try {
//         const users = await User.findProfileStudent(id);
//         console.log(users);
//         res.send({
//             statusCode: 200,
//             statusMessage: 'Ok',
//             message: 'Successfully retrieved KHS.',
//             data: users[0],
//         });
//     } catch (err) {
//         res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
//     }
// };

// const getTranskriptKHSbyNPM = async (req, res) => {
//     const id = req.params.id;
//     console.log('req params', id);
//     try {
//         const users = await User.findNilaiTranskriptbyNPM(id);
//         console.log(users);
//         res.send({
//             statusCode: 200,
//             statusMessage: 'Ok',
//             message: 'Successfully retrieved KHS.',
//             data: users[0],
//         });
//     } catch (err) {
//         res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
//     }
// };

// const getNilaiKHSbyNPM = async (req, res) => {
//     const id = req.params.id;
//     const smt = req.params.smt;
//     console.log('req params', id);
//     try {
//         const users = await User.findNilaiKHSbyNPM(id, smt);
//         console.log(users);
//         res.send({
//             statusCode: 200,
//             statusMessage: 'Ok',
//             message: 'Successfully retrieved KHS.',
//             data: users[0],
//         });
//     } catch (err) {
//         res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
//     }
// };
// const getNilaiKHSbyKelas = async (req, res) => {
//     const id = req.params.id;
//     console.log('req params', id);
//     try {
//         const users = await User.findNilaiKHSbyKelas(id);
//         console.log(users);
//         res.send({
//             statusCode: 200,
//             statusMessage: 'Ok',
//             message: 'Successfully retrieved KHS.',
//             data: users[0],
//         });
//     } catch (err) {
//         res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
//     }
// };

module.exports = {
    getUsers,
    getUsersById,
    getAchievementById,
    getAchievement,
    getStructureById,
    getStructure,
    getUkmById,
    getUkm,
    addUser,
};
