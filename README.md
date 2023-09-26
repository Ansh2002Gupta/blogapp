# Introduction
This repository contains a versatile multi-user web application name ***Memoir***. This application can be used both on computers and mobile phones. Through this application I have tried to bring the creative minds from all over the globe to express their thoughts, write stories and narrate their experiences on a certain topic. There are various thematic sections in the application like *art*, *science*, *health*, etc. I will be telling you about various features of the application so stay tunned !

# Special Features
<ul>
  <li>The website is end-to-end secure with a beautifull signIn and signUp page. It uses <i>Json Web Token</i> for easy user authentications.</li>
  <li>The application consists of various thematic sections, on the basis of which different kind oof blogs written by user from all over the globe have been categorized.</li>
  <li>It also contains a <i>View Author</i> section that would help the user to know more about the author of the blog. The users will be able to get some more insights by viewing the various other blogs written by the user.</li>
  <li>It contains a <i>blog writting</i> section where the user can compose there blog, add images, and post the blog. Only an authorized usser will be able to update the blog.</li>
  <li>A valid user can only <i>create, update and delete</i> his own blogs.</li>
</ul>

# Architectural Design
**Webpages and components** <br>
All the webpages and components have been made with *ReactJs, JavaScript, HTML, Tailwind CSS.* <br>
<br> **Communication between Server and Client** <br>
A *Rest Api* has been created to act as an interface in transfering the information from client to server and vice-versa. The database administrator used is MySql Workbench.<br>
<br> **User Authentication System** <br>
The signIn and signUp pages provide the user authentication system through *Json Web Token*. It is used to generate the authentication token which is used to authorize the user to enter into the website and for various other task like to update or delete a post only if it belongs to him.<br>
<br> **Data Storage** <br>
All the information related to the user is getting stored in the MySql database. Used a different library known as *Multer* that allows to store the images uploaded by the user into the database as well as on the client side. This not only removes the storage issues but also help in fast retrieval of the data.<br> 

# How to run on localhost ?
**Prerequistes**
<ol>
  <li>Vs code should be installed.</li>
  <li> Run install <a href="https://nodejs.org/en/download">NodeJs</a></li>
</ol>
<hr>
<ul>
  <li>Firstly clone this repository into a single folder in your computer.</li>
  <li>Open the folder inside <a href="https://code.visualstudio.com/download">VS Code</a></li>
  <li>Install all the dependencies required in creating the project.</li>
  <li>Inside the Server folder install ExpressJS using <i>npm install express</i>.</li>
  <li>Download the <a href="https://dev.mysql.com/downloads/workbench/">MySql Workbench</a>. Create database <i>blog</i> which contains two tables <i>users</i> and <i>posts</i>.</li>
  <li>Always keep your MySql Workbench in a <b>running state.</b></li>
  <li>Split the command line into two and change the directories to Server and Client folder in respective folder and run <i>npm run start</i> and <i>npm run dev</i></li>
  <li><b>Enjoy!! :)</b></li>
</ul>

# Screenshots
![Memoir1](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/420301d1-1a37-4986-beb8-fa3c9025991a)
![Memoir2](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/804900b7-2270-4e92-86c1-abcd4f41210b)
![Memoir3](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/6b6d0b25-1ea8-4918-8184-13fbd43c0279)
![Memoir4](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/f814efe9-634b-4bdf-b140-861c83ae281a)
![Memoir5](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/a7b768e4-cc58-4fd3-94f2-464650d3a95a)
![Memoir7](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/0e277ba4-7040-4b46-b1b8-49f715161ae2)
![Memoir8](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/effd8bdd-bd36-4f52-b47f-66e58aface51)
![Memoir9](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/e3c36e7b-bc9d-4c44-b8b8-76c28cfc5842)
![Memoir10](https://github.com/Ansh2002Gupta/blogapp/assets/84438495/1e27d4cd-5202-4a38-ae11-ec632bbeb2c8)
