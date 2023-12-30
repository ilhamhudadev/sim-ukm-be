const pool = require('../databases/mysql.db');

class DecisionLetterModel {

    static async createDecisionLetter(userId,decision_title, decisionNumber, decisionDate, letterAttachment) {
        const sql = `INSERT INTO decision_letter 
            (id, user_id, decision_title, decision_number, decision_date, letter_attachment) 
            VALUES 
            (UUID(), "${userId}","${decision_title}",  "${decisionNumber}", "${decisionDate}", "${letterAttachment}")`;
        await pool.execute(sql);
    }

    static async findDecisionLetterById(id) {
        const sql = `SELECT * FROM decision_letter WHERE id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByUserId(userId) {
        const sql = `SELECT decision_letter.*, organization_profile.organization_name, organization_profile.short_name
        FROM decision_letter
        JOIN organization_profile ON decision_letter.user_id = organization_profile.id
        WHERE decision_letter.user_id = "${userId}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByAll() {
        const sql = `SELECT decision_letter.*, organization_profile.organization_name, organization_profile.short_name
        FROM decision_letter
        JOIN organization_profile ON decision_letter.user_id = organization_profile.id`;
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateDecisionLetter(id, newUserId, newDecisionNumber, newDecisionTitle, newDecisionDate, newLetterAttachment) {
        const sql = `UPDATE decision_letter
            SET 
            user_id = "${newUserId}",
            decision_number = "${newDecisionNumber}",
            decision_title = "${newDecisionTitle}",
            decision_date = "${newDecisionDate}",
            letter_attachment = "${newLetterAttachment}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteDecisionLetter(id) {
        const sql = `DELETE FROM decision_letter WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = DecisionLetterModel;
