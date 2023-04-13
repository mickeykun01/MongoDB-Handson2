const express = require('express');
const employeeController = require('../Controller/employee')

const router = express.Router()

router.get('/employee' , employeeController.findAllEmployeeInDB);
router.get('/employee-salary' , employeeController.findSalaryAccessInDB);
router.get('/employee-experience' , employeeController.findEmployeeExperienceInDB);
router.get('/employee-grad-experience', employeeController.findEmployeeExperinceAndGraduateInDb);
router.put('/employee-update',employeeController.UpdateSalaryInDB);
router.delete('/employee-delete', employeeController.deleteInDB);

module.exports = router;