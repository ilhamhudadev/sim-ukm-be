const express = require('express');

const apiController = require('../controllers/api.controller');

const router = express.Router();

// Endpoint for getting all the records
router.get('/user/', apiController.getUsers);
router.get('/user/:id', apiController.getUsersById);
router.get('/achievement/', apiController.getAchievement);
router.get('/achievement/:id', apiController.getAchievementById);
router.get('/achievement/', apiController.getStructure);
router.get('/achievement/:id', apiController.getStructureById);
// Endpoint for creating a new record
// router.post('/new', apiController.addUser);

// Endpoints for updating/deleting a record
// router.route('/:id').put(apiController.updateUser).delete(apiController.deleteUser);

// Endpoints for updating/deleting a record
// router.get('/:id', apiController.getUserById);
// router.get('/khs/:id', apiController.getKHSById);
// router.get('/khs/kelas/:id', apiController.getKHSByKelas);
// router.get('/matkul/', apiController.getMatkullAll);
// router.get('/matkul/keyword/:id', apiController.getMatkulById);
//API Profile Mahasiswa | Dosen| Akademik
// router.get('/user/:id', apiController.getUsers);
// router.get('/student/user/:id', apiController.getProfileStudentsById);
// router.get('/lecturer/user/:id', apiController.getProfileLectureById);
// //API KHS Mahasiswa
// router.get('/mahasiswa/nilai/khs/:smt/:id', apiController.getNilaiKHSbyNPM);
// //API KHS Mahasiswa - Akademik (Search, List, Print KHS)
// router.get('/akademik/nilai/khs/:id', apiController.getNilaiKHSbyNPM);
// //API Transkript Mahasiswa - Akademik (Search, List, Print KHS)
// router.get('/akademik/nilai/transkript/:id', apiController.getTranskriptKHSbyNPM);
// //API Nilai Kelas - Dosen (Search, List, Edit)
// router.get('/nilai/kelas/:id', apiController.getNilaiKHSbyKelas);
// router.get('/nilai/kelas/update/:id', apiController.getUsers);
// //API Nilai Kelas - Akademik (Search, List)
// //API Data Dosen
// router.get('/matakuliah/', apiController.getMatkullAll);
// router.get('/matakuliah/keyword/:id', apiController.getMatkulById);
// //API Auth
// router.get('/auth/login', apiController.getUsers);
// router.get('/auth/forgot/:id', apiController.getUsers);

module.exports = router;
