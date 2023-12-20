// Assuming you have a model for vision_mission, e.g., visionMissionModel.js
const VisionMissionModel = require('../models/vision.mission.model');

const getVisionMissionAll = async (req, res) => {
    try {
        const visionMissions = await VisionMissionModel.findByAll();
        console.log(visionMissions);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all vision missions.',
            data: visionMissions,
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

const getVisionMissionById = async (req, res) => {
    const id = req.params.id;
    try {
        const visionMission = await VisionMissionModel.findByUserId(id);
        console.log(visionMission);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved the vision mission.',
            data: visionMission,
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

const addVisionMission = async (req, res) => {
    const { user_id, vision, mission } = req.body;

    try {
        await VisionMissionModel.createVisionMission(user_id, vision, mission );
        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created a vision mission.',
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

const updateVisionMission = async (req, res) => {
    const { id, user_id, vision, mission } = req.body;

    try {
        await VisionMissionModel.updateVisionMission(id, user_id, vision, mission);
        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated a vision mission.',
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

const deleteVisionMission = async (req, res) => {
    const id = req.body.id;
    try {
        await VisionMissionModel.deleteVisionMission(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted a vision mission.',
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
    getVisionMissionAll,
    addVisionMission,
    updateVisionMission,
    deleteVisionMission,
    getVisionMissionById,
};
