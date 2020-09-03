# Week 01 - HTML and CSS

1. Introduction
2. Get to know each other
3. Syllabus
4. Our goals for the course
5. What do we already know?
6. Our tools
7. Crash course in HTML and CSS
8. Where to Get Help

## Development Environment Lab

+ Review Text Editors and IDEs
+ HTML
+ CSS selectors
+ Local Servers

## Editors and IDEs

- A text editor is software to write and modify plain text files. They are used to write code. As opposed to word processing software they do not normally allow formatting.

- An IDE is an *integrated development environment*, software that provides a number of tools in combination with a text editor and usually a compiler. There are a number of free and open source IDEs available. For this course, you can use whatever text editor or IDE you would like. Some editors and IDEs have good standard defaults (*with batteries*) for particular languages or use cases. There are dozens of options. Here's three I recommend. Two are applications. One is a web app you access via a browser.

- [Brackets](http://brackets.io) - A contemporary UI with good defaults and support for Javascript. Excellent for coding web projects. Not many plugins. Not much support for other languages. Built-in webserver to test your website.

- [Atom](https://atom.io/) - A huge IDE that is actually built on Javascript in a web browser and turned into an application that runs on your computer (using Electron). There are a large number of themes and plugins. You can build it into a custom editor for your coding needs.

- [Glitch](https://glitch.com/) - Glitch is a powerful web app with friendly UI that allows you to code a website as well as script a server. It combines a web editor with a version control synced with GitHub. It is very easy to code your website and instantly see changes in the browser.

# HTML/CSS/Javascript environment

### HTML

* HTML - Hypertext Markup Language
  * aka *The content*
  * Hypertext - directional *hyper* links. Words are associated with another file. By clicking on the link you jump to the other file.
  * Markup - language used to describe formatting and placement. Other markup languages include [Wikimarkup](https://en.wikipedia.org/wiki/Wiki#Editing)
  * Language - self-explanatory!
  * [HTML reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

### CSS

* CSS - Cascading Style Sheets
  * aka *The Style*
  * Where HTML is said to be your *content*, your CSS describes its *style*. CSS is used to describe colors, placement, fonts, size of objects, and more.
  * CSS has a specific format. You specify what elements on your website you want to modify, then give rules for how to style those elements.
  * CSS [reference](http://cssreference.io/)
  * CSS for placement
    * We use CSS for *style*. Positioning is specified in CSS.

#### Basic HTML Tags to know

There are so many html tags, but most of the time you will be using probably only a dozen or two at most.

```
html

head

title

body

h1

h2

h3 

p

img

a

br
```

### Let's start making some sites

A starter [mini webpage](https://glitch.com/edit/#!/mini-webpage). Click to remix.


#### Anatomy of a webpage

Our website's html page will always start with ```<!DOCTYPE html>``` at the top. It tells a web browser to interpret everything afterwards as HTML.

Indenting is optional. A web browser ignores spacing when it builds the webpage. But it helps us read and understand what we're doing. We usually use indentation to indicate how elements are nested inside one another.

```
<!DOCTYPE html>
<html>
  <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

  </body>
</html> 

```

Add some text. Make sure you are inside the body section. Surround your text in paragraph tags. To make headers you can use h1, h2 (and getting smaller) down to h6, though I never use h4 and below.

Try adding more paragraphs. Make a second webpage. Add a link between the two with anchor ```<a>``` tagslike this: 

```
Visit <a href='page2.html'>Page 2</a>.
```

The earliest websites had no *style*. They were just text. Some people think we should still make websites this way! (See [many](https://danluu.com/web-bloat/) [articles](https://idlewords.com/talks/website_obesity.htm) [bemoaning](https://gemini.circumlunar.space/) this). 

There is a search engine just to find these kinds of websites. Check out: [Wiby](http://wiby.me). Hint: Click *surprise me...* to see a random example.

[Textfiles](http://textfiles.com/) is a modern example of this kind of site.

[Hundred Rabbits](https://100r.co) is a bit more stylish but mostly simple this way

No CSS style at all on [Text-only NPR](https://text.npr.org/)

[Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) is the inventor of the modern web.

Olia Lialina's [Top 10 Web Design Styles of 1993](http://contemporary-home-computing.org/prof-dr-style/) 

### Warm-up Activity: Building a Text Editor 

Our first activity will be to build a text editor in the browser with some CSS.

We'll start by remixing our starter website to make a new site.

Now we need to talk about CSS.


CSS stands for Cascading Style Sheet.

CSS is how we style our content.


Syntax:


```
selector {
  attribute: value;
}
```

Examples:

```
body {
  width: 500px;
  background-color: grey;
  font-size: 12px;
}

p {
  font-size: 14px;
  color: blue;
}

```


#### Web Color

You can specify colors with a web color name, or RGB values, or, most commonly, HTML color.

There is a very 90s-style website [HTML Color Codes](http://html-color-codes.com/) and hundreds of color pickers if you do a simple [web search](https://duckduckgo.com/?t=canonical&q=css+color+picker&atb=v198-1&ia=web) for CSS color picker or HTML color picker.

### Contenteditable

You can read more about [contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable). 

We will use the contenteditable attribute as a starting point to make our own browser-based text editor.

You can start by remixing this [project](https://glitch.com/edit/#!/styled-text-editor?path=index.html%3A8%3A6).

### External Stylesheets

It's considered best practices to place your CSS on a separate page and link to it from your ```<head>``` section.

Put your css in a file that ends in ```.css```, for example ```style.css```.

You link to it like this:

```
<head>
  <title>My title</title>
  
  <link rel="stylesheet" href="style.css">
</head>
```

### File structure

The style sheet linked above is located inside the same folder as our HTML file. If it was in a sub-folder, we'd have to specify it.

For example If we had a folder named css and the style.css was inside it, we would call it like this:

```
<link rel="stylesheet" href="css/style.css">
```

What happens if our HTML is inside a sub-folder, and the CSS is outside of the folder? We can access the parent directory by using ```..``` to look in the folder that encloses our current one.

Example: I have a folder WEBSITE holding style.css and another folder HOME. Inside HOME is index.html. Inside the head of my index.html I want to call the stylesheet inside home, like this:

```
<link rel="stylesheet" href="../style.css">
```

And that's how it's done!

### In-class project: Remix the stylesheet for Scripting For The Web

Create a new external stylesheet that I can call from the HTML page I am using to hold our class site.

### DIVS and assigning Tags, Classes and IDs

A ```<div>``` means a division, but we always just say "div". It's a chunk of a website. It's a section that we want to assign some special CSS to. We surround that section in ```<div>``` tags and give it a class name, like this:

```
<div class="bio">
  <h1>All About me</h1>
  <img src="headshot.jpg">
  <p>I'm pretty great!</p>
</div>
```

Now in my CSS stylesheet I can write CSS rules just for that div section. I decided to assign that section the class "bio". You can come up with almost any name you'd like. On the stylesheet, you place a period before the class name.

```
.bio {
  background-color: grey;
}
```

And now everything in my bio section will have that grey background.

There is another special thing we can add, an ```id``` aka I.D.

It's like a class, but you can only use it on one section on your page. A class you can use over and over again.

To specify an ID on your stylesheet, you place a # before the name.

Example:

```

<div id="container">
  <img src="great-photo.jpg">
  <p>What a view!</p>
</div>
```

stylesheet:

```
#container {
  width: 50%;
}
```


# Homework

### Read HTML and CSS Tutorials

Don't do this all at once. It could/should take a few hours. And you want to take time to practice and try things out.

- W3Schools HTML [tutorial](https://www.w3schools.com/html/) - down to Layout
  - *I recommend jumping over to CSS tutorials, and then back to reading about and practicing Flexbox afterward.*  There are many ways to lay out items on a webpage, and this takes lots of practice. For this course I will concentrate on Flexbox and using Frameworks. Once you understand how it works, you will probably build your own page layout template and then can re-use this for various sites you build. 
- W3Schools CSS [tutorials](https://www.w3schools.com/css/default.asp) - down to the Box Model section
- [Learn Layout tutorial](http://learnlayout.com/)

- Extra Credit: [Web Design in 4 Minutes](https://jgthms.com/web-design-in-4-minutes/)

## Due next Wednesday by noon

You have three webpages due by next Wednesday!

### A class site of your own

Make a single-page website that will serve as a landing page for the projects you create this semester. The site should be clear and easy to navigate. The code must work properly. The site should have your name or a pseudonym and a clear list of your webpages that you make for class. 

The webpages you make for this class may be hosted on a single site, or you could have works at multiple locations and across many sites. This does not matter as long as your class website links to all of them.

Start by reading Olia Lialina's [Under Construction](http://art.teleportacia.org/observation/vernacular/uc/). Create an indicator on your class website that more content will be coming soon. 

Sign into Glitch. You can remix a site we made earlier or start a new one. Place your name or a pseudonym at the top. Add your content. Start by linking to our class website. 

Add a link to your own text editor webpage.

Your work will be evaluated based on the following. Those with previous HTML and CSS experience will be judged based on their experience and I expect more significant work! We wil give feedback in class next week, and there will be an opportunity to make changes after this, but you should consider this and turn in what you consider to be a complete assignment.

- Design  
  - Is the website intuitive and attractive?
  - Does the design suit the content?
  - Is the design compelling?
- Execution  
  - Does the code work?
  - Does the code make sense?
- Usability
  - Is it clear how to access your pages?
- Consistency
  - is the design consistent or are things in strange or confusing places?

Example sites that rely on good, simple, clear HTML + CSS sites are:

- [Hundred Rabbits](https://100r.co/site/home.html) - solarpunk hacker artists
- [My Blog Is A Digital Garden](https://joelhooks.com/digital-garden) - a ~~blog~~ digital garden
- [HTML Energy](https://html.energy/) - a podcast
- [XXIIVV](https://wiki.xxiivv.com/site/home.html) - personal wiki and project tracking	
- [Sounds of a Revolution](https://soundsofarevolution.glitch.me/) - class site for Ari Melenciano's course at Hunter College
- [Learning Gardens](http://learning-gardens.co/) - landing page for a collaborative group
- [tehn](https://nnnnnnnn.co/) - electronic composer
- [oppenlab](https://www.oppenlab.net/) - a programmer's portfolio
- [Flip's Website](https://garden.literally.fyi/) - blog
- [snarkmarket](http://snarkmarket.com/) - blog of novelist Robin Sloan

### Re-Style the Scripting For The Web syllabus page

You can find the HTML (and a simple starter CSS) on [Glitch right here](https://glitch.com/edit/#!/scripting-website).

**Method:**

1. Remix the class website. You have the HTML file and CSS file. Edit the CSS file, or delete it entirely and start fresh!
2. Make your own choices of colors, fonts, placement. You can make the page brutalist, minimalist, maximalist or something entirely unique. But don't make it bland, broken or blah.

This page should be linked from your new class website.

### A Web-based Text Editor

Review the editors I have hosted at on [Typetype](http://leetusman.com/Typetype). You can check out my [Typetype](https://glitch.com/edit/#!/typetype?) example code on Glitch. But don't steal my styles! Make your own!

The main gimmick here is simple: Add ```contenteditable=true``` to the body tag.

```
<h1>My great text editor</h1>
<body contenteditable="true">
  <p>Starter text here</p>
</body>
```

Make your own custom web-based editor. Consider colors, font, sizes, placements, maybe even starter text. What is the name of your theme? Add the name to the title of the page and put it in a h1 tag at the tag. Write a starter sentence or two that will get us in the mood to type in your editor.

You will be judged on:

- Concept 
  - Does the concept make sense?
  - Is it a novel idea? 
- Execution
  - Does the website work?
  - Is the code fully functional?

