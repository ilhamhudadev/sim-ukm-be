const OrganizationProfileModel = require('../models/organization.profile.model');

const getOrganizationAll= async (req, res) => {
    try {
        const users = await OrganizationProfileModel.findByAll();
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all the users.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getOrganizationById= async (req, res) => {
    const id = req.params.id;
    try {
        const users = await OrganizationProfileModel.findOrganizationProfileById(id);
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all the users.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const getOrganizationByKeyword= async (req, res) => {
    const id = req.body.id;
    try {
        const users = await OrganizationProfileModel.findOrganizationProfileByKeyword(id);
        console.log(users);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all the users.',
            data: users,
        });
    } catch (err) {
        res.status(500).send({ statusCode: 500, statusMessage: 'Internal Server Error', message: null, data: null });
    }
};

const addUser = async (req, res) => {
    const {organizationName, password, shortName, contactNumber, email, ig, youtube, twitter, username} = req.body;
 
    try {
        await OrganizationProfileModel.createOrganizationProfile(organizationName, password, shortName, contactNumber, email, ig, youtube, twitter, username);
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
    const {id, organizationName, contactNumber, email, ig, youtube, twitter, shortName, username, password} = req.body;
  
    try {
        await OrganizationProfileModel.updateOrganizationProfile(id, organizationName, contactNumber, email, ig, youtube, twitter, shortName, username, password);
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

const deleteUser = async (req, res) => {
    // const id = req.params.id;
    const id = req.body.id;
    try {
        await OrganizationProfileModel.deleteOrganizationProfile(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted a user.',
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

module.exports = {
    getOrganizationAll,
    addUser,
    updateUser,
    deleteUser,
    getOrganizationById,
    getOrganizationByKeyword
};
