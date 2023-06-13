// import React, { useState } from 'react';

// import './Calendar.css';


// const Calendar = () => {

//     const [currYear, setCurrYear] = useState(new Date().getFullYear());
//     const [currMonth, setCurrMonth] = useState(new Date().getMonth());

//     const months = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"];

//     const renderCalendar = () => {
//         let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
//         let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
//         let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
//         let liTags = "";

//         for (let i = firstDayOfMonth; i > 0; i--) {
//             liTags += `<li className="inactive">${lastDateOfLastMonth - i + 1}</li>`;
//         }
//         for (let i = 1; i <= lastDateOfMonth; i++) {
//             liTags += `<li>${i}</li>`;
//         }
//         return liTags;

//     };

//     const handleMonthChange = (direction) => {
//         setCurrMonth((prevMonth) => {
//           let newMonth = prevMonth + (direction === "prev" ? -1 : 1);
    
//           if (newMonth < 0 || newMonth > 11) {
//             let date = new Date(currYear, newMonth);
//             setCurrYear(date.getFullYear());
//             newMonth = date.getMonth();
//           } else {
//             setCurrYear(new Date().getFullYear());
//           }
    
//           return newMonth;
//         });
//       };

//     return (
//         <div className="wrapper">
//             <header>
                
//                 <button className='button_previous' onClick={() => handleMonthChange("prev")}>&lt;</button>
//                 <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
//                 <button className='button_next' onClick={() => handleMonthChange("next")}>&gt;</button>


//             </header>

//             <div className="calendar">

//                 <ul className="weeks">

//                     <li>Sun</li>

//                     <li>Mon</li>

//                     <li>Tue</li>

//                     <li>Wed</li>

//                     <li>Thu</li>

//                     <li>Fri</li>

//                     <li>Sat</li>

//                 </ul>

//                 <ul className="days" dangerouslySetInnerHTML={{ __html: renderCalendar() }}></ul>

//             </div>

//         </div>

//     );

// };




// export default Calendar;



import * as React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// import AdapterDayjs from '@mui/x-date-pickers/AdapterDayjs';



export default function BasicDateCalendar() {

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <DateCalendar />

    </LocalizationProvider>

  );

}