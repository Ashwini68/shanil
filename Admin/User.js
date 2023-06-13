// import React from 'react'
// import Calendar from './Calendar'
// import GridItems from './GridItems';
// import { GridRequestStatus, GridTimer } from './GridItems';
// import { user_data1, user_data2, user_data3 } from './data';
// // import Header from './Header';
// import './User.css'
// import requestAssest from './Images1/requestAssest.png'
// import MarkView from './Images1/MarkView.png'
// import { dashboard } from '../constant';
// import { format } from 'date-fns';
// import BasicDateCalendar from './Calendar';




// export default function User() {
//   const currentDate = new Date();
//   const formattedDate = format(currentDate, 'EEEE d MMM, yyyy');

//   return (


//     <div className='user-dashboard'>

//       <h1 className='h-dashboard'>{dashboard[0].dashboard_heading}</h1>

//       <p className='p-today'>{dashboard[0].dashboard_subtitle} {formattedDate}</p>

//       {/* <Header /> */}
//       {/* <Calendar /> */}
//       <p className='search'>Search</p>
//       <form>
//         <input type='text' placeholder='Search...' className='input-search-field'></input>
//       </form>

//       <div className='grid-container user'>
//         {
//           user_data1.map((card, index) => (
//             <GridItems key={index} num={card.num} desc={card.desc} img={card.img} color={card.color}/>
//           ))
//         }
//       </div>
//       <div className='my-request-status'>
//         {
//           user_data2.map((card, index) => (
//             <GridRequestStatus key={index} head={card.head} para={card.para} para_sec={card.para_sec} img={card.img} />
//           ))
//         }
//       </div>
//       <div className='time'>
//         {
//           user_data3.map((card, index) => (
//             <GridTimer key={index} time={card.time} desc={card.desc} img={card.img} color={card.color}/>
//           ))
//         }
//       </div>


//       <div className='user-db-calender-mui'>  

// <BasicDateCalendar/>

// </div>
//       <button className='btn-request-asset'>{dashboard[1].btn_request_assest}</button>
      
//         <button className='btn-my-request'>{dashboard[1].btn_my_request}</button>
//     </div>
   
  
//   )
// }



import React from 'react'
import Calendar from './Calendar'
import GridItems from './GridItems';
import { GridRequestStatus, GridTimer } from './GridItems';
import { user_data1, user_data2, user_data3 } from './data';
import './User.css'
import { dashboard } from '../constant';
import { format } from 'date-fns';
import BasicDateCalendar from './Calendar';

export default function User() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE d MMM, yyyy');

  return (
    <div className='user-dashboard'>

      <h1 className='user-db-h-dashboard'>{dashboard[0].dashboard_heading}</h1>

      <p className='user-db-p-today'>{dashboard[0].dashboard_subtitle} {formattedDate}</p>

      {/* <Header /> */}
      {/* <Calendar /> */}
    
      <p className='user-db-search'>Search</p>
      <form>
        <input type='text' placeholder='Search...' className='user-db-input-search-field'></input>
      </form>
      {/* <NewCalendar/> */}

      {/* <p className='search'>Search</p>

      <div className='input-rectangle'>npm uninstall
        <span><img src={search}></img></span>
        <input className='input-field' placeholder='search'></input>
      </div> */}
      

      <div className='grid-container user-db'>
        {
          user_data1.map((card, index) => (
            <GridItems key={index} num={card.num} desc={card.desc} img={card.img} color={card.color}/>
          ))
        }
      </div>
      <div className='user-db-my-request-status'>
        {
          user_data2.map((card, index) => (
            <GridRequestStatus key={index} head={card.head} para={card.para} para_sec={card.para_sec} img={card.img} />
          ))
        }
      </div>
      <div className='user-db-time'>
        {
          user_data3.map((card, index) => (
            <GridTimer key={index} time={card.time} desc={card.desc} img={card.img} color={card.color}/>
          ))
        }
      </div>
      
      <div className='user-db-calender-mui'>  
      <BasicDateCalendar/>
      </div>

      <button className='user-db-btn-request-asset'>{dashboard[1].btn_request_assest}</button>
      
        <button className='user-db-btn-my-request'>{dashboard[1].btn_my_request}</button>
    </div>
  )
}
