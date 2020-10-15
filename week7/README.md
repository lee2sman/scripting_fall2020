# Week 7

# Today
- check-in
- Extensions!
- case studies of scripting, design and site architecture
- gentle intro to the command line

## Approaches to design and website architecture

### Case Study: Anymade Studio

![anymade studio](anymade.png)

This week we review the work of [Anymade Studio](http://anymadestudio.com/) from Prague, Czech Republic.

They use gradients, bright colors, beefy fonts and very clear menus. All demonstrate a very contemporary aesthetic. Their designs adhere to a grid, and are built of chunky blocks. They are responsive, mobile-first sites. They work at any size, with a clear  design and simple spatial organization that indicates the studio is designing with the phone in mind as the most important viewing platform.

![Bastle instruments screenshot 1](bastl1.png)

![Bastle instruments screenshot 2](bastl2.png)

- Check out the website for [Bastl Instruments](https://bastl-instruments.com/) (maker of Synthesizers). This is a simple website with a very contemporary design. How is it made? It features a CSS/Javascript sidebar, a large image at the top, and a large custom font.
- There is a very clear simple grid structure.

![Startpointprize EU website](startpointprize.png)

- [Startpoint Prize](http://www.startpointprize.eu/2020/) is the website of an annual European prize for art student graduates. Notice all the names and links. This site is a simple design, with text doing a lot of the work. Notice how they must have impeccable folder structure! Each Year at the top has a folder named with its own year number. Each of these have their own index.html file, and if you scroll down a little you see a list of names. Clicking on a name opens a page on that artist, with a short description and 5 - 10 photos of their work.

The site is structured:

```
startpointprize_website/
- index.html
- css/
  style.css
- js/
  jquery.js
  main.js
- 2020/
  - artists/
    - anastasia_afonina/
      index.html
    - katarina_barankova/
      index.html
    - david_bartos/
      index.html
    - another_artist_etc/
      index.html
 - artist_images/
      anastasia_afonina1.jpg
      anastasia_afonina2.jpg
      katarina_barankova1.jpg
      katarina_barankova2.jpg
      david_bartos1.jpg
      david_bartos2.jpg
..etc..
```

Note: I am not showing every file of this site. I'm trying to demonstrate their overall basic file structure.

Also this is a huge website with dozens of artists and spanning multiple years, the site architecture is clear, which makes it easy to modify, add artists, correct mistakes, and to debug or change the code over time. This is good website architecture and demonstrates a way to work on creating large web projects.

## Running Your Computer From the Command Line

### What is the command line?

The **command-line interface**, sometimes referred to as the CLI, is a tool into which you can type text commands to perform specific tasks—in contrast to the mouse's pointing and clicking on menus and buttons. Since you can directly control the computer by typing, many tasks can be performed more quickly, and some tasks can be automated with special commands that loop through and perform the same action on many files—saving you, potentially, loads of time in the process.

The application or user interface that accepts your typed responses and displays the data on the screen is called a **shell**, and there are many different varieties that you can choose from, but the most common these days is the **Bash** shell, which is the default on Linux and Mac systems in the **Terminal** application.

### What is Linux?

Linux is a family of free open-source operating systems for computer systems, originally built as a clone of the proprietary Unix operating system. It is the leading operating system on web servers, hardware, and all Android phones. It is the largest open source collaborative project in the world, with thousands of contributors working together online for the past 30 years. Anyone may modify and distribute new versions of Linux.

### The philosophy behind the command line

The command line is the place where you type commands to manipulate files on your computer or launch programs that perform tasks. In some ways the command prompt is the _simplest_ kind of computer interface possible. It is likely that you are more familiar with interfaces that have windows and buttons, but the command prompt is an interface entirely driven by text input. As mentioned earlier, Linux was originally an open source clone of Unix. In Unix (and Linux), programs are intended to be minimal, modular, "do one thing well", be clear, transparent, and extendable.

### Command-line advantages

Since Linux command line programs are short, modular and inter-operable writing a program for the command prompt is easier than writing a program with a graphical interface (for example creating windows and buttons). Learning to use the command prompt will open up new worlds for you. You will have access to a wide variety of programs and technologies, many that may have been off-limit or hidden before, and many with options that can go far beyond what a graphical program allows.

Nearly every computer from OS X, Raspberry Pi to web servers, internet devices, routers and robots can be controlled through the command line, and even more devices are being created that can be interacted with that are online (through the so-called "Internet Of Things", which is a nebulous term but is driven on the back of the command line). The command line is present on devices that don't even have a screen, mouse, internet, et cetera and for many server tasks command line knowledge is essential.

### How to Access the Command Line on a Mac

On a Mac you access the *Terminal* application, located inside the Utilities folder inside the Applications folder on your hard drive. You can also access the terminal from Spotlight, which looks like a magnifying glass in the top right of your menu bar. Another way to access Spotlight is through the default key macro *Command-Space.* Once you have the basics down, you may wish to download **iTerm** a free replacement Terminal for Mac with nice color and style options and multi-screen support. Hardcore computer users may already know: Technically, Macs run *Darwin*, a free open-source Unix and Linux-like operating system based on the work of many previous Unix and Linux distributions.

### Accessing the Command Line on a PC

PC's come with a default Powershell, but it is not a Linux-style shell. In other words, the programs and tools for working on the command line in this intro will not work in Powershell. As of the time of writing I recommend installing [Windows Subsytem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about). 

### Accessing the Command Line on Glitch.com

Glitch.com is the free server space/host we have been using in class this semester. As both a frontend and backend host, projects you create on Glitch run on a server, and as we've learned in class, that means it runs Linux. Create a new "Hello - Node Express" project on glitch. Click Tools > Terminal. I usually choose to FULLSCREEN the Terminal.

## In-class Experiment: Party In The Command Line

We will be using a shared project on Glitch so we can access the same server space and be in the same command line together. Request access [here](https://glitch.com/edit/#!/command-line-party?path=README.md%3A1%3A0).

# Your file system

Understanding what folder you are located in is important when working on the command line. The *path* refers to the file system and series of directories (aka folders) that indicate where you are currently located in the file system.

Every computer has a root or top level directory. That's the *grandparent* folder, if you will. It's not located inside a directory. It IS the highest level directory that everything else on your computer is located inside. In the Macintosh HD you will find the folders *Applications*, *Library*, *System* and *Users*. The *Users* folder will contain a home folder for all of the users of your system. If you don't have multiple people that use your computer each with their own logon account then you likely only have one user (for example, I have a home folder named *Lee*) in addition to a *Shared* folder.

# Your PATH

The home folder is the default location that you start in when you open the terminal. On a Mac you can test this under the finder. Choose the Go Menu and select Home and it will open that folder.

When you are moving around the computer in your file system with the Terminal, you specify the name of the folder you want to move into or work in. Linux allows you to specify a **full path** or a relative location. Think of the full path as a specific address, like *500 Main Street, New York, NY 11101*. A **relative** path is exactly what it sounds like. To use our street metaphor, a relative path would sound something like *2 blocks west and 1 block north of where you're currently located*. In other words, the location specified by the relative path changes based on where you are currently located. If you're at your house and follow the directions specified by the relative path, you'll wind up in a very different location than if you were at your work address and then followed the directions of the relative path.

This is an important concept because you always have a choice of what path you write when working on the command line. You can specify an exact location or a relative location. **When you don't specify a path, the terminal assumes the location is the directory you are currently inside.**

Sometimes in online tutorials you'll see something that looks like this: ```path/to/file```. You will never actually type ```path/to```. It simply is trying to indicate that you'll need to replace it with the proper location on your own computer. The Mac Terminal has a cool feature to make this easier for beginners. You can drag a file or folder onto the terminal and it will fill out the exact path.

# Your basic terminal commands

The following commands are your standard everyday Bash commands for checking what folder you are located in on the computer, changing folders, listing the files in a folder, moving and copying files, and editing text files. All of the commands listed here are basic built-in programs. If you'd like to read more about any of them, remember that most Bash commands and programs have a built-in manual page. You can access it by typing ```man``` before the program you want to run. There's even a manual for the manual. You can access it by running ```man man```.

### Print Working Directory, ```pwd```

This may sound a little obtuse, but it makes sense when you learn what it does. You use this command to remind you what folder you're currently located in. As you move around files or move between directories it's easy to get lost. pwd will remind you exactly where you are.

##### Example

```pwd```

### List Files, ```ls```

```ls``` is the list function. It lists all of the files in a directory, including text files, images, audio and sub-folders, among other files. It is common to run ```ls``` with one or two flags (or options).

##### Examples

```ls``` just outputs the content of your folder in a mass.

```ls -1``` lists them alphabetically, each file or folder on its own line to make it easier to read.

```ls -a``` will list all files including hidden files in the folder.

### Change Directory, ```cd```

```cd``` stands for change directory and is the workhorse function to let you navigate around the computer. Let's say you've run the ```ls``` command and you see your current directory has a directory inside it called Funnn then you would run ```cd Funnn``` to move into that directory. By the way, this is as good a place as any to let you know about two special commands. A period is a type of wildcard function in the Shell. Every directory has at least two hidden files, ```.``` and ```..``` at the very least. If you type ```cd .``` then you are not really doing anything since you're saying you want to change to the current directory you are in. ```..``` stands for the larger umbrella directory that holds the directory you are currently inside of. If you type ```cd ..``` it will take you back to one directory broader than the one you are currently located in. The tilde character ```~``` stands for your home directory. Typing ```-``` will stand in for the *previous directory* you were in prior to this.

##### Examples

```cd directoryName``` to move into the directory titled directoryName currently sitting inside the directory you are presently located in. If you type the folderName incorrectly or it doesn't exist then you'll get an error message telling you that the folder doesn't exist.

```cd ..``` will take you to the larger directory that holds the directory you are currently located in. If you were in the directory ```refrigerator``` and then you made a folder inside that called ```drawer```, maybe you have gone into that drawer with ```cd drawer``` to see its contents. If you ```cd ..``` then you will leave and go back into the directory called ```refrigerator``` from before.

```cd``` will take you to your home folder, no matter where you were before.

```cd ~	``` does the same as above, taking you to your home folder.

```cd ~/Desktop/junk``` will take you to a folder called junk located on the Desktop folder, which is sitting inside your home folder on your hard drive. Remember that the tilde means your home folder. ```junk``` is a directory I made on my computer but ```Desktop``` is already a directory built-in to OS X.

```cd -``` will take you to whatever folder you were last located in

### Copy a file, ```cp```

The command ```cp``` is used to duplicate a file, in whatever format it's already in. You specify the file you want to copy, and then give a name for what you want your copy to be called.

##### Example

```cp fileYouWantToDuplicate nameForTheDuplicateFile```

### Move a file (and/or rename a file), ```mv```

The command ```mv``` works almost exactly the same as ```cp``` but instead of copying it moves the location of a file. You specify the file you want to move, and then give the path where you want to move it. If you specify a different name, the file's contents will remain the same but the filename will change. You could even use this, for example, to just change the filename but keep it in the same folder it's located in. *Note: It's important to be mindful of what folder you are located in.*

##### Example

```mv fileYouWantToMove path/to/directoryWhereYouWantToMoveIt``` will move a file inside your current directory to a different specified folder.

```mv fileName newFileName``` will keep the file inside your folder but rename it.

### Remove a file or directory, ```rm``` and ```rmdir```

Want to get rid of a file? You could drag it to the trash, or you could use the remove command. One thing to note is that by default, using ```rm``` does not check in with you to confirm you really do want to eliminate the file. It will instantly delete it and you can't get it back. It's safer to use ```rm -i```, which will ask you to confirm each file before it's deleted. To remove a directory, you must use ```rm -d``` or ```rmdir```. **By default, you cannot delete a directory if it is not empty. You must first delete the individual files inside that directory. To force the deletion of a directory even if it has files inside it, use the option ```-f```. To recursively delete a directory as well as all of the files and directories inside it, use ```-r or -R``` but beware as this could cause you to be very unhappy if you lose files you were unexpecting. The option ```-v``` stands for verbose and indicates that more detailed information will be given about the files that were deleted.**

##### Examples

```rm filename``` to delete a file in your current directory.

```rmdir folderName``` to delete a specified directory inside your current directory.

```rm -drf folderName``` will force delete a folder as well as all of the folders and files inside of it. **Use this function with extreme care**.

### Clear your screen, ```clear```

When you need a refresh and want to clear all of your previous commands and output from your field of view, run ```clear```. It doesn't delete your history (see ```history``` below for more info on this), but it does help declutter your screen.

##### Example

```clear```

### Read a file, ```cat``` and ```less```

There are a variety of ways to access and read text in a file on the command line. The simplest is to use ```cat``` which stands for concatenate. You specify the file and it dumps the text onto the command line and exits. If you're trying to read a text file and it's too large to fit in a single screen of the terminal you will probably prefer to use ```less```. ```less``` is a reader program that lets you move back and forth in a text file. You can move forward a screen at a time by hitting the space bar or scroll down or up with the arrow keys. There are a variety of other options that you can read about if you run ```man less```. When you get to the end of the file, press *q* to exit back onto the command line.

##### Example

```cat filename.txt```

```less fileName.txt```

### History and Command Completion, ```↑``` and ```Tab ↹```

To repeat a terminal command you typed previously press the up key and it will recall the last command you typed in. If you press up again, it will recall the line you typed prior to that. And repeatedly pressing up will move further back in time. You can move back and forth in your history with the up and down arrow keys.

Another timesaver is using the tab key. If you type the first few letters of a filename or directory and press tab the command line will attempt to fill out the rest of the file or directory name. If there are multiple files with the same root, it will complete the part of the name that they share. You can then add more letters and try hitting tab to see if it will complete the file name.

### Cancelling

There is an additional important and often-used command: Cancel. Cancel is ```Control-C```. It is a programming text convention to write Control commands with the letter capitalized even though you do not actually type a Shift-Capital Letter when you type them on the computer. So when you see ```Control-C``` or ```CTRL-C``` or ```X-C``` you should actually press the Control key, hold it down, and press the *c* key and then let go of both.

If you are typing a command and realize you don't want it anymore, type ```Control-C``` and it will be deleted.

Similarly, if you are running a program and want to quit out of it, you can usually do so with ```Control-C``` once or several times. For example, you can exit out of the jukebox program ```play``` by typing ```Control-C``` several times in a row.

**Additional tutorials, books and information**

[An Introduction To The Command Line](http://en.flossmanuals.net/command-line/index/) - _a more extensive online open-source manual_

# Cheatsheet
**_Some basic BASH commands_**

Print Working Directory

*   pwd

List Files

*   ls
*   ls -1

Change Directories

*   cd _directory_
*   cd ..

Copy a file

*   cp _filename_

Remove a file (Not trash)

*   rm _filename_

edit text

*   nano _filename.txt_

display file

*   more _filename.txt_

_history_

* _up or down keys_

_tab_

    autocomplete
