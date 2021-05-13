# simple_nodeapp

This app is just a simple crud app meant to show how we can add user profile, update, delete and display them.

to create a user profile all you need to do is to send a json object of the name, country and email of the user 
using postman or other equivalent testing apps or through http request to this 
link https://akojamsy-nope-app.herokuapp.com/users

if you are using local machine "http://localhost:3000/users/"  you need to set you app to listen via port 3000. 

API ENDPOINTS FOR THE APP are as follows:

To create users, use method "post" http://localhost:3000/users/
example:

{   "name":"James John"
    "country":" USA",
    "email": "akojamsy243@gmail.com"
}

To read users, use the "get" method  http://localhost:3000/users/

To edit/update users profile, use method "patch" with http://localhost:3000/users/:id
example: 

{
    "country":" USA",
    "email": "akojamsy243@gmail.com"
}

send to http://localhost:3000/users/113he5163hdn1t667hdhht6

To delete a user, use the id of the user to be deleted with http://localhost:3000/users/:id

example: 
send to http://localhost:3000/users/113he5163hdn1t667hdhht6  with a method "delete".
