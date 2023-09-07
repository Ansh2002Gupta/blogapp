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
<br> **Communication between Server and CLient** <br>
A *Rest Api* has been created to act as an interface in transfering the information from client to server and vice-versa. The database administrator used in MySql Workbench.<br>
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
