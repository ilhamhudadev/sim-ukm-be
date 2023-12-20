const pool = require('../databases/mysql.db');

class OrganizationProfileModel {

    static async createOrganizationProfile(organizationName, password, history, shortName, contactNumber, email, instagram, youtube, twitter, username) {
        console.log("data bro", organizationName);
        const sql = `INSERT INTO organization_profile 
            (id, organization_name, short_name, history, contact_number, email, instagram, youtube, twitter, username, password) 
            VALUES 
            (UUID(), "${organizationName}", "${shortName}", "${history}", "${contactNumber}", "${email}", "${instagram}", "${youtube}", "${twitter}", "${username}", "${password}")`;
        await pool.execute(sql);
    }

    static async findOrganizationProfileById(id) {
        const sql = `SELECT * FROM organization_profile WHERE id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findOrganizationProfileByKeyword(id) {
        const sql = `SELECT * FROM organization_profile WHERE organization_name LIKE "%${id}%"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByAll() {
        const sql = 'SELECT * FROM organization_profile';
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateOrganizationProfile(id, newOrganizationName, newContactNumber, newEmail, newInstagram, newYoutube, newTwitter, newShortName, newUsername, newPassword) {
           
        const sql = `UPDATE organization_profile
            SET 
            organization_name = "${newOrganizationName}",
            contact_number = "${newContactNumber}",
            email = "${newEmail}",
            instagram = "${newInstagram}",
            youtube = "${newYoutube}",
            twitter = "${newTwitter}",
            short_name = "${newShortName}",
            username = "${newUsername}",
            password = "${newPassword}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteOrganizationProfile(id) {
        console.log("organizationName delete", id);
        const sql = `DELETE FROM organization_profile WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = OrganizationProfileModel;
