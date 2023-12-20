const pool = require('../databases/mysql.db');

class VisionMissionModel {

    static async createVisionMission(userId, vision, mission) {
        const sql = `INSERT INTO vision_mission 
            (id, user_id, vision, mission) 
            VALUES 
            (UUID(), "${userId}", "${vision}", "${mission}")`;
        await pool.execute(sql);
    }

    static async findVisionMissionById(id) {
        const sql = `SELECT * FROM vision_mission WHERE id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByUserId(userId) {
        const sql = `SELECT * FROM vision_mission WHERE user_id = "${userId}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByAll() {
        const sql = 'SELECT * FROM vision_mission';
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateVisionMission(id, newUserId, newVision, newMission) {
        const sql = `UPDATE vision_mission
            SET 
            user_id = "${newUserId}",
            vision = "${newVision}",
            mission = "${newMission}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteVisionMission(id) {
        const sql = `DELETE FROM vision_mission WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = VisionMissionModel;
