// import React, { useState, useEffect } from "react";
// import "./HabitTracker.css";
// import $ from "jquery";

// // Utility function to get the number of days in a month
// function daysInMonth(month: number, year: number) {
//   return new Date(year, month + 1, 0).getDate();
// }

// // Utility function to get the first day of the month (0 = Sunday, 1 = Monday, ...)
// const getFirstDayOfMonth = (month: number, year: number) => {
//   return new Date(year, month, 1).getDay();
// };

// const HabitTracker = () => {
//   const year = 2025; // Fixed year to 2025
//   const [month, setMonth] = useState(0); // Start with January (0-based index)
//   const [habits, setHabits] = useState<{
//     [key: string]: { completed: boolean; task: string; hours: string };
//   }>({});
//   const [timeLogs, setTimeLogs] = useState<{
//     [key: string]: { [task: string]: string };
//   }>({});
//   const [selectedDay, setSelectedDay] = useState<number | null>(null);
//   const [task, setTask] = useState<string>("");
//   const [hours, setHours] = useState<string>("");

//   // Calculate the number of days and the starting day for the current month
//   const totalDays = daysInMonth(month, year);
//   const firstDay = getFirstDayOfMonth(month, year);

//   // Generate an array of days for the calendar grid
//   const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

//   // Function to handle habit completion toggle
//   const toggleHabitCompletion = (day: number) => {
//     const key = `${year}-${month + 1}-${day}`;
//     const updatedHabits = {
//       ...habits,
//       [key]: { ...habits[key], completed: !habits[key]?.completed },
//     };

//     setHabits(updatedHabits);
//     localStorage.setItem("habit-tracker", JSON.stringify(updatedHabits));
//   };

//   // Function to handle time logging
//   const handleTimeLog = () => {
//     if (!task || !hours || !selectedDay) return;

//     const key = `${year}-${month + 1}-${selectedDay}`;
//     const updatedTimeLogs = { ...timeLogs };

//     if (!updatedTimeLogs[key]) {
//       updatedTimeLogs[key] = {};
//     }

//     updatedTimeLogs[key][task] = hours;

//     // Mark the day as completed after logging time
//     const updatedHabits = {
//       ...habits,
//       [key]: { completed: true, task, hours },
//     };

//     setTimeLogs(updatedTimeLogs);
//     setHabits(updatedHabits);
//     setTask("");
//     setHours("");

//     // Save updated time logs and habits to localStorage
//     localStorage.setItem("time-logs", JSON.stringify(updatedTimeLogs));
//     localStorage.setItem("habit-tracker", JSON.stringify(updatedHabits));
//   };

//   // Function to navigate to the previous month
//   const goToPreviousMonth = () => {
//     setMonth((prev) => (prev === 0 ? 11 : prev - 1));
//   };

//   // Function to navigate to the next month
//   const goToNextMonth = () => {
//     setMonth((prev) => (prev === 11 ? 0 : prev + 1));
//   };

//   // Load habits and time logs from localStorage on component mount
//   useEffect(() => {
//     const savedHabits = localStorage.getItem("habit-tracker");
//     if (savedHabits) {
//       setHabits(JSON.parse(savedHabits));
//     }

//     const savedTimeLogs = localStorage.getItem("time-logs");
//     if (savedTimeLogs) {
//       setTimeLogs(JSON.parse(savedTimeLogs));
//     }
//   }, []);

//   // Function to handle the click on a date to open time log modal
//   const handleDateClick = (day: number) => {
//     setSelectedDay(day);
//     $(".time-log-modal").fadeIn(); // jQuery animation for showing modal
//   };

//   const closeModal = () => {
//     $(".time-log-modal").fadeOut(); // jQuery animation for hiding modal
//     setSelectedDay(null);
//   };

//   return (
//     <div className="habit-tracker">
//       <div className="calendar-navigation">
//         <button onClick={goToPreviousMonth} className="nav-button">
//           ◀
//         </button>
//         <h2>
//           Habit Tracker -{" "}
//           {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
//           {year}
//         </h2>
//         <button onClick={goToNextMonth} className="nav-button">
//           ▶
//         </button>
//       </div>

//       <div className="calendar">
//         {[...Array(firstDay)].map((_, index) => (
//           <div key={`empty-${index}`} className="calendar-day empty"></div>
//         ))}

//         {dates.map((day) => {
//           const key = `${year}-${month + 1}-${day}`;
//           const habit = habits[key];
//           const isCompleted = habit?.completed || false;
//           const taskName = habit?.task || "";
//           const hoursLogged = habit?.hours || "";

//           return (
//             <div
//               key={day}
//               className={`calendar-day ${isCompleted ? "completed" : ""}`}
//               onClick={() => handleDateClick(day)}
//             >
//               <div className="task-left">
//                 {taskName === "Yoga" && isCompleted && (
//                   <span className="green-text">{taskName}</span>
//                 )}
//               </div>
//               <div className="task-right">
//                 {taskName === "Work" && isCompleted && (
//                   <span>{hoursLogged} hours</span>
//                 )}
//               </div>
//               <div className="day-number">{day}</div>
//             </div>
//           );
//         })}
//       </div>

//       {selectedDay && (
//         <div className="time-log-modal">
//           <h3>
//             Log time for {selectedDay}{" "}
//             {new Date(year, month).toLocaleString("default", { month: "long" })}
//           </h3>
//           <label>
//             Task:
//             <input
//               type="text"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//               placeholder="e.g., Yoga, Work"
//             />
//           </label>
//           <label>
//             Hours:
//             <input
//               type="number"
//               value={hours}
//               onChange={(e) => setHours(e.target.value)}
//               placeholder="e.g., 1.5"
//             />
//           </label>
//           <button onClick={handleTimeLog} className="save-button">
//             Save
//           </button>
//           <button onClick={closeModal} className="close-button">
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HabitTracker;

import React, { useState, useEffect } from "react";
import "./HabitTracker.css";
import $ from "jquery";

// Utility function to get the number of days in a month
function daysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Utility function to get the first day of the month (0 = Sunday, 1 = Monday, ...)
const getFirstDayOfMonth = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

const HabitTracker = () => {
  const year = 2025; // Fixed year to 2025
  const [month, setMonth] = useState(0); // Start with January (0-based index)
  const [habits, setHabits] = useState<{
    [key: string]: { completed: boolean; task: string; hours: string };
  }>({});
  const [timeLogs, setTimeLogs] = useState<{
    [key: string]: { [task: string]: string };
  }>({});
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [task, setTask] = useState<string>("");
  const [hours, setHours] = useState<string>("");

  // Calculate the number of days and the starting day for the current month
  const totalDays = daysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  // Generate an array of days for the calendar grid
  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  // Function to handle habit completion toggle
  const toggleHabitCompletion = (day: number) => {
    const key = `${year}-${month + 1}-${day}`;
    const updatedHabits = {
      ...habits,
      [key]: { ...habits[key], completed: !habits[key]?.completed },
    };

    setHabits(updatedHabits);
    localStorage.setItem("habit-tracker", JSON.stringify(updatedHabits));
  };

  // Function to handle time logging
  const handleTimeLog = () => {
    if (!task || !hours || !selectedDay) return;

    const key = `${year}-${month + 1}-${selectedDay}`;
    const updatedTimeLogs = { ...timeLogs };

    if (!updatedTimeLogs[key]) {
      updatedTimeLogs[key] = {};
    }

    updatedTimeLogs[key][task] = hours;

    // Mark the day as completed after logging time
    const updatedHabits = {
      ...habits,
      [key]: { completed: true, task, hours },
    };

    setTimeLogs(updatedTimeLogs);
    setHabits(updatedHabits);
    setTask("");
    setHours("");

    // Save updated time logs and habits to localStorage
    localStorage.setItem("time-logs", JSON.stringify(updatedTimeLogs));
    localStorage.setItem("habit-tracker", JSON.stringify(updatedHabits));
  };

  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  // Load habits and time logs from localStorage on component mount
  useEffect(() => {
    const savedHabits = localStorage.getItem("habit-tracker");
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }

    const savedTimeLogs = localStorage.getItem("time-logs");
    if (savedTimeLogs) {
      setTimeLogs(JSON.parse(savedTimeLogs));
    }
  }, []);

  // Function to handle the click on a date to open time log modal
  const handleDateClick = (day: number) => {
    setSelectedDay(day);
    $(".time-log-modal").fadeIn(); // jQuery animation for showing modal
  };

  const closeModal = () => {
    $(".time-log-modal").fadeOut(); // jQuery animation for hiding modal
    setSelectedDay(null);
  };

  return (
    <div className="habit-tracker">
      <div className="calendar-navigation">
        <button onClick={goToPreviousMonth} className="nav-button">
          ◀
        </button>
        <h2>
          Habit Tracker -{" "}
          {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
          {year}
        </h2>
        <button onClick={goToNextMonth} className="nav-button">
          ▶
        </button>
      </div>

      <div className="calendar">
        {[...Array(firstDay)].map((_, index) => (
          <div key={`empty-${index}`} className="calendar-day empty"></div>
        ))}

        {dates.map((day) => {
          const key = `${year}-${month + 1}-${day}`;
          const habit = habits[key];
          const isCompleted = habit?.completed || false;
          const taskName = habit?.task || "";
          const hoursLogged = habit?.hours || "";

          return (
            <div
              key={day}
              className={`calendar-day ${isCompleted ? "completed" : ""}`}
              onClick={() => handleDateClick(day)}
            >
              <div className="task-left">
                {taskName === "Yoga" && isCompleted && (
                  <span className="green-text">{taskName}</span>
                )}
              </div>
              <div className="task-right">
                {taskName === "Work" && isCompleted && (
                  <span>{hoursLogged} hours</span>
                )}
              </div>
              <div className="day-number">{day}</div>
            </div>
          );
        })}
      </div>

      {selectedDay && (
        <div className="time-log-modal">
          <h3>
            Log time for {selectedDay}{" "}
            {new Date(year, month).toLocaleString("default", { month: "long" })}
          </h3>
          <label>
            Task:
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="e.g., Yoga, Work"
            />
          </label>
          <label>
            Hours:
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="e.g., 1.5"
            />
          </label>
          <button onClick={handleTimeLog} className="save-button">
            Save
          </button>
          <button onClick={closeModal} className="close-button">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default HabitTracker;
