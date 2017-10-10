const express = require("express");
const router = express.Router();
const Joi = require('joi');
var fs = require("fs");

// Get all users
router.get('/', async (req, res, next) => {
    try {
        res.send(await parseJson('users.json'));
    }
    catch(err) {
        res.send(err.message);
    }
});

// Create (Post) new user
router.post('/', async (req, res) => {

    if(!req.body) return res.sendStatus(400);

    let users;
    let newuser;
    // Validation
    try {
        await validateData(req, 'post');
        
        users = await parseJson('users.json');
        newuser = { id: users.length + 1, username: req.body.username, password: req.body.password, email: req.body.email, role: req.body.role }

        await checkIfSuperdmin(newuser, users); // if > 2 superadmins - error
        await validEmail(newuser, users);

        users.push(newuser);
        users = JSON.stringify(users);

        await writeFile('users.json', users, 'utf8');
        res.send(newuser);
    }
    catch(err) {
        res.send(err.message);
    }
   
});

// Get(READ) one user by Id
router.get('/:userId', async (req, res) => {

    let user;
    let users;
    const id = req.params.userId; // получаєм id

    try { 
        users = await parseJson('users.json');
        user = await checkUserPresent(id, users);
        res.send(user);
    }
    catch(err) { 
        res.send(err.message);
    }

});

//UPDATE (PATCH) user
router.patch('/:userId', async (req, res) => {

    if(!req.body) return res.sendStatus(400);

    let users;
    let newuser;
    const id = req.params.userId;

    try {
        await validateData(req, 'patch');

        users = await parseJson('users.json');
        newuser = await checkUserPresent(id, users);

        await checkIfSuperdmin(req.body, users);
        await validEmail(req.body, users);
        
        for (let key in req.body)   
            newuser[key] = req.body[key];

        users = JSON.stringify(users);
        await writeFile('users.json', users, 'utf8');
            
        res.send(user);
    }
    catch(err) {
        res.send(err.message);
    }
});
                

/////DELETE /////
router.delete('/:userId', async (req, res) => {
   
    const id = req.params.userId;
    let users;
    let user; 
    
    try {
        users = await parseJson('users.json');
        user = await checkUserPresent(id, users);
            
        await deleteSuperAdmin(users, id);
            
        user = users.splice(id - 1, 1);
        users = JSON.stringify(users);
        
        deleteFromGroups(id);
        await writeFile('users.json', users, 'utf8');
        res.send(user);
    }
    catch(err) {
        res.send(err.message);
    }
    
});        
                    
        

// Читаємо дані із файла 
readFile = function (filename, enc){

    return new Promise((resolve, reject) => {
        // починаємо асинхронну операцію
        fs.readFile(filename, enc, function(err, res) {
            // перевіряємо помилку
            if (err) {
                reject(new Error(`Error! ${err.message}`));
                return;
            }
            // читання завершилось успішно
            resolve(res);
        });
    });
}

parseJson = function(filename) {
    return new Promise((resolve, reject) => {
        readFile(filename,'utf8')
        .then(result => {
            let data = JSON.parse(result);
            resolve(data);
                
        })
        .catch(err =>{
            reject(new Error(`Error! ${err.message}`));
        });
    });
}

writeFile = function(filename, data, enc) {

    return new Promise((resolve, reject) => {
        // записуємо в файл
        fs.writeFile(filename, data, enc, function(err, res) {
            if (err) {
                reject(new Error(`Error! ${err.message}`));
                return;
            }
            resolve(res);
        });
    });
}

// Валідація для додавання нового користувача
function checkPostValidation (req_username, req_password, req_email, req_role){
    const schema = Joi.object().keys({
        username: Joi.string().min(4).max(30).required(),
        password: Joi.string().alphanum().min(8).max(30).required(),
        email: Joi.string().email().required(),
        role: Joi.string().required().valid(['superadmin', 'admin', 'user']) // і масив із 3 значень ['superadmin', 'admin', 'user']
    });

    return Joi.validate({ username: req_username, password: req_password, email: req_email, role: req_role }, schema);
}

function checkPatchValidation (req_username, req_password, req_email, req_role){
    const schema = Joi.object().keys({
        username: Joi.string().min(4).max(30),
        password: Joi.string().alphanum().min(8).max(30),
        email: Joi.string().email(),
        role: Joi.string().valid(['superadmin', 'admin', 'user']) // і масив із 3 значень ['superadmin', 'admin', 'user']
    });

    return Joi.validate({ username: req_username, password: req_password, email: req_email, role: req_role }, schema);
}


function validateData(req, state){
    return new Promise((resolve, reject) => {
        let result;
        if(state === 'post')
            result = checkPostValidation(req.body.username, req.body.password, req.body.email, req.body.role);
        else
            result = checkPatchValidation(req.body.username, req.body.password, req.body.email, req.body.role);
        if(result.error === null)
            resolve(result);
        else
            reject(new Error(`Error! ${result.error.message}`));  
    });
}
// перевірка чи можна додавати/змінювати на суперадміна
function checkIfSuperdmin(newuser, users){
    return new Promise((resolve, reject) => {
        let count = newuser.role === "superadmin"? 1 : 0;

        for(let val of users){
            if(val.role === 'superadmin')
                count++;
        }
        if(count > 2){
            reject(new Error(`Error! There are already 2 superadmins`));
            return;
        }
        resolve();
    });
}


function checkEmail(newuser, users){

    for(let val of users){
        if(newuser.email === val.email)
            return false;
    }
    return true;
}
// Перевірка чи можна видаляти
function deleteSuperAdmin(users, id){
    return new Promise((resolve, reject) => {
        let count = 0;
        if(users[id - 1].role === 'superadmin'){
            for(let val of users){
                if(val.role === 'superadmin')
                    count++;
            }
            if(count >= 2){
                resolve();
                return;
            } 
            reject(new Error(`Error! You can not delete last superadmin!`))
        }
        else
            resolve();    
    });
}

function checkUserPresent(id, users){
    return new Promise((resolve, reject) => {
        for(let val of users){
            if(val.id == id){
                resolve(val);
                return;
            }       
        }
        reject(new Error(`Error! There is no user with id: ${id}!`));
    });
}

function validEmail(newuser, users){
    return new Promise((resolve, reject) => {
        let result = checkEmail(newuser, users);
        if(result)
            resolve();
        else
            reject(new Error(`Error! There is already user with such email!`));  
    });
}
// Видалення користувача із усіх груп
function deleteFromGroups(id){
    readFile('userGroups.json','utf8')
        .then(result => {
            let groups = JSON.parse(result);
            for(let val of groups){
                let position = val.userlist.findIndex((element) => {return element == id;})
                if(position >= 0 && val.userlist.length > 1) // якщо є  в масиві і не останній - видаляємо
                    val.userlist.splice(position, 1);   
            }
            groups = JSON.stringify(groups);
            writeFile('userGroups.json', groups, 'utf8') // перезаписуємо файл з новими даними 
                .then((result) => {
                    console.log("Success");
                });        
        });
}

findByUsername = function(username, cb) {
    readFile('users.json','utf8')
        .then(result => {
            let users = JSON.parse(result);
            let user = users.find((user)=> {return user.username === username});
            if(user)
                return cb(null, user);
            return cb(null, null);
        });
}


// Return router
module.exports = router;
module.exports.findByUsername = findByUsername;
module.exports.parseJson = parseJson;
module.exports.writeFile = writeFile;