const studentUtils = require('./students')
const chalk = require('chalk');
const yargs = require('yargs')

//add, remove, list, read

yargs.command({
    command:"add",
    description:"adding a student",
    builder:{
        name:{
            describe:"take in students fullname",
            demandOption:true,
            type:'string'
        },
        class:{
            describe:"take in students class",
            demandOption:true,
            type:'number'
        },
        age:{
            describe:"take in students age",
            demandOption:true,
            type:'number'
        },
    },
    handler: function(argv){
        console.log(" Adding a student " +  argv.name + " Age: " + argv.age + " Class: " + argv.class)
        studentUtils.addStudents(argv.name,argv.age,argv.class)
    }
})

// removing a student
yargs.command({
    command:"remove",
    description:"removing a student",
    handler: function(){
        console.log("Removing a student")
    }
})

// listingg all students
yargs.command({
    command:"list",
    description:"listing a student",
    handler: function(){
        console.log("Listing a student")
    }
})

// reading a student
yargs.command({
    command:"read",
    description:"reading a student",
    handler: function(){
        console.log("Reading a student")
    }
})

console.log(yargs.argv)

// const command = process.argv[2];

// studentUtils.getStudents()







