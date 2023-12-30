const pool = require('../databases/mysql.db');

class ProposalModel {

    static async createProposal(userId, date, title, location, description, documentation) {
        const sql = `INSERT INTO proposal 
            (id, user_id, date, title, location, description, documentation) 
            VALUES 
            (UUID(), "${userId}", "${date}", "${title}", "${location}", "${description}", "${documentation}")`;
        await pool.execute(sql);
    }

    static async findProposalById(id) {
        const sql = `SELECT * FROM proposal WHERE id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByUserId(userId) {
        const sql = `SELECT proposal.*, organization_profile.organization_name, organization_profile.short_name
        FROM proposal
        JOIN organization_profile ON proposal.user_id = organization_profile.id
        WHERE proposal.user_id = "${userId}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByAll() {
        const sql = `SELECT proposal.*, organization_profile.organization_name, organization_profile.short_name
        FROM proposal
        JOIN organization_profile ON proposal.user_id = organization_profile.id`;
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateProposal(id, newUserId, newDate, newTitle, newLocation, newdescription, newDocumentation) {
        const sql = `UPDATE proposal
            SET 
            user_id = "${newUserId}",
            date = "${newDate}",
            title = "${newTitle}",
            location = "${newLocation}",
            description = "${newdescription}",
            documentation = "${newDocumentation}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteProposal(id) {
        const sql = `DELETE FROM proposal WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = ProposalModel;
