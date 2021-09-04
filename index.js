#!/usr/bin/env node

const fs=require("fs");     // we are requiring fs module in a variable fs
let argument=process.argv.slice(2)  // process.argv give a array of filenames with 0th index node path and 1st index file path then our filenames

//console.log(argument)
let flags = [];
let filenames = [];
let secondaryArguments = [];

for(let i of arguments) {
    if(i[0] == "-") {
        flags.push(i);
    } else if(i[0] == "$") {
        secondaryArguments.push(i.slice(1));
    } else {
        filenames.push(i);
    }
}
console.log(filenames);


// for(let file of filenames) {
//     let fileData = fs.readFileSync(file,"utf-8");
//     for(let flag of flags) {
//         if(flag == "-rs") {
//             fileData = removeAll(fileData," ");
//         }
//         if(flag == "-rn") {
//             fileData = removeAll(fileData, "\r\n")
//         }
//         if(flag == "-rsc") {
//             for(let secondaryArgument of secondaryArguments) {
//                 fileData = removeAll(fileData,secondaryArgument);
//             }
//         }
//     }
//     console.log(fileData);
// }

// function removeAll(string, removalData) {
//     return string.split(removalData).join("");
// }

// bin -> all the global accepting elements are present in bin
