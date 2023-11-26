const pool = require('../databases/mysql.db');

class User {
    constructor(firstName, lastName, age = 0) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (!firstName) throw new Error('Invalid first name value.');

        firstName = firstName.trim();
        if (firstName === '') throw new Error('Invalid first name value.');

        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        if (!lastName) throw new Error('Invalid last name value.');

        lastName = lastName.trim();
        if (lastName === '') throw new Error('Invalid last name value.');

        this._lastName = lastName;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (age < 0) throw new Error('Invalid age value.');

        this._age = age;
    }

    async save() {
        const sql = `INSERT INTO users (id, first_name, last_name, age) VALUES (UUID(), "${this.firstName}", "${this.lastName}", ${this.age})`;
        await pool.execute(sql);
    }

    static async find() {
        const sql = `SELECT * FROM user`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    static async findById(id) {
        const sql = `SELECT * FROM user WHERE user_id = "${id}"`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    static async findUkm() {
        const sql = `SELECT * FROM organization_profile`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    static async findUkmById(id) {
        const sql = `SELECT * FROM organization_profile WHERE organization_name LIKE  "${id}"`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    static async findAchievement() {
        const sql = `SELECT * FROM achievement`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    static async findAchievementById(id) {
        const sql = `SELECT * FROM achievement WHERE user_id = "${id}"`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    static async findStructure() {
        const sql = `SELECT * FROM organization_structure`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    static async findStructureById(id) {
        const sql = `SELECT * FROM organization_structure WHERE user_id = "${id}"`;
        const [rows] = await pool.execute(sql);

        return rows;
    }

    // static async findMatkulAll() {
    //     const sql = 'SELECT * FROM matakuliah2021 LIMIT 20 OFFSET 0;';
    //     return pool.execute(sql);
    // }
    // static async findMatkulById(nama_matkul) {
    //     const sql = `SELECT * FROM matakuliah2021 WHERE Matkul LIKE "${nama_matkul}"`;
    //     return pool.execute(sql);
    // }

    // Auth
    // static async findProfileStudent(id) {
    //     const sql = `SELECT * FROM mahasiswas WHERE npm = "${id}"`;
    //     return pool.execute(sql);
    // }

    // static async findProfileLecturer(id) {
    //     const sql = `SELECT * FROM dosens WHERE nik = "${id}"`;
    //     return pool.execute(sql);
    // }

    // static async findProfileAcademic(id) {
    //     const sql = `SELECT * FROM data_mata_kuliah WHERE mata_kuliah LIKE "${id}"`;
    //     return pool.execute(sql);
    // }

    // static async findNilaiTranskriptbyNPM(id) {
    //     const sql = `SELECT
    //     n.tahun,
    //     n.npm,
    //     n.kelas,
    //     n.kodematkul,
    //     n.partisipasi,
    //     n.tugas1,
    //     n.nilaiuts,
    //     n.tugas2,
    //     n.nilaiuas,
    //     n.nilaiakhir,
    //     n.nilai_index,
    //     n.smt,
    //     m.matkul,
    //     m.sks
    //   FROM nilais n
    //   JOIN matakuliah2021 m ON n.kodematkul = m.kodematkul
    //   WHERE n.npm = "${id}"`;
    //     return pool.execute(sql);
    // }
    // static async findNilaiKHSbyNPM(id, smt) {
    //     const sql = `SELECT
    //     n.tahun,
    //     n.npm,
    //     n.kelas,
    //     n.kodematkul,
    //     n.partisipasi,
    //     n.tugas1,
    //     n.nilaiuts,
    //     n.tugas2,
    //     n.nilaiuas,
    //     n.nilaiakhir,
    //     n.nilai_index,
    //     n.smt,
    //     m.matkul,
    //     m.sks
    //   FROM nilais n
    //   JOIN matakuliah2021 m ON n.kodematkul = m.kodematkul
    //   WHERE n.npm = "${id}" AND n.smt = "${smt}"`;
    //     return pool.execute(sql);
    // }
    // static async findNilaiKHSbyKelas(id) {
    //     const sql = `SELECT
    //     n.tahun,
    //     n.npm,
    //     mhs.nama AS nama_mahasiswa,
    //     n.kelas,
    //     n.kodematkul,
    //     n.partisipasi,
    //     n.tugas1,
    //     n.nilaiuts,
    //     n.tugas2,
    //     n.nilaiuas,
    //     n.nilaiakhir,
    //     n.nilai_index,
    //     n.smt,
    //     m.matkul,
    //     m.sks
    // FROM nilais n
    // JOIN matakuliah2021 m ON n.kodematkul = m.kodematkul
    // JOIN mahasiswas mhs ON n.npm = mhs.npm
    // WHERE n.kodematkul = "${id}"`;
    //     return pool.execute(sql);
    // }
}

module.exports = User;
