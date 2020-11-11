

#### Update:
- Uptime Robot does not work with Glitch anymore! as Glitch has [decided to stop all pinging services](https://blog.glitch.com/post/ping-services).

#### Other servers beyond Glitch
- Amazon AWS
- Heroku
- Digital Ocean
- Linode
- an old computer in your house that you aren't using anymore
- a Raspberry Pi computer

#### Things we need:

1. Terminal to run server code
2. Text Editor to write code
3. Node.js to run on server

### Create Discord Developer Application

1. Go into [Discord Developers Portal](https://discord.com/developers/applications)
2. Create an application and give it a name. This is not the same thing as your bot. The application will *contain* our bot. Theoretically it could run other code as well. Optional: Add an icon.
3. Click on *Bot* on the left navigation menu. Add a bot. Give it a username. You'll notice a *secret token* here.
4. Go back to your discord application. Copy your client ID.
5. Go to ```https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot``` which will authorize your Bot to run on the Discord server.

TIMEOUT: Let's talk about security and trust!

I set up a Discord server for our class. I run that server and I trust myself (!) with a bot that I add to the server. I trust you as students in the class with the bots that you make. But consider if I had a big public discord server and hostile trolling bot-makers (or worse) joined the server! To avoid this, we have a trust/permissions system. This is why you need to have a higher level of authority on the server to be able to add a bot. IF you want to test your bot elsewhere, you can create your own Discord server. END TIMEOUT.

OK, when you go to that URL to authorize, it asks you to select a Discord server that you have authority to add a Bot. So either ask me for moderator status on our server, or create your own. Ironically, in this step we are connecting the bot to the server if asks you if you are a human or a bot!!

#### Creating a local server

1. Let's make a new folder to hold the files that will run our bot. I'll make my folder (aka a *directory*) called ```leebot``` but yours can be anything you want.
2. Open the Terminal. Navigate to that directory, such as ```cd directoryname```. If you put the directory on your Desktop, the *path* to navigate to that directorymay be something like ```cd ~/Desktop/directoryname```. The ```~``` means *folder directory* aka the parent folder holding your files.
3. Okay, you're in that folder? You can check by typing ```pwd```. Do you have Node.js installed? You can check by running ```node --version``` and you should see it print out Node and the version number. If you see *Command Not Found* then you don't have Node! [Install it](https://nodejs.org/en/).
4. Let's use the Node Package Manager. We will use that to install any needed node packages, like Express for example. It will save information about the project we are building, a version number, a description, and a list of the needed Node packages. This info will be stored in a json file inside the directory. To kick this off, type ```npm init``` and a commandline program starts to walk you through this step by step. You can cheat and hit enter a few times until done if you just want to accept the defaults.
5. When done it will give a success message. You can open this newly created package.json file up in a text editor to review it.
6. Notice that this package.json says that our *main* script is *index.js*. Since we're making a bot, let's change it to **bot.js**. Then save. Okay, we better create that file now.
7. In our new bot.js file let's add some code to make sure it works. ```console.log("Hi I'm a robot 🤖");```
8. We're going to use [Discord.js](https://discord.js.org/?source=post_page---------------------------#/) Node package to make our lives easier. It provides some commands we can use that work out of the box with Discord servers.
9. On the Terminal, inside our directory, we will install it with ```npm install discord.js```. If you open our *package.json* you'll see that this name has been added.
10. The Discord.js website has some starter Example code we can use. 

### Our bot code

```
console.log("Hi I'm a robot 🤖");

const Discord = require('discord.js');
const client = new Discord.Client();
```

Ok, we've kicked off our code. We're running on a server. In the first line, we print out some text to make sure our code is running.

In line 3 we *require* Discord.js, which imports that package so we can use its built-in functions.

In line 4 we create a client. This is the object that will connect to the Discord API that runs the bot.

Now we need to authenticate our bot aka provide our bot's password.

```
client.login('BOT TOKEN');
```

Pause! We should know this is a bad idea to enter our secret bot token in a file that could be public later. We should actually put this in a ```.env``` file. We'll do that a bit later once we get this working.

Go back to Discord Developer Portal. Go to the bot page. **Copy your Bot's secret token**.

Paste in your client login id in your bot.js script.

```
client.login('N4noeuthrX3ruec.zERCU.ORxrl'); //I made this token up
```

To run our script, in the commandline we can call ```node bot.js``` or whatever your script is name.d

When we run this, we don't see much happen. Yes, we see it basically run the output from line 1 that announces it's a bot, but that's it. That's not very helpful.

Let's add an *Event Handler*. We'll add an Event Handler for when Discord is loaded.

```
client.login('ready', discordReady);
```

When we receive the message that Discord is ready, launch the discordReady() function. Now let's write that function.

```
function discordReady(){
  console.log("Discord is ready 😊 !");
}
```

Save. Ok, try running this again. ```node bot.js```. If you go back into the Discord server you'll see our bot is listed as being online!

Next steps:

Code your bot. The [Discord.js Guide](https://discordjs.guide) lists lots of examples and code to get you started.

Let's add a message event handler. This will run on your bot literally anytime anyone sends any message to the Discord server.

```
client.on('message',msgReceived);

function msgReceived(msg){
  //code goes here
}
```

As an example, we could print out all messages we receive!

```
function msgReceived(msg){
  console.log(msg);
}
```

Now save and run this and watch what happens as people post on the server. Look at all the metadata! Do you feel like the NSA?

Ok, let's alter this to just see the message content text and not all of the metadata.

```
function msgReceived(msg){
  console.log(msg.content);
  if (msg.content === 'hello'){
    msg.reply('👋');
  }
}
```

Now we are printing the message text content, and if that content is the word hello, our bot will reply with a waving hand. Three equal signs checks for case sensitivity, type, etc.

Save and run again. Now try typing hello in Discord. We'll also see our messages coming in to our Terminal. That's our live server code! *Do Not Create an Infinite Loop!*

Note: if you don't want your bot to always @-reply but instead just post normally, change from msg.reply to ```msg.channel.send``` like this:

```
msg.channel.send('👋');
```

##### Adding more varied bot output

We can make an array of varied output. For example:

```
const replies = [
  'Well hello there!',
  'LOL',
  '😉'
]
```

Next steps: Hide your token in a .env file!

More next steps: Code an interesting bot!

### Hiding your secret keys

```
npm install dotenv
```

Create ```.env``` file in your directory.

Make it look like this:

```
SERVERID=A1B2C3D4E5G6
CHANNELID=a1b2c3d4e5g6
TOKEN=Z9Y8X7A1B2C3
```

The server and Channel IDs are useful if you want your bot to just be able to listen and post on a single channel on the server.

You can now load this info into your bot.js script and use the [dotenv](https://www.npmjs.com/package/dotenv) package to make this easier.

```
require('dotenv').config();
const serverID = process.env.SERVERID;
const channelID = process.env.CHANNELID;
const TOKEN = process.env.TOKEN;
```

# Resources and Tutorials
- Daniel Shiffman's Choo Choo Bot Discord tut and [Intro to Discord Bots](https://www.youtube.com/watch?v=7A-bnPlxj4k) video


