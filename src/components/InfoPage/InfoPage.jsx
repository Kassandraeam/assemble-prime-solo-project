import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>

      <div>
        <p>Technologies used:</p>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>Tailwind</li>
          <li>Luxon</li>
        </ul>
      </div>
      <br></br>
      <div>
        <p>Toughest Challenge:</p>
        <ul>
          <li>Converting time</li>
          <li>Current challenge: Figuring out how to only get the information I need for the users selected, based on the days selected</li>
        </ul>
      </div>
      <br></br>
      <div>
        <p>One thing I'm really excited to tackle:</p>
        <ul>
          <li>Figuring out and really nailing down this concept of making n number of requests in succession.</li>
        </ul>
      </div>
      <br></br>
      <div>
        <p>Thank you!</p>
        <ul>
          <li>My Mom and Dad for having home made pizza in the microwave when I come home after staying late on campus and for supporting me in anything I set my eyes on.</li>
          <li>The amazing instructors here at Prime for reminding us that we are more than our code.</li>
          <li>My Mitchison Cohort!</li>
        </ul>
      </div>
    </>
  );
}

export default InfoPage;
