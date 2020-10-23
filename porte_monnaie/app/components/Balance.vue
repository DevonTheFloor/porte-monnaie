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

        <DockLayout stretchLastChild="true">
            <!-- Head -->
            <StackLayout orientation="vertical" dock="top">
                <!-- Navigaton -->
                <GridLayout rows="auto" columns="75,*,75" class="action-bar p-20">
                    <Image src="~/images/iconToday.png" class="action-item"
                        row="0" col="0" @tap="goToTodayPage" stretch="aspectFit"
                        width="24" horizontalAlignment="left" opacity="0.2" />
                    <Image src="~/images/iconCalendar.png" class="action-item"
                        row="0" col="1" @tap="goToCalendarPage" stretch="aspectFit"
                        width="24" horizontalAlignment="center" opacity="0.2" />
                    <Image src="~/images/iconBalance.png" class="action-item"
                        row="0" col="2" @tap="goToBalancePage" stretch="aspectFit"
                        width="24" horizontalAlignment="right" />
                </GridLayout>
                <!-- /Navigation -->

                <GridLayout columns="*" rows="auto, auto" class="m-y-30 m-x-20">
                    <Label text="Balance" row="0" col="0" class="large" />
                    <Label :text="month + ' ' + date + ', ' + year" row="1"
                        col="0" class="body small" color="#C2C8E6" />
                </GridLayout>

                <GridLayout columns="auto, auto" rows="auto, auto" margin="70 20 30 20">
                    <!-- Spending current month -->
                    <Label text="$3,580" row="0" col="0" class="medium p-r-20"
                        color="#89D5E2" />
                    <Label text="Current" row="1" col="0" class="body p-r-20 xsmall text-uppercase"
                        color="#89D5E2" />
                    <!-- Spending last month -->
                    <Label text="$1,220" row="0" col="1" class="medium p-l-30"
                        color="#C2C8E6" />
                    <Label text="Last Month" row="1" col="1" class="p-l-30 body xsmall text-uppercase"
                        color="#C2C8E6" />
                </GridLayout>
            </StackLayout>
            <!-- /Head -->

            <!-- Chart -->
            <StackLayout orientation="vertical" class="p-t-30"
                backgroundColor="#282E4B" dock="bottom">
                <GridLayout rows="auto, *" columns="*" height="1000px">
                    <Label row="0" col="0" text="Goal: $4,000" class="chart-example-tytle-style text-right xsmall text-uppercase p-r-20"
                        textWrap="true" color="#89D5E2" />
                    <RadCartesianChart row="1" col="0" selectionMode="Single"
                        backgroundColor="transparent" color="white" width="100%">
                        <CategoricalAxis lineColor="#30D8D8D8" labelTextColor="#C2C8E6"
                            labelSize="11" lineThickness="1" labelLayoutMode="inner"
                            lineHidden="true" labelMargin="10"
                            v-tkCartesianHorizontalAxis />
                        <LinearAxis lineColor="#D8D8D8" lineThickness="1"
                            hidden="true" labelLayoutMode="inner"
                            v-tkCartesianVerticalAxis />
                        <SplineAreaSeries seriesName="Area" categoryProperty="Day"
                            :items="currentMonth" stackMode="None"
                            valueProperty="Amount" selectionMode="Series"
                            v-tkCartesianSeries />
                        <SplineAreaSeries seriesName="Area" categoryProperty="Day"
                            :items="lastMonth" stackMode="None" valueProperty="Amount"
                            selectionMode="Series" v-tkCartesianSeries />
                        <RadCartesianChartGrid horizontalLinesVisible="true"
                            verticalLinesVisible="false"
                            verticalStripLinesVisible="false"
                            horizontalStripLinesVisible="false"
                            horizontalStrokeColor="#30D8D8D8"
                            v-tkCartesianGrid />
                        <Palette seriesName="Area" v-tkCartesianPalette>
                            <PaletteEntry fillColor="#3051599A" strokeColor="#7FCFDC"
                                strokeWidth="2" />
                            <PaletteEntry fillColor="#109BABFF" strokeColor="#109BABFF"
                                strokeWidth="2" />
                        </Palette>
                        <Palette seriesName="Area" seriesState="Selected"
                            v-tkCartesianPalette>
                            <PaletteEntry fillColor="#6051599A" strokeColor="#7FCFDC"
                                strokeWidth="2" />
                            <PaletteEntry fillColor="#409BABFF" strokeColor="#609BABFF"
                                strokeWidth="2" />
                        </Palette>
                    </RadCartesianChart>
                </GridLayout>
            </StackLayout>
            <!-- /Chart -->
        </DockLayout>
    </Page>
</template>

<script>
    require("nativescript-ui-chart/vue");
    import Today from "./Today";
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
            goToTodayPage() {
                this.$navigateTo(Today, {
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
                currentMonth: [{
                        Day: "1",
                        Amount: 51
                    },
                    {
                        Day: "10",
                        Amount: 20
                    },
                    {
                        Day: "15",
                        Amount: 89
                    },
                    {
                        Day: "20",
                        Amount: 110
                    }
                ],
                lastMonth: [{
                        Day: "1",
                        Amount: 60
                    },
                    {
                        Day: "10",
                        Amount: 50
                    },
                    {
                        Day: "15",
                        Amount: 91
                    },
                    {
                        Day: "20",
                        Amount: 95
                    },
                    {
                        Day: "31",
                        Amount: 160
                    }
                ]
            };
        }
    };
</script>

<style scoped>
</style>