import React, { useState, useEffect } from 'react'
import './GroupListing.css';
import axios from 'axios';
import Paginate from './Paginate';
import { groupLabelConstants } from '../constant';
import { Link } from 'react-router-dom';
import Edit from './Images1/Edit.png'
import Delete from './Images1/Delete.png'

function GroupListing() {

  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Array.isArray(data) ? data.slice(firstPostIndex, lastPostIndex) : [];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(groupLabelConstants[2].api)
        setData(response.data.data);
        console.log(response.data)
      }
      catch (error) {
        console.error("Errors in fetching data", error);
      }
    };
    fetchData();
  }, [])

  const [labelsChecked, setLabelsChecked] = useState(false);
  const [quoteChecked, setQuoteChecked] = useState(false);

  const handleDownload = () => {
    alert("Do you want to download CSV file ??")
    const csv = JSON2CSV(data);
    const downloadLink = document.createElement("a");
    const blob = new Blob(["\ufeff", csv]);
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = "data.csv";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const JSON2CSV = (objArray) => {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let line = '';

    if (labelsChecked) {
      const head = array[0];
      if (quoteChecked) {
        for (const index in array[0]) {
          const value = index + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      } else {
        for (const index in array[0]) {
          line += index + ',';
        }
      }

      line = line.slice(0, -1);
      str += line + '\r\n';
    }

    for (let i = 0; i < array.length; i++) {
      line = '';

      if (quoteChecked) {
        for (const index in array[i]) {
          const value = array[i][index] + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      } else {
        for (const index in array[i]) {
          line += array[i][index] + ',';
        }
      }

      line = line.slice(0, -1);
      str += line + '\r\n';
    }

    return str;
  };

  return (
    <div >

      <div className="group-list-whole-screen">
        <div className="group-heading">{groupLabelConstants[0].pagetitle}</div>
        {/* <span style={{marginLeft: "-15px"}}>{groupLabelConstants[0].dashboard}</span> */}
        <div className='group-dash'>{groupLabelConstants[0].dashboard}</div>

        <div className="total-group">{groupLabelConstants[0].totalgroup}</div>
        <div className="total-group-logo1">
          {Object.keys(data).length}
        </div>

        <Link to='/add_group'>
          <div className="add-group-button" style={{ }}>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4641 17.6428C6.25104 17.6428 2.82134 14.2131 2.82134 10C2.82134 5.78692 6.25104 2.35722 10.4641 2.35722C14.6772 2.35722 18.1069 5.78692 18.1069 10C18.1069 14.2131 14.6772 17.6428 10.4641 17.6428ZM10.4641 0.446526C9.20954 0.446526 7.96725 0.693634 6.80816 1.17374C5.64908 1.65385 4.59592 2.35755 3.70879 3.24467C1.91717 5.0363 0.910645 7.46626 0.910645 10C0.910645 12.5337 1.91717 14.9637 3.70879 16.7553C4.59592 17.6425 5.64908 18.3462 6.80816 18.8263C7.96725 19.3064 9.20954 19.5535 10.4641 19.5535C12.9979 19.5535 15.4278 18.547 17.2195 16.7553C19.0111 14.9637 20.0176 12.5337 20.0176 10C20.0176 8.74542 19.7705 7.50313 19.2904 6.34405C18.8103 5.18496 18.1066 4.1318 17.2195 3.24467C16.3323 2.35755 15.2792 1.65385 14.1201 1.17374C12.961 0.693634 11.7187 0.446526 10.4641 0.446526ZM11.4195 5.22326H9.50877V9.04466H5.68738V10.9554H9.50877V14.7767H11.4195V10.9554H15.2409V9.04466H11.4195V5.22326Z" fill="#515869" />
            </svg>
            {groupLabelConstants[0].addgroupbutton}
          </div>
        </Link>

        <div className="group-view-history-button" style={{}}>
          <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 5.5H11V10.5L15.28 13.04L16 11.83L12.5 9.75V5.5ZM12 0.5C9.61305 0.5 7.32387 1.44821 5.63604 3.13604C3.94821 4.82387 3 7.11305 3 9.5H0L3.96 13.53L8 9.5H5C5 7.64348 5.7375 5.86301 7.05025 4.55025C8.36301 3.2375 10.1435 2.5 12 2.5C13.8565 2.5 15.637 3.2375 16.9497 4.55025C18.2625 5.86301 19 7.64348 19 9.5C19 11.3565 18.2625 13.137 16.9497 14.4497C15.637 15.7625 13.8565 16.5 12 16.5C10.07 16.5 8.32 15.71 7.06 14.44L5.64 15.86C7.27 17.5 9.5 18.5 12 18.5C14.3869 18.5 16.6761 17.5518 18.364 15.864C20.0518 14.1761 21 11.8869 21 9.5C21 7.11305 20.0518 4.82387 18.364 3.13604C16.6761 1.44821 14.3869 0.5 12 0.5Z" fill="#515869" />
          </svg>
          <div style={{ width: "138px" }}> {groupLabelConstants[0].viewhistorybutton}</div>
        </div>

        <div className="group-download-reports-button" onClick={handleDownload} style={{ width: "220px" }}>
          <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9375 6.64062V0H1.17188C0.522461 0 0 0.522461 0 1.17188V23.8281C0 24.4775 0.522461 25 1.17188 25H17.5781C18.2275 25 18.75 24.4775 18.75 23.8281V7.8125H12.1094C11.4648 7.8125 10.9375 7.28516 10.9375 6.64062ZM6.25 13.6719C6.25 13.8877 6.0752 14.0625 5.85938 14.0625H5.46875C5.03711 14.0625 4.6875 14.4121 4.6875 14.8438V16.4062C4.6875 16.8379 5.03711 17.1875 5.46875 17.1875H5.85938C6.0752 17.1875 6.25 17.3623 6.25 17.5781V18.3594C6.25 18.5752 6.0752 18.75 5.85938 18.75H5.46875C4.17432 18.75 3.125 17.7007 3.125 16.4062V14.8438C3.125 13.5493 4.17432 12.5 5.46875 12.5H5.85938C6.0752 12.5 6.25 12.6748 6.25 12.8906V13.6719ZM8.41162 18.75H7.8125C7.59668 18.75 7.42188 18.5752 7.42188 18.3594V17.5781C7.42188 17.3623 7.59668 17.1875 7.8125 17.1875H8.41162C8.70215 17.1875 8.91992 17.0166 8.91992 16.8643C8.91992 16.8008 8.8833 16.7344 8.81641 16.6768L7.74756 15.7603C7.33398 15.4077 7.09668 14.9067 7.09668 14.3862C7.09668 13.3462 8.02539 12.5005 9.16748 12.5005H9.76562C9.98145 12.5005 10.1562 12.6753 10.1562 12.8911V13.6724C10.1562 13.8882 9.98145 14.063 9.76562 14.063H9.1665C8.87598 14.063 8.6582 14.2339 8.6582 14.3862C8.6582 14.4497 8.69482 14.5161 8.76172 14.5737L9.83057 15.4902C10.2441 15.8428 10.4814 16.3438 10.4814 16.8643C10.4819 17.9038 9.55371 18.75 8.41162 18.75ZM12.5 12.8906V13.9062C12.5 14.896 12.7783 15.8677 13.2812 16.6836C13.7842 15.8682 14.0625 14.896 14.0625 13.9062V12.8906C14.0625 12.6748 14.2373 12.5 14.4531 12.5H15.2344C15.4502 12.5 15.625 12.6748 15.625 12.8906V13.9062C15.625 15.6387 14.9961 17.27 13.8535 18.5005C13.7061 18.6592 13.4985 18.75 13.2812 18.75C13.064 18.75 12.8564 18.6592 12.709 18.5005C11.5664 17.27 10.9375 15.6387 10.9375 13.9062V12.8906C10.9375 12.6748 11.1123 12.5 11.3281 12.5H12.1094C12.3252 12.5 12.5 12.6748 12.5 12.8906ZM18.4082 5.12695L13.6279 0.341797C13.4082 0.12207 13.1104 0 12.7979 0H12.5V6.25H18.75V5.95215C18.75 5.64453 18.6279 5.34668 18.4082 5.12695Z" fill="#2FA51B" />
          </svg>
          {groupLabelConstants[0].csvfilebutton}
        </div>

        <br />  <br /><br /><br />
        <div className="group-table" style={{ width: "1156px" }}>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>{groupLabelConstants[1].groupname}</td>
                <td>{groupLabelConstants[1].grouplevel}</td>
                <td>{groupLabelConstants[1].active}</td>
                <td>{groupLabelConstants[3].editbutton}</td>
                <td>{groupLabelConstants[3].deletebutton}</td>

              </tr>
            </thead>

            {Array.isArray(data) ? currentPosts.map((data) =>
            (
              <tbody key={data.id}>
                <tr>
                  <td style={{ backgroundColor: "#fbebeb" }}>{data.id}</td>
                  <td>{data.groupName}</td>
                  <td>{data.groupLevel}</td>
           
                  <td>
                    {data.active ? 'Approved' : 'Pending'}
                  </td>
                  <td>
                  <Link to={`/edit_group/${data._id}`}>
                      <button className='group-edit-button'>
                        <img src={Edit} className='edit-img' />
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td style={{ borderRight: "1px solid white" }}>

                    <button className='group-delete-button'>
                      <img src={Delete} className='edit-img' />
                      Delete</button>

                  </td>

                </tr>
              </tbody>
            )
            ) : (<div>No Data Available</div>)}

          </table>

          <Paginate totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />

        </div>

      </div>
    </div>
  )
}

export default GroupListing
