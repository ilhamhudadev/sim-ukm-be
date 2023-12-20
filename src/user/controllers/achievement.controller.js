// Assuming you have a model for achievement, e.g., AchievementModel.js
const AchievementModel = require('../models/achievement.model');

const getAchievementAll = async (req, res) => {
    try {
        const achievements = await AchievementModel.findByAll();
        console.log(achievements);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all achievements.',
            data: achievements,
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

const getAchievementById = async (req, res) => {
    const id = req.params.id;
    try {
        const achievement = await AchievementModel.findByUserId(id);
        console.log(achievement);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved the achievement.',
            data: achievement,
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

const addAchievement = async (req, res) => {
    const { user_id, achievement_date, achievement_title, achievement_details,achievement_location, documentation } = req.body;

    try {
        await AchievementModel.createAchievement(user_id, achievement_date, achievement_title, achievement_details, achievement_location, documentation );
        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created an achievement.',
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

const updateAchievement = async (req, res) => {
    const { id, user_id, achievement_date, achievement_title, achievement_details,achievement_location, documentation} = req.body;

    try {
        await AchievementModel.updateAchievement(id, user_id, achievement_date, achievement_title, achievement_details,achievement_location, documentation );
        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated an achievement.',
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

const deleteAchievement = async (req, res) => {
    const id = req.body.id;
    try {
        await AchievementModel.deleteAchievement(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted an achievement.',
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
    getAchievementAll,
    addAchievement,
    updateAchievement,
    deleteAchievement,
    getAchievementById,
};