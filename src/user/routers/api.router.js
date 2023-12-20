const express = require('express');

const apiController = require('../controllers/api.controller');
const apiOrganizationController = require('../controllers/api.organization.profile.controller');
const apiAchievementController = require('../controllers/achievement.controller');
const apiEventController = require('../controllers/event.controller');
const apiProposalController = require('../controllers/proposal.controller');
const apiStructureController = require('../controllers/organization.structure.controller');
const apiVisiController = require('../controllers/vision.mission.controller');
const apiReportController = require('../controllers/responsibility.report.controller');
const apiDecisionController = require('../controllers/decision.letter.controller');

const router = express.Router();

// Endpoint for getting all the records
// router.get('/user/', apiController.getUsers);
// router.get('/user/:id', apiController.getUsersById);

// Organization
router.get('/organization/', apiOrganizationController.getOrganizationAll);
router.get('/organization/:id', apiOrganizationController.getOrganizationById);
router.post('/organization/new', apiOrganizationController.addUser);
router.post('/organization/update', apiOrganizationController.updateUser);
router.post('/organization/delete', apiOrganizationController.deleteUser);
// router.post('/organization/keyword', apiOrganizationController.getOrganizationByKeyword);

// Achievement
router.get('/achievement/', apiAchievementController.getAchievementAll);
router.get('/achievement/:id', apiAchievementController.getAchievementById);
router.post('/achievement/new', apiAchievementController.addAchievement);
router.post('/achievement/update', apiAchievementController.updateAchievement);
router.post('/achievement/delete', apiAchievementController.deleteAchievement);
// router.post('/achievement/keyword', apiAchievementController.getOrganizationByKeyword);

// Event
router.get('/decision/', apiDecisionController.getDecisionLetterAll);
router.get('/decision/:id', apiDecisionController.getDecisionLetterById);
router.post('/decision/new', apiDecisionController.addDecisionLetter);
router.post('/decision/update', apiDecisionController.updateDecisionLetter);
router.post('/decision/delete', apiDecisionController.deleteDecisionLetter);
// router.post('/decision/keyword', apiOrganizationController.getOrganizationByKeyword);

// Proposal
router.get('/proposal/', apiProposalController.getProposalAll);
router.get('/proposal/:id', apiProposalController.getProposalById);
router.post('/proposal/new', apiProposalController.addProposal);
router.post('/proposal/update', apiProposalController.updateProposal);
router.post('/proposal/delete', apiProposalController.deleteProposal);
// router.post('/proposal/keyword', apiProposalController.getOrganizationByKeyword);

// structure
router.get('/structure/', apiStructureController.getOrganizationStructureAll);
router.get('/structure/:id', apiStructureController.getOrganizationStructureById);
router.post('/structure/new', apiStructureController.addOrganizationStructure);
router.post('/structure/update', apiStructureController.updateOrganizationStructure);
router.post('/structure/delete', apiStructureController.deleteOrganizationStructure);
// router.post('/structure/keyword', apiStructureController.getOrganizationByKeyword);

// Visi Misi
router.get('/visi/', apiVisiController.getVisionMissionAll);
router.get('/visi/:id', apiVisiController.getVisionMissionById);
router.post('/visi/new', apiVisiController.addVisionMission);
router.post('/visi/update', apiVisiController.updateVisionMission);
router.post('/visi/delete', apiVisiController.deleteVisionMission);
// router.post('/visi/keyword', apiVisiController.getOrganizationByKeyword);

// Responsibility report
router.get('/report/', apiReportController.getResponsibilityReportAll);
router.get('/report/:id', apiReportController.getResponsibilityReportById);
router.post('/report/new', apiReportController.addResponsibilityReport);
router.post('/report/update', apiReportController.updateResponsibilityReport);
router.post('/report/delete', apiReportController.deleteResponsibilityReport);
// router.post('/report/keyword', apiReportController.getOrganizationByKeyword);

// Event 
router.get('/event/', apiEventController.getEventAll);
router.get('/event/:id', apiEventController.getEventById);
router.post('/event/new', apiEventController.addEvent);
router.post('/event/update', apiEventController.updateEvent);
router.post('/event/delete', apiEventController.deleteEvent);
// router.post('/event/keyword', apiEventController.getOrganizationByKeyword);

module.exports = router;
