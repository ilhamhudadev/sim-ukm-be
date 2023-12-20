// Assuming you have a model for responsibility_report, e.g., ResponsibilityReportModel.js
const ResponsibilityReportModel = require('../models/responsibility.report.model');

const getResponsibilityReportAll = async (req, res) => {
    try {
        const reports = await ResponsibilityReportModel.findByAll();
        console.log(reports);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved all responsibility reports.',
            data: reports,
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

const getResponsibilityReportById = async (req, res) => {
    const id = req.params.id;
    try {
        const report = await ResponsibilityReportModel.findByUserId(id);
        console.log(report);
        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully retrieved the responsibility report.',
            data: report,
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

const addResponsibilityReport = async (req, res) => {
    const { user_id, report_date, report_title, responsible_party, report_content, attachment } = req.body;

    try {
        await ResponsibilityReportModel.createResponsibilityReport( user_id, report_date, report_title, responsible_party, report_content, attachment );
        res.status(201).send({
            statusCode: 201,
            statusMessage: 'Created',
            message: 'Successfully created a responsibility report.',
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

const updateResponsibilityReport = async (req, res) => {
    const { id, user_id, report_date,report_title, responsible_party, report_content, attachment } = req.body;

    try {
        await ResponsibilityReportModel.updateResponsibilityReport( id, user_id, report_date,report_title, responsible_party, report_content, attachment );
        return res.status(202).send({
            statusCode: 202,
            statusMessage: 'Accepted',
            message: 'Successfully updated a responsibility report.',
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

const deleteResponsibilityReport = async (req, res) => {
    const id = req.body.id;
    try {
        await ResponsibilityReportModel.deleteResponsibilityReport(id);

        res.send({
            statusCode: 200,
            statusMessage: 'Ok',
            message: 'Successfully deleted a responsibility report.',
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
    getResponsibilityReportAll,
    addResponsibilityReport,
    updateResponsibilityReport,
    deleteResponsibilityReport,
    getResponsibilityReportById,
};
