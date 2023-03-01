module.exports = {
    create: function(title, content, killer, db) {
        if (killer === true) {
            db.save().then(item => {
                return `Killer: ${title} - ${content}`
            })
        } else {
            return `Survivor: ${title} - ${content}`
        }
    },
    get: function(killer, db) {
        if (killer === true) {
            return {
                "rules" : "..."
            }
        } else {
            return {
                "rules" : "..."
            }
        }
    }
}