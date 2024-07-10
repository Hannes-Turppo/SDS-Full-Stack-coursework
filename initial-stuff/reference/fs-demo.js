const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function(err) {
//     if (err) throw err;
//     console.log("Directory created successfully!");
// })

// Create and write to a file
// fs.writeFile(path.join(
//         __dirname,
//         "/test",
//         "hello.txt"),
//     "Hello World!",
//     function(err) {
//         if (err) throw err;
//         console.log("File created and written to successfully!");
//     });

// Append to a file
// fs.appendFile(path.join(__dirname, "/test", "hello.txt"), " This might actually work!", function(err) {
//     if (err) throw err;
//     console.log("File appended to successfully!");
// });

// Read from a file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", function(err, data) {
    if (err) throw err;
    console.log(data);
});
