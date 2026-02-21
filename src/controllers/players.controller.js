const {players} = require("../data/store");
const {randomUUID}= require("crypto");

exports.createPlayer = (req,res)=>{
    const { username, email} = req.body;

    if (!username){
        return res.status(400).json({error: " Username required"});
    }

    const newPlayer={
        id:randomUUID(),
        username,
        email: email || null,
        createdAt:new Date()
    };

    players.push(newPlayer);

    res.status(201).json(newPlayer);
};

exports.getAllPlayers = (req, res) =>{
    res.json(players);
}

exports.getPlayer=(req, res)=>{
    const player=players.find(p => p.id ===req.params.id);

    if(!player){
        return res.status(404).json({error:"Player not found"});
    }

    res.json(player);
}