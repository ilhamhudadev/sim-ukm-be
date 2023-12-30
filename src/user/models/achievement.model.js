const pool = require('../databases/mysql.db');

class AchievementModel {

    static async createAchievement(user_id, achievement_date, achievement_title, achievement_details,achievement_location, documentation) {
        const sql = `INSERT INTO achievement 
            (id, user_id, achievement_date, achievement_title, achievement_details, achievement_location, documentation) 
            VALUES 
            (UUID(), "${user_id}", "${achievement_date}", "${achievement_title}", "${achievement_details}", "${achievement_location}", "${documentation}")`;
        await pool.execute(sql);
    }

    static async findAchievementById(id) {
        const sql = `SELECT * FROM achievement WHERE id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByUserId(userId) {
        const sql = `SELECT achievement.*, organization_profile.organization_name, organization_profile.short_name
        FROM achievement
        JOIN organization_profile ON achievement.user_id = organization_profile.id
        WHERE achievement.user_id = "${userId}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByAll() {
        const sql = `SELECT achievement.*, organization_profile.organization_name, organization_profile.short_name
        FROM achievement
        JOIN organization_profile ON achievement.user_id = organization_profile.id`;
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateAchievement(id, user_id, achievement_date, achievement_title, achievement_details,achievement_location, documentation) {
        const sql = `UPDATE achievement
            SET 
            user_id = "${user_id}",
            achievement_date = "${achievement_date}",
            achievement_title = "${achievement_title}",
            achievement_details = "${achievement_details}",
            achievement_location = "${achievement_location}",
            documentation = "${documentation}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteAchievement(id) {
        const sql = `DELETE FROM achievement WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = AchievementModel;
