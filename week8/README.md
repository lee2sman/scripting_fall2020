## Intro to Node

# Today
- check-in
- Node
- Express (library)
- Socket.io (library)

# Intro to NodeJS
* Node is a version of Javascript that works outside the browser. It can run on the command line and on servers
* Node is used for writing backend applications without a browser, though it can be used to manage the server in addition to the software you write for a browser
* Download [Node](https://nodejs.org/en/)

# Running Node in the command line
* After installing, you can launch node by typing ```node```
* Enter javascript commands one at a time
* Exit with *Control-D*
* You can edit node files (javascript files run with node) in any text editor
* You can append the node shebang ```#!/usr/bin/env node``` in the first line of the file. Save the file with a ```.js``` suffix.
* You can run your program in the Terminal with ```node filename.js```

# NPM
* NPM is the Node Package Manager
* A package manager is a kind of *app store* for the command line, sometimes for a particular operating system, such as [Homebrew](http://brew.sh) for Mac, or for a specific programming language.
* NPM is the package manager for Node software
* Each node program you write that will also use NPM software needs a ```package.json``` file to list the NPM packages you want to include and use
* Go to the directory of your program and type ```npm init --yes```
* To install a package you'll use ```npm install <module_name> --save```
* This package will be installed and added in the ```package.json``` file for your program

# Express

* Express is a node package
* It is a simple web framework for node that can host files and get user input
* ```npm install express -save```

To use it in your program

```
var express = require('express');

//you can now create an 'app'
//This app holds an instance of express and can use its functionality

var app = express();

var server = app.listen(4000); //listens on port 4000. Triggers callback.

app.use(express.static('public'));
```

This means http://localhost:4000 will host the project

Runtime environment, library.
Installing node, working with a server, working locally.  
NPM package manager


# Intro to Socket.io

*--resources from [Todd Anderson](https://glitch.com/edit/#!/haunted-house-site)*

**For this tutorial, our starter code and learning resource can be found [here](https://glitch.com/edit/#!/haunted-house-site). Our *front door* is [here](https://haunted-house-site.glitch.me/).**

[Socket.io](http://socket.io) is a javascript library that runs in both the browser and server to allow realtime communication between the two. This allows for collaborative web experiences where many people can interact on the same page, all without using a cumbersome database or even much backend code.

Socket.io does this by having both a client-side and a server-side library which communicate with each other through named events that pass between the two (similar to the way keyboard and mouse events are handled).

Below is a rough guide to how socket.io works on the client side and on the server side, and how the two communicate.

#### Client Side
On the client side, the socket.io client library needs to be included in the HTML:
```javascript
<script src= 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js'></script>
```
And the following line needs to be included at the top of your client.js file:
```javascript
var socket = io()
```
The client can then send messages to the server in the following form
```javascript
//the function takes a string and then an object full of data (any size)
socket.emit('nameOfEvent', {data: "data you are sending to the server"})
```
And the client can listen for messages from the server like so:
```javascript
socket.on('nameOfServerEvent', function(data){
  //the code you want to use on the data sent back from the server
}
```

#### Server Side
Just about all of your socket.io programs are going to want the following boilerplate in the server.js file.
```javascript
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

//This function will be called whenever a new web browser visits the page. It runs as soon as a connection is set up with the server.
function newConnection(socket){
	console.log('new connection: ' + socket.id)
	//we put all the rest of our code inside that connection, because we only want it to run once we're connected
  //this section will have one or more event listeners that line up with various things that can happen on the client side (like sending a message in a chat app)
	socket.on('myEvent', myEventHandler);
	function myEventHandler(data){
    //what you do in response to the event goes here
    //often you'll want one of the four 'emit' events listed below
    socket.broadcast.emit('myServerEvent', data);
		
	}
}
```

**Server Side Cheat Sheet**
```javascript
  socket.emit('hello', 'can you hear me?', 1, 2, 'abc');

  // sending to all clients except sender
  socket.broadcast.emit('broadcast', 'hello friends!');

  // sending to all clients in 'game' room except sender
  socket.to('game').emit('nice game', "let's play a game");

  // sending to all clients in 'game1' and/or in 'game2' room, except sender
  socket.to('game1').to('game2').emit('nice game', "let's play a game (too)");

  // sending to all clients in 'game' room, including sender
  io.in('game').emit('big-announcement', 'the game will start soon');

  // sending to individual socketid (private message)
  io.to(socketId).emit('hey', 'I just met you');
```




#### Message Passing Example: Chat Room
A user logs into a chat room using socket.io. Once the page loads a connection is established, giving the user a unique id and trigger the newConnection function through the following part of the server code 
```javascript
io.sockets.on('connection', newConnection);
function newConnection(socket){
 //...
}
```
The user enters their username on the client, and then types and sends a message into the chatroom. The following client-side code sends the message:
```javascript
socket.emit('newMsg', {username:username, msg:msg});
```
This is then handled by the appropriate handler on the server (with the matching name)
```javascript
function newConnection(socket){
   socket.on('newMsg', function(data){
     //the same data from the client is sent to all other clients
     socket.broadcast.emit('newMsgFromServer', data)
   }
}
```
The server receives the message and then sends it out to all other connected clients. This message from the server is then handled by the following code on the client:
```javascript

socket.on('newMsgFromServer', function(data){
	addMsg(data.username, data.msg)
})
//This function uses jQuery to add the message to the HTML
function addMsg(user, msg){
	$('#messages').append("<p><strong>"+user+": </strong>"+msg+"</p>")
}
```

# Homework

- Make a networked space using socket.io
- Start by remixing the Haunted house socket.io starter
