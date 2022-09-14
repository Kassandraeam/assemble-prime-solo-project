<script>
  router.get('/', (req, res) => {
  const query = `SELECT * FROM availability;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all available times', err);
      res.sendStatus(500)
    })

});
</script>


<div day=09/13/22 1125>
<div TODO>
    - [ ] I need to get the logic down today
    Allow n users to be added to the group that the intersection function will run.
    1. there are const arrays. these are the users. maybe an array that holds these arrays. [ [user1], [user2], [user3] ... [userN] ]
    2. then it 'maps' through this big array to give individual arrays.
</div>
<div ORDER OF OPERATIONS>
    1. Select users, checkbox perhaps. Hit submit that confirms that?
    2. GET availability from each user selected. GET that information as an array. (HAVE TO CONVERT TO MY TIME.)
    3. Push each array into a big array. like MondayArray = [ [1], [2], [3] ], TuesdayArray = [same thing]
    4. Run logic on each Weekday array.
    5. Push intersecting numbers for each day into a new array corresponding to that day. ex. TimesThatWorkOnMonday([10], [15])...(THIS INFORMATION IS IN UTC)
    6. Convert that into everyone's respective timezone.
        6a. Example: Converting TimesThatWorkOnMonday[ [10], [15] ](THIS IS IN UTC) for Kas, Gab, Lex:
                Bill: 0300, 0800
                Kas:  0500, 1000
                Gab:  0600, 1100
    7. Show that time as a time that works.
<div DO!>
1. When I click Gab's Schedule button, it should send me to her page and display her availability in MY time.
    X Need to GO to a page, steps to do that:
        X Make a new component and path that goes to /id?
        X Get Gab's id.
        - maybe onClick of the schedule, dispatch to a saga that triggers a GET request for THAT specific user from the AVAILABILITY table and then saves that information to a userSpecificReducer. Then on the new component, map and display the available times of that user.
        - New protectedroute in App.
        - Takes me to new component that has a path of "/user/:id
</div>
</div>

<div Code: intersection using spread>
    <script>
    const mondayArray = [ [MondayGab], [MondayKas], [MondayBill]]
    // const arr1 = ['Gab'];
    // const arr2 = ['Gab', 'Kas'];
    // const arr3 = ['Gab', 'Kas', 'Bill'];
    const intersection = (arr1, arr2) => {
    const res = [];
    for(let i = 0; i < arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            continue;
        };
        res.push(arr1[i]);
    };
    return res;
    };
    const intersectMany = (...arrs) => {
    let res = arrs[0].slice();
    for(let i = 1; i < arrs.length; i++){
        res = intersection(res, arrs[i]);
    };
    return res;
    };
    console.log(intersectMany(arr1, arr2, arr3));
    const bigArray = [ arr1, arr2, arr3 ]
    console.log('big array without the spread operator:', bigArray)
    console.log('big array using the spread operator: ',...bigArray)
    </script>
</div>
<div Concern!>
    <!-- !Concern: HOW TO DETERMINE AVAILABILITY ON DAYS MONDAY THROUGH SUNDAY! -->
    How do I do this when 
    Monday = 1;
    Tuesday = 2;
    Wednesday = 3;
    so on so forth.
    Maybe I could have it so like I run that intersection function for each day. If day_id = 1, run it. So run it 7 times.
    <!-- !Concern: HOW DO I INPUT N AMOUNT OF SQL QUERIES BASED ON PEOPLE CHOSEN! -->
    How do I ask SQL to get n number of availabilities? 
    ex. choose Gab and Alex.
    SQL, get Gab's schedule.
    SQL, get Lex's schedule.
    SQL, get n's schedule.

    this button runs this sql on this id. shoot it to storage. page load or button click.
    <!-- *CONCERN: Reset button that changes timezone to initial value? -->
    - Will probably need to make a local state and then hold that. Right now I tried to make a local state, but set it equal to user.timezone, which is just capturing each change from the DB. I need that initial INITIAL value.
</div>
</div>





<div day=09/12/22 0900>
<!-- *PLAN OF ATTACK* -->
ORDER OF OPERATIONS:
1. LOGIC. 
<script id='LOGIC'>
const arr1 = [2, 6, 7, 1, 7, 8, 4, 3];
const arr2 = [5, ,7, 2, 2, 1, 3];
const arr3 = [1, 56, 345, 6, 54, 2, 68, 85, 3];
const intersection = (arr1, arr2) => {
   const res = [];
   for(let i = 0; i < arr1.length; i++){
      if(!arr2.includes(arr1[i])){
         continue;
      };
      res.push(arr1[i]);
   };
   return res;
};
const intersectMany = (...arrs) => {
   let res = arrs[0].slice();
   for(let i = 1; i < arrs.length; i++){
      res = intersection(res, arrs[i]);
   };
   return res;
};
console.log(intersectMany(arr1, arr2, arr3));
</script>
2. MAKE PAGE TO SEE OTHER USERS.
3. SO ON AND SO FORTH.
<!--  -->
CODE STUFF:
1. VIEW OTHER USERS
2. SELECT OTHER USERS (this pushes them into an array, maybe object)
3. RUN LOGIC.
4. RETURN COMMON TIME.
<!-- !ISSUES!  -->
- [ ] Duplicates will appear on the DOM.
- [X] When you register a new user, there's an error? 
    - [X] availableTimesSpecificToUser.map is not a function
    <!-- * Peter solved this, when I register a user, on the UserPage component, it tries to map through an array, but the array is empty because the User hasn't gotten the chance to actually select times. Gotta move it >:( -->
- [ ] Days and times appear as numbers that don't make sense to the User.
- [ ] If I'm on the Users page, and click Other Users again in the Nav, it will get the information again.
<!-- TODO: -->
- [ ] Figure out logic that compares n amount of users.
- [ ] See other users to compare schedules to.
- [ ] Friends page:
    - [ ] When I click on a button near their name
    - [ ] It takes me to their page (linked to their ID)
    - [ ] Then it GETS the information.
        - [ ] Select friends
        - [ ] LOGIC that compares. (Do while loop?)
<!-- ?MAYBE USEFUL? -->
https://stackoverflow.com/questions/32767775/compare-n-objects-in-array
function allCommonProperties(objects) {
    if (!objects.length) return [];
    var first = objects[0];
    return Object.keys(first).filter(function(p) {
        return objects.every(function(o) {
             return first[p] === o[p];
        });
    });
})
<!-- ? https://dev.to/christinecontreras/x-ways-to-iterate-over-arrays-and-when-to-use-each-icm ?-->
Use filter when you want to loop through an array using a complex callback function and return all elements that meet the criteria. 
You can use this method to filter duplicates out of an array or find all similar objects in an array. 
This method is also expressive and lets other coders know to look for a new array of all the elements that meet the criteria.
<!-- ? https://bobbyhadz.com/blog/javascript-get-intersection-of-two-arrays -->
Gets the common element in both arrays and moves it to another array. I want to run this function n times (n being number of users selected.)
<script>
function getIntersection(a, b) {
  const set1 = new Set(a);
  const set2 = new Set(b);
  const intersection = [...set1].filter(
    element => set2.has(element)
  );
  return intersection;
}
const arr1 = ['a', 'b', 'c', 'c'];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'a'];
// 👇️ ['a', 'b','c']
console.log(getIntersection(arr1, arr2));
</script>
<!-- ? DO WHILE/WHILE ? -->
do while, body of the loop is executed at least once
1. Body of the loop (This is the getIntersection function)
2. Condition (When does it stop? Have a count of how many times the loop has run. Have an array that contains all of the users arrays. Get the length of that. Stops when count and usersArray.length is equal.)
3. If condition is still true, body is run again.
4. Continues until condition returns false.
<!-- ! Issue: how do I make it go to the next array? -->
<!-- ? Reduce, filter, includes. -->
while loop
1. first evaluates the condition inside the parens.
2. If condition evaluates to true, code inside the while loop is run.
3. The condition is evaluated again.
4. It stops when condition is equal to false.
<!-- ? https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/ -->
<script>
// Declare Two array
const array1 = ['a', 'd', 'm', 'x'];
const array2 = ['p', 'y', 'k'];
// Function call
function findCommonElements2(arr1, arr2) {
 // Create an empty object
 let obj = {};
  // Loop through the first array
  for (let i = 0; i < arr1.length; i++) {
   // Check if element from first array
   // already exist in object or not
   if(!obj[arr1[i]]) {
    // If it doesn't exist assign the
    // properties equals to the
    // elements in the array
    const element = arr1[i];
    obj[element] = true;
   }
  }
  // Loop through the second array
  for (let j = 0; j < arr2.length ; j++) {
  // Check elements from second array exist
  // in the created object or not
  if(obj[arr2[j]]) {
   return true;
  }
 }
 return false;
}
document.write(findCommonElements2(array1, array2))
</script>    
<!-- If a checkbox is checked, do something.
need the await ('begin') for sure.
Don't need the query?
do need the 
await Promise.all(pizzas.map) stuff.
do need the await client.query('COMMIT') stuff.
catch (error)
and the finally. -->
</div>





<div day=09/11/22 1210>
- [x] Get Delete to work
    - [x] I have the ID of the item I want to send,
    - [x] Now I need to make a DELETE request that says, delete the row in the database with this id.
    - [x] Where do I need to dispatch this information?
- [ ] PUT
    - [ ] Show user's timezone
    - [ ] Allow them to edit it.
    - [ ] Need to go back and make it so that the timezone that is in the DB is what is used to set the timezone.
    when the user registers, their timezone is automatically generated. Allow them to change it. It gets sent over as timezone in the register form.
    It gets sent over in this format: fixed offset	'UTC+7'	a fixed offset zone
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
;
</div>





<div day=09/10/22 1327>
- [x] Current issue: When attempting to add 7:00PM to the database, when it converts to UTC, it has an id of 0. Which is not allowed.
- [?] Secondary issue: on EACH click of a checkbox, that information gets added to the availability object. Even UNCLICKING it adds it to the object.
    - may not be an issue because the map only ever shows one occurence of it on the DOM.
</div>