const pool = require('../databases/mysql.db');

class ResponsibilityReportModel {

    static async createResponsibilityReport(userId, reportDate,report_title, responsibleParty, reportContent, attachment) {
        const sql = `INSERT INTO responsibility_report 
            (id, user_id, report_date, report_title, responsible_party, report_content, attachment) 
            VALUES 
            (UUID(), "${userId}", "${reportDate}", "${report_title}", "${responsibleParty}", "${reportContent}", "${attachment}")`;
        await pool.execute(sql);
    }

    static async findResponsibilityReportById(id) {
        const sql = `SELECT * FROM responsibility_report WHERE id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByUserId(userId) {
        const sql = `SELECT responsibility_report.*, organization_profile.organization_name, organization_profile.short_name
        FROM responsibility_report
        JOIN organization_profile ON responsibility_report.user_id = organization_profile.id
        WHERE responsibility_report.user_id = "${userId}"`;
        const [result] = await pool.execute(sql);
        return result;
    }


    static async findByAll() {
        const sql = `SELECT responsibility_report.*, organization_profile.organization_name, organization_profile.short_name
        FROM responsibility_report
        JOIN organization_profile ON responsibility_report.user_id = organization_profile.id`;
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateResponsibilityReport(id, newUserId, newReportDate, newReportTitle ,newResponsibleParty, newReportContent, newAttachment) {
        const sql = `UPDATE responsibility_report
            SET 
            user_id = "${newUserId}",
            report_date = "${newReportDate}",
            report_title = "${newReportTitle}",
            responsible_party = "${newResponsibleParty}",
            report_content = "${newReportContent}",
            attachment = "${newAttachment}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteResponsibilityReport(id) {
        const sql = `DELETE FROM responsibility_report WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = ResponsibilityReportModel;
