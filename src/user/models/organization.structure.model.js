const pool = require('../databases/mysql.db');

class OrganizationStructureModel {

    static async createOrganizationStructure(userId, managementYear, adviser, president, vicePresident, member) {
        const sql = `INSERT INTO organization_structure 
            (id, user_id, management_year, adviser, president, vice_president, member) 
            VALUES 
            (UUID(), "${userId}", "${managementYear}", "${adviser}", "${president}", "${vicePresident}", "${member}")`;
        await pool.execute(sql);
    }

    static async findOrganizationStructureById(id) {
        const sql = `SELECT * FROM organization_structure WHERE id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByUserId(userId) {
        const sql = `SELECT * FROM organization_structure WHERE user_id = "${userId}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByAll() {
        const sql = 'SELECT * FROM organization_structure';
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateOrganizationStructure(id, newUserId, newManagementYear, newAdviser, newPresident, newVicePresident, newMember) {
        const sql = `UPDATE organization_structure
            SET 
            user_id = "${newUserId}",
            management_year = "${newManagementYear}",
            adviser = "${newAdviser}",
            president = "${newPresident}",
            vice_president = "${newVicePresident}",
            member = "${newMember}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteOrganizationStructure(id) {
        const sql = `DELETE FROM organization_structure WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = OrganizationStructureModel;
