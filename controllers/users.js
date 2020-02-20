const userCtrl = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
    sign,
}

function sign(req, res){
    if (req.body.fullname === ''){
        signin(req, res);
    } else {
        signup(req, res);
    }
}

async function signup(req, res){
    console.log('sign up');
    let user = new userCtrl(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({token});
    } catch (err){
        res.status(400).json(err);
    }
}

async function signin(req, res){
    console.log('sign in');
    try {
        const user = await userCtrl.findOne({ email: req.body.email });
        if (!user) res.status(401).json({err: 'Bad Credentials'});
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) res.status(401).json({err});
            if (isMatch){
                const token = createJWT(user);
                res.json({token});
            }
        });
    } catch (err){
        res.status(400).json(err);
    }
}

function createJWT(user){
    return jwt.sign({user}, SECRET, {expiresIn: '24h'});
}