<!-- If a checkbox is checked, do something.

need the await ('begin') for sure.
Don't need the query?
do need the 
await Promise.all(pizzas.map) stuff.
do need the await client.query('COMMIT') stuff.
catch (error)
and the finally. -->


9/10/22 1327:
- [x] Current issue: When attempting to add 7:00PM to the database, when it converts to UTC, it has an id of 0. Which is not allowed.
- [?] Secondary issue: on EACH click of a checkbox, that information gets added to the availability object. Even UNCLICKING it adds it to the object.
    - may not be an issue because the map only ever shows one occurence of it on the DOM.


9/11/22 1210:
- [x] Get Delete to work
    - [x] I have the ID of the item I want to send,
    - [x] Now I need to make a DELETE request that says, delete the row in the database with this id.
    - [x] Where do I need to dispatch this information?

- [ ] PUT
    - [ ] Show user's timezone
    - [ ] Allow them to edit it.
    - [ ] Need to go back and make it so that the timezone that is in the DB is what is used to set the timezone.

My time: 1700
Paris:   2400
UTC:     2200

therefore, its UTC is UTC+2.

UTC:     2200
Paris:   2400



    let chosenYear = testSettingZone.year;
    let chosenMonth = testSettingZone.month;
    let chosenDay = testSettingZone.day;
    let chosenHour = testSettingZone.hour;
    let chosenTimeConvertedToUTC = DateTime.utc(chosenYear, chosenMonth, chosenDay, chosenHour) // ! EXPECTING 2200 in hour.
    console.log('expecting 23, which is what time it is RIGHT NOW in Paris',testSettingZone)
    console.log('Chosen time converted to UTC, expecting 22',chosenTimeConvertedToUTC);