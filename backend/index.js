const express = require("express"); // Express App
const app = express()
const port = 1337

const cors = require("cors");

const unirest = require("unirest"); // For API Calls

const dotenv = require("dotenv");
dotenv.config();

const mongo = require("mongoose");  // MongoDB connection
const schemas = require("./src/schemas");
const db = process.env.MONGO_ATLAS_URL;

const Rule = mongo.model("Rule", schemas.ruleSchema, "Rule");

const actions = require("./src/db");  // Containing db actions

mongo.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "rulebook", }).then(() => {
    console.log("Connected"),

    app.use(express.json())
    app.use(express.urlencoded())
    app.use(cors())

    app.get("/", async (req, res) => {
        let all_rules = {"killer" : [], "survivor" : []};
        Rule.find({}, function(error, rules) {

            rules.forEach(function(rule) {
                if (rule.killer !== undefined && rule.killer === true) {
                    all_rules["killer"].push(rule);
                } else {
                    all_rules["survivor"].push(rule);
                }
            });

            res.send(all_rules)
        });
    });

    app.get("/killer", async (req, res) => {
        let rules = {};
        Rule.find({killer : true}, function(error, rules) {

            rules.forEach(function(rule) {
                rules[rule._id] = rule;
            });

            res.send(rules)
        });
    });

    app.get("/survivor", async (req, res) => {
        let rules = {};
        Rule.find({killer : false}, function(error, rules) {

            rules.forEach(function(rule) {
                rules[rule._id] = rule;
            });

            res.send(rules)
        });
    });

    app.post("/new", async (req, res) => {
        console.log(req.body);
        let rule = new Rule(req.body)
        rule.save().then(item => {
            res.send("Rule saved to database!")
        }).catch(error => {
            res.status(400).send("Unable to save data to database!")
        });
    });
    
    app.listen(port, () => {
        console.log(`DBD Rulebook Backend listening at http://localhost:${port}`)
    });

}).catch(error => console.error(error));
