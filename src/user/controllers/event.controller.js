// Assuming you have a model for event, e.g., EventModel.js
const EventModel = require('../models/event.model');

const getEventAll = async (req, res) => {
    try {
        const events = await EventModel.findByAll();
        console.log(events);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all events.',
            data: events,
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

const getEventById = async (req, res) => {
    const id = req.params.id;
    try {
        const event = await EventModel.findByUserId(id);
        console.log(event);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved the event.',
            data: event,
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

const addEvent = async (req, res) => {
    const {user_id, event_date, event_name, event_description, event_attachment } = req.body;

    try {
        await EventModel.createEvent(user_id, event_date, event_name, event_description, event_attachment);
        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created an event.',
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

const updateEvent = async (req, res) => {
    const { id, user_id, event_date, event_name, event_description, event_attachment } = req.body;

    try {
        await EventModel.updateEvent( id, user_id, event_date, event_name, event_description, event_attachment );
        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated an event.',
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

const deleteEvent = async (req, res) => {
    const id = req.body.id;
    try {
        await EventModel.deleteEvent(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted an event.',
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
    getEventAll,
    addEvent,
    updateEvent,
    deleteEvent,
    getEventById,
};
