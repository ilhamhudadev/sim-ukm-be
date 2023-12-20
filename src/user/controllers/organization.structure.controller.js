// Assuming you have a model for organization_structure, e.g., OrganizationStructureModel.js
const OrganizationStructureModel = require('../models/organization.structure.model');

const getOrganizationStructureAll = async (req, res) => {
    try {
        const structures = await OrganizationStructureModel.findByAll();
        console.log(structures);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all organization structures.',
            data: structures,
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

const getOrganizationStructureById = async (req, res) => {
    const id = req.params.id;
    try {
        const structure = await OrganizationStructureModel.findByUserId(id);
        console.log(structure);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved the organization structure.',
            data: structure,
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

const addOrganizationStructure = async (req, res) => {
    const {user_id, management_year, adviser, president, vice_president, member } = req.body;

    try {
        await OrganizationStructureModel.createOrganizationStructure(user_id, management_year, adviser, president, vice_president, member );
        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created an organization structure.',
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

const updateOrganizationStructure = async (req, res) => {
    const { id, user_id, management_year, adviser, president, vice_president, member } = req.body;

    try {
        await OrganizationStructureModel.updateOrganizationStructure( id, user_id, management_year, adviser, president, vice_president, member );
        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated an organization structure.',
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

const deleteOrganizationStructure = async (req, res) => {
    const id = req.body.id;
    try {
        await OrganizationStructureModel.deleteOrganizationStructure(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted an organization structure.',
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
    getOrganizationStructureAll,
    addOrganizationStructure,
    updateOrganizationStructure,
    deleteOrganizationStructure,
    getOrganizationStructureById
}
