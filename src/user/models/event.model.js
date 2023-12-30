const pool = require('../databases/mysql.db');

class EventModel {

    static async createEvent(userId, eventDate, eventName, eventDescription, eventAttachment) {
       console.log("insert to createEvent",eventName );
        const sql = `INSERT INTO event 
            (id, user_id, event_date, event_name, event_description, event_attachment) 
            VALUES 
            (UUID(), "${userId}", "${eventDate}", "${eventName}", "${eventDescription}", "${eventAttachment}")`;
        await pool.execute(sql);
    }

    static async findEventById(id) {
        const sql = `SELECT event.*, organization_profile.organization_name, organization_profile.short_name
        FROM event
        JOIN organization_profile ON event.user_id = organization_profile.id
        WHERE event.id = "${id}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByUserId(userId) {
        const sql = `SELECT event.*, organization_profile.organization_name, organization_profile.short_name
        FROM event
        JOIN organization_profile ON event.user_id = organization_profile.id
        WHERE event.user_id = "${userId}"`;
        const [result] = await pool.execute(sql);
        return result;
    }

    static async findByAll() {
        const sql = `SELECT event.*, organization_profile.organization_name, organization_profile.short_name
        FROM event
        JOIN organization_profile ON event.user_id = organization_profile.id`;
        const [rows, fields] = await pool.execute(sql);

        return rows;
    }

    static async updateEvent(id, newUserId, newEventDate, newEventName, newEventDescription, newEventAttachment) {
        const sql = `UPDATE event
            SET 
            user_id = "${newUserId}",
            event_date = "${newEventDate}",
            event_name = "${newEventName}",
            event_description = "${newEventDescription}",
            event_attachment = "${newEventAttachment}"
            WHERE id = "${id}"`;
        await pool.execute(sql);
    }

    static async deleteEvent(id) {
        const sql = `DELETE FROM event WHERE id = "${id}"`;
        await pool.execute(sql);
    }
}

module.exports = EventModel;
