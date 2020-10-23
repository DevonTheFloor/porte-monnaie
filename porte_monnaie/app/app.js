/*
    About: 
    App Created for Nativescript Uplabs competition.
    Using Nativescript Vue, and Pro UI (Charts, Listview & Calendar)
    The app uses static data, the focus was on building the UI and interactions,
    and not on the server side integration, more of Form than Function.
    Awesome learning experience, especially with the layouts and charts integration.
    It's quiet easy to pickup with what you already know HTML, CSS and JS. I am happy with
    the results a good one for approx 12 hours of coding.
    Thanks to Team Nativescript for the awesome work, YOU GUYS ROCK! and the COMMUNITY for all the help.
    And thanks you guys/gals for reviewing my subsmission.
    Thanks UPLABS for the oppurtunity!
    Date:
    25 Nov 2018.
    Developer:
    Jamal Mohammed (jamal@icelabs.in)
    twitter @mdjamal
    App UI:
    Finance calendar and stats
    by Alex Sol (Big thanks to Alex for making this Free for Personal use)
    https://www.uplabs.com/posts/finance-calendar-and-stats 
    https://www.uplabs.com/posts/finances-interface
    Font:
    Quicksand (Bold, Regular) from nativescript vue interactive weather app tutorial
    https://www.dafont.com/quicksand.font
*/

import Vue from 'nativescript-vue';

import Today from './components/Today';
import Balance from './components/Balance';
import Calendar from './components/Calendar';
import RadChart from 'nativescript-ui-chart/vue'

Vue.use(RadChart);

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    render: h => h('frame', [h(Today)])

}).$start();
