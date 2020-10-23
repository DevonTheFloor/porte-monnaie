require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Balance.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Today.vue");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Calendar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
__webpack_require__("nativescript-ui-chart/vue");



/* harmony default export */ __webpack_exports__["default"] = ({
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
      this.$navigateTo(_Today__WEBPACK_IMPORTED_MODULE_0__["default"], {
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
      this.$navigateTo(_Calendar__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      }, {
        Day: "10",
        Amount: 20
      }, {
        Day: "15",
        Amount: 89
      }, {
        Day: "20",
        Amount: 110
      }],
      lastMonth: [{
        Day: "1",
        Amount: 60
      }, {
        Day: "10",
        Amount: 50
      }, {
        Day: "15",
        Amount: 91
      }, {
        Day: "20",
        Amount: 95
      }, {
        Day: "31",
        Amount: 160
      }]
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Calendar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-calendar/vue");
/* harmony import */ var nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-listview/vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-calendar");
/* harmony import */ var nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/Balance.vue");
/* harmony import */ var _Today__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/Today.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_calendar_vue__WEBPACK_IMPORTED_MODULE_1___default.a);

nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_2___default.a);




/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    // monthViewStyle(): CalendarMonthViewStyle {
    monthViewStyle: function monthViewStyle() {
      var monthViewStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewStyle"]();
      monthViewStyle.backgroundColor = "#2C3251"; // monthViewStyle.showTitle = true;
      // monthViewStyle.showWeekNumbers = false;
      // monthViewStyle.showDayNames = true;
      // monthViewStyle.selectionShape = "Round";
      // monthViewStyle.selectionShapeSize = 15;

      monthViewStyle.selectionShapeColor = "#4D7188";
      var todayCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__["DayCellStyle"]();
      todayCellStyle.cellBackgroundColor = "White"; // todayCellStyle.cellBorderWidth = 2;
      // todayCellStyle.cellBorderColor = '#f1e8ca';

      todayCellStyle.cellTextColor = "#2C3252"; // todayCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
      // todayCellStyle.cellTextFontStyle = 'Bold';
      // todayCellStyle.cellTextSize = 14;

      monthViewStyle.todayCellStyle = todayCellStyle;
      var dayCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__["DayCellStyle"](); // dayCellStyle.showEventsText = true;
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
      dayCellStyle.cellTextColor = "#ffffff"; // dayCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
      // dayCellStyle.cellTextFontStyle = 'Bold';
      // dayCellStyle.cellTextSize = 10;

      monthViewStyle.dayCellStyle = dayCellStyle;
      var weekendCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__["DayCellStyle"](); // weekendCellStyle.eventTextColor = 'BlueViolet';
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
      var selectedCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__["DayCellStyle"](); // selectedCellStyle.eventTextColor = 'Blue';
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

      monthViewStyle.selectedDayCellStyle = selectedCellStyle; // const weekNumberCellStyle = new CellStyle();
      // weekNumberCellStyle.cellBackgroundColor = '#bbcbdb';
      // weekNumberCellStyle.cellBorderWidth = 1;
      // weekNumberCellStyle.cellBorderColor = '#f1e8ca';
      // weekNumberCellStyle.cellTextColor = '#745151';
      // weekNumberCellStyle.cellTextFontName = 'Times New Roman';
      // weekNumberCellStyle.cellTextFontStyle = 'Bold';
      // weekNumberCellStyle.cellTextSize = 8;
      // monthViewStyle.weekNumberCellStyle = weekNumberCellStyle;

      var dayNameCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__["CellStyle"]();
      dayNameCellStyle.cellBackgroundColor = '#2C3251';
      dayNameCellStyle.cellBorderWidth = 1;
      dayNameCellStyle.cellBorderColor = '#2C3251';
      dayNameCellStyle.cellTextColor = '#ffffff'; // dayNameCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
      // dayNameCellStyle.cellTextFontStyle = 'Bold';
      // dayNameCellStyle.cellTextSize = 10;

      monthViewStyle.dayNameCellStyle = dayNameCellStyle;
      var titleCellStyle = new nativescript_ui_calendar__WEBPACK_IMPORTED_MODULE_3__["DayCellStyle"]();
      titleCellStyle.cellBackgroundColor = '#2C3251';
      titleCellStyle.cellBorderWidth = 1;
      titleCellStyle.cellBorderColor = '#2C3251';
      titleCellStyle.cellTextColor = "#ffffff"; // titleCellStyle.cellTextFontName = "Quicksand", "Quicksand-Regular", "Quicksand-Bold";
      // titleCellStyle.cellTextFontStyle = 'Bold';
      // titleCellStyle.cellTextSize = 14;
      // titleCellStyle.cellTextTransform = "uppercase";

      monthViewStyle.titleCellStyle = titleCellStyle;
      return monthViewStyle;
    }
  },
  methods: {
    onItemTap(_ref) {
      var {
        item
      } = _ref;
      console.log("Tapped on ".concat(item.name));
    },

    goToBalancePage() {
      this.$navigateTo(_Balance__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      this.$navigateTo(_Today__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    tagclass: function tagclass(value) {
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
      }, {
        name: "Dropbox Subscription",
        repeat: "every month",
        amount: "$9.99",
        tag: "yellow"
      }, {
        name: "Gmail",
        repeat: "every month",
        amount: "$10",
        tag: "yellow"
      }, {
        name: "GoRails Subscription",
        repeat: "every month",
        amount: "$15",
        tag: "orange",
        last: true
      }]
    };
  }

});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Today.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-ui-listview/vue");
/* harmony import */ var nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Balance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Balance.vue");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Calendar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_listview_vue__WEBPACK_IMPORTED_MODULE_1___default.a); // import { isAndroid, isIOS } from "tns-core-modules/platform";



/* harmony default export */ __webpack_exports__["default"] = ({
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
    onRadItemTap(_ref) {
      var {
        item
      } = _ref;
      console.log("Tapped on ".concat(item.name));
    },

    // onItemLoading: function(args) {
    //   if (isIOS) {
    //     const iosCell = args.ios;
    //     iosCell.selectionStyle = UITableViewCellSelectionStyle.UITableViewCellSelectionStyleNone;
    //   }
    // },
    goToBalancePage() {
      this.$navigateTo(_Balance__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      this.$navigateTo(_Calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }, {
        name: "Apple Store",
        address: "300 Post Street",
        amount: "$124",
        date: "3h ago"
      }, {
        name: "Starbucks",
        address: "Market str.",
        amount: "$9",
        date: "4h ago"
      }, {
        name: "Transfer to John Mayer",
        address: "",
        amount: "$17",
        date: "4h ago"
      }, {
        name: "Pharmacy",
        address: "Market str.",
        amount: "$24",
        date: "2h ago"
      }, {
        name: "Apple Store",
        address: "300 Post Street",
        amount: "$124",
        date: "3h ago"
      }, {
        name: "Starbucks",
        address: "Market str.",
        amount: "$9",
        date: "4h ago"
      }, {
        name: "Transfer to John Mayer",
        address: "",
        amount: "$17",
        date: "4h ago",
        last: true
      }]
    };
  }

});

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Balance.vue?vue&type=template&id=51e90d5e&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page", attrs: { actionBarHidden: "true" } },
    [
      _c(
        "DockLayout",
        { attrs: { stretchLastChild: "true" } },
        [
          _c(
            "StackLayout",
            { attrs: { orientation: "vertical", dock: "top" } },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "action-bar p-20",
                  attrs: { rows: "auto", columns: "75,*,75" }
                },
                [
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconToday.png",
                      row: "0",
                      col: "0",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "left",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToTodayPage }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconCalendar.png",
                      row: "0",
                      col: "1",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "center",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToCalendarPage }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconBalance.png",
                      row: "0",
                      col: "2",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "right"
                    },
                    on: { tap: _vm.goToBalancePage }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "m-y-30 m-x-20",
                  attrs: { columns: "*", rows: "auto, auto" }
                },
                [
                  _c("Label", {
                    staticClass: "large",
                    attrs: { text: "Balance", row: "0", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "body small",
                    attrs: {
                      text: _vm.month + " " + _vm.date + ", " + _vm.year,
                      row: "1",
                      col: "0",
                      color: "#C2C8E6"
                    }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  attrs: {
                    columns: "auto, auto",
                    rows: "auto, auto",
                    margin: "70 20 30 20"
                  }
                },
                [
                  _c("Label", {
                    staticClass: "medium p-r-20",
                    attrs: {
                      text: "$3,580",
                      row: "0",
                      col: "0",
                      color: "#89D5E2"
                    }
                  }),
                  _c("Label", {
                    staticClass: "body p-r-20 xsmall text-uppercase",
                    attrs: {
                      text: "Current",
                      row: "1",
                      col: "0",
                      color: "#89D5E2"
                    }
                  }),
                  _c("Label", {
                    staticClass: "medium p-l-30",
                    attrs: {
                      text: "$1,220",
                      row: "0",
                      col: "1",
                      color: "#C2C8E6"
                    }
                  }),
                  _c("Label", {
                    staticClass: "p-l-30 body xsmall text-uppercase",
                    attrs: {
                      text: "Last Month",
                      row: "1",
                      col: "1",
                      color: "#C2C8E6"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              staticClass: "p-t-30",
              attrs: {
                orientation: "vertical",
                backgroundColor: "#282E4B",
                dock: "bottom"
              }
            },
            [
              _c(
                "GridLayout",
                { attrs: { rows: "auto, *", columns: "*", height: "1000px" } },
                [
                  _c("Label", {
                    staticClass:
                      "chart-example-tytle-style text-right xsmall text-uppercase p-r-20",
                    attrs: {
                      row: "0",
                      col: "0",
                      text: "Goal: $4,000",
                      textWrap: "true",
                      color: "#89D5E2"
                    }
                  }),
                  _c(
                    "RadCartesianChart",
                    {
                      attrs: {
                        row: "1",
                        col: "0",
                        selectionMode: "Single",
                        backgroundColor: "transparent",
                        color: "white",
                        width: "100%"
                      }
                    },
                    [
                      _c("CategoricalAxis", {
                        directives: [
                          {
                            name: "tkCartesianHorizontalAxis",
                            rawName: "v-tkCartesianHorizontalAxis"
                          }
                        ],
                        attrs: {
                          lineColor: "#30D8D8D8",
                          labelTextColor: "#C2C8E6",
                          labelSize: "11",
                          lineThickness: "1",
                          labelLayoutMode: "inner",
                          lineHidden: "true",
                          labelMargin: "10"
                        }
                      }),
                      _c("LinearAxis", {
                        directives: [
                          {
                            name: "tkCartesianVerticalAxis",
                            rawName: "v-tkCartesianVerticalAxis"
                          }
                        ],
                        attrs: {
                          lineColor: "#D8D8D8",
                          lineThickness: "1",
                          hidden: "true",
                          labelLayoutMode: "inner"
                        }
                      }),
                      _c("SplineAreaSeries", {
                        directives: [
                          {
                            name: "tkCartesianSeries",
                            rawName: "v-tkCartesianSeries"
                          }
                        ],
                        attrs: {
                          seriesName: "Area",
                          categoryProperty: "Day",
                          items: _vm.currentMonth,
                          stackMode: "None",
                          valueProperty: "Amount",
                          selectionMode: "Series"
                        }
                      }),
                      _c("SplineAreaSeries", {
                        directives: [
                          {
                            name: "tkCartesianSeries",
                            rawName: "v-tkCartesianSeries"
                          }
                        ],
                        attrs: {
                          seriesName: "Area",
                          categoryProperty: "Day",
                          items: _vm.lastMonth,
                          stackMode: "None",
                          valueProperty: "Amount",
                          selectionMode: "Series"
                        }
                      }),
                      _c("RadCartesianChartGrid", {
                        directives: [
                          {
                            name: "tkCartesianGrid",
                            rawName: "v-tkCartesianGrid"
                          }
                        ],
                        attrs: {
                          horizontalLinesVisible: "true",
                          verticalLinesVisible: "false",
                          verticalStripLinesVisible: "false",
                          horizontalStripLinesVisible: "false",
                          horizontalStrokeColor: "#30D8D8D8"
                        }
                      }),
                      _c(
                        "Palette",
                        {
                          directives: [
                            {
                              name: "tkCartesianPalette",
                              rawName: "v-tkCartesianPalette"
                            }
                          ],
                          attrs: { seriesName: "Area" }
                        },
                        [
                          _c("PaletteEntry", {
                            attrs: {
                              fillColor: "#3051599A",
                              strokeColor: "#7FCFDC",
                              strokeWidth: "2"
                            }
                          }),
                          _c("PaletteEntry", {
                            attrs: {
                              fillColor: "#109BABFF",
                              strokeColor: "#109BABFF",
                              strokeWidth: "2"
                            }
                          })
                        ],
                        1
                      ),
                      _c(
                        "Palette",
                        {
                          directives: [
                            {
                              name: "tkCartesianPalette",
                              rawName: "v-tkCartesianPalette"
                            }
                          ],
                          attrs: { seriesName: "Area", seriesState: "Selected" }
                        },
                        [
                          _c("PaletteEntry", {
                            attrs: {
                              fillColor: "#6051599A",
                              strokeColor: "#7FCFDC",
                              strokeWidth: "2"
                            }
                          }),
                          _c("PaletteEntry", {
                            attrs: {
                              fillColor: "#409BABFF",
                              strokeColor: "#609BABFF",
                              strokeWidth: "2"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Calendar.vue?vue&type=template&id=d65116ce&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page", attrs: { actionBarHidden: "true" } },
    [
      _c(
        "DockLayout",
        { attrs: { stretchLastChild: "true" } },
        [
          _c(
            "StackLayout",
            { attrs: { orientation: "vertical", dock: "top" } },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "action-bar p-20",
                  attrs: { rows: "auto", columns: "75,*,75" }
                },
                [
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconToday.png",
                      row: "0",
                      col: "0",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "left",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToTodayPage }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconCalendar.png",
                      row: "0",
                      col: "1",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "center"
                    },
                    on: { tap: _vm.goToCalendarPage }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconBalance.png",
                      row: "0",
                      col: "2",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "right",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToBalancePage }
                  })
                ],
                1
              ),
              _c("RadCalendar", {
                attrs: { monthViewStyle: _vm.monthViewStyle, height: "300" }
              })
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              attrs: {
                orientation: "vertical",
                dock: "bottom",
                padding: "5 0 10 0"
              }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "m-t-30 p-l-20",
                  attrs: { columns: "30, *, 100", rows: "auto" }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/iconAllCategory.png",
                      row: "0",
                      col: "0",
                      width: "28",
                      stretch: "aspectFit",
                      "android:style": "margin: -10 0 0 -5",
                      "ios:style": "margin-left: -5",
                      horizontalAlignment: "left"
                    }
                  }),
                  _c("Label", {
                    staticClass: "h3",
                    attrs: {
                      text: "All Categories",
                      row: "0",
                      col: "1",
                      color: "#89D5E2"
                    }
                  }),
                  _c("Label", {
                    staticClass: "h2 p-r-20",
                    attrs: {
                      text: "$117.99",
                      row: "0",
                      col: "2",
                      color: "#89D5E2",
                      horizontalAlignment: "right"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              staticClass: "m-t-30",
              attrs: { orientation: "vertical", backgroundColor: "#2C3251" }
            },
            [
              _c(
                "RadListView",
                {
                  ref: "listView",
                  attrs: {
                    backgroundColor: "#2C3251",
                    items: _vm.payments,
                    "+alias": "payment"
                  },
                  on: { itemTap: _vm.onItemTap }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var payment = ref.payment
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c(
                            "GridLayout",
                            {
                              staticClass: "p-l-20",
                              attrs: {
                                columns: "30, *, 100",
                                rows: "auto, auto, auto",
                                backgroundColor: "#2C3251"
                              }
                            },
                            [
                              _c("Image", {
                                attrs: {
                                  src: _vm._f("tagclass")(payment.tag),
                                  row: "0",
                                  col: "0",
                                  rowSpan: "3",
                                  width: "12",
                                  stretch: "aspectFit",
                                  verticalAlignment: "top",
                                  horizontalAlignment: "left",
                                  "android:style": "margin-top: 5",
                                  "ios:style": "margin-top: 9"
                                }
                              }),
                              _c("Label", {
                                staticClass: "h3",
                                attrs: {
                                  text: payment.name,
                                  row: "0",
                                  col: "1"
                                }
                              }),
                              _c("Label", {
                                staticClass: "body",
                                attrs: {
                                  text: payment.repeat,
                                  row: "1",
                                  col: "1",
                                  color: "#C2C8E6"
                                }
                              }),
                              _c("Label", {
                                staticClass: "h2 p-r-20",
                                attrs: {
                                  text: payment.amount,
                                  row: "0",
                                  col: "2",
                                  color: "#89D5E2",
                                  horizontalAlignment: "right"
                                }
                              }),
                              !payment.last
                                ? _c("StackLayout", {
                                    staticClass: "hr-light m-y-20",
                                    attrs: { row: "2", col: "1", colSpan: "2" }
                                  })
                                : _c("StackLayout", {
                                    staticClass: "m-7-20",
                                    attrs: { row: "2", col: "1", colSpan: "2" }
                                  })
                            ],
                            1
                          )
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Today.vue?vue&type=template&id=d5aa7b14&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page", attrs: { actionBarHidden: "true" } },
    [
      _c(
        "DockLayout",
        { attrs: { stretchLastChild: "true" } },
        [
          _c(
            "StackLayout",
            { attrs: { orientation: "vertical", dock: "top" } },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "action-bar p-20",
                  attrs: { rows: "auto", columns: "75,*,75" }
                },
                [
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconToday.png",
                      row: "0",
                      col: "0",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "left"
                    },
                    on: { tap: _vm.goToTodayPage }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconCalendar.png",
                      row: "0",
                      col: "1",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "center",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToCalendarPage }
                  }),
                  _c("Image", {
                    staticClass: "action-item",
                    attrs: {
                      src: "~/images/iconBalance.png",
                      row: "0",
                      col: "2",
                      stretch: "aspectFit",
                      width: "24",
                      horizontalAlignment: "right",
                      opacity: "0.2"
                    },
                    on: { tap: _vm.goToBalancePage }
                  })
                ],
                1
              ),
              _c(
                "GridLayout",
                {
                  staticClass: "m-y-30 m-x-20",
                  attrs: { columns: "*, *", rows: "auto, auto" }
                },
                [
                  _c("Label", {
                    staticClass: "large",
                    attrs: { text: _vm.day, row: "0", col: "0" }
                  }),
                  _c("Label", {
                    staticClass: "body small",
                    attrs: {
                      text: _vm.month + " " + _vm.date + ", " + _vm.year,
                      row: "1",
                      col: "0",
                      color: "#C2C8E6"
                    }
                  }),
                  _c("Label", {
                    staticClass: "large text-right",
                    attrs: {
                      text: "$580",
                      row: "0",
                      col: "1",
                      color: "#89D5E2"
                    }
                  }),
                  _c("Label", {
                    staticClass: "body small text-right",
                    attrs: {
                      text: "Spent this month",
                      row: "1",
                      col: "1",
                      color: "#89D5E2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              staticClass: "m-tt-30 p-y-30",
              attrs: {
                orientation: "vertical",
                backgroundColor: "#282E4B",
                dock: "bottom"
              }
            },
            [
              _c(
                "GridLayout",
                {
                  staticClass: "m-x-20",
                  attrs: { columns: "80, *", rows: "auto" }
                },
                [
                  _c("Image", {
                    attrs: {
                      src: "~/images/tip-chart-icon.png",
                      row: "0",
                      col: "0"
                    }
                  }),
                  _c("Label", {
                    staticClass: "body m-l-20",
                    attrs: {
                      text:
                        "In the past 30 days you spent $130 on ridesharing. Usually you spend $90.",
                      row: "0",
                      col: "1",
                      textWrap: "true",
                      color: "#89D5E2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "StackLayout",
            {
              staticClass: "m-t-30",
              attrs: { orientation: "vertical", backgroundColor: "#2C3251" }
            },
            [
              _c(
                "RadListView",
                {
                  ref: "listView",
                  attrs: {
                    backgroundColor: "#2C3251",
                    items: _vm.transactions,
                    "+alias": "transaction"
                  },
                  on: { itemTap: _vm.onRadItemTap }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var transaction = ref.transaction
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c(
                            "GridLayout",
                            {
                              staticClass: "p-l-20",
                              attrs: {
                                columns: "100, *",
                                rows: "auto, auto, auto",
                                backgroundColor: "#2C3251"
                              }
                            },
                            [
                              _c("Label", {
                                staticClass: "h1",
                                attrs: {
                                  text: "-" + transaction.amount,
                                  row: "0",
                                  col: "0",
                                  color: "#89D5E2"
                                }
                              }),
                              _c("Label", {
                                staticClass: "body p-l-15",
                                attrs: {
                                  text: transaction.date,
                                  row: "1",
                                  col: "0"
                                }
                              }),
                              _c("Label", {
                                staticClass: "h2 p-r-20",
                                attrs: {
                                  text: transaction.name,
                                  row: "0",
                                  col: "1"
                                }
                              }),
                              _c("Label", {
                                staticClass: "body p-r-20",
                                attrs: {
                                  text: transaction.address,
                                  row: "1",
                                  col: "1",
                                  color: "#C2C8E6"
                                }
                              }),
                              !transaction.last
                                ? _c("StackLayout", {
                                    staticClass: "hr-light m-y-20",
                                    attrs: { row: "2", col: "1" }
                                  })
                                : _c("StackLayout", {
                                    staticClass: "m-y-20",
                                    attrs: { row: "2", col: "1" }
                                  })
                            ],
                            1
                          )
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.dark.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.dark.css"));
global.registerModule("nativescript-theme-core/css/core.dark.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.dark.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\n    About: \n    App Created for Nativescript Uplabs competition.\n    Using Nativescript Vue, and Pro UI (Charts, Listview & Calendar)\n    The app uses static data, the focus was on building the UI and interactions,\n    and not on the server side integration, more of Form than Function.\n    Awesome learning experience, especially with the layouts and charts integration.\n    It's quite easy to pickup with what you already know HTML, CSS and JS. I am happy with\n    the results a good one for approx 12 hours of coding.\n    Thanks to Team Nativescript for the awesome work, YOU GUYS ROCK! and the COMMUNITY for all the help.\n    And thanks you guys/gals for reviewing my subsmission.\n    Thanks UPLABS for the oppurtunity!\n    Date:\n    25 Nov 2018.\n    Developer:\n    Jamal Mohammed (jamal@icelabs.in)\n    twitter @mdjamal\n    App UI:\n    Finance calendar and stats\n    by Alex Sol (Big thanks to Alex for making this Free for Personal use)\n    https://www.uplabs.com/posts/finance-calendar-and-stats \n    https://www.uplabs.com/posts/finances-interface\n    Font:\n    Quicksand (Bold, Regular) from nativescript vue interactive weather app tutorial\n    https://www.dafont.com/quicksand.font\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.dark.css'"},{"type":"comment","comment":" App Global CSS "},{"type":"rule","selectors":[".page"],"declarations":[{"type":"declaration","property":"background-color","value":"#2C3251"}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#2C3251"}]},{"type":"rule","selectors":["label"],"declarations":[{"type":"comment","comment":" https://www.nativescript.org/blog/using-custom-fonts-in-a-nativescript-app "},{"type":"declaration","property":"font-family","value":"\"Quicksand\", \"Quicksand-Regular\", \"Quicksand-Bold\""},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".large"],"declarations":[{"type":"declaration","property":"font-size","value":"40"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"vertical-align","value":"top"}]},{"type":"rule","selectors":[".medium"],"declarations":[{"type":"declaration","property":"font-size","value":"28"},{"type":"comment","comment":" font-weight: bold; "},{"type":"declaration","property":"margin-bottom","value":"5"},{"type":"declaration","property":"vertical-align","value":"top"}]},{"type":"rule","selectors":[".small"],"declarations":[{"type":"declaration","property":"font-size","value":"15"},{"type":"declaration","property":"margin","value":"0"},{"type":"comment","comment":" text-align: left;  "}]},{"type":"rule","selectors":[".hr-light"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"opacity","value":"0.1"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Today.vue");
/* harmony import */ var _components_Balance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Balance.vue");
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Calendar.vue");
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-chart/vue");
/* harmony import */ var nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_4__);

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
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





nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(nativescript_ui_chart_vue__WEBPACK_IMPORTED_MODULE_4___default.a); // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h('frame', [h(_components_Today__WEBPACK_IMPORTED_MODULE_1__["default"])])
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Balance.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Balance.vue?vue&type=template&id=51e90d5e&scoped=true&");
/* harmony import */ var _Balance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Balance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Balance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51e90d5e",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('51e90d5e')) {
      api.createRecord('51e90d5e', component.options)
    } else {
      api.reload('51e90d5e', component.options)
    }
    module.hot.accept("./components/Balance.vue?vue&type=template&id=51e90d5e&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Balance.vue?vue&type=template&id=51e90d5e&scoped=true&");
(function () {
      api.rerender('51e90d5e', {
        render: _Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Balance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Balance.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Balance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Balance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Balance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Balance.vue?vue&type=template&id=51e90d5e&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Balance.vue?vue&type=template&id=51e90d5e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Balance_vue_vue_type_template_id_51e90d5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Calendar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Calendar.vue?vue&type=template&id=d65116ce&scoped=true&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d65116ce",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('d65116ce')) {
      api.createRecord('d65116ce', component.options)
    } else {
      api.reload('d65116ce', component.options)
    }
    module.hot.accept("./components/Calendar.vue?vue&type=template&id=d65116ce&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Calendar.vue?vue&type=template&id=d65116ce&scoped=true&");
(function () {
      api.rerender('d65116ce', {
        render: _Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Calendar.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Calendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Calendar.vue?vue&type=template&id=d65116ce&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Calendar.vue?vue&type=template&id=d65116ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_d65116ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Today.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Today.vue?vue&type=template&id=d5aa7b14&scoped=true&");
/* harmony import */ var _Today_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Today.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Today_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d5aa7b14",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('d5aa7b14')) {
      api.createRecord('d5aa7b14', component.options)
    } else {
      api.reload('d5aa7b14', component.options)
    }
    module.hot.accept("./components/Today.vue?vue&type=template&id=d5aa7b14&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Today.vue?vue&type=template&id=d5aa7b14&scoped=true&");
(function () {
      api.rerender('d5aa7b14', {
        render: _Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Today.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Today.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Today_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Today.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Today_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Today.vue?vue&type=template&id=d5aa7b14&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Today.vue?vue&type=template&id=d5aa7b14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Today_vue_vue_type_template_id_d5aa7b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "@nativescript/core/application":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/application");

/***/ }),

/***/ "@nativescript/core/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable-array");

/***/ }),

/***/ "@nativescript/core/platform":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/platform");

/***/ }),

/***/ "@nativescript/core/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/formatted-string");

/***/ }),

/***/ "@nativescript/core/text/span":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/text/span");

/***/ }),

/***/ "@nativescript/core/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/action-bar");

/***/ }),

/***/ "@nativescript/core/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/activity-indicator");

/***/ }),

/***/ "@nativescript/core/ui/border":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/border");

/***/ }),

/***/ "@nativescript/core/ui/bottom-navigation":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/bottom-navigation");

/***/ }),

/***/ "@nativescript/core/ui/button":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/button");

/***/ }),

/***/ "@nativescript/core/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/content-view");

/***/ }),

/***/ "@nativescript/core/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/core/view");

/***/ }),

/***/ "@nativescript/core/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/date-picker");

/***/ }),

/***/ "@nativescript/core/ui/frame":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/frame");

/***/ }),

/***/ "@nativescript/core/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/html-view");

/***/ }),

/***/ "@nativescript/core/ui/image":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/image");

/***/ }),

/***/ "@nativescript/core/ui/label":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/label");

/***/ }),

/***/ "@nativescript/core/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/absolute-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/dock-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/flexbox-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/grid-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/layout-base");

/***/ }),

/***/ "@nativescript/core/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/stack-layout");

/***/ }),

/***/ "@nativescript/core/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/layouts/wrap-layout");

/***/ }),

/***/ "@nativescript/core/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-picker");

/***/ }),

/***/ "@nativescript/core/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/list-view");

/***/ }),

/***/ "@nativescript/core/ui/page":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/page");

/***/ }),

/***/ "@nativescript/core/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/placeholder");

/***/ }),

/***/ "@nativescript/core/ui/progress":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/progress");

/***/ }),

/***/ "@nativescript/core/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/proxy-view-container");

/***/ }),

/***/ "@nativescript/core/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/scroll-view");

/***/ }),

/***/ "@nativescript/core/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/search-bar");

/***/ }),

/***/ "@nativescript/core/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/segmented-bar");

/***/ }),

/***/ "@nativescript/core/ui/slider":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/slider");

/***/ }),

/***/ "@nativescript/core/ui/switch":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/switch");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-content-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-content-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip");

/***/ }),

/***/ "@nativescript/core/ui/tab-navigation-base/tab-strip-item":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-navigation-base/tab-strip-item");

/***/ }),

/***/ "@nativescript/core/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tab-view");

/***/ }),

/***/ "@nativescript/core/ui/tabs":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/tabs");

/***/ }),

/***/ "@nativescript/core/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-field");

/***/ }),

/***/ "@nativescript/core/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/text-view");

/***/ }),

/***/ "@nativescript/core/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/time-picker");

/***/ }),

/***/ "@nativescript/core/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/ui/web-view");

/***/ }),

/***/ "@nativescript/core/utils/types":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/types");

/***/ }),

/***/ "@nativescript/core/xml":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/xml");

/***/ }),

/***/ "nativescript-ui-calendar":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar");

/***/ }),

/***/ "nativescript-ui-calendar/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar/vue");

/***/ }),

/***/ "nativescript-ui-chart/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-chart/vue");

/***/ }),

/***/ "nativescript-ui-listview/vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/vue");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9CYWxhbmNlLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9DYWxlbmRhci52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvVG9kYXkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFsYW5jZS52dWU/ZWE4NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZT8yNDAzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9kYXkudnVlP2IxYzgiLCJ3ZWJwYWNrOi8vLy4gc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2FwcFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJCIsIndlYnBhY2s6Ly8vXFxiX1tcXHctXSpcXC4pc2NzcykkIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFsYW5jZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CYWxhbmNlLnZ1ZT81ODQ2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFsYW5jZS52dWU/ODllYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZT83NjU1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FsZW5kYXIudnVlPzc2OGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RheS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RheS52dWU/MzliYSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZGF5LnZ1ZT81NGVjIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3RleHQvc3BhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9hY3Rpb24tYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGl2aXR5LWluZGljYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm90dG9tLW5hdmlnYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvbnRlbnQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb3JlL3ZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZGF0ZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvaHRtbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ltYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9mbGV4Ym94LWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy93cmFwLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wbGFjZWhvbGRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wcm94eS12aWV3LWNvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zY3JvbGwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zZWFyY2gtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3NlZ21lbnRlZC1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItbmF2aWdhdGlvbi1iYXNlL3RhYi1jb250ZW50LWl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXAtaXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWItdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RleHQtZmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGV4dC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RpbWUtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3dlYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3V0aWxzL3R5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3htbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci92dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC12dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbIlRvZGF5IiwiQmFsYW5jZSIsIkNhbGVuZGFyIiwiUmFkQ2hhcnQiLCJWdWUiLCJ1c2UiLCJyZW5kZXIiLCJoIiwiJHN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0hBOztBQUNB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akI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxrREFBa0QsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1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QTtBQUFBLHdDQUFxSyxDQUFnQix5T0FBRyxFQUFDLEM7Ozs7Ozs7O0FDQXpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsMEU7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHlFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSxzRTs7Ozs7OztBQ0FBLHVFOzs7Ozs7O0FDQUEsc0U7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsdUY7Ozs7Ozs7QUNBQSxnRjs7Ozs7OztBQ0FBLHFGOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLDJEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSxtRDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tXG4gICAgQWJvdXQ6IFxuICAgIEFwcCBDcmVhdGVkIGZvciBOYXRpdmVzY3JpcHQgVXBsYWJzIGNvbXBldGl0aW9uLlxuICAgIFVzaW5nIE5hdGl2ZXNjcmlwdCBWdWUsIGFuZCBQcm8gVUkgKENoYXJ0cywgTGlzdHZpZXcgJiBDYWxlbmRhcilcbiAgICBUaGUgYXBwIHVzZXMgc3RhdGljIGRhdGEsIHRoZSBmb2N1cyB3YXMgb24gYnVpbGRpbmcgdGhlIFVJIGFuZCBpbnRlcmFjdGlvbnMsXG4gICAgYW5kIG5vdCBvbiB0aGUgc2VydmVyIHNpZGUgaW50ZWdyYXRpb24sIG1vcmUgb2YgRm9ybSB0aGFuIEZ1bmN0aW9uLlxuICAgIEF3ZXNvbWUgbGVhcm5pbmcgZXhwZXJpZW5jZSwgZXNwZWNpYWxseSB3aXRoIHRoZSBsYXlvdXRzIGFuZCBjaGFydHMgaW50ZWdyYXRpb24uXG4gICAgSXQncyBxdWlldCBlYXN5IHRvIHBpY2t1cCB3aXRoIHdoYXQgeW91IGFscmVhZHkga25vdyBIVE1MLCBDU1MgYW5kIEpTLiBJIGFtIGhhcHB5IHdpdGhcbiAgICB0aGUgcmVzdWx0cyBhIGdvb2Qgb25lIGZvciBhcHByb3ggMTIgaG91cnMgb2YgY29kaW5nLlxuICAgIFRoYW5rcyB0byBUZWFtIE5hdGl2ZXNjcmlwdCBmb3IgdGhlIGF3ZXNvbWUgd29yaywgWU9VIEdVWVMgUk9DSyEgYW5kIHRoZSBDT01NVU5JVFkgZm9yIGFsbCB0aGUgaGVscC5cbiAgICBBbmQgdGhhbmtzIHlvdSBndXlzL2dhbHMgZm9yIHJldmlld2luZyBteSBzdWJzbWlzc2lvbi5cbiAgICBUaGFua3MgVVBMQUJTIGZvciB0aGUgb3BwdXJ0dW5pdHkhXG4gICAgRGF0ZTpcbiAgICAyNSBOb3YgMjAxOC5cbiAgICBEZXZlbG9wZXI6XG4gICAgSmFtYWwgTW9oYW1tZWQgKGphbWFsQGljZWxhYnMuaW4pXG4gICAgdHdpdHRlciBAbWRqYW1hbFxuICAgIEFwcCBVSTpcbiAgICBGaW5hbmNlIGNhbGVuZGFyIGFuZCBzdGF0c1xuICAgIGJ5IEFsZXggU29sIChCaWcgdGhhbmtzIHRvIEFsZXggZm9yIG1ha2luZyB0aGlzIEZyZWUgZm9yIFBlcnNvbmFsIHVzZSlcbiAgICBodHRwczovL3d3dy51cGxhYnMuY29tL3Bvc3RzL2ZpbmFuY2UtY2FsZW5kYXItYW5kLXN0YXRzIFxuICAgIGh0dHBzOi8vd3d3LnVwbGFicy5jb20vcG9zdHMvZmluYW5jZXMtaW50ZXJmYWNlXG4gICAgRm9udDpcbiAgICBRdWlja3NhbmQgKEJvbGQsIFJlZ3VsYXIpIGZyb20gbmF0aXZlc2NyaXB0IHZ1ZSBpbnRlcmFjdGl2ZSB3ZWF0aGVyIGFwcCB0dXRvcmlhbFxuICAgIGh0dHBzOi8vd3d3LmRhZm9udC5jb20vcXVpY2tzYW5kLmZvbnRcbi0tPlxuXG48dGVtcGxhdGU+XG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCIgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuXG4gICAgICAgIDxEb2NrTGF5b3V0IHN0cmV0Y2hMYXN0Q2hpbGQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8IS0tIEhlYWQgLS0+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGRvY2s9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICA8IS0tIE5hdmlnYXRvbiAtLT5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCI3NSwqLDc1XCIgY2xhc3M9XCJhY3Rpb24tYmFyIHAtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25Ub2RheS5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIwXCIgQHRhcD1cImdvVG9Ub2RheVBhZ2VcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIG9wYWNpdHk9XCIwLjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvaWNvbkNhbGVuZGFyLnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVwiMFwiIGNvbD1cIjFcIiBAdGFwPVwiZ29Ub0NhbGVuZGFyUGFnZVwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiBvcGFjaXR5PVwiMC4yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVwiMFwiIGNvbD1cIjJcIiBAdGFwPVwiZ29Ub0JhbGFuY2VQYWdlXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0XCIgaG9yaXpvbnRhbEFsaWdubWVudD1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPCEtLSAvTmF2aWdhdGlvbiAtLT5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqXCIgcm93cz1cImF1dG8sIGF1dG9cIiBjbGFzcz1cIm0teS0zMCBtLXgtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJCYWxhbmNlXCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwibW9udGggKyAnICcgKyBkYXRlICsgJywgJyArIHllYXJcIiByb3c9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjBcIiBjbGFzcz1cImJvZHkgc21hbGxcIiBjb2xvcj1cIiNDMkM4RTZcIiAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCJhdXRvLCBhdXRvXCIgcm93cz1cImF1dG8sIGF1dG9cIiBtYXJnaW49XCI3MCAyMCAzMCAyMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFNwZW5kaW5nIGN1cnJlbnQgbW9udGggLS0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiJDMsNTgwXCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cIm1lZGl1bSBwLXItMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjODlENUUyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJDdXJyZW50XCIgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImJvZHkgcC1yLTIwIHhzbWFsbCB0ZXh0LXVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFNwZW5kaW5nIGxhc3QgbW9udGggLS0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiJDEsMjIwXCIgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cIm1lZGl1bSBwLWwtMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQzJDOEU2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJMYXN0IE1vbnRoXCIgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cInAtbC0zMCBib2R5IHhzbWFsbCB0ZXh0LXVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNDMkM4RTZcIiAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8IS0tIC9IZWFkIC0tPlxuXG4gICAgICAgICAgICA8IS0tIENoYXJ0IC0tPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzcz1cInAtdC0zMFwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzI4MkU0QlwiIGRvY2s9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiYXV0bywgKlwiIGNvbHVtbnM9XCIqXCIgaGVpZ2h0PVwiMTAwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XCIwXCIgY29sPVwiMFwiIHRleHQ9XCJHb2FsOiAkNCwwMDBcIiBjbGFzcz1cImNoYXJ0LWV4YW1wbGUtdHl0bGUtc3R5bGUgdGV4dC1yaWdodCB4c21hbGwgdGV4dC11cHBlcmNhc2UgcC1yLTIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVwidHJ1ZVwiIGNvbG9yPVwiIzg5RDVFMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxSYWRDYXJ0ZXNpYW5DaGFydCByb3c9XCIxXCIgY29sPVwiMFwiIHNlbGVjdGlvbk1vZGU9XCJTaW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIiBjb2xvcj1cIndoaXRlXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcmljYWxBeGlzIGxpbmVDb2xvcj1cIiMzMEQ4RDhEOFwiIGxhYmVsVGV4dENvbG9yPVwiI0MyQzhFNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxTaXplPVwiMTFcIiBsaW5lVGhpY2tuZXNzPVwiMVwiIGxhYmVsTGF5b3V0TW9kZT1cImlubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGlkZGVuPVwidHJ1ZVwiIGxhYmVsTWFyZ2luPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpcyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVhckF4aXMgbGluZUNvbG9yPVwiI0Q4RDhEOFwiIGxpbmVUaGlja25lc3M9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49XCJ0cnVlXCIgbGFiZWxMYXlvdXRNb2RlPVwiaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpbmVBcmVhU2VyaWVzIHNlcmllc05hbWU9XCJBcmVhXCIgY2F0ZWdvcnlQcm9wZXJ0eT1cIkRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwiY3VycmVudE1vbnRoXCIgc3RhY2tNb2RlPVwiTm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wZXJ0eT1cIkFtb3VudFwiIHNlbGVjdGlvbk1vZGU9XCJTZXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGtDYXJ0ZXNpYW5TZXJpZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGxpbmVBcmVhU2VyaWVzIHNlcmllc05hbWU9XCJBcmVhXCIgY2F0ZWdvcnlQcm9wZXJ0eT1cIkRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwibGFzdE1vbnRoXCIgc3RhY2tNb2RlPVwiTm9uZVwiIHZhbHVlUHJvcGVydHk9XCJBbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbk1vZGU9XCJTZXJpZXNcIiB2LXRrQ2FydGVzaWFuU2VyaWVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkQ2FydGVzaWFuQ2hhcnRHcmlkIGhvcml6b250YWxMaW5lc1Zpc2libGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbExpbmVzVmlzaWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN0cmlwTGluZXNWaXNpYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxTdHJpcExpbmVzVmlzaWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsU3Ryb2tlQ29sb3I9XCIjMzBEOEQ4RDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdGtDYXJ0ZXNpYW5HcmlkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFsZXR0ZSBzZXJpZXNOYW1lPVwiQXJlYVwiIHYtdGtDYXJ0ZXNpYW5QYWxldHRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWxldHRlRW50cnkgZmlsbENvbG9yPVwiIzMwNTE1OTlBXCIgc3Ryb2tlQ29sb3I9XCIjN0ZDRkRDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFsZXR0ZUVudHJ5IGZpbGxDb2xvcj1cIiMxMDlCQUJGRlwiIHN0cm9rZUNvbG9yPVwiIzEwOUJBQkZGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFsZXR0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWxldHRlIHNlcmllc05hbWU9XCJBcmVhXCIgc2VyaWVzU3RhdGU9XCJTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10a0NhcnRlc2lhblBhbGV0dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbGV0dGVFbnRyeSBmaWxsQ29sb3I9XCIjNjA1MTU5OUFcIiBzdHJva2VDb2xvcj1cIiM3RkNGRENcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWxldHRlRW50cnkgZmlsbENvbG9yPVwiIzQwOUJBQkZGXCIgc3Ryb2tlQ29sb3I9XCIjNjA5QkFCRkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWxldHRlPlxuICAgICAgICAgICAgICAgICAgICA8L1JhZENhcnRlc2lhbkNoYXJ0PlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8IS0tIC9DaGFydCAtLT5cbiAgICAgICAgPC9Eb2NrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC92dWVcIik7XG4gICAgaW1wb3J0IFRvZGF5IGZyb20gXCIuL1RvZGF5XCI7XG4gICAgaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuL0NhbGVuZGFyXCI7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgdmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICB2YXIgd2Vla2RheXMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICAgICAgICB3ZWVrZGF5c1swXSA9IFwiU3VuZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1sxXSA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1syXSA9IFwiVHVlc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbM10gPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNF0gPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s1XSA9IFwiRnJpZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s2XSA9IFwiU2F0dXJkYXlcIjtcbiAgICAgICAgICAgIHZhciBkYXlOYW1lID0gd2Vla2RheXNbZGF5XTtcblxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIHRoaXMueWVhciA9IHllYXI7XG5cbiAgICAgICAgICAgIHZhciBtb250aCA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcbiAgICAgICAgICAgIG1vbnRoWzFdID0gXCJGZWJydWFyeVwiO1xuICAgICAgICAgICAgbW9udGhbMl0gPSBcIk1hcmNoXCI7XG4gICAgICAgICAgICBtb250aFszXSA9IFwiQXByaWxcIjtcbiAgICAgICAgICAgIG1vbnRoWzRdID0gXCJNYXlcIjtcbiAgICAgICAgICAgIG1vbnRoWzVdID0gXCJKdW5lXCI7XG4gICAgICAgICAgICBtb250aFs2XSA9IFwiSnVseVwiO1xuICAgICAgICAgICAgbW9udGhbN10gPSBcIkF1Z3VzdFwiO1xuICAgICAgICAgICAgbW9udGhbOF0gPSBcIlNlcHRlbWJlclwiO1xuICAgICAgICAgICAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzEwXSA9IFwiTm92ZW1iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzExXSA9IFwiRGVjZW1iZXJcIjtcblxuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoW2N1cnJlbnREYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG1vbnRoTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ29Ub1RvZGF5UGFnZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKFRvZGF5LCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcInNwcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tzdGFja1Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdvVG9DYWxlbmRhclBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhDYWxlbmRhciwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJzcHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIERheTogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBBbW91bnQ6IDUxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIERheTogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiAyMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXk6IFwiMTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogODlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgRGF5OiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBBbW91bnQ6IDExMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBsYXN0TW9udGg6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXk6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiA2MFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXk6IFwiMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogNTBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgRGF5OiBcIjE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBBbW91bnQ6IDkxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIERheTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgQW1vdW50OiA5NVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXk6IFwiMzFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtb3VudDogMTYwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT4iLCI8IS0tXG4gICAgQWJvdXQ6IFxuICAgIEFwcCBDcmVhdGVkIGZvciBOYXRpdmVzY3JpcHQgVXBsYWJzIGNvbXBldGl0aW9uLlxuICAgIFVzaW5nIE5hdGl2ZXNjcmlwdCBWdWUsIGFuZCBQcm8gVUkgKENoYXJ0cywgTGlzdHZpZXcgJiBDYWxlbmRhcilcbiAgICBUaGUgYXBwIHVzZXMgc3RhdGljIGRhdGEsIHRoZSBmb2N1cyB3YXMgb24gYnVpbGRpbmcgdGhlIFVJIGFuZCBpbnRlcmFjdGlvbnMsXG4gICAgYW5kIG5vdCBvbiB0aGUgc2VydmVyIHNpZGUgaW50ZWdyYXRpb24sIG1vcmUgb2YgRm9ybSB0aGFuIEZ1bmN0aW9uLlxuICAgIEF3ZXNvbWUgbGVhcm5pbmcgZXhwZXJpZW5jZSwgZXNwZWNpYWxseSB3aXRoIHRoZSBsYXlvdXRzIGFuZCBjaGFydHMgaW50ZWdyYXRpb24uXG4gICAgSXQncyBxdWlldCBlYXN5IHRvIHBpY2t1cCB3aXRoIHdoYXQgeW91IGFscmVhZHkga25vdyBIVE1MLCBDU1MgYW5kIEpTLiBJIGFtIGhhcHB5IHdpdGhcbiAgICB0aGUgcmVzdWx0cyBhIGdvb2Qgb25lIGZvciBhcHByb3ggMTIgaG91cnMgb2YgY29kaW5nLlxuICAgIFRoYW5rcyB0byBUZWFtIE5hdGl2ZXNjcmlwdCBmb3IgdGhlIGF3ZXNvbWUgd29yaywgWU9VIEdVWVMgUk9DSyEgYW5kIHRoZSBDT01NVU5JVFkgZm9yIGFsbCB0aGUgaGVscC5cbiAgICBBbmQgdGhhbmtzIHlvdSBndXlzL2dhbHMgZm9yIHJldmlld2luZyBteSBzdWJzbWlzc2lvbi5cbiAgICBUaGFua3MgVVBMQUJTIGZvciB0aGUgb3BwdXJ0dW5pdHkhXG4gICAgRGF0ZTpcbiAgICAyNSBOb3YgMjAxOC5cbiAgICBEZXZlbG9wZXI6XG4gICAgSmFtYWwgTW9oYW1tZWQgKGphbWFsQGljZWxhYnMuaW4pXG4gICAgdHdpdHRlciBAbWRqYW1hbFxuICAgIEFwcCBVSTpcbiAgICBGaW5hbmNlIGNhbGVuZGFyIGFuZCBzdGF0c1xuICAgIGJ5IEFsZXggU29sIChCaWcgdGhhbmtzIHRvIEFsZXggZm9yIG1ha2luZyB0aGlzIEZyZWUgZm9yIFBlcnNvbmFsIHVzZSlcbiAgICBodHRwczovL3d3dy51cGxhYnMuY29tL3Bvc3RzL2ZpbmFuY2UtY2FsZW5kYXItYW5kLXN0YXRzIFxuICAgIGh0dHBzOi8vd3d3LnVwbGFicy5jb20vcG9zdHMvZmluYW5jZXMtaW50ZXJmYWNlXG4gICAgRm9udDpcbiAgICBRdWlja3NhbmQgKEJvbGQsIFJlZ3VsYXIpIGZyb20gbmF0aXZlc2NyaXB0IHZ1ZSBpbnRlcmFjdGl2ZSB3ZWF0aGVyIGFwcCB0dXRvcmlhbFxuICAgIGh0dHBzOi8vd3d3LmRhZm9udC5jb20vcXVpY2tzYW5kLmZvbnRcbi0tPlxuXG48dGVtcGxhdGU+XG5cdDxQYWdlIGNsYXNzPVwicGFnZVwiIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cblx0XHQ8IS0tIDxBY3Rpb25CYXIgdGl0bGU9XCJIb21lXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgLz4gLS0+XG5cblx0XHQ8RG9ja0xheW91dCBzdHJldGNoTGFzdENoaWxkPVwidHJ1ZVwiPlxuXHRcdFx0PCEtLSBTdW1tYXJ5IC0tPlxuXHRcdFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBkb2NrPVwidG9wXCI+XG5cdFx0XHRcdDwhLS0gTmF2aWdhdG9uIC0tPlxuXHRcdFx0XHQ8R3JpZExheW91dCByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCI3NSwqLDc1XCIgY2xhc3M9XCJhY3Rpb24tYmFyIHAtMjBcIj5cblx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvaWNvblRvZGF5LnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiByb3c9XCIwXCIgY29sPVwiMFwiIEB0YXA9XCJnb1RvVG9kYXlQYWdlXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIHdpZHRoPVwiMjRcIlxuXHRcdFx0XHRcdCBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiIG9wYWNpdHk9XCIwLjJcIiAvPlxuXHRcdFx0XHRcdDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIgY2xhc3M9XCJhY3Rpb24taXRlbVwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgQHRhcD1cImdvVG9DYWxlbmRhclBhZ2VcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgd2lkdGg9XCIyNFwiXG5cdFx0XHRcdFx0IGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIiAvPlxuXHRcdFx0XHRcdDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uQmFsYW5jZS5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCIgcm93PVwiMFwiIGNvbD1cIjJcIiBAdGFwPVwiZ29Ub0JhbGFuY2VQYWdlXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIHdpZHRoPVwiMjRcIlxuXHRcdFx0XHRcdCBob3Jpem9udGFsQWxpZ25tZW50PVwicmlnaHRcIiBvcGFjaXR5PVwiMC4yXCIgLz5cblx0XHRcdFx0PC9HcmlkTGF5b3V0PlxuXHRcdFx0XHQ8IS0tIC9OYXZpZ2F0aW9uIC0tPlxuXG5cdFx0XHRcdDxSYWRDYWxlbmRhciA6bW9udGhWaWV3U3R5bGU9J21vbnRoVmlld1N0eWxlJyBoZWlnaHQ9XCIzMDBcIj48L1JhZENhbGVuZGFyPlxuXHRcdFx0XHQ8IS0tIDxSYWRDYWxlbmRhciBoZWlnaHQ9XCIzMDBcIiAvPiAtLT5cblx0XHRcdDwvU3RhY2tMYXlvdXQ+XG5cdFx0XHQ8IS0tIC9TdW1tYXJ5IC0tPlxuXG5cdFx0XHQ8IS0tIEZvb3RlciAtLT5cblx0XHRcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZG9jaz1cImJvdHRvbVwiIHBhZGRpbmc9XCI1IDAgMTAgMFwiPlxuXHRcdFx0XHQ8IS0tIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIzMCwgKlwiIHJvd3M9XCJhdXRvXCIgY2xhc3M9XCJwLWwtMjBcIj5cblx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvaWNvbk5ld1BheW1lbnQucG5nXCIgcm93PVwiMFwiIGNvbD1cIjBcIiB3aWR0aD1cIjIwXCIgc3RyZXRjaD1cImFzcGVjdEZpdFwiIG1hcmdpbj1cIjAgMCAwIDBcIiBob3Jpem9udGFsQWxpZ25tZW50PVwibGVmdFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8TGFiZWwgdGV4dD1cInNjaGVkdWxlIG5ldyBwYXltZW50XCIgcm93PVwiMFwiIGNvbD1cIjFcIiBjbGFzcz1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQzJDOEU2XCIgLz5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+IC0tPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjMwLCAqLCAxMDBcIiByb3dzPVwiYXV0b1wiIGNsYXNzPVwibS10LTMwIHAtbC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvaWNvbkFsbENhdGVnb3J5LnBuZ1wiIHJvdz1cIjBcIiBjb2w9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjhcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCIgYW5kcm9pZDpzdHlsZT1cIm1hcmdpbjogLTEwIDAgMCAtNVwiIGlvczpzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJBbGwgQ2F0ZWdvcmllc1wiIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIiQxMTcuOTlcIiByb3c9XCIwXCIgY29sPVwiMlwiIGNsYXNzPVwiaDIgcC1yLTIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzg5RDVFMlwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwhLS0gL0Zvb3RlciAtLT5cblxuICAgICAgICAgICAgPCEtLSBUcmFuc2FjdGlvbnMgLS0+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGNsYXNzPVwibS10LTMwXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMkMzMjUxXCI+XG4gICAgICAgICAgICAgICAgPFJhZExpc3RWaWV3IHJlZj1cImxpc3RWaWV3XCIgZm9yPVwicGF5bWVudCBpbiBwYXltZW50c1wiXG4gICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgYmFja2dyb3VuZENvbG9yPVwiIzJDMzI1MVwiPlxuICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIzMCwgKiwgMTAwXCIgcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIiBjbGFzcz1cInAtbC0yMFwiIGJhY2tncm91bmRDb2xvcj1cIiMyQzMyNTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgOnNyYz1cInBheW1lbnQudGFnIHwgdGFnY2xhc3NcIiByb3c9XCIwXCIgY29sPVwiMFwiIHJvd1NwYW49XCIzXCIgd2lkdGg9XCIxMlwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIiB2ZXJ0aWNhbEFsaWdubWVudD1cInRvcFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgYW5kcm9pZDpzdHlsZT1cIm1hcmdpbi10b3A6IDVcIiBpb3M6c3R5bGU9XCJtYXJnaW4tdG9wOiA5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJwYXltZW50Lm5hbWVcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaDNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInBheW1lbnQucmVwZWF0XCIgcm93PVwiMVwiIGNvbD1cIjFcIiBjbGFzcz1cImJvZHlcIiBjb2xvcj1cIiNDMkM4RTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInBheW1lbnQuYW1vdW50XCIgcm93PVwiMFwiIGNvbD1cIjJcIiBjbGFzcz1cImgyIHAtci0yMFwiIGNvbG9yPVwiIzg5RDVFMlwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHQgbS15LTIwXCIgcm93PVwiMlwiIGNvbD1cIjFcIiBjb2xTcGFuPVwiMlwiIHYtaWY9XCIhcGF5bWVudC5sYXN0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJtLTctMjBcIiByb3c9XCIyXCIgY29sPVwiMVwiIGNvbFNwYW49XCIyXCIgdi1lbHNlPVwicGF5bWVudC5sYXN0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvUmFkTGlzdFZpZXc+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPCEtLSAvVHJhbnNhY3Rpb25zIC0tPlxuXG5cblxuICAgICAgICA8L0RvY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgVnVlIGZyb20gXCJuYXRpdmVzY3JpcHQtdnVlXCI7XG4gICAgaW1wb3J0IENhbGVuZGFyVmlldyBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL3Z1ZVwiO1xuICAgIFZ1ZS51c2UoQ2FsZW5kYXJWaWV3KTtcbiAgICBpbXBvcnQgUmFkTGlzdFZpZXcgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWVcIjtcbiAgICBWdWUudXNlKFJhZExpc3RWaWV3KTtcblxuICAgIGltcG9ydCB7XG4gICAgICAgIEFsbERheUV2ZW50c1ZpZXdTdHlsZSxcbiAgICAgICAgQ2FsZW5kYXJNb250aFZpZXdTdHlsZSxcbiAgICAgICAgQ2FsZW5kYXJXZWVrVmlld1N0eWxlLFxuICAgICAgICBDYWxlbmRhclllYXJWaWV3U3R5bGUsXG4gICAgICAgIENhbGVuZGFyTW9udGhOYW1lc1ZpZXdTdHlsZSxcbiAgICAgICAgQ2FsZW5kYXJWaWV3TW9kZSxcbiAgICAgICAgQ2FsZW5kYXJEYXlWaWV3U3R5bGUsXG4gICAgICAgIENlbGxTdHlsZSxcbiAgICAgICAgRGF5Q2VsbFN0eWxlLFxuICAgICAgICBEYXlFdmVudHNWaWV3U3R5bGUsXG4gICAgICAgIE1vbnRoQ2VsbFN0eWxlXG4gICAgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyXCI7XG5cbiAgICBpbXBvcnQge1xuICAgICAgICBpc0FuZHJvaWQsXG4gICAgICAgIGlzSU9TXG4gICAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuICAgIGltcG9ydCBCYWxhbmNlIGZyb20gXCIuL0JhbGFuY2VcIjtcbiAgICBpbXBvcnQgVG9kYXkgZnJvbSBcIi4vVG9kYXlcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAvLyBtb250aFZpZXdTdHlsZSgpOiBDYWxlbmRhck1vbnRoVmlld1N0eWxlIHtcbiAgICAgICAgICAgIG1vbnRoVmlld1N0eWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb250aFZpZXdTdHlsZSA9IG5ldyBDYWxlbmRhck1vbnRoVmlld1N0eWxlKCk7XG4gICAgICAgICAgICAgICAgbW9udGhWaWV3U3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMkMzMjUxXCI7XG4gICAgICAgICAgICAgICAgLy8gbW9udGhWaWV3U3R5bGUuc2hvd1RpdGxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBtb250aFZpZXdTdHlsZS5zaG93V2Vla051bWJlcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBtb250aFZpZXdTdHlsZS5zaG93RGF5TmFtZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIG1vbnRoVmlld1N0eWxlLnNlbGVjdGlvblNoYXBlID0gXCJSb3VuZFwiO1xuICAgICAgICAgICAgICAgIC8vIG1vbnRoVmlld1N0eWxlLnNlbGVjdGlvblNoYXBlU2l6ZSA9IDE1O1xuICAgICAgICAgICAgICAgIG1vbnRoVmlld1N0eWxlLnNlbGVjdGlvblNoYXBlQ29sb3IgPSBcIiM0RDcxODhcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5Q2VsbFN0eWxlID0gbmV3IERheUNlbGxTdHlsZSgpO1xuICAgICAgICAgICAgICAgIHRvZGF5Q2VsbFN0eWxlLmNlbGxCYWNrZ3JvdW5kQ29sb3IgPSBcIldoaXRlXCI7XG4gICAgICAgICAgICAgICAgLy8gdG9kYXlDZWxsU3R5bGUuY2VsbEJvcmRlcldpZHRoID0gMjtcbiAgICAgICAgICAgICAgICAvLyB0b2RheUNlbGxTdHlsZS5jZWxsQm9yZGVyQ29sb3IgPSAnI2YxZThjYSc7XG4gICAgICAgICAgICAgICAgdG9kYXlDZWxsU3R5bGUuY2VsbFRleHRDb2xvciA9IFwiIzJDMzI1MlwiO1xuICAgICAgICAgICAgICAgIC8vIHRvZGF5Q2VsbFN0eWxlLmNlbGxUZXh0Rm9udE5hbWUgPSBcIlF1aWNrc2FuZFwiLCBcIlF1aWNrc2FuZC1SZWd1bGFyXCIsIFwiUXVpY2tzYW5kLUJvbGRcIjtcbiAgICAgICAgICAgICAgICAvLyB0b2RheUNlbGxTdHlsZS5jZWxsVGV4dEZvbnRTdHlsZSA9ICdCb2xkJztcbiAgICAgICAgICAgICAgICAvLyB0b2RheUNlbGxTdHlsZS5jZWxsVGV4dFNpemUgPSAxNDtcbiAgICAgICAgICAgICAgICBtb250aFZpZXdTdHlsZS50b2RheUNlbGxTdHlsZSA9IHRvZGF5Q2VsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5Q2VsbFN0eWxlID0gbmV3IERheUNlbGxTdHlsZSgpO1xuICAgICAgICAgICAgICAgIC8vIGRheUNlbGxTdHlsZS5zaG93RXZlbnRzVGV4dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gZGF5Q2VsbFN0eWxlLmV2ZW50VGV4dENvbG9yID0gJ1doaXRlJztcbiAgICAgICAgICAgICAgICAvLyBkYXlDZWxsU3R5bGUuZXZlbnRGb250TmFtZSA9IFwiUXVpY2tzYW5kXCIsIFwiUXVpY2tzYW5kLVJlZ3VsYXJcIiwgXCJRdWlja3NhbmQtQm9sZFwiO1xuICAgICAgICAgICAgICAgIC8vIGRheUNlbGxTdHlsZS5ldmVudEZvbnRTdHlsZSA9ICdCb2xkSXRhbGljJztcbiAgICAgICAgICAgICAgICAvLyBkYXlDZWxsU3R5bGUuZXZlbnRUZXh0U2l6ZSA9IDg7XG4gICAgICAgICAgICAgICAgLy8gZGF5Q2VsbFN0eWxlLmNlbGxBbGlnbm1lbnQgPSAnVmVydGljYWxDZW50ZXInO1xuICAgICAgICAgICAgICAgIC8vIGRheUNlbGxTdHlsZS5jZWxsUGFkZGluZ0hvcml6b250YWwgPSAxMDtcbiAgICAgICAgICAgICAgICAvLyBkYXlDZWxsU3R5bGUuY2VsbFBhZGRpbmdWZXJ0aWNhbCA9IDU7XG4gICAgICAgICAgICAgICAgZGF5Q2VsbFN0eWxlLmNlbGxCYWNrZ3JvdW5kQ29sb3IgPSAnIzJDMzI1MSc7XG4gICAgICAgICAgICAgICAgZGF5Q2VsbFN0eWxlLmNlbGxCb3JkZXJXaWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgZGF5Q2VsbFN0eWxlLmNlbGxCb3JkZXJDb2xvciA9ICcjMkMzMjUxJztcbiAgICAgICAgICAgICAgICBkYXlDZWxsU3R5bGUuY2VsbFRleHRDb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICAgICAgICAgIC8vIGRheUNlbGxTdHlsZS5jZWxsVGV4dEZvbnROYW1lID0gXCJRdWlja3NhbmRcIiwgXCJRdWlja3NhbmQtUmVndWxhclwiLCBcIlF1aWNrc2FuZC1Cb2xkXCI7XG4gICAgICAgICAgICAgICAgLy8gZGF5Q2VsbFN0eWxlLmNlbGxUZXh0Rm9udFN0eWxlID0gJ0JvbGQnO1xuICAgICAgICAgICAgICAgIC8vIGRheUNlbGxTdHlsZS5jZWxsVGV4dFNpemUgPSAxMDtcbiAgICAgICAgICAgICAgICBtb250aFZpZXdTdHlsZS5kYXlDZWxsU3R5bGUgPSBkYXlDZWxsU3R5bGU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrZW5kQ2VsbFN0eWxlID0gbmV3IERheUNlbGxTdHlsZSgpO1xuICAgICAgICAgICAgICAgIC8vIHdlZWtlbmRDZWxsU3R5bGUuZXZlbnRUZXh0Q29sb3IgPSAnQmx1ZVZpb2xldCc7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2VuZENlbGxTdHlsZS5ldmVudEZvbnROYW1lID0gXCJRdWlja3NhbmRcIiwgXCJRdWlja3NhbmQtUmVndWxhclwiLCBcIlF1aWNrc2FuZC1Cb2xkXCI7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2VuZENlbGxTdHlsZS5ldmVudEZvbnRTdHlsZSA9ICdCb2xkSXRhbGljJztcbiAgICAgICAgICAgICAgICAvLyB3ZWVrZW5kQ2VsbFN0eWxlLmV2ZW50VGV4dFNpemUgPSA4O1xuICAgICAgICAgICAgICAgIC8vIHdlZWtlbmRDZWxsU3R5bGUuY2VsbEFsaWdubWVudCA9ICdWZXJ0aWNhbENlbnRlcic7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2VuZENlbGxTdHlsZS5jZWxsUGFkZGluZ0hvcml6b250YWwgPSAxMDtcbiAgICAgICAgICAgICAgICAvLyB3ZWVrZW5kQ2VsbFN0eWxlLmNlbGxQYWRkaW5nVmVydGljYWwgPSA1O1xuICAgICAgICAgICAgICAgIC8vIHdlZWtlbmRDZWxsU3R5bGUuY2VsbEJhY2tncm91bmRDb2xvciA9ICcjZGQ4NTVjJztcbiAgICAgICAgICAgICAgICAvLyB3ZWVrZW5kQ2VsbFN0eWxlLmNlbGxCb3JkZXJXaWR0aCA9IDE7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2VuZENlbGxTdHlsZS5jZWxsQm9yZGVyQ29sb3IgPSAnI2YxZThjYSc7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2VuZENlbGxTdHlsZS5jZWxsVGV4dENvbG9yID0gJyM3NDUxNTEnO1xuICAgICAgICAgICAgICAgIC8vIHdlZWtlbmRDZWxsU3R5bGUuY2VsbFRleHRGb250TmFtZSA9IFwiUXVpY2tzYW5kXCIsIFwiUXVpY2tzYW5kLVJlZ3VsYXJcIiwgXCJRdWlja3NhbmQtQm9sZFwiO1xuICAgICAgICAgICAgICAgIC8vIHdlZWtlbmRDZWxsU3R5bGUuY2VsbFRleHRGb250U3R5bGUgPSAnQm9sZCc7XG4gICAgICAgICAgICAgICAgLy8gd2Vla2VuZENlbGxTdHlsZS5jZWxsVGV4dFNpemUgPSAxMjtcbiAgICAgICAgICAgICAgICBtb250aFZpZXdTdHlsZS53ZWVrZW5kQ2VsbFN0eWxlID0gd2Vla2VuZENlbGxTdHlsZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2VsbFN0eWxlID0gbmV3IERheUNlbGxTdHlsZSgpO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkQ2VsbFN0eWxlLmV2ZW50VGV4dENvbG9yID0gJ0JsdWUnO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkQ2VsbFN0eWxlLmV2ZW50Rm9udE5hbWUgPSBcIlF1aWNrc2FuZFwiLCBcIlF1aWNrc2FuZC1SZWd1bGFyXCIsIFwiUXVpY2tzYW5kLUJvbGRcIjtcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5ldmVudEZvbnRTdHlsZSA9ICdCb2xkJztcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5ldmVudFRleHRTaXplID0gODtcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5jZWxsQWxpZ25tZW50ID0gJ1ZlcnRpY2FsQ2VudGVyJztcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5jZWxsUGFkZGluZ0hvcml6b250YWwgPSAxMDtcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5jZWxsUGFkZGluZ1ZlcnRpY2FsID0gNTtcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5jZWxsQmFja2dyb3VuZENvbG9yID0gJyNkYmNiYmInO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkQ2VsbFN0eWxlLmNlbGxCb3JkZXJXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0ZWRDZWxsU3R5bGUuY2VsbEJvcmRlckNvbG9yID0gJyM3NDUxNTEnO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkQ2VsbFN0eWxlLmNlbGxUZXh0Q29sb3IgPSAnQmxhY2snO1xuICAgICAgICAgICAgICAgIC8vIHNlbGVjdGVkQ2VsbFN0eWxlLmNlbGxUZXh0Rm9udE5hbWUgPSBcIlF1aWNrc2FuZFwiLCBcIlF1aWNrc2FuZC1SZWd1bGFyXCIsIFwiUXVpY2tzYW5kLUJvbGRcIjtcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5jZWxsVGV4dEZvbnRTdHlsZSA9ICdCb2xkJztcbiAgICAgICAgICAgICAgICAvLyBzZWxlY3RlZENlbGxTdHlsZS5jZWxsVGV4dFNpemUgPSAxODtcbiAgICAgICAgICAgICAgICBtb250aFZpZXdTdHlsZS5zZWxlY3RlZERheUNlbGxTdHlsZSA9IHNlbGVjdGVkQ2VsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgd2Vla051bWJlckNlbGxTdHlsZSA9IG5ldyBDZWxsU3R5bGUoKTtcbiAgICAgICAgICAgICAgICAvLyB3ZWVrTnVtYmVyQ2VsbFN0eWxlLmNlbGxCYWNrZ3JvdW5kQ29sb3IgPSAnI2JiY2JkYic7XG4gICAgICAgICAgICAgICAgLy8gd2Vla051bWJlckNlbGxTdHlsZS5jZWxsQm9yZGVyV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgIC8vIHdlZWtOdW1iZXJDZWxsU3R5bGUuY2VsbEJvcmRlckNvbG9yID0gJyNmMWU4Y2EnO1xuICAgICAgICAgICAgICAgIC8vIHdlZWtOdW1iZXJDZWxsU3R5bGUuY2VsbFRleHRDb2xvciA9ICcjNzQ1MTUxJztcbiAgICAgICAgICAgICAgICAvLyB3ZWVrTnVtYmVyQ2VsbFN0eWxlLmNlbGxUZXh0Rm9udE5hbWUgPSAnVGltZXMgTmV3IFJvbWFuJztcbiAgICAgICAgICAgICAgICAvLyB3ZWVrTnVtYmVyQ2VsbFN0eWxlLmNlbGxUZXh0Rm9udFN0eWxlID0gJ0JvbGQnO1xuICAgICAgICAgICAgICAgIC8vIHdlZWtOdW1iZXJDZWxsU3R5bGUuY2VsbFRleHRTaXplID0gODtcbiAgICAgICAgICAgICAgICAvLyBtb250aFZpZXdTdHlsZS53ZWVrTnVtYmVyQ2VsbFN0eWxlID0gd2Vla051bWJlckNlbGxTdHlsZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRheU5hbWVDZWxsU3R5bGUgPSBuZXcgQ2VsbFN0eWxlKCk7XG4gICAgICAgICAgICAgICAgZGF5TmFtZUNlbGxTdHlsZS5jZWxsQmFja2dyb3VuZENvbG9yID0gJyMyQzMyNTEnO1xuICAgICAgICAgICAgICAgIGRheU5hbWVDZWxsU3R5bGUuY2VsbEJvcmRlcldpZHRoID0gMTtcbiAgICAgICAgICAgICAgICBkYXlOYW1lQ2VsbFN0eWxlLmNlbGxCb3JkZXJDb2xvciA9ICcjMkMzMjUxJztcbiAgICAgICAgICAgICAgICBkYXlOYW1lQ2VsbFN0eWxlLmNlbGxUZXh0Q29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICAgICAgICAgICAgLy8gZGF5TmFtZUNlbGxTdHlsZS5jZWxsVGV4dEZvbnROYW1lID0gXCJRdWlja3NhbmRcIiwgXCJRdWlja3NhbmQtUmVndWxhclwiLCBcIlF1aWNrc2FuZC1Cb2xkXCI7XG4gICAgICAgICAgICAgICAgLy8gZGF5TmFtZUNlbGxTdHlsZS5jZWxsVGV4dEZvbnRTdHlsZSA9ICdCb2xkJztcbiAgICAgICAgICAgICAgICAvLyBkYXlOYW1lQ2VsbFN0eWxlLmNlbGxUZXh0U2l6ZSA9IDEwO1xuICAgICAgICAgICAgICAgIG1vbnRoVmlld1N0eWxlLmRheU5hbWVDZWxsU3R5bGUgPSBkYXlOYW1lQ2VsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDZWxsU3R5bGUgPSBuZXcgRGF5Q2VsbFN0eWxlKCk7XG4gICAgICAgICAgICAgICAgdGl0bGVDZWxsU3R5bGUuY2VsbEJhY2tncm91bmRDb2xvciA9ICcjMkMzMjUxJztcbiAgICAgICAgICAgICAgICB0aXRsZUNlbGxTdHlsZS5jZWxsQm9yZGVyV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgIHRpdGxlQ2VsbFN0eWxlLmNlbGxCb3JkZXJDb2xvciA9ICcjMkMzMjUxJztcbiAgICAgICAgICAgICAgICB0aXRsZUNlbGxTdHlsZS5jZWxsVGV4dENvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgICAgICAgICAgICAgLy8gdGl0bGVDZWxsU3R5bGUuY2VsbFRleHRGb250TmFtZSA9IFwiUXVpY2tzYW5kXCIsIFwiUXVpY2tzYW5kLVJlZ3VsYXJcIiwgXCJRdWlja3NhbmQtQm9sZFwiO1xuICAgICAgICAgICAgICAgIC8vIHRpdGxlQ2VsbFN0eWxlLmNlbGxUZXh0Rm9udFN0eWxlID0gJ0JvbGQnO1xuICAgICAgICAgICAgICAgIC8vIHRpdGxlQ2VsbFN0eWxlLmNlbGxUZXh0U2l6ZSA9IDE0O1xuICAgICAgICAgICAgICAgIC8vIHRpdGxlQ2VsbFN0eWxlLmNlbGxUZXh0VHJhbnNmb3JtID0gXCJ1cHBlcmNhc2VcIjtcbiAgICAgICAgICAgICAgICBtb250aFZpZXdTdHlsZS50aXRsZUNlbGxTdHlsZSA9IHRpdGxlQ2VsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoVmlld1N0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIG9uSXRlbVRhcCh7XG4gICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgfSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXBwZWQgb24gJHtpdGVtLm5hbWV9YCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnb1RvQmFsYW5jZVBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhCYWxhbmNlLCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcInNwcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhY2tzdGFja1Zpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdvVG9Ub2RheVBhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhUb2RheSwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJzcHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgdGFnY2xhc3M6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIn4vaW1hZ2VzL1wiICsgdmFsdWUgKyBcIi5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXltZW50czogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRWxlY3RyaWNpdHkgQmlsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBcImV2ZXJ5IG1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDEwOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcInB1cnBsZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRHJvcGJveCBTdWJzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdDogXCJldmVyeSBtb250aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIiQ5Ljk5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJHbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBcImV2ZXJ5IG1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJHb1JhaWxzIFN1YnNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBcImV2ZXJ5IG1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT4iLCI8IS0tXG4gICAgQWJvdXQ6IFxuICAgIEFwcCBDcmVhdGVkIGZvciBOYXRpdmVzY3JpcHQgVXBsYWJzIGNvbXBldGl0aW9uLlxuICAgIFVzaW5nIE5hdGl2ZXNjcmlwdCBWdWUsIGFuZCBQcm8gVUkgKENoYXJ0cywgTGlzdHZpZXcgJiBDYWxlbmRhcilcbiAgICBUaGUgYXBwIHVzZXMgc3RhdGljIGRhdGEsIHRoZSBmb2N1cyB3YXMgb24gYnVpbGRpbmcgdGhlIFVJIGFuZCBpbnRlcmFjdGlvbnMsXG4gICAgYW5kIG5vdCBvbiB0aGUgc2VydmVyIHNpZGUgaW50ZWdyYXRpb24sIG1vcmUgb2YgRm9ybSB0aGFuIEZ1bmN0aW9uLlxuICAgIEF3ZXNvbWUgbGVhcm5pbmcgZXhwZXJpZW5jZSwgZXNwZWNpYWxseSB3aXRoIHRoZSBsYXlvdXRzIGFuZCBjaGFydHMgaW50ZWdyYXRpb24uXG4gICAgSXQncyBxdWlldCBlYXN5IHRvIHBpY2t1cCB3aXRoIHdoYXQgeW91IGFscmVhZHkga25vdyBIVE1MLCBDU1MgYW5kIEpTLiBJIGFtIGhhcHB5IHdpdGhcbiAgICB0aGUgcmVzdWx0cyBhIGdvb2Qgb25lIGZvciBhcHByb3ggMTIgaG91cnMgb2YgY29kaW5nLlxuICAgIFRoYW5rcyB0byBUZWFtIE5hdGl2ZXNjcmlwdCBmb3IgdGhlIGF3ZXNvbWUgd29yaywgWU9VIEdVWVMgUk9DSyEgYW5kIHRoZSBDT01NVU5JVFkgZm9yIGFsbCB0aGUgaGVscC5cbiAgICBBbmQgdGhhbmtzIHlvdSBndXlzL2dhbHMgZm9yIHJldmlld2luZyBteSBzdWJzbWlzc2lvbi5cbiAgICBUaGFua3MgVVBMQUJTIGZvciB0aGUgb3BwdXJ0dW5pdHkhXG4gICAgRGF0ZTpcbiAgICAyNSBOb3YgMjAxOC5cbiAgICBEZXZlbG9wZXI6XG4gICAgSmFtYWwgTW9oYW1tZWQgKGphbWFsQGljZWxhYnMuaW4pXG4gICAgdHdpdHRlciBAbWRqYW1hbFxuICAgIEFwcCBVSTpcbiAgICBGaW5hbmNlIGNhbGVuZGFyIGFuZCBzdGF0c1xuICAgIGJ5IEFsZXggU29sIChCaWcgdGhhbmtzIHRvIEFsZXggZm9yIG1ha2luZyB0aGlzIEZyZWUgZm9yIFBlcnNvbmFsIHVzZSlcbiAgICBodHRwczovL3d3dy51cGxhYnMuY29tL3Bvc3RzL2ZpbmFuY2UtY2FsZW5kYXItYW5kLXN0YXRzIFxuICAgIGh0dHBzOi8vd3d3LnVwbGFicy5jb20vcG9zdHMvZmluYW5jZXMtaW50ZXJmYWNlXG4gICAgRm9udDpcbiAgICBRdWlja3NhbmQgKEJvbGQsIFJlZ3VsYXIpIGZyb20gbmF0aXZlc2NyaXB0IHZ1ZSBpbnRlcmFjdGl2ZSB3ZWF0aGVyIGFwcCB0dXRvcmlhbFxuICAgIGh0dHBzOi8vd3d3LmRhZm9udC5jb20vcXVpY2tzYW5kLmZvbnRcbi0tPlxuXG48dGVtcGxhdGU+XG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCIgYWN0aW9uQmFySGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICA8IS0tIDxBY3Rpb25CYXIgdGl0bGU9XCJIb21lXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgLz4gLS0+XG5cbiAgICAgICAgPERvY2tMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cInRydWVcIj5cbiAgICAgICAgICAgIDwhLS0gU3VtbWFyeSAtLT5cbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgZG9jaz1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gTmF2aWdhdG9uIC0tPlxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIjc1LCosNzVcIiBjbGFzcz1cImFjdGlvbi1iYXIgcC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvaWNvblRvZGF5LnBuZ1wiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiByb3c9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjBcIiBAdGFwPVwiZ29Ub1RvZGF5UGFnZVwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL2ljb25DYWxlbmRhci5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIxXCIgQHRhcD1cImdvVG9DYWxlbmRhclBhZ2VcIiBzdHJldGNoPVwiYXNwZWN0Rml0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjRcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCIgb3BhY2l0eT1cIjAuMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJ+L2ltYWdlcy9pY29uQmFsYW5jZS5wbmdcIiBjbGFzcz1cImFjdGlvbi1pdGVtXCIgcm93PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w9XCIyXCIgQHRhcD1cImdvVG9CYWxhbmNlUGFnZVwiIHN0cmV0Y2g9XCJhc3BlY3RGaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJyaWdodFwiIG9wYWNpdHk9XCIwLjJcIiAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICA8IS0tIC9OYXZpZ2F0aW9uIC0tPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIiosICpcIiByb3dzPVwiYXV0bywgYXV0b1wiIGNsYXNzPVwibS15LTMwIG0teC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERhdGUgVG9kYXkgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRheVwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1vbnRoICsgJyAnICsgZGF0ZSArICcsICcgKyB5ZWFyXCIgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImJvZHkgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQzJDOEU2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTcGVuZGluZyB0aGlzIG1vbnRoIC0tPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIiQ1ODBcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwibGFyZ2UgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNwZW50IHRoaXMgbW9udGhcIiByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwiYm9keSBzbWFsbCB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzg5RDVFMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwhLS0gL1N1bW1hcnkgLS0+XG5cbiAgICAgICAgICAgIDwhLS0gVGlwIC0tPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzcz1cIm0tdHQtMzAgcC15LTMwXCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMjgyRTRCXCIgZG9jaz1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCI4MCwgKlwiIHJvd3M9XCJhdXRvXCIgY2xhc3M9XCJtLXgtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIn4vaW1hZ2VzL3RpcC1jaGFydC1pY29uLnBuZ1wiIHJvdz1cIjBcIiBjb2w9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJJbiB0aGUgcGFzdCAzMCBkYXlzIHlvdSBzcGVudCAkMTMwIG9uIHJpZGVzaGFyaW5nLiBVc3VhbGx5IHlvdSBzcGVuZCAkOTAuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cIjBcIiBjb2w9XCIxXCIgY2xhc3M9XCJib2R5IG0tbC0yMFwiIHRleHRXcmFwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM4OUQ1RTJcIiAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8IS0tIC9UaXAgLS0+XG5cbiAgICAgICAgICAgIDwhLS0gVHJhbnNhY3Rpb25zIC0tPlxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBjbGFzcz1cIm0tdC0zMFwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiIzJDMzI1MVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gPExpc3RWaWV3IGNsYXNzPVwibGlzdC1ncm91cFwiIGZvcj1cInRyYW5zYWN0aW9uIGluIHRyYW5zYWN0aW9uc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgc3R5bGU9XCJoZWlnaHQ6MTAwJVwiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjMkMzMjUxXCIgQGl0ZW1Mb2FkaW5nPVwib25JdGVtTG9hZGluZygkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjEwMCwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvLCBhdXRvXCIgY2xhc3M9XCJtLWwtMjBcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJy0nICsgdHJhbnNhY3Rpb24uYW1vdW50XCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImgxXCIgY29sb3I9XCIjODlENUUyXCIgLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhbnNhY3Rpb24uZGF0ZVwiIHJvdz1cIjFcIiBjb2w9XCIwXCIgY2xhc3M9XCJib2R5IHAtbC0xNVwiIC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInRyYW5zYWN0aW9uLm5hbWVcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwiaDIgcC1yLTIwXCIgLz5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhbnNhY3Rpb24uYWRkcmVzc1wiIHJvdz1cIjFcIiBjb2w9XCIxXCIgY2xhc3M9XCJib2R5IHAtci0yMFwiIGNvbG9yPVwiI0MyQzhFNlwiIC8+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0IG0teS0yMFwiIHJvdz1cIjJcIiBjb2w9XCIxXCIgdi1pZj1cIiF0cmFuc2FjdGlvbi5sYXN0XCI+PC9TdGFja0xheW91dD5cblx0XHRcdFx0XHRcdFx0PFN0YWNrTGF5b3V0IGNsYXNzPVwibS15LTIwXCIgcm93PVwiMlwiIGNvbD1cIjFcIiB2LWVsc2U9XCJ0cmFuc2FjdGlvbi5sYXN0XCI+PC9TdGFja0xheW91dD5cblx0ICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PiAtLT5cblxuICAgICAgICAgICAgICAgIDxSYWRMaXN0VmlldyByZWY9XCJsaXN0Vmlld1wiIGZvcj1cInRyYW5zYWN0aW9uIGluIHRyYW5zYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVwib25SYWRJdGVtVGFwXCIgYmFja2dyb3VuZENvbG9yPVwiIzJDMzI1MVwiPlxuICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIxMDAsICpcIiByb3dzPVwiYXV0bywgYXV0bywgYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwLWwtMjBcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjMkMzMjUxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJy0nICsgdHJhbnNhY3Rpb24uYW1vdW50XCIgcm93PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbD1cIjBcIiBjbGFzcz1cImgxXCIgY29sb3I9XCIjODlENUUyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFuc2FjdGlvbi5kYXRlXCIgcm93PVwiMVwiIGNvbD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvZHkgcC1sLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0cmFuc2FjdGlvbi5uYW1lXCIgcm93PVwiMFwiIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgyIHAtci0yMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidHJhbnNhY3Rpb24uYWRkcmVzc1wiIHJvdz1cIjFcIiBjb2w9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib2R5IHAtci0yMFwiIGNvbG9yPVwiI0MyQzhFNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHQgbS15LTIwXCIgcm93PVwiMlwiIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIXRyYW5zYWN0aW9uLmxhc3RcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cIm0teS0yMFwiIHJvdz1cIjJcIiBjb2w9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlPVwidHJhbnNhY3Rpb24ubGFzdFwiPjwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L1JhZExpc3RWaWV3PlxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgIDwhLS0gL1RyYW5zYWN0aW9ucyAtLT5cblxuXG5cbiAgICAgICAgPC9Eb2NrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFZ1ZSBmcm9tIFwibmF0aXZlc2NyaXB0LXZ1ZVwiO1xuICAgIGltcG9ydCBSYWRMaXN0VmlldyBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L3Z1ZVwiO1xuICAgIFZ1ZS51c2UoUmFkTGlzdFZpZXcpO1xuICAgIC8vIGltcG9ydCB7IGlzQW5kcm9pZCwgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuICAgIGltcG9ydCBCYWxhbmNlIGZyb20gXCIuL0JhbGFuY2VcIjtcbiAgICBpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4vQ2FsZW5kYXJcIjtcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG5cdFx0XHRcblxuICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0dmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgd2Vla2RheXMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICAgICAgICB3ZWVrZGF5c1swXSA9IFwiU3VuZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1sxXSA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1syXSA9IFwiVHVlc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbM10gPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNF0gPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s1XSA9IFwiRnJpZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s2XSA9IFwiU2F0dXJkYXlcIjtcbiAgICAgICAgICAgIHZhciBkYXlOYW1lID0gd2Vla2RheXNbZGF5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcblx0XHRcdHRoaXMueWVhciA9IHllYXI7XG5cbiAgICAgICAgICAgIHZhciBtb250aCA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcbiAgICAgICAgICAgIG1vbnRoWzFdID0gXCJGZWJydWFyeVwiO1xuICAgICAgICAgICAgbW9udGhbMl0gPSBcIk1hcmNoXCI7XG4gICAgICAgICAgICBtb250aFszXSA9IFwiQXByaWxcIjtcbiAgICAgICAgICAgIG1vbnRoWzRdID0gXCJNYXlcIjtcbiAgICAgICAgICAgIG1vbnRoWzVdID0gXCJKdW5lXCI7XG4gICAgICAgICAgICBtb250aFs2XSA9IFwiSnVseVwiO1xuICAgICAgICAgICAgbW9udGhbN10gPSBcIkF1Z3VzdFwiO1xuICAgICAgICAgICAgbW9udGhbOF0gPSBcIlNlcHRlbWJlclwiO1xuICAgICAgICAgICAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzEwXSA9IFwiTm92ZW1iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzExXSA9IFwiRGVjZW1iZXJcIjtcblxuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoW2N1cnJlbnREYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG1vbnRoTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC8vIG9uSXRlbVRhcDogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSXRlbSB3aXRoIGluZGV4OiBcIiArIGFyZ3MuaW5kZXggKyBcIiB0YXBwZWRcIik7XG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICBvblJhZEl0ZW1UYXAoe1xuICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgIH0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGFwcGVkIG9uICR7aXRlbS5uYW1lfWApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gb25JdGVtTG9hZGluZzogZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgLy8gICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBpb3NDZWxsID0gYXJncy5pb3M7XG4gICAgICAgICAgICAvLyAgICAgaW9zQ2VsbC5zZWxlY3Rpb25TdHlsZSA9IFVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlLlVJVGFibGVWaWV3Q2VsbFNlbGVjdGlvblN0eWxlTm9uZTtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfSxcblxuICAgICAgICAgICAgZ29Ub0JhbGFuY2VQYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQmFsYW5jZSwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJzcHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiYWNrc3RhY2tWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnb1RvQ2FsZW5kYXJQYWdlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oQ2FsZW5kYXIsIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwic3ByaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYmFja3N0YWNrVmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUGhhcm1hY3lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiTWFya2V0IHN0ci5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCIkMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiMmggYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBcHBsZSBTdG9yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCIzMDAgUG9zdCBTdHJlZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCIkMTI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjNoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RhcmJ1Y2tzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIk1hcmtldCBzdHIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiNGggYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUcmFuc2ZlciB0byBKb2huIE1heWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIiQxN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCI0aCBhZ29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBoYXJtYWN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIk1hcmtldCBzdHIuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjJoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQXBwbGUgU3RvcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IFwiMzAwIFBvc3QgU3RyZWV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDEyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogXCIzaCBhZ29cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlN0YXJidWNrc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJNYXJrZXQgc3RyLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBcIiQ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBcIjRoIGFnb1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVHJhbnNmZXIgdG8gSm9obiBNYXllclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogXCIkMTdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IFwiNGggYWdvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiLCBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgc3RyZXRjaExhc3RDaGlsZDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGRvY2s6IFwidG9wXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyIHAtMjBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIjc1LCosNzVcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvaWNvblRvZGF5LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvVG9kYXlQYWdlIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25DYWxlbmRhci5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvQ2FsZW5kYXJQYWdlIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25CYWxhbmNlLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9CYWxhbmNlUGFnZSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXktMzAgbS14LTIwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcIipcIiwgcm93czogXCJhdXRvLCBhdXRvXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQmFsYW5jZVwiLCByb3c6IFwiMFwiLCBjb2w6IFwiMFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0ubW9udGggKyBcIiBcIiArIF92bS5kYXRlICsgXCIsIFwiICsgX3ZtLnllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDMkM4RTZcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBcImF1dG8sIGF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgcm93czogXCJhdXRvLCBhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI3MCAyMCAzMCAyMFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaXVtIHAtci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiJDMsNTgwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4OUQ1RTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2R5IHAtci0yMCB4c21hbGwgdGV4dC11cHBlcmNhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkN1cnJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1lZGl1bSBwLWwtMzBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIiQxLDIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC1sLTMwIGJvZHkgeHNtYWxsIHRleHQtdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJMYXN0IE1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNDMkM4RTZcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtdC0zMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyODJFNEJcIixcbiAgICAgICAgICAgICAgICBkb2NrOiBcImJvdHRvbVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcm93czogXCJhdXRvLCAqXCIsIGNvbHVtbnM6IFwiKlwiLCBoZWlnaHQ6IFwiMTAwMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcImNoYXJ0LWV4YW1wbGUtdHl0bGUtc3R5bGUgdGV4dC1yaWdodCB4c21hbGwgdGV4dC11cHBlcmNhc2UgcC1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiR29hbDogJDQsMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4OUQ1RTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlJhZENhcnRlc2lhbkNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlOiBcIlNpbmdsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJDYXRlZ29yaWNhbEF4aXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a0NhcnRlc2lhbkhvcml6b250YWxBeGlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrQ2FydGVzaWFuSG9yaXpvbnRhbEF4aXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUNvbG9yOiBcIiMzMEQ4RDhEOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFRleHRDb2xvcjogXCIjQzJDOEU2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU2l6ZTogXCIxMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lVGhpY2tuZXNzOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxMYXlvdXRNb2RlOiBcImlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIaWRkZW46IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbE1hcmdpbjogXCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJMaW5lYXJBeGlzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtDYXJ0ZXNpYW5WZXJ0aWNhbEF4aXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUNvbG9yOiBcIiNEOEQ4RDhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVRoaWNrbmVzczogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsTGF5b3V0TW9kZTogXCJpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGxpbmVBcmVhU2VyaWVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtDYXJ0ZXNpYW5TZXJpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtDYXJ0ZXNpYW5TZXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzTmFtZTogXCJBcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UHJvcGVydHk6IFwiRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uY3VycmVudE1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja01vZGU6IFwiTm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5OiBcIkFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlOiBcIlNlcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTcGxpbmVBcmVhU2VyaWVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGtDYXJ0ZXNpYW5TZXJpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtDYXJ0ZXNpYW5TZXJpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWVzTmFtZTogXCJBcmVhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UHJvcGVydHk6IFwiRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ubGFzdE1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja01vZGU6IFwiTm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BlcnR5OiBcIkFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Nb2RlOiBcIlNlcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJSYWRDYXJ0ZXNpYW5DaGFydEdyaWRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a0NhcnRlc2lhbkdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdGtDYXJ0ZXNpYW5HcmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxMaW5lc1Zpc2libGU6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbExpbmVzVmlzaWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN0cmlwTGluZXNWaXNpYmxlOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxTdHJpcExpbmVzVmlzaWJsZTogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsU3Ryb2tlQ29sb3I6IFwiIzMwRDhEOEQ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUGFsZXR0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0a0NhcnRlc2lhblBhbGV0dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10a0NhcnRlc2lhblBhbGV0dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2VyaWVzTmFtZTogXCJBcmVhXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJQYWxldHRlRW50cnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwiIzMwNTE1OTlBXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCIjN0ZDRkRDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlBhbGV0dGVFbnRyeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCIjMTA5QkFCRkZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiMxMDlCQUJGRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYWxldHRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRrQ2FydGVzaWFuUGFsZXR0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRrQ2FydGVzaWFuUGFsZXR0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzZXJpZXNOYW1lOiBcIkFyZWFcIiwgc2VyaWVzU3RhdGU6IFwiU2VsZWN0ZWRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlBhbGV0dGVFbnRyeVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCIjNjA1MTU5OUFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiM3RkNGRENcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiUGFsZXR0ZUVudHJ5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBcIiM0MDlCQUJGRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiIzYwOUJBQkZGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2VcIiwgYXR0cnM6IHsgYWN0aW9uQmFySGlkZGVuOiBcInRydWVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiRG9ja0xheW91dFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHN0cmV0Y2hMYXN0Q2hpbGQ6IFwidHJ1ZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLCBkb2NrOiBcInRvcFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhciBwLTIwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcImF1dG9cIiwgY29sdW1uczogXCI3NSwqLDc1XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJJbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIn4vaW1hZ2VzL2ljb25Ub2RheS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1RvZGF5UGFnZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9DYWxlbmRhclBhZ2UgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvaWNvbkJhbGFuY2UucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5nb1RvQmFsYW5jZVBhZ2UgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJSYWRDYWxlbmRhclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbW9udGhWaWV3U3R5bGU6IF92bS5tb250aFZpZXdTdHlsZSwgaGVpZ2h0OiBcIjMwMFwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgIGRvY2s6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI1IDAgMTAgMFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tdC0zMCBwLWwtMjBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbnM6IFwiMzAsICosIDEwMFwiLCByb3dzOiBcImF1dG9cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvaWNvbkFsbENhdGVnb3J5LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyOFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkOnN0eWxlXCI6IFwibWFyZ2luOiAtMTAgMCAwIC01XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJpb3M6c3R5bGVcIjogXCJtYXJnaW4tbGVmdDogLTVcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImxlZnRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQWxsIENhdGVnb3JpZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgyIHAtci0yMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiJDExNy45OVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjODlENUUyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTMwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGJhY2tncm91bmRDb2xvcjogXCIjMkMzMjUxXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJsaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzMyNTFcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wYXltZW50cyxcbiAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJwYXltZW50XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBpdGVtVGFwOiBfdm0ub25JdGVtVGFwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXltZW50ID0gcmVmLnBheW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtbC0yMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogXCIzMCwgKiwgMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywgYXV0bywgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJDMzI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5fZihcInRhZ2NsYXNzXCIpKHBheW1lbnQudGFnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW5kcm9pZDpzdHlsZVwiOiBcIm1hcmdpbi10b3A6IDVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlvczpzdHlsZVwiOiBcIm1hcmdpbi10b3A6IDlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHBheW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHBheW1lbnQucmVwZWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDIgcC1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcGF5bWVudC5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM4OUQ1RTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcGF5bWVudC5sYXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJTdGFja0xheW91dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoci1saWdodCBtLXktMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdzogXCIyXCIsIGNvbDogXCIxXCIsIGNvbFNwYW46IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS03LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMVwiLCBjb2xTcGFuOiBcIjJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiLCBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJEb2NrTGF5b3V0XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgc3RyZXRjaExhc3RDaGlsZDogXCJ0cnVlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGRvY2s6IFwidG9wXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24tYmFyIHAtMjBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiYXV0b1wiLCBjb2x1bW5zOiBcIjc1LCosNzVcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvaWNvblRvZGF5LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoOiBcImFzcGVjdEZpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudDogXCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub1RvZGF5UGFnZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uQ2FsZW5kYXIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmV0Y2g6IFwiYXNwZWN0Rml0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjRcIixcbiAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC4yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ29Ub0NhbGVuZGFyUGFnZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiSW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCJ+L2ltYWdlcy9pY29uQmFsYW5jZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaDogXCJhc3BlY3RGaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIjAuMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLmdvVG9CYWxhbmNlUGFnZSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXktMzAgbS14LTIwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW5zOiBcIiosICpcIiwgcm93czogXCJhdXRvLCBhdXRvXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5kYXksIHJvdzogXCIwXCIsIGNvbDogXCIwXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5tb250aCArIFwiIFwiICsgX3ZtLmRhdGUgKyBcIiwgXCIgKyBfdm0ueWVhcixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0MyQzhFNlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhcmdlIHRleHQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIiQ1ODBcIixcbiAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgc21hbGwgdGV4dC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU3BlbnQgdGhpcyBtb250aFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjODlENUUyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLXR0LTMwIHAteS0zMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyODJFNEJcIixcbiAgICAgICAgICAgICAgICBkb2NrOiBcImJvdHRvbVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0teC0yMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCI4MCwgKlwiLCByb3dzOiBcImF1dG9cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwifi9pbWFnZXMvdGlwLWNoYXJ0LWljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcm93OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgbS1sLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSW4gdGhlIHBhc3QgMzAgZGF5cyB5b3Ugc3BlbnQgJDEzMCBvbiByaWRlc2hhcmluZy4gVXN1YWxseSB5b3Ugc3BlbmQgJDkwLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0V3JhcDogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS10LTMwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsIGJhY2tncm91bmRDb2xvcjogXCIjMkMzMjUxXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJSYWRMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJsaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyQzMyNTFcIixcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS50cmFuc2FjdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIFwiK2FsaWFzXCI6IFwidHJhbnNhY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vblJhZEl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gcmVmLnRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkZXZlbiA9IHJlZi4kZXZlblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwLWwtMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiMTAwLCAqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiYXV0bywgYXV0bywgYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJDMzI1MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIi1cIiArIHRyYW5zYWN0aW9uLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzg5RDVFMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvZHkgcC1sLTE1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdHJhbnNhY3Rpb24uZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaDIgcC1yLTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdHJhbnNhY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBwLXItMjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0cmFuc2FjdGlvbi5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjQzJDOEU2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdHJhbnNhY3Rpb24ubGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHQgbS15LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiU3RhY2tMYXlvdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibS15LTIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiLCBjb2w6IFwiMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUuZGFyay5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbiAgICBBYm91dDogXFxuICAgIEFwcCBDcmVhdGVkIGZvciBOYXRpdmVzY3JpcHQgVXBsYWJzIGNvbXBldGl0aW9uLlxcbiAgICBVc2luZyBOYXRpdmVzY3JpcHQgVnVlLCBhbmQgUHJvIFVJIChDaGFydHMsIExpc3R2aWV3ICYgQ2FsZW5kYXIpXFxuICAgIFRoZSBhcHAgdXNlcyBzdGF0aWMgZGF0YSwgdGhlIGZvY3VzIHdhcyBvbiBidWlsZGluZyB0aGUgVUkgYW5kIGludGVyYWN0aW9ucyxcXG4gICAgYW5kIG5vdCBvbiB0aGUgc2VydmVyIHNpZGUgaW50ZWdyYXRpb24sIG1vcmUgb2YgRm9ybSB0aGFuIEZ1bmN0aW9uLlxcbiAgICBBd2Vzb21lIGxlYXJuaW5nIGV4cGVyaWVuY2UsIGVzcGVjaWFsbHkgd2l0aCB0aGUgbGF5b3V0cyBhbmQgY2hhcnRzIGludGVncmF0aW9uLlxcbiAgICBJdCdzIHF1aXRlIGVhc3kgdG8gcGlja3VwIHdpdGggd2hhdCB5b3UgYWxyZWFkeSBrbm93IEhUTUwsIENTUyBhbmQgSlMuIEkgYW0gaGFwcHkgd2l0aFxcbiAgICB0aGUgcmVzdWx0cyBhIGdvb2Qgb25lIGZvciBhcHByb3ggMTIgaG91cnMgb2YgY29kaW5nLlxcbiAgICBUaGFua3MgdG8gVGVhbSBOYXRpdmVzY3JpcHQgZm9yIHRoZSBhd2Vzb21lIHdvcmssIFlPVSBHVVlTIFJPQ0shIGFuZCB0aGUgQ09NTVVOSVRZIGZvciBhbGwgdGhlIGhlbHAuXFxuICAgIEFuZCB0aGFua3MgeW91IGd1eXMvZ2FscyBmb3IgcmV2aWV3aW5nIG15IHN1YnNtaXNzaW9uLlxcbiAgICBUaGFua3MgVVBMQUJTIGZvciB0aGUgb3BwdXJ0dW5pdHkhXFxuICAgIERhdGU6XFxuICAgIDI1IE5vdiAyMDE4LlxcbiAgICBEZXZlbG9wZXI6XFxuICAgIEphbWFsIE1vaGFtbWVkIChqYW1hbEBpY2VsYWJzLmluKVxcbiAgICB0d2l0dGVyIEBtZGphbWFsXFxuICAgIEFwcCBVSTpcXG4gICAgRmluYW5jZSBjYWxlbmRhciBhbmQgc3RhdHNcXG4gICAgYnkgQWxleCBTb2wgKEJpZyB0aGFua3MgdG8gQWxleCBmb3IgbWFraW5nIHRoaXMgRnJlZSBmb3IgUGVyc29uYWwgdXNlKVxcbiAgICBodHRwczovL3d3dy51cGxhYnMuY29tL3Bvc3RzL2ZpbmFuY2UtY2FsZW5kYXItYW5kLXN0YXRzIFxcbiAgICBodHRwczovL3d3dy51cGxhYnMuY29tL3Bvc3RzL2ZpbmFuY2VzLWludGVyZmFjZVxcbiAgICBGb250OlxcbiAgICBRdWlja3NhbmQgKEJvbGQsIFJlZ3VsYXIpIGZyb20gbmF0aXZlc2NyaXB0IHZ1ZSBpbnRlcmFjdGl2ZSB3ZWF0aGVyIGFwcCB0dXRvcmlhbFxcbiAgICBodHRwczovL3d3dy5kYWZvbnQuY29tL3F1aWNrc2FuZC5mb250XFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmRhcmsuY3NzJ1wifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgQXBwIEdsb2JhbCBDU1MgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMyQzMyNTFcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMkMzMjUxXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wibGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIGh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvYmxvZy91c2luZy1jdXN0b20tZm9udHMtaW4tYS1uYXRpdmVzY3JpcHQtYXBwIFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIlF1aWNrc2FuZFxcXCIsIFxcXCJRdWlja3NhbmQtUmVndWxhclxcXCIsIFxcXCJRdWlja3NhbmQtQm9sZFxcXCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmxhcmdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcImJvbGRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwidG9wXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1lZGl1bVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI4XCJ9LHtcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiBmb250LXdlaWdodDogYm9sZDsgXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcInRvcFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zbWFsbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgdGV4dC1hbGlnbjogbGVmdDsgIFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oci1saWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwLjFcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiLypcbiAgICBBYm91dDogXG4gICAgQXBwIENyZWF0ZWQgZm9yIE5hdGl2ZXNjcmlwdCBVcGxhYnMgY29tcGV0aXRpb24uXG4gICAgVXNpbmcgTmF0aXZlc2NyaXB0IFZ1ZSwgYW5kIFBybyBVSSAoQ2hhcnRzLCBMaXN0dmlldyAmIENhbGVuZGFyKVxuICAgIFRoZSBhcHAgdXNlcyBzdGF0aWMgZGF0YSwgdGhlIGZvY3VzIHdhcyBvbiBidWlsZGluZyB0aGUgVUkgYW5kIGludGVyYWN0aW9ucyxcbiAgICBhbmQgbm90IG9uIHRoZSBzZXJ2ZXIgc2lkZSBpbnRlZ3JhdGlvbiwgbW9yZSBvZiBGb3JtIHRoYW4gRnVuY3Rpb24uXG4gICAgQXdlc29tZSBsZWFybmluZyBleHBlcmllbmNlLCBlc3BlY2lhbGx5IHdpdGggdGhlIGxheW91dHMgYW5kIGNoYXJ0cyBpbnRlZ3JhdGlvbi5cbiAgICBJdCdzIHF1aWV0IGVhc3kgdG8gcGlja3VwIHdpdGggd2hhdCB5b3UgYWxyZWFkeSBrbm93IEhUTUwsIENTUyBhbmQgSlMuIEkgYW0gaGFwcHkgd2l0aFxuICAgIHRoZSByZXN1bHRzIGEgZ29vZCBvbmUgZm9yIGFwcHJveCAxMiBob3VycyBvZiBjb2RpbmcuXG4gICAgVGhhbmtzIHRvIFRlYW0gTmF0aXZlc2NyaXB0IGZvciB0aGUgYXdlc29tZSB3b3JrLCBZT1UgR1VZUyBST0NLISBhbmQgdGhlIENPTU1VTklUWSBmb3IgYWxsIHRoZSBoZWxwLlxuICAgIEFuZCB0aGFua3MgeW91IGd1eXMvZ2FscyBmb3IgcmV2aWV3aW5nIG15IHN1YnNtaXNzaW9uLlxuICAgIFRoYW5rcyBVUExBQlMgZm9yIHRoZSBvcHB1cnR1bml0eSFcbiAgICBEYXRlOlxuICAgIDI1IE5vdiAyMDE4LlxuICAgIERldmVsb3BlcjpcbiAgICBKYW1hbCBNb2hhbW1lZCAoamFtYWxAaWNlbGFicy5pbilcbiAgICB0d2l0dGVyIEBtZGphbWFsXG4gICAgQXBwIFVJOlxuICAgIEZpbmFuY2UgY2FsZW5kYXIgYW5kIHN0YXRzXG4gICAgYnkgQWxleCBTb2wgKEJpZyB0aGFua3MgdG8gQWxleCBmb3IgbWFraW5nIHRoaXMgRnJlZSBmb3IgUGVyc29uYWwgdXNlKVxuICAgIGh0dHBzOi8vd3d3LnVwbGFicy5jb20vcG9zdHMvZmluYW5jZS1jYWxlbmRhci1hbmQtc3RhdHMgXG4gICAgaHR0cHM6Ly93d3cudXBsYWJzLmNvbS9wb3N0cy9maW5hbmNlcy1pbnRlcmZhY2VcbiAgICBGb250OlxuICAgIFF1aWNrc2FuZCAoQm9sZCwgUmVndWxhcikgZnJvbSBuYXRpdmVzY3JpcHQgdnVlIGludGVyYWN0aXZlIHdlYXRoZXIgYXBwIHR1dG9yaWFsXG4gICAgaHR0cHM6Ly93d3cuZGFmb250LmNvbS9xdWlja3NhbmQuZm9udFxuKi9cblxuaW1wb3J0IFZ1ZSBmcm9tICduYXRpdmVzY3JpcHQtdnVlJztcblxuaW1wb3J0IFRvZGF5IGZyb20gJy4vY29tcG9uZW50cy9Ub2RheSc7XG5pbXBvcnQgQmFsYW5jZSBmcm9tICcuL2NvbXBvbmVudHMvQmFsYW5jZSc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGVuZGFyJztcbmltcG9ydCBSYWRDaGFydCBmcm9tICduYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlJ1xuXG5WdWUudXNlKFJhZENoYXJ0KTtcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5uZXcgVnVlKHtcblxuICAgIHJlbmRlcjogaCA9PiBoKCdmcmFtZScsIFtoKFRvZGF5KV0pXG5cbn0pLiRzdGFydCgpO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CYWxhbmNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWU5MGQ1ZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CYWxhbmNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFsYW5jZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjUxZTkwZDVlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZGV2b24vRG9jdW1lbnRzL0RFVi9OYXRpdmUtU2NyaXB0L3BvcnRlIG1vbm5haWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTFlOTBkNWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTFlOTBkNWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTFlOTBkNWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0JhbGFuY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxZTkwZDVlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxZTkwZDVlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0JhbGFuY2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JhbGFuY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFsYW5jZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFsYW5jZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFlOTBkNWUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNjUxMTZjZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDY1MTE2Y2VcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9kZXZvbi9Eb2N1bWVudHMvREVWL05hdGl2ZS1TY3JpcHQvcG9ydGUgbW9ubmFpZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkNjUxMTZjZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkNjUxMTZjZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkNjUxMTZjZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ2NTExNmNlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q2NTExNmNlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0NhbGVuZGFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ2NTExNmNlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ub2RheS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDVhYTdiMTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9kYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ub2RheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImQ1YWE3YjE0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZGV2b24vRG9jdW1lbnRzL0RFVi9OYXRpdmUtU2NyaXB0L3BvcnRlIG1vbm5haWUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDVhYTdiMTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDVhYTdiMTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDVhYTdiMTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RvZGF5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNWFhN2IxNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkNWFhN2IxNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9Ub2RheS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9kYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9kYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvZGF5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNWFhN2IxNCZzY29wZWQ9dHJ1ZSZcIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS90ZXh0L3NwYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGlvbi1iYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2FjdGl2aXR5LWluZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYm9yZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9ib3R0b20tbmF2aWdhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9jb250ZW50LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2NvcmUvdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZGF0ZS1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9odG1sLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2ltYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZG9jay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZmxleGJveC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvbGF5b3V0LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9saXN0LXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvbGlzdC12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9wbGFjZWhvbGRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvcHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zY3JvbGwtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VhcmNoLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2VnbWVudGVkLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc2xpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLWNvbnRlbnQtaXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvdGFiLW5hdmlnYXRpb24tYmFzZS90YWItc3RyaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi1uYXZpZ2F0aW9uLWJhc2UvdGFiLXN0cmlwLWl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RhYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90YWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LWZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3RpbWUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS93ZWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3htbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL3Z1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvdnVlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9