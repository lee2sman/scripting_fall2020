# Saving Data to a server

Today:  
- check-in
- saving and accessing data on a server
- in-class studio time

# Saving Data to a Server / Getting Data From A Server

For many of our projects, you may need to save data to a server, or get data from a server, or both.

Json is a common way to organize and store our data.

But to send data to a server, that data must be sent as a string of text.

We can convert a javascript object with ```JSON.stringify()```


### Converting JSON to text

Example

```
var obj = { name: "Shane", age: 39, city: "Los Angeles" };

var myJSONAsString = JSON.stringify(obj);

document.getElementById("demo").innerHTML = myJSON; 

//or in jQuery
//$('#demo).html(myJSON);
```

### Working with the file system using Node.js

Node.js comes with a builtin file system module to work with a computer's file system, or for example on a server.  It can **read files, create files, edit files, delete files, and rename files.**

 To use it, we must import it.
 
 In Node.js we do this with the require statement.

```
let fs = require('fs'); 
```

Note: you may also see this written as ```const fs = require('fs');```

#### Reading a file

We can read from a file saved on a server. This can be a text file or a json data file for example. We use the readfile module, part of ```fs```.

```
fs.readFile()
```

Example

**student.json** file:

```
{
  "name": "Jorge",
  "age": 45,
  "department": "Math and Computer Science"
}
```

**script.js** file

```
let fs = require('fs');

fs.readFile('student.json', function(err,data) {  
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call'); 
```

These two files are in the same directory. We can run our script with ```node script.js```

Doing so will print out:

```
this is printed after the read call
{ name: 'Jorge',
age: 45,
department: 'Math and computer Science'}
```

Since Javascript is asynchronous, we start reading the student.json file, and we have a callback to run when finished. In the meantime, we print to the console in the last line of our script. Our readFile finally finishes and triggers the anonymous callback function that parses our student json data and prints it out. 


#### Writing to a file

You can create a new text file in the file system with ```fs.writeFile()```. If the file already exists, it will overwire the previous content.

You can also add text to the end of a file using ```fs.appendFile()```. This has the advantage of not overwriting a file, and if it doesn't already exist, it will create the file first.

```
let fs = require('fs');
let myText = "This text and the random number "+Math.random()*100+" will be added to the end of the file. ";

fs.appendFile('textFile.txt', myText, function (err) {
  if (err) throw err;
  console.log('Saved to textFile.txt!');
});
```

Again, we can save this as a script file and run it with ```node script.js``` or whatever we've named the file.

### Resources

- Node.js [File System](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) tutorial
- Node.js [modules](https://www.w3schools.com/nodejs/ref_modules.asp)

## In-class studio time

- 1-on-1 meetings

# Examples projects

## Website / web app examples for working with server

* [touched-some1](http://touched-some1.com) - For Underneath The Skin - *notice minimal example saving to server and displaying simple saved data*
* [Follower](http://follower.today) - art/performance project and commentary - *use of geolocation web app*
* [Binky](http://binky.app) - App/Artwork - *web app using randomization. mobile responsive*
* [somebody app](http://somebodyapp.com) - App/performance project. - *app using server to store users, data, match making*

# Homework

Get a first prototype ready!

Write a development log of half a page.

- What are/were your goals for the session?
- What did you spend your time on during your work session(s)?
- What worked?
- Where are you stuck?
- What are your next steps?
- How does this fit into the overall project idea so far?

