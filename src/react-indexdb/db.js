import Dexie from "dexie";

const db = new Dexie("SampleDbName");
db.version(1).stores({ collectionName: "++id,un_id" });

export default db;
