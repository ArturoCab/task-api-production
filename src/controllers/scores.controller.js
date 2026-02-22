const { error } = require("console");
const {scores} = require("../data/store");
const {players} = require("../data/store");
const {randomUUID}= require("crypto");

exports.postScore = (req,res)=>{
    const { playerID, score} = req.body;

    if (!playerID){
        return res.status(400).json({error: "PlayerID required"});
    }

    const existingScore=scores.find(x=> x.playerID===playerID );

    if(existingScore){
        if(existingScore.score>=score){
            return res.status(200).json({
                message: "Score not updated. Existing score is higher or equal.",
                score:existingScore
            });
        }
        existingScore.score=score;
        return res.status(200).json({
            message: "Score updated",
            score:existingScore
        });
    }



    const newScore={
        playerID,
        score
    };

    scores.push(newScore);

    res.status(201).json(newScore);
};

exports.getLeaderBoard = (req, res) =>{
    res.json(scores);
}