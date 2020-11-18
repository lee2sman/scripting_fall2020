# Git / Version Control / Hosting

Today:
- Checkin
- Git
- GitHub
- GutHub Pages
- Final Project planning


### Server reloading
* While you are developing you may make lots of changes to your code and it may be annoying to have to stop and restart your server constantly
* There are various npm packages to deal with this. One simple one is *nodemon* which will run a server and watch for changes to your code. If your code changes because you saved updated code in your text editor, nodemon will watch and re-serve the updated page.
* ```npm install nodemon -g``` to install this globally to use in all of your projects
* you can use this to replace the *node* command when running your programs, such as ```nodemon main.js```
![version control](http://lee2sman.github.io/intermediate-programming/images/version.png)

# What is Version Control?

Version Control is the practice of saving copies or snapshots of your code at each significant stage as you work on a project. Like a meta-undo, version control lets you move forward and backward in time to get to different versions of your code across a project's files. Without version control software, you might take a DIY approach by copying a project's entire directory and naming it with the date. But what if you want to make multiple copies with slightly different versions and you want to use parts of each of these versions? What if you want to share and work simultaneously on a project with partners? How can multiple people collaborate together over time? Version control software lets you do this.

**Git** is local version control software that you run on your own computer. It lets you track changes to your files incrementally over time. Each project has its own git files. **GitHub** is a software company as well as the name for the website where you can post your projects you are tracking with git. You take copies of your git-tracked programs and push them to a remote *GitHub* server. You should know there are alternative websites and repository managers including [GitLab](http://gitlab.com), [Bitbucket](https://bitbucket.org/), [SourceForge](https://sourceforge.net/) and others. In this article, I'll only be covering GitHub.

I also recommend [Version Control By Example](http://ericsink.com/vcbe/html/bk01-toc.html), an affordable and easy-to-read book, along with free online version.

#### Why Use Git and GitHub?

- track changes (a.k.a. version control = undo or go back to earlier version of your program if you made a mistake)
- to save your content and all of its changes on a remote server
- to share your code with others

#### Version Control models

- *centralized* - one central server. each person checks out and merges changes to a main server. only one person can "check out" the code at a time.
- *distributed* - each person has a local repository. when they make changes, they "check in" with the main online copy and reconcile the two together. (GitHub is this style)

#### Goals of Git

- It's fast - add to your team and code base quickly
- it's distributed
- each commit has a corresponding [hash](https://en.wikipedia.org/wiki/Hash_function) (meaning every single change is tracked)
- everyone working on the code has a local copy of the history of the program
- If you fork (aka copy) someone else's code/program, you pull it onto your computer so that you can edit the code. Afterwards, you can push it to your own online repository (aka repo) or you can do a pull request to the original code and that person will look at your code and decide to integrate the two together (or not).

### Installation

[Download Git](http://git-scm.com/downloads)

On a Mac, you get Git when you install XCode or the XCode Command Line Tools.


### Set up GitHub for your machine

You should only need to do this section once!

Set the default name for git to use when you make a commit.

```
git config --global user.name "Your name Here"
```

### Set up your email connection

```
git config --global user.email "your_email@example.com"
```

### Your first tracked file

- Create a project folder
- use a text editor and save a text file called hello_world.txt to your folder
- tell git to track changes

Use ```git init``` to initialize tracking your project folder aka your local repository.

### Now let's add your files(s)

```
git add hello_world.txt
```

### You can always check your repository status with

```
git status
```

Your file is now being tracked by git. Let's tell git to *commit* the file.


```
git commit -m "First commit. Added hello world to repository."
```

Make sure you include the ```-m``` flag. Without it, your Terminal application will likely launch Vim, a text editor, and it's not particularly beginner-friendly.

What did we just do? How is this different than saving a file?

1.  When we add a new file, we tell Git to add the file to the repository to be tracked
2.  We say ```git add filename``` to stage a file. When we stage an existing file, we are telling Git to track the current state of the file.
3.  A commit saves changes made to a file, not the file as a whole. The commit will have a 'hash' so we can track which changes were committed when and by whom

### STANDARD WORKFLOW with Git

We will work in our IDE and each time we get to a good stopping point/save point, we will save our file(s) inside our repository folder. Then we head back to the Terminal, make sure we ```cd``` into our repository folder if we're not already there.

Then we add and then commit our changes.

```
git add fileWeChanged
```

If we have multiple files we've changed:

```
git add file1 file2
```

Now let's commit them.

```
git commit -m 'fixed our header'
```

This is the commit *message* so we know what we changed in this version of our code.

We continue this process in a loop. We work in our IDE. We save. When we are ready we return to the Terminal, add our files, then commit them with a message.

### To see all your commits

```
git log
```

OR

```
git log --pretty=oneline
```

### A GUI for working with Git instead of the Terminal
There is a [GUI/Graphical Interface](http://git-scm.com/downloads/guis) should you prefer to use one.

In general, there are more options when working in the command line.

### Branching

You may wish to work on several copies of your project with slightly (or dramatically) different codebases. Maybe you have a desktop and a mobile version of your project, or one for Mac and PC, or regular and experimental versions.

For each version you can create a different branch.

```
git checkout -b version2
```

### Find out which branch you're in

```
git branch
```

### Merging Branches

Maybe you were working on a stable branch and an experimental branch and you want to merge these two together. Generally, your first and main branch is called the *master* branch. You can merge your version2 with your master.

```
git merge version2
```

# GitHub versus Git

Git is the software you use on your local computer to track your repository's files. You can always work in Git and not use GitHub if you just want to track your changes locally. However, if you want to make backup copies stored on a remote server, or work collaboratively on code with others, you'll want to put your code online. GitHub is a great way to do that and it works seamlessly with Git.

### Let's make our local repository for a project

```
mkdir hello-github
cd hello-github
git init
```

We've made a project folder. Moved inside it. And initialized it so that Git will be used for tracking our files over time.

### Adding a remote GitHub repository

We want our remote GitHub repository to be a copy of the important *commits* (aka snapshots of our project's complete code files).

Let's connect our local repository to a GitHub repository.

On github.com let's create a repository. Click the + button. Give the project a name. Initialize it.
It will give you a git URL. Copy it.

Now go back to your Terminal. To connect our local repository to the one hosted on GitHub, we run:

```
git remote add origin git://github.com/github-name/project-name
```

### Pushing our code to our Github repository

After you've connected your local repository to the GitHub one we need to run this command for the first time.

```
git push -u origin master
```

Going forward our standard protocol will be to just run

```
git push
```

This takes our committed files and pushes a copy to our GitHub repository.

### READMEs

It is considered good form to make a README.md file in Markdown text and saved in the root directory of your repository. This can contain basic info on the project, starter information, or anything else. GitHub will automatically present this file when someone visits your repository's page.

### Edit the ReadMe file (example)

```
git add README.md
git commit -m 'added README.md'
git push origin master
```
# Standard GitHub and GitHub Pages Workflow

We use Git to track files locally, and GitHub to store our code remotely and to collaborate with others. GitHub can also be used to host a website with GitHub Pages.

## Creating a New GitHub repository and pushing your local code to the remote repository

1. Make a new public repository on GitHub (or select one you are already working on).
Select GitHub.com > + > New Repository.
Make sure *Initialize with a README* is unchecked.
2. Open up your Terminal app. Make a new folder for your project ```mkdir project-folder```. If you already have a folder for this project, skip creating the folder. In either case go to it ```cd project-folder```.
3. Once inside this folder you need to connect this local repository to the remote one on GitHub. The exact url and command is given to you in step 1 after you've created the GitHub repo on github.com. ```git remote add origin http://github.com/username/projectname.git``` If the repo already existed, then go to the project page on github and click the green *Clone or download* button and you can copy the URL from there. Use the same git remote add origin command.
4. In your project folder on your computer, you are working on a local copy. You will work on this local copy, saving like normal. When you get to a moment that you want to preserve all code in memory, then save like normal in your program. Go back to the Terminal. Add all changed files to be staged to be committed locally. ```git add filename``` You can add multiple files at once ```git add file1 file2 file3``` Staging does not save a snapshot of the entire. It just prepares them.
5. After adding your files, now you must *commit* them to take a snapshot. Commit your files on your local repository, with a commit save message. ```git commit -m 'initial save of my files' ```
6. You can push these saved commits to your remote version of your project repository on GitHub anytime. It's common practice to do this each time you commit. ```git push```
7. And that's it for the basics of git and GitHub. You should now have a local and remote copy of your project repository.

## GitHub Pages Workflow For Hosting a Website on GitHub

1. Now that you have a repository setup locally and on GitHub you can have your project hosted as a free website with GitHub pages. It will update everytime you push from your local repository to the remote GitHub repository.
2. Add and commit an index.html page to the root (your project folder). Make sure it's a lowercase ```i``` You can also have a ```css``` stylesheet as normal and javascript, jquery, or any other file as long it's static.
3. ```git add index.html``` and ```git commit -m 'created a project site page``` and ```git push``` to push this to the GitHub repository.
4. Go back to the GitHub page for the project in your web browser. Click settings. Scroll down to GitHub pages. Under source click *none* and switch it to *master branch*. It will now build your site in just a minute or two.
5. You can now visit your new project site at *yourGitHubName.github.io/projectname*
6. Anytime you want to make changes you can edit your files normally then git add them and git commit them and git push them (essentially, repeating step 3) and they will be added and updated on your new site pretty much instantly.



# Final Project

This semester we have built websites for our class, false or misleading institutional websites, various extensions that hack the browser's defaults, a chatroom, chat server bots, synced networked websites with servers, and more. These sites have been collections of material: images, galleries, or institutional pages with lots of choices of what to navigate. They give a user multiple modes of entry and allow exploration. Now we are going to go small and concentrate on creating a site, app or extension for a single project or idea that we want to deliver to the world that will be delivered as a speculative work.

We have had multiple discussions on contemporary issues relating to the web today, from companies tracking users' every action, to the loss of privacy and the inability of many users to resist the compulsion to check their various feeds. How can you acknowledge this world and create a new intimacy with your website's visitors?

**For this assignment you will make a project that uses a server, a responsive site or combination. This can be something to bring people together in a holistic manner, artistic, or other kind of experience.**

You can make an app, website or project that respects your user, plays with convention, or distorts a user's expectations on the web. You are a unique individual and your work is too! Perhaps your site is playful, mysterious, a game, a poem? **An experimental chatroom, online performance, networked game...**

# Goals:
* the site should be responsive - it must work well on the desktop and mobile browsers
* the site should have interactive elements - you may want to use javascript, jquery or P5js
* the design should be compelling and unique - no cookie cutter sites. Question what the site is, the conventions of such sites, and make it your own!
* the site should be well-executed and original
* Consider how your site works with data and APIs.

Project presentations will be in class during finals. We will have a series of smaller steps to accomplish leading up to that.

# Examples

- [Die With Me](http://diewithme.online/)
- [touched-some1](http://touched-some1.com) - For Underneath The Skin
- [Follower](http://follower.today) - art/performance project and commentary
- [Binky](http://binky.app) - App/Artwork
- [Ai scry](http://u1f52e.net) - App/Conceptual project
- [somebody app](http://somebodyapp.com) - App/performance project?
- [Claridryl](http://www.adultswim.com/promotions/claridryl/) - site to accompany a movie. (click click click on the house.....)
- [NoPhone](http://thenophone.com) / Product & art project

