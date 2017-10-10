const express = require("express");
const router = express.Router();
const Joi = require('joi');
const fs = require("fs");
const file = require('./users');
// Get all groups
router.get('/', async (req, res, next) => {

    try {
        res.send(await file.parseJson('userGroups.json'));
    }
    catch(err) {
        res.send(err.message);
    }
});

// POST
router.post('/', async (req, res) => {

    if(!req.body) return res.sendStatus(400);

    let groups;
    let newgroup;
    // Validation
    try {
        await validateData(req, 'post');
        
        groups = await file.parseJson('userGroups.json');
        newgroup = { id: groups.length + 1, groupname: req.body.groupname, userlist: req.body.userlist }

        groups.push(newgroup);
        groups = JSON.stringify(groups);   

        await file.writeFile('userGroups.json', groups, 'utf8');
        res.send(newgroup);
    }
    catch(err) {
        res.send(err.message);
    }
});

// Get(READ) one group by id
router.get('/:groupId', async (req, res) => {

    let groups;
    let newgroup;
    const id = req.params.groupId; // получаєм id 

    try { 
        groups = await file.parseJson('userGroups.json');
        group = await checkGroupPresent(id, groups);      
        res.send(group);
    } 
    catch(err) {
        res.send(err.message);
    }

});

//UPDATE (PATCH) 
router.patch('/:groupId', async (req, res, next) => {

    if(!req.body) return res.sendStatus(400);

    let groups;
    let group;
    const id = req.params.groupId;

    try {
        await validateData(req, 'patch');
        groups = await file.parseJson('userGroups.json');
        group = await checkGroupPresent(id, groups);
                
        for (let key in req.body)   
            group[key] = req.body[key];

        groups = JSON.stringify(groups);
        await file.writeFile('userGroups.json', groups, 'utf8');
                
        res.send(group);
    }
    catch(err) {
        res.send(err.message);
    }
});
                    

/////DELETE /////
router.delete('/:groupId', async (req, res) => {
   
    let groups;
    let group;
    const id = req.params.groupId;
    
    try {
        groups = await file.parseJson('userGroups.json');
        group = await checkGroupPresent(id, groups);
        
        group = groups.splice(id - 1, 1);
        groups = JSON.stringify(groups);

        await file.writeFile('userGroups.json', groups, 'utf8');
                
        res.send(group);
    }
    catch(err) {
        res.send(err.message);
    }
            
});


// Валідація для додавання нового користувача
function checkValidation (req_groupname, req_userlist){
    const schema = Joi.object().keys({
        groupname: Joi.string().min(4).max(30).required(),
        userlist: Joi.array().required()
    });

    return Joi.validate({ groupname: req_groupname, userlist: req_userlist}, schema);
}

function checkPatchValidation (req_groupname, req_userlist){
    const schema = Joi.object().keys({
        groupname: Joi.string().min(4).max(30),
        userlist: Joi.array()
    });

    return Joi.validate({ groupname: req_groupname, userlist: req_userlist}, schema);
}

function validateData(req, state){
    return new Promise((resolve, reject) => {
        let result;
        if(state === 'post')
            result = checkValidation(req.body.groupname, req.body.userlist);
        else 
            result = checkPatchValidation (req.body.groupname, req.body.userlist);
        if(result.error === null)
            resolve(result);
        else
            reject(new Error(`Error! ${result.error.message}`));  
    });
}
 
function checkGroupPresent(id, groups){
    return new Promise((resolve, reject) => {
        for(let val of groups){
            if(val.id == id){
                resolve(val);
                return;
            }       
        }
        reject(new Error(`Error! There is no group with id: ${id}!`));
    });
}

// Return router
module.exports = router;
