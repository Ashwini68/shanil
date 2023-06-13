// import React from 'react'
// import GridItems from './GridItems';
// import { data1 } from './data'
// import './Admin.css';
// import Calendar from './Calendar';
// import { format } from 'date-fns';
// import { dashboard } from '../constant';
// import { Asset_data } from './ApiCall';
// import BasicDateCalendar from './Calendar';



// export default function Dashboard() {
//   const currentDate = new Date();
//   const formattedDate = format(currentDate, 'EEEE d MMM, yyyy');

//   return (
//     <>
   

//       <h1 className='h-dashboard'>{dashboard[0].dashboard_heading}</h1>
    
//       <p className='search'>Search</p>
//       <form>
//         <input type='text' placeholder='Search...' className='input-search-field'></input>
//       </form>

//       <p className='p-today'>{dashboard[0].dashboard_subtitle} {formattedDate}</p>


//       <div className="grid-container">
//         {
//           data1.map((card, index) =>
//           (
//             <GridItems key={index} num={card.num} desc={card.desc} img={card.img} color={card.color}/>
//           ))
//         }
//       </div>


//       <div className='admin-db-calender-mui'>  
//        <BasicDateCalendar/>
//       </div>
//       <button className='btn-visit-inventory'>Visit Inventory</button>
//         <button className='btn-view-requests'>View Requests</button>
       
//     </>
//   )
// }



import React from 'react'
import GridItems from './GridItems';
import { data1 } from './data'
import './Admin.css';
import { format } from 'date-fns';
import { dashboard } from '../constant';
import BasicDateCalendar from './Calendar';
import Layout from '../Routing/Layout';

export default function Dashboard() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE d MMM, yyyy');

  return (
    <>
 {/* <Layout> */}
      <h1 className='admin-db-h-dashboard'>{dashboard[0].dashboard_heading}</h1>
    
      <p className='admin-db-search'>Search</p>
      <form>
        <input type='text' placeholder='Search...' className='admin-db-input-search-field'></input>
      </form>

      <p className='admin-db-p-today'>{dashboard[0].dashboard_subtitle} {formattedDate}</p>
      {/* <Calendar /> */}

      <div className="admin-db-grid-container">
        {
          data1.map((card, index) =>
          (
            <GridItems key={index} num={card.num} desc={card.desc} img={card.img} color={card.color}/>
          ))
        }
      </div>

      <div className='admin-db-calender-mui'>  
      <BasicDateCalendar/>
      </div>
   
      <button className='admin-db-btn-visit-inventory'>Visit Inventory</button>
        <button className='admin-db-btn-view-requests'>View Requests</button>
        {/* </Layout> */}
    </>
  )
}