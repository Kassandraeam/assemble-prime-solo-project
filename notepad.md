<!-- If a checkbox is checked, do something.

need the await ('begin') for sure.
Don't need the query?
do need the 
await Promise.all(pizzas.map) stuff.
do need the await client.query('COMMIT') stuff.
catch (error)
and the finally. -->


9/10/22 1327:
- [] Current issue: When attempting to add 7:00PM to the database, when it converts to UTC, it has an id of 0. Which is not allowed.
- [] Secondary issue: on EACH click of a checkbox, that information gets added to the availability object. Even UNCLICKING it adds it to the object.