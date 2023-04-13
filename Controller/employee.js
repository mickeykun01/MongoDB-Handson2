const mongoClient = require('../Database/connection')

const findAllEmployeeInDB = async (req,res)=>{
    try {
        const result = await mongoClient.findAllEmployeeInDB();
        console.log('The result of the database is' , result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('something went wrong during operation..');
        res.status(500).send({message : 'something went wrong'})
    }
}

const findSalaryAccessInDB = async (req,res)=>{
    const query = {salary : {$gt : '30000'}}
    try {
        const result = await mongoClient.findSalaryAccessInDB(query);
        console.log('The result of the database is' , result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('something went wrong during operation..');
        res.status(500).send({message : 'something went wrong'})
    }
}

const findEmployeeExperienceInDB = async (req,res)=>{
    const query = {overallExp : {$gt : '2'}}
    try {
        const result = await mongoClient.findEmployeeExperienceInDB(query);
        console.log('The result of the database is' , result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('something went wrong during operation..');
        res.status(500).send({message : 'something went wrong'})
    }
}

const findEmployeeExperinceAndGraduateInDb = async (req,res)=>{
    const query = {$and: [{yearGrad : {$gt : '2015'}},{overallExp : {$gt : '1'}}]}
    try {
        const result = await mongoClient.findEmployeeExperinceAndGraduateInDb(query);
        console.log('The result of the database is' , result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('something went wrong during operation..');
        res.status(500).send({message : 'something went wrong'})
    }
}

const UpdateSalaryInDB = async (req,res)=>{
   const updataData = req.body;
   const filter = updataData.filter;
   const value = {$set : updataData.value}
   console.log(filter);
   console.log(value);
    try {
        const result = await mongoClient.UpdateSalaryInDB(filter , value);
        console.log('The result of the database is' , result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('something went wrong during operation..');
        res.status(500).send({message : 'something went wrong'})
    }
}

const deleteInDB = async (req,res)=>{
    const query = { lastCompany : 'Y'} ;
    try {
        const result = await mongoClient.deleteInDB(query);
        console.log('The result of the database is' , result);
        return res.status(200).send(result);
    } catch (error) {
        console.log('something went wrong during operation..');
        res.status(500).send({message : 'something went wrong'})
    }
}


module.exports = {
    findAllEmployeeInDB,
    findSalaryAccessInDB,
    findEmployeeExperienceInDB,
    findEmployeeExperinceAndGraduateInDb,
    UpdateSalaryInDB,
    deleteInDB,
}