// Assuming you have a model for decision_letter, e.g., DecisionLetterModel.js
const DecisionLetterModel = require('../models/decision.letter.model');

const getDecisionLetterAll = async (req, res) => {
    try {
        const decisionLetters = await DecisionLetterModel.findByAll();
        console.log(decisionLetters);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all decision letters.',
            data: decisionLetters,
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

const getDecisionLetterById = async (req, res) => {
    const id = req.params.id;
    try {
        const decisionLetter = await DecisionLetterModel.findByUserId(id);
        console.log(decisionLetter);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved the decision letter.',
            data: decisionLetter,
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

const addDecisionLetter = async (req, res) => {
    const { user_id, decision_title,  decision_number, decision_date, letter_attachment } = req.body;

    try {
        await DecisionLetterModel.createDecisionLetter( user_id, decision_title, decision_number, decision_date, letter_attachment );
        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created a decision letter.',
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

const updateDecisionLetter = async (req, res) => {
    const { id, user_id, decision_number, decision_title, decision_date, letter_attachment } = req.body;

    try {
        await DecisionLetterModel.updateDecisionLetter(id, user_id, decision_number, decision_title,  decision_date, letter_attachment );
        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated a decision letter.',
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

const deleteDecisionLetter = async (req, res) => {
    const id = req.body.id;
    try {
        await DecisionLetterModel.deleteDecisionLetter(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted a decision letter.',
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
    getDecisionLetterAll,
    addDecisionLetter,
    updateDecisionLetter,
    deleteDecisionLetter,
    getDecisionLetterById,
};
