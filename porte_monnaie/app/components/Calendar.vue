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
					<Image src="~/images/iconToday.png" class="action-item" row="0" col="0" @tap="goToTodayPage" stretch="aspectFit" width="24"
					 horizontalAlignment="left" opacity="0.2" />
					<Image src="~/images/iconCalendar.png" class="action-item" row="0" col="1" @tap="goToCalendarPage" stretch="aspectFit" width="24"
					 horizontalAlignment="center" />
					<Image src="~/images/iconBalance.png" class="action-item" row="0" col="2" @tap="goToBalancePage" stretch="aspectFit" width="24"
					 horizontalAlignment="right" opacity="0.2" />
				</GridLayout>
				<!-- /Navigation -->

				<RadCalendar :monthViewStyle='monthViewStyle' height="300"></RadCalendar>
				<!-- <RadCalendar height="300" /> -->
			</StackLayout>
			<!-- /Summary -->

			<!-- Footer -->
			<StackLayout orientation="vertical" dock="bottom" padding="5 0 10 0">
				<!-- <GridLayout columns="30, *" rows="auto" class="p-l-20">
					<Image src="~/images/iconNewPayment.png" row="0" col="0" width="20" stretch="aspectFit" margin="0 0 0 0" horizontalAlignment="left"
					/>
					<Label text="schedule new payment" row="0" col="1" class="body"
                        color="#C2C8E6" />
                </GridLayout> -->

                <GridLayout columns="30, *, 100" rows="auto" class="m-t-30 p-l-20">
                    <Image src="~/images/iconAllCategory.png" row="0" col="0"
                        width="28" stretch="aspectFit" android:style="margin: -10 0 0 -5" ios:style="margin-left: -5" horizontalAlignment="left" />
                    <Label text="All Categories" row="0" col="1" class="h3"
                        color="#89D5E2" />
                    <Label text="$117.99" row="0" col="2" class="h2 p-r-20"
                        color="#89D5E2" horizontalAlignment="right" />
                </GridLayout>
            </StackLayout>
            <!-- /Footer -->

            <!-- Transactions -->
            <StackLayout orientation="vertical" class="m-t-30"
                backgroundColor="#2C3251">
                <RadListView ref="listView" for="payment in payments"
                    @itemTap="onItemTap" backgroundColor="#2C3251">
                    <v-template>
                        <GridLayout columns="30, *, 100" rows="auto, auto, auto" class="p-l-20" backgroundColor="#2C3251">
                            <Image :src="payment.tag | tagclass" row="0" col="0" rowSpan="3" width="12" stretch="aspectFit" verticalAlignment="top" horizontalAlignment="left" android:style="margin-top: 5" ios:style="margin-top: 9" />
                            <Label :text="payment.name" row="0" col="1" class="h3" />
                            <Label :text="payment.repeat" row="1" col="1" class="body" color="#C2C8E6" />
                            <Label :text="payment.amount" row="0" col="2" class="h2 p-r-20" color="#89D5E2" horizontalAlignment="right" />
                            <StackLayout class="hr-light m-y-20" row="2" col="1" colSpan="2" v-if="!payment.last"></StackLayout>
                            <StackLayout class="m-7-20" row="2" col="1" colSpan="2" v-else="payment.last"></StackLayout>
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
    import CalendarView from "nativescript-ui-calendar/vue";
    Vue.use(CalendarView);
    import RadListView from "nativescript-ui-listview/vue";
    Vue.use(RadListView);

    import {
        AllDayEventsViewStyle,
        CalendarMonthViewStyle,
        CalendarWeekViewStyle,
        CalendarYearViewStyle,
        CalendarMonthNamesViewStyle,
        CalendarViewMode,
        CalendarDayViewStyle,
        CellStyle,
        DayCellStyle,
        DayEventsViewStyle,
        MonthCellStyle
    } from "nativescript-ui-calendar";

    import {
        isAndroid,
        isIOS
    } from "tns-core-modules/platform";
    import Balance from "./Balance";
    import Today from "./Today";
    export default {
        computed: {
            // monthViewStyle(): CalendarMonthViewStyle {
            monthViewStyle: function() {
                const monthViewStyle = new CalendarMonthViewStyle();
                monthViewStyle.backgroundColor = "#2C3251";
                // monthViewStyle.showTitle = true;
                // monthViewStyle.showWeekNumbers = false;
                // monthViewStyle.showDayNames = true;
                // monthViewStyle.selectionShape = "Round";
                // monthViewStyle.selectionShapeSize = 15;
                monthViewStyle.selectionShapeColor = "#4D7188";

                const todayCellStyle = new DayCellStyle();
                todayCellStyle.cellBackgroundColor = "White";
                // todayCellStyle.cellBorderWidth = 2;
                // todayCellStyle.cellBorderColor = '#f1e8ca';
                todayCellStyle.cellTextColor = "#2C3252";
                // todayCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // todayCellStyle.cellTextFontStyle = 'Bold';
                // todayCellStyle.cellTextSize = 14;
                monthViewStyle.todayCellStyle = todayCellStyle;

                const dayCellStyle = new DayCellStyle();
                // dayCellStyle.showEventsText = true;
                // dayCellStyle.eventTextColor = 'White';
                // dayCellStyle.eventFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // dayCellStyle.eventFontStyle = 'BoldItalic';
                // dayCellStyle.eventTextSize = 8;
                // dayCellStyle.cellAlignment = 'VerticalCenter';
                // dayCellStyle.cellPaddingHorizontal = 10;
                // dayCellStyle.cellPaddingVertical = 5;
                dayCellStyle.cellBackgroundColor = '#2C3251';
                dayCellStyle.cellBorderWidth = 1;
                dayCellStyle.cellBorderColor = '#2C3251';
                dayCellStyle.cellTextColor = "#ffffff";
                // dayCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // dayCellStyle.cellTextFontStyle = 'Bold';
                // dayCellStyle.cellTextSize = 10;
                monthViewStyle.dayCellStyle = dayCellStyle;

                const weekendCellStyle = new DayCellStyle();
                // weekendCellStyle.eventTextColor = 'BlueViolet';
                // weekendCellStyle.eventFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // weekendCellStyle.eventFontStyle = 'BoldItalic';
                // weekendCellStyle.eventTextSize = 8;
                // weekendCellStyle.cellAlignment = 'VerticalCenter';
                // weekendCellStyle.cellPaddingHorizontal = 10;
                // weekendCellStyle.cellPaddingVertical = 5;
                // weekendCellStyle.cellBackgroundColor = '#dd855c';
                // weekendCellStyle.cellBorderWidth = 1;
                // weekendCellStyle.cellBorderColor = '#f1e8ca';
                // weekendCellStyle.cellTextColor = '#745151';
                // weekendCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // weekendCellStyle.cellTextFontStyle = 'Bold';
                // weekendCellStyle.cellTextSize = 12;
                monthViewStyle.weekendCellStyle = weekendCellStyle;

                const selectedCellStyle = new DayCellStyle();
                // selectedCellStyle.eventTextColor = 'Blue';
                // selectedCellStyle.eventFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // selectedCellStyle.eventFontStyle = 'Bold';
                // selectedCellStyle.eventTextSize = 8;
                // selectedCellStyle.cellAlignment = 'VerticalCenter';
                // selectedCellStyle.cellPaddingHorizontal = 10;
                // selectedCellStyle.cellPaddingVertical = 5;
                // selectedCellStyle.cellBackgroundColor = '#dbcbbb';
                // selectedCellStyle.cellBorderWidth = 2;
                // selectedCellStyle.cellBorderColor = '#745151';
                // selectedCellStyle.cellTextColor = 'Black';
                // selectedCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // selectedCellStyle.cellTextFontStyle = 'Bold';
                // selectedCellStyle.cellTextSize = 18;
                monthViewStyle.selectedDayCellStyle = selectedCellStyle;

                // const weekNumberCellStyle = new CellStyle();
                // weekNumberCellStyle.cellBackgroundColor = '#bbcbdb';
                // weekNumberCellStyle.cellBorderWidth = 1;
                // weekNumberCellStyle.cellBorderColor = '#f1e8ca';
                // weekNumberCellStyle.cellTextColor = '#745151';
                // weekNumberCellStyle.cellTextFontName = 'Times New Roman';
                // weekNumberCellStyle.cellTextFontStyle = 'Bold';
                // weekNumberCellStyle.cellTextSize = 8;
                // monthViewStyle.weekNumberCellStyle = weekNumberCellStyle;

                const dayNameCellStyle = new CellStyle();
                dayNameCellStyle.cellBackgroundColor = '#2C3251';
                dayNameCellStyle.cellBorderWidth = 1;
                dayNameCellStyle.cellBorderColor = '#2C3251';
                dayNameCellStyle.cellTextColor = '#ffffff';
                // dayNameCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // dayNameCellStyle.cellTextFontStyle = 'Bold';
                // dayNameCellStyle.cellTextSize = 10;
                monthViewStyle.dayNameCellStyle = dayNameCellStyle;

                const titleCellStyle = new DayCellStyle();
                titleCellStyle.cellBackgroundColor = '#2C3251';
                titleCellStyle.cellBorderWidth = 1;
                titleCellStyle.cellBorderColor = '#2C3251';
                titleCellStyle.cellTextColor = "#ffffff";
                // titleCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
                // titleCellStyle.cellTextFontStyle = 'Bold';
                // titleCellStyle.cellTextSize = 14;
                // titleCellStyle.cellTextTransform = "uppercase";
                monthViewStyle.titleCellStyle = titleCellStyle;

                return monthViewStyle;
            }
        },

        methods: {
            onItemTap({
                item
            }) {
                console.log(`Tapped on ${item.name}`);
            },

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
            }
        },

        filters: {
            tagclass: function(value) {
                value = value.toString();
                return "~/images/" + value + ".png";
            }
        },

        data() {
            return {
                payments: [{
                        name: "Electricity Bill",
                        repeat: "every month",
                        amount: "$108",
                        tag: "purple"
                    },
                    {
                        name: "Dropbox Subscription",
                        repeat: "every month",
                        amount: "$9.99",
                        tag: "yellow"
                    },
                    {
                        name: "Gmail",
                        repeat: "every month",
                        amount: "$10",
                        tag: "yellow"
                    },
                    {
                        name: "GoRails Subscription",
                        repeat: "every month",
                        amount: "$15",
                        tag: "orange",
                        last: true
                    }
                ]
            };
        }
    };
</script>

<style scoped>
</style>