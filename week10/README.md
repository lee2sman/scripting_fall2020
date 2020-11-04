# Learn about APIs and Make a Discord Bot!

Today:
- Checkin
- APIs
- Make a Discord Bot
- 1-on-1 Check-ins with Students

## API

Application Program Interface

An API gives a list of commands that programmers can use to access functionality that they themselves haven't coded or even necessarily know how they work but can still access and get the data they need. 

APIs control access to resources such as data.

They are used to communicate between disparate services.

- An interface for different pieces of software to communicate together over networks
- These are created by organizations, programmers, and companies to access their data
- There are open APIs and those requiring authorization.
- start out by using APIs that have tutorials or sample code and consider trying out ones that don’t require authorization as you learn how to use them!

![API](http://lee2sman.github.io/intermediate-programming/images/api.png)

[What Are APIs?](https://www.youtube.com/watch?v=OVvTv9Hy91Q) video

Examples:

- YouTube API - Allows you to display videos on a web site.
- Twitter API - Allows you to display Tweets on a web site.
- Facebook API - Allows you to display Facebook info on a web site.

#### Resources

A link of [Open APIs](https://github.com/public-apis/public-apis) not requiring authorization

Web API Intro on [w3schools](https://www.w3schools.com/js/js_api_intro.asp)

### Build a Discord bot


[Glitch Discord Botkit](https://discord-botkit.glitch.me/)

Tutorial [video](https://www.youtube.com/watch?v=uv0hcWw7jdA)

1. Log into Glitch. Remix the Glitch app - [Glitch Discord Bot starter](https://starter-discord.glitch.me/) **Then Preview your Project and go to it's WEBSITE.glitch.me/install page**
2. Go to the [Discord developer center](https://discordapp.com/developers/applications)
3. Create a *New Application* and give it a name. I chose the same name as my Glitch project.
4. Go to *Bot* on the sidebar and Add A Bot.
5. If you put private info in ```server.js``` then anyone on Glitch.com can see it! That's bad. So go back to your project on Glitch and open your private ```.env``` file. This file is a hidden file, sometimes called a *dot file* because the name starts with a dot. Paste in your Discord token as a variable, like this: ```DISCORD_TOKEN=A1b2C3d4E5F6EtcEtcEtc```. If your token is compromised because you get hacked, accidentally reveal your token onscreen in a video, etc, you can always regenerate a new one on your Discord developer console. By the way, this ```.env``` file is a Bash commandline script.
6. Glitch is a freemium model. If you pay, your server is supposed to run 24/7. If you are using their server space for free, they use a system to keep your project turned off until someone tries to access it, at which point they turn it on. That's why there is a loading screen. But we want our bot to run continually. We don't want our Bot to go to *sleep*. So we can create an UptimeRobot account to keep it awake. Ok, so go to [UptimeRobot](https://uptimerobot.com/), make an account, and verify yourself via email.
7. Once logged into UptimeRobot, go to *My Settings* and under *API Settings* click to create a Main API key.
8. Copy your UptimeRobot Main API key and go back to your Glitch project's ```.env``` file. Save your API key in a variable there, like ```UPTIME_ROBOT_KEY=a1B2c3D4e5G6h7eTCetCeTc```
9. Now you have to select a Discord server to deploy your bot to. Open your Glitch App's index page (Preview it) and click the Bot Authorization URL. Please choose our class Scripting For The Web! If you don't see this option, you may have done something wrong! Go back and go through the steps in order.
10. Now test your bot! Go back to your Discord server. Write ```@myBotsName !thanks @someone-elses-name```. 
11. Now you can make new bot *skills*. We are using a framework (starter code library and templates) that call different functionality *skills*. Go to ```skills > hears.js``` to see how these are made.
12. Check out more example Discord bots [here](https://glitch.com/@glitch/discord) on Glitch. Check out the grittybot, bizbot-discord, and discord-magic-8-ball. 

## Homework

Finish building a custom bot for our class Discord. Add a bot that adds joy to our class Discord!

Please leave my announcements and video-recordings channels alone!
