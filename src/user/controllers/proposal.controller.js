// Assuming you have a model for proposal, e.g., ProposalModel.js
const ProposalModel = require('../models/proposal.model');

const getProposalAll = async (req, res) => {
    try {
        const proposals = await ProposalModel.findByAll();
        console.log(proposals);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all proposals.',
            data: proposals,
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

const getProposalById = async (req, res) => {
    const id = req.params.id;
    try {
        const proposal = await ProposalModel.findByUserId(id);
        console.log(proposal);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved the proposal.',
            data: proposal,
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

const addProposal = async (req, res) => {
    const { user_id, date, title, location, description, documentation } = req.body;

    try {
        await ProposalModel.createProposal(user_id, date, title, location, description, documentation );
        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created a proposal.',
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

const updateProposal = async (req, res) => {
    const { id, user_id, date, title, location, description, documentation } = req.body;

    try {
        await ProposalModel.updateProposal( id, user_id, date, title, location, description, documentation );
        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated a proposal.',
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

const deleteProposal = async (req, res) => {
    const id = req.body.id;
    try {
        await ProposalModel.deleteProposal(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted a proposal.',
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
    getProposalAll,
    addProposal,
    updateProposal,
    deleteProposal,
    getProposalById,
};
