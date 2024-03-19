
const fs = require('fs');

const getStudents = function(){
    console.log("Getting Students");
}

const addStudents = function(name,age,Class){

    const students = loadStudents();

    const duplicateData = students.filter(function(student){
        return student.name === name 
    })

    if(duplicateData.length === 0){

        
        students.push({
            name:name,
            age:age,
            class:Class 
        })
    
        saveStudents(students);
    }else{
        console.log("Record already in system");
    }



    }


const loadStudents = function(){

    try{

    const dataBuffer = fs.readFileSync('student.json')
    const JSONdata = JSON.parse(dataBuffer.toString())
    return JSONdata;

    }catch(e){
        return []
    }
}

const saveStudents = function(students){

    const StringData = JSON.stringify(students);
    fs.writeFileSync('students.json',StringData)
}

console.log(loadStudents())


module.exports = {
    getStudents:getStudents,
    addStudents:addStudents

}
