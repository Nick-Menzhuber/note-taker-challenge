const fs = require('fs');
const path = require('path');
const {v4 : uuidv4} = require('uuid');

//function pushes new note into an array and returns it to json db
function createNote(body, e) {
    const noteEl = {
        id: uuidv4(),
        title: body.title,
        text: body.text
    }
    let noteArr = e || [];
    noteArr.push(noteEl);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArr)
    );
    return noteEl;
}

module.exports = createNote;