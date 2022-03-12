class DB {
    constructor(data) {
        if (DB.exists) {
            return DB.instance;
        }
        DB.exists = true;
        DB.instance = this;

        this.data = data;
    }
}

const mongo = new DB("MongoDB");
const mysql = new DB("MySQL");
console.log(mongo.data);
console.log(mysql.data);
