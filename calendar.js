import dayjs from "dayjs";

const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const INITIAL_YEAR = dayjs().format("YYYY");
const INITIAL_MONTH = dayjs().format("M");

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

document.getElementById("calendar-month").innerHTML = `
<!-- Parent container for the calendar month -->
<div class="calendar-month">
  <!-- The calendar header -->
  <section class="calendar-month-header">
    <!-- Month name -->
    <div
      id="selected-month"
      class="calendar-month-header-selected-month"
    >
      September 2022
    </div>

    <!-- Pagination -->
    <div class="calendar-month-header-selectors">
      <span id="previous-month-selector"><</span>
      <span id="present-month-selector">Today</span>
      <span id="next-month-selector">></span>
    </div>
  </section>
  
  <!-- Calendar grid header -->
  <ol
    id="days-of-week"
    class="day-of-week"
  >
    <li>Mon</li>
    <li>Tue</li>
    <li>Wed</li>
    <li>Thu</li>
    <li>Fri</li>
    <li>Sat</li>
    <li>Sun</li>
  </ol>

  <!-- Calendar grid -->
  <ol
    id="calendar-days"
    class="days-grid"
  >
    <li class="calendar-day">
      <span>1</span>
    </li>
    <li class="calendar-day">
      <span>2</span>
    </li>
    <li class="calendar-day">
      <span>3</span>
    </li>
    <li class="calendar-day">
      <span>4</span>
    </li>
    <li class="calendar-day">
      <span>5</span>
    </li>
    <li class="calendar-day">
      <span>6</span>
    </li>
    <li class="calendar-day">
      <span>7</span>
    </li>
    <li class="calendar-day">
      <span>8</span>
    </li>
    <li class="calendar-day">
      <span>9</span>
    </li>
    <li class="calendar-day">
      <span>10</span>
    </li>
    <li class="calendar-day">
      <span>11</span>
    </li>
    <li class="calendar-day">
      <span>12</span>
    </li>
    <li class="calendar-day">
      <span>13</span>
    </li>
    <li class="calendar-day">
      <span>14</span>
    </li>
    <li class="calendar-day">
      <span>15</span>
    </li>
    <li class="calendar-day">
      <span>16</span>
    </li>
    <li class="calendar-day">
      <span>17</span>
    </li>
    <li class="calendar-day">
      <span>18</span>
    </li>
    <li class="calendar-day">
      <span>19</span>
    </li>
    <li class="calendar-day">
      <span>20</span>
    </li>
    <li class="calendar-day">
      <span>21</span>
    </li>
    <li class="calendar-day">
      <span>22</span>
    </li>
    <li class="calendar-day">
      <span>23</span>
    </li>
    <li class="calendar-day">
      <span>24</span>
    </li>
    <li class="calendar-day">
      <span>25</span>
    </li>
    <li class="calendar-day">
      <span>26</span>
    </li>
    <li class="calendar-day">
      <span>27</span>
    </li>
    <li class="calendar-day">
      <span>28</span>
    </li>
    <li class="calendar-day">
      <span>29</span>
    </li>
    <li class="calendar-day">
      <span>30</span>
    </li>
  </ol>
</div>
`;

// Select the calendar grid header element
const daysOfWeekElement = document.getElementById("days-of-week");

// Loop through the array of weekdays
WEEKDAYS.forEach(weekday => {
  // For each item in the array, make a list item element
  const weekDayElement = document.createElement("li");
  // Append a child element inside the list item...
  daysOfWeekElement.appendChild(weekDayElement);
  /// ...that contains the value in the array
  weekDayElement.innerText = weekday;
});