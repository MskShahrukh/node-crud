This app shows the simple CRUD functionality with node and mongodb.

/////////////////////////////////////

you need to have mongodb running on your localhost:27017


1 - "/getUsers" gets you all the users , (also the main localhost:3000 redirects to the /etUsers)

2 - the app itself creates users with "/createUser/username" in the url after localhost 3000

you can see that block of code in server.js file (infact all the crud opertaions are handled in server.js file

3 - Use "/updateUser/:id/:name" in the URL to update the name of a user depending on their id


4 - "/getUser/:id" gets the user with id 