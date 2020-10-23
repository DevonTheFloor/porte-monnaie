<!--
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
-->

<template>
    <Page class="page" actionBarHidden="true">
        <!-- <ActionBar title="Home" class="action-bar" /> -->

        <DockLayout stretchLastChild="true">
            <!-- Summary -->
            <StackLayout orientation="vertical" dock="top">
                <!-- Navigaton -->
                <GridLayout rows="auto" columns="75,*,75" class="action-bar p-20">
                    <Image src="~/images/iconToday.png" class="action-item" row="0"
                        col="0" @tap="goToTodayPage" stretch="aspectFit"
                        width="24" horizontalAlignment="left" />
                    <Image src="~/images/iconCalendar.png" class="action-item"
                        row="0" col="1" @tap="goToCalendarPage" stretch="aspectFit"
                        width="24" horizontalAlignment="center" opacity="0.2" />
                    <Image src="~/images/iconBalance.png" class="action-item" row="0"
                        col="2" @tap="goToBalancePage" stretch="aspectFit"
                        width="24" horizontalAlignment="right" opacity="0.2" />
                </GridLayout>
                <!-- /Navigation -->

                <GridLayout columns="*, *" rows="auto, auto" class="m-y-30 m-x-20">
                    <!-- Date Today -->
                    <Label :text="day" row="0" col="0" class="large" />
                    <Label :text="month + ' ' + date + ', ' + year" row="1" col="0" class="body small"
                        color="#C2C8E6" />
                    <!-- Spending this month -->
                    <Label text="$580" row="0" col="1" class="large text-right"
                        color="#89D5E2" />
                    <Label text="Spent this month" row="1" col="1" class="body small text-right"
                        color="#89D5E2" />
                </GridLayout>
            </StackLayout>
            <!-- /Summary -->

            <!-- Tip -->
            <StackLayout orientation="vertical" class="m-tt-30 p-y-30"
                backgroundColor="#282E4B" dock="bottom">
                <GridLayout columns="80, *" rows="auto" class="m-x-20">
                    <Image src="~/images/tip-chart-icon.png" row="0" col="0" />
                    <Label text="In the past 30 days you spent $130 on ridesharing. Usually you spend $90."
                        row="0" col="1" class="body m-l-20" textWrap="true"
                        color="#89D5E2" />
                </GridLayout>
            </StackLayout>
            <!-- /Tip -->

            <!-- Transactions -->
            <StackLayout orientation="vertical" class="m-t-30"
                backgroundColor="#2C3251">
                <!-- <ListView class="list-group" for="transaction in transactions" @itemTap="onItemTap" style="height:100%" separatorColor="transparent" backgroundColor="#2C3251" @itemLoading="onItemLoading($event)">
                    <v-template>
                        <GridLayout columns="100, *" rows="auto, auto, auto" class="m-l-20">
	                        <Label :text="'-' + transaction.amount" row="0" col="0" class="h1" color="#89D5E2" />
	                        <Label :text="transaction.date" row="1" col="0" class="body p-l-15" />
	                        <Label :text="transaction.name" row="0" col="1" class="h2 p-r-20" />
	                        <Label :text="transaction.address" row="1" col="1" class="body p-r-20" color="#C2C8E6" />
	                        <StackLayout class="hr-light m-y-20" row="2" col="1" v-if="!transaction.last"></StackLayout>
							<StackLayout class="m-y-20" row="2" col="1" v-else="transaction.last"></StackLayout>
	                    </GridLayout>
                    </v-template>
                </ListView> -->

                <RadListView ref="listView" for="transaction in transactions"
                    @itemTap="onRadItemTap" backgroundColor="#2C3251">
                    <v-template>
                        <GridLayout columns="100, *" rows="auto, auto, auto"
                            class="p-l-20" backgroundColor="#2C3251">
                            <Label :text="'-' + transaction.amount" row="0"
                                col="0" class="h1" color="#89D5E2" />
                            <Label :text="transaction.date" row="1" col="0"
                                class="body p-l-15" />
                            <Label :text="transaction.name" row="0" col="1"
                                class="h2 p-r-20" />
                            <Label :text="transaction.address" row="1" col="1"
                                class="body p-r-20" color="#C2C8E6" />
                            <StackLayout class="hr-light m-y-20" row="2" col="1"
                                v-if="!transaction.last"></StackLayout>
                            <StackLayout class="m-y-20" row="2" col="1"
                                v-else="transaction.last"></StackLayout>
                        </GridLayout>
                    </v-template>
                </RadListView>
            </StackLayout>
            <!-- /Transactions -->



        </DockLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadListView from "nativescript-ui-listview/vue";
    Vue.use(RadListView);
    // import { isAndroid, isIOS } from "tns-core-modules/platform";
    import Balance from "./Balance";
    import Calendar from "./Calendar";
    export default {
        created() {
			

            var currentDate = new Date();
            var day = currentDate.getDay();
            var date = currentDate.getDate();
			var year = currentDate.getFullYear();
            
            var weekdays = new Array(7);
            weekdays[0] = "Sunday";
            weekdays[1] = "Monday";
            weekdays[2] = "Tuesday";
            weekdays[3] = "Wednesday";
            weekdays[4] = "Thursday";
            weekdays[5] = "Friday";
            weekdays[6] = "Saturday";
            var dayName = weekdays[day];
            
            this.day = dayName;
            this.date = date;
			this.year = year;

            var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

            var monthName = month[currentDate.getMonth()];
            this.month = monthName;
        },
        
        methods: {
            // onItemTap: function(args) {
            //     console.log("Item with index: " + args.index + " tapped");
            // },

            onRadItemTap({
                item
            }) {
                console.log(`Tapped on ${item.name}`);
            },

            // onItemLoading: function(args) {
            //   if (isIOS) {
            //     const iosCell = args.ios;
            //     iosCell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
            //   }
            // },

            goToBalancePage() {
                this.$navigateTo(Balance, {
                    transition: {
                        name: "fade",
                        duration: 380,
                        curve: "spring"
                    },
                    backstackVisible: false,
                    clearHistory: true
                });
            },

            goToCalendarPage() {
                this.$navigateTo(Calendar, {
                    transition: {
                        name: "fade",
                        duration: 380,
                        curve: "spring"
                    },
                    backstackVisible: false,
                    clearHistory: true
                });
            }
        },

        data() {
            return {
                transactions: [{
                        name: "Pharmacy",
                        address: "Market str.",
                        amount: "$24",
                        date: "2h ago"
                    },
                    {
                        name: "Apple Store",
                        address: "300 Post Street",
                        amount: "$124",
                        date: "3h ago"
                    },
                    {
                        name: "Starbucks",
                        address: "Market str.",
                        amount: "$9",
                        date: "4h ago"
                    },
                    {
                        name: "Transfer to John Mayer",
                        address: "",
                        amount: "$17",
                        date: "4h ago"
                    },
                    {
                        name: "Pharmacy",
                        address: "Market str.",
                        amount: "$24",
                        date: "2h ago"
                    },
                    {
                        name: "Apple Store",
                        address: "300 Post Street",
                        amount: "$124",
                        date: "3h ago"
                    },
                    {
                        name: "Starbucks",
                        address: "Market str.",
                        amount: "$9",
                        date: "4h ago"
                    },
                    {
                        name: "Transfer to John Mayer",
                        address: "",
                        amount: "$17",
                        date: "4h ago",
                        last: true
                    }
                ]
            };
        }
    };
</script>

<style scoped>
</style>