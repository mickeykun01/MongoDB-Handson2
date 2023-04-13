const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);


const findAllEmployeeInDB = async ()=>{
    const database = client.db("Human_Resources");
    const collection = database.collection("Employees");
    await client.connect();
    const dbResponse = await collection.find().toArray();
    await client.close();
    return dbResponse;
}

const findSalaryAccessInDB = async (query)=>{
    const database = client.db("Human_Resources");
    const collection = database.collection("Employees");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse;
}

const findEmployeeExperienceInDB = async (query)=>{
    const database = client.db("Human_Resources");
    const collection = database.collection("Employees");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse;
}

const findEmployeeExperinceAndGraduateInDb = async (query)=>{
    const database = client.db("Human_Resources");
    const collection = database.collection("Employees");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    await client.close();
    return dbResponse;
}

const UpdateSalaryInDB = async (filteredCond , value)=>{
    const database = client.db("Human_Resources");
    const collection = database.collection("Employees");
    await client.connect();
    const dbResponse = await collection.updateOne(filteredCond , value);
    await client.close();
    return dbResponse;
}

const deleteInDB = async (filteredCond)=>{
    const database = client.db("Human_Resources");
    const collection = database.collection("Employees");
    await client.connect();
    const dbResponse = await collection.deleteMany(filteredCond);
    await client.close();
    return dbResponse;
}
















module.exports = {
    findAllEmployeeInDB,
    findSalaryAccessInDB,
    findEmployeeExperienceInDB,
    findEmployeeExperinceAndGraduateInDb,
    UpdateSalaryInDB,
    deleteInDB,
}