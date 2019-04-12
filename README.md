# Eat-Da-Burger

This project creates a burger logger with MySQL, Node, Express, Handlebars, and a homemade ORM (yum!).
The intent is to follow the MVC design pattern including the use of Node and MySQL to query and route
data and then use Handlebars to generate the HTML.

The interface allows the user to enter a selection of burgers that they would like to try.  This list 
is persisted in a sequel database which the user can update any time they like.  Once a burger is 
entered into the system, it is shown in a list and each burger has a button associated with it that
says, "DEVOUR IT!".  Once the user has managed to find the time to go try the burger, they will 
"press" the "DEVOUR IT" button and the burger will be moved to the list, "Burgers that have been 
DEVOURED!!"

Ideas for future enhancements would be to allow the user to enter a ranking or a review of the burger
once they have indeed, devoured it.  Another enhancement would be to allow the user to delete burgers
from the list.

Happy eating!!