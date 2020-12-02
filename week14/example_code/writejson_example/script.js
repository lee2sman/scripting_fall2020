const fs = require('fs');

let data =
  {
    "students":
    [
      {
	"name":"Belinda",
	"age":24
      },
      {
	"name":"Herb",
	"age":18
      },
      {
        "name":"Rolf",
	"age":33
      }
    ]
  }

const content = JSON.stringify(data);


fs.writeFile('student-data.json', content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
