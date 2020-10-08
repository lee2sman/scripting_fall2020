# Week 6

- questions
- jQuery change stylesheet
- bookmarklets redux
- Intro to JSON
- Extensions

## Data formats

Data can be saved in many kinds of formats.

- CSV - comma separated values
- XML - an older standard
- JSON - Javascript Object Notation
- text file - each line of the file containing a different data point
- a web page

### JSON

JSON is a good standard way of working with data files and is based on how Javascript literal objects are defined.

JSON uses JavaScript syntax. The JSON format is text only. 

JSON is written in a key-value pair format.

```
"name":"John" 
```

Keep in mind that JSON requires double quotes!


### JSON Type Examples

#### Basic Example

```
let car = {
  name: 'Saab',
  color: 'red'
  year: 2016
}
```

#### JSON String

```
{ "name":"Ricardo" }
```

#### JSON Number

```
{ "age":77 }
```

#### JSON Object

```
{
  "person":{ "name":"Shankar Patel", "age":40, "city":"Los Angeles" }
}
```

## Accessing JSON with Dot Notation

```
character = { "name":"Shredder", "age":30, "home":"TerrorDome" };

enemy = character.name;
```

## Accessing JSON with Bracket Notation

```
enemy = character["name"];
```

## Nested JSON

Very common!

Example

```
rappers = {
    "Migos": {
        "rapper1":"Offset",
        "rapper2":"Quavo",
        "rapper3":"Takeoff"
    }
 }
```

##### Access data with dot or bracket notation.

```
 let favoriteRapper = rappers.Migos.rapper2;
```

##### Change data value

```
rappers.Migos.rapper2 = "Taylor Swift";
```

#### JSON Array

```
let class = {
  "students":[ "Jorge","Will","Serena","Ellen","Moe","Shemp","Larry","Xenia"]
}

let closestStudent = class.students[3]; // "Ellen"
```

#### Load JSON with jQuery

```
var myJSON = '{"name":"Mindy", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
$("#demo").html(myObj.name);
```

### Extensions

files needed:
- manifest
- javascript file
- html file

Example manifest:

```
{
  "manifest_version": 2,
  "name": "Hello World!",
  "description": "This extension shows a Hello World message!",
  "version": "1.0",
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "window.html"
  }
}

```

Example html file, window.html

```
<!DOCTYPE html>
<html>
<head>
  <script src="background.js"></script>
</head>
<body>
  <div>Hello World</div>
  <div>This is a Chrome extension</div>
  <div>And this is some html</div>
</body>
</html>
```

Javascript file, background.js 

![An example icon](https://developer.chrome.com/extensions/examples/tutorials/getstarted/icon.png)

#### Resources
* [W3Schools JSON intro](https://www.w3schools.com/js/js_json_intro.asp)
* Darius Kazemi's [Corpora](https://github.com/dariusk/corpora) are mostly JSON files


## Reading / Watching

- Read the w3school [NodeJS tutorial](https://www.w3schools.com/nodejs/default.asp) down to Events.
- OPTIONAL: Interested in what's happening under the hood that lets you writ a desktop application in Node? Read [What Exactly is Node.js?](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- Watch the Coding Train videos [What is nodeJS](https://www.youtube.com/watch?v=RF5_MPSNAtU) and [What is NPM?](https://www.youtube.com/watch?v=s70-Vsud9Vk)
- Test yourself. Come to class able to answer:
 - what is Node.js?
 - How do you get it?
 - Why would you use it?
 - What is NPM?

BEFORE CLASS: Windows users: Please install [Windows Subsystem For Linux](https://docs.microsoft.com/en-us/windows/wsl/about) OR [Cygwin](https://www.cygwin.com/). This will allow you to run Linux commands and browse the file system in your Terminal. Mac Users, you alreay have a Linux-like operating system and will be able to run Linux commands in the Terminal.

## Homework - coding

Make an extension for yourself. Follow the procedure to make an extension. It can be something funny, something serious, something helpful, or something strange.

Start by brainstorming your idea. You may want to mock it up using glitch.com to see how it might look on an affected page. If your extension is for use on specific websites, use the inspector in the web browser to check out parts of the page. Perhaps you are hiding a specific class. Maybe you are adding text, changing all of the images, adding background colors, changing fonts, inserting a moving gif, making a favorite website easier to read, or removing its ads. 

Create your manifest. Feel free to start by copying a default one and making the changes that you need. Give your extension a name, a version number in quotes, and link to any needed html, js files.

When finished, go to Chrome and open your extensions. Check to make sure that the Extensions are turned on (button in top right). Click on button to "Load Unpacked" extension. It should now be stored in your extensions bar. You can click on the pin to pin it to your extensions bar. Upload your folder (please compress it first) and a screenshot of your extension in use.	
