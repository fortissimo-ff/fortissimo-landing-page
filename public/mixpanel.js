//This function executes when a user loads the landing page.
function pageLoaded() {
   mixpanel.track("Page Load");
}

//This function executes when a user clicks the "Learn More" button on the landing page.
function learnMore() {
   mixpanel.track("Learn More");
}

//This function executes every time a video is played.
function videoPlayed() {
   mixpanel.track("Video Play");
}

//This function executes when a user clicks the chat link on the landing page.
function chat(email, phone) {
   mixpanel.alias(email);
   mixpanel.track("Chat");
   // track click for link id #nav
   mixpanel.track_links('#nav', 'Clicked Nav Link');

   // track submission for form id 'register'
   mixpanel.track_forms('#register', 'Created Account');
}

//This function executes when a user clicks the join link on the landing page.
function join(email, name, phone) {
   mixpanel.identify(email);
   mixpanel.track("Join");
   // track click for link id #nav
   mixpanel.track_links('#nav', 'Clicked Nav Link');

   // track submission for form id 'register'
   mixpanel.track_forms('#register', 'Created Account');
}