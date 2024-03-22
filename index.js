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
    handler(argv){
        console.log("Adding Student...")
        studentUtils.addStudents(argv.name,argv.age,argv.class)
       
    }
})

// removing a student
yargs.command({
    command:"remove",
    description:" Removing a student",
    builder:{
        name:{
            describe:"takes in students fullname",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        studentUtils.removeStudent(argv.name)
    }
})

// listing all students
yargs.command({
    command:"list",
    description:"listing a student",
    handler(){
        console.log("Listing a student")
        studentUtils.listStudents()
    }
})

// reading a student
yargs.command({
    command:"read",
    description:"reading a student",
    builder:{
        name:{
            describe:"takes in students fullname",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log("Reading a student")
        studentUtils.readStudent(argv.name)
    }
})

yargs.argv

// const command = process.argv[2];

// studentUtils.getStudents()







