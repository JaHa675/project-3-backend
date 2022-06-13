# [Project #3 - Battle Trail](https://github.com/JaHa675/project-3)

![Badge](https://img.shields.io/badge/license-MIT-blue)

---

# Description

This is the backend Repository for Battle Trail. Front end repo can be found [here](https://github.com/JaHa675/project-3)! 

Welcome to the Battle Trail, a fun & exiting 2D RPG that is heavily inspired by 2000s pixelated games. As enginners, we liked the thought of a game that combined all of our love for games and challlenged us to create something new. We used technologies like React, JavaScript, and Phaser Game Engine to bring our idea of a quirky, sprite dominated game to life. Throughout the game you will see lots of pixel art from open soure sprite resources and characters that are based off the creators. We hope that you find joy in the little things will working your way through Battle Trail!


Check out our deployed project [here](https://battle-trail.herokuapp.com)! 

&nbsp;

---
# Table of Contents

  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [Contact](#contact)
  - [License](#license)

&nbsp;

---
# Installation

Instructions: 
1. Fork the application front end repository & the application back end repository from GitHub and clone this project to your machine.
2. Open the projects with your preferred text-editor, such as VS code.
3. Prerequisite installations: Node.js, MySQL, React.
4. This project includes a `package.json` file that specifies dependencies for this project, which can be installed by running the command `"npm install"`.

&nbsp;

---
# Usage

Once the front end repository has been installed:
1. Open the project file within your terminal
2. Run command `"npm install"` to download all of the npm packages and their dependencies required to run the application.
3. Run command `"mysql -u root -p"` and enter your password (note: keystrokes will not show).
4. Run command `"SOURCE schema.sql"` followed by `"USE fotofoto_db"` to set up the database and tables.
5. Create a file called `.env` in the root folder of the program. In this folder include the following information: <br>
  - `DB_NAME = 'game_db'`
  - `DB_USER = 'your username'`
  - `DB_PW = 'your password'`
  - `JWT_SECRET = 'your session secret'`
5. Open the "server.js" file in your integrated terminal.
6. Run command `"npm run seed"` to seed the database.
7. Run command `"npm run start"` to start the server.
8. Sign up as a new user and upload/edit images as desired.
9.  When finished, run command `CONTROL-C` in the terminal to end the session.
10. Run command `"npm run start"` and React will start a local server at localhost:3001 on your default browser.
11. Open the front end repository and repeat steps 1 & 2. Running the server for both the front end and back end are necessary for use.
12. Sign up as a new user and play through the game!
13. When finished, run command `CONTROL-C` in the terminal to end the session.

&nbsp;

---
# Technologies Used

General Technologies: 
- [HTML](https://html.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.javascript.com/)
- [Node](https://www.npmjs.com/package/node)
- [Heroku](https://www.heroku.com/)


NPM Packages
- [dotenv](https://www.npmjs.com/package/react-router-dom)
- [nodemon](https://www.npmjs.com/package/nodemon) 
- [Express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL2](https://www.npmjs.com/package/mysql)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [serve](https://www.npmjs.com/package/serve)

&nbsp;

---

&nbsp;

---

&nbsp;

---
# Contributing

This project was completed as a collaborative group for Project 3 from the University of Washington Full Stack Flex Coding Bootcamp. If you would like to contribute, please feel free to contact any of the team members with questions or comments. Our github links and emails can be found below.

&nbsp;
---
# Contact

If you have any questions feel free to contact our team:
- Dahlia Graves | [Github](https://github.com/DahliaGRV) | [email](dahlialolagraves@gmail.com)
- Lucas Roman | [Github](https://github.com/remotemana) | [email](lucas.e.roman@gmail.com)
- James Harding | [Github](https://github.com/JaHa675) | [email](jamesharding675@gmail.com)
- Brooke Love | [Github](https://github.com/brookelove) | [email](brookelovedevelops@gmail.com)

&nbsp;

---
## License

[MIT License](./LICENSE) 

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
