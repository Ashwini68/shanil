import React, { useState, useEffect } from 'react'
import axios from "axios";
import './MyRequest.css';
import WhiteSpace from '../Images/WhiteSpace.png'
import Paginate from '../Admin/Paginate'
import { userrequestLabelConstants } from '../constant';
import NewRequest from '../Images/NewRequest.png'
import { Link, useParams } from 'react-router-dom';
import Edit from '../Images/Edit.png'
import Delete from '../Images/Delete.png'

function MyRequest() {

    const [data, setData] = useState([])
    const [formData, setFormData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://172.19.113.95:3000/api/requests/${id}`);
                //   const userData = response.data.data;
                setFormData(response.data.data);
                console.log(formData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [id]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Array.isArray(data) ? data.slice(firstPostIndex, lastPostIndex) : [];


    return (
        <div>
            <div className="view-myrequest-whole-screen">

                <div className="myrequest-heading">{userrequestLabelConstants[0].pagetitle}</div>
                <div className='myrequest-title'>{userrequestLabelConstants[0].dashboard}</div>

                <div className="extend-myrequest-button">
                    <img src={WhiteSpace} className='extend-myrequest-img' />
                    <div>{userrequestLabelConstants[0].extendbutton}</div>
                </div>


                {/* <Link to='/add_user'> */}
                <Link to='/add_request'>
                    <div className="new-myrequest-button " >
                        <img src={NewRequest} />
                        {userrequestLabelConstants[0].newbutton}
                    </div>
                </Link>
                {/* </Link> */}

                <br /><br /><br /><br />
                <div className="myrequest-table" style={{ width: "1156px" }}>
                   

                    <table>
                        <thead>
                            <tr>
                                <td>{userrequestLabelConstants[1].requestid}</td>
                                <td>{userrequestLabelConstants[1].startdate}</td>
                                <td>{userrequestLabelConstants[1].enddate}</td>
                                <td>{userrequestLabelConstants[1].device}</td>
                                <td>{userrequestLabelConstants[1].makemodel}</td>
                                <td>{userrequestLabelConstants[1].justification}</td>
                                <td>{userrequestLabelConstants[1].status}</td>
                                <td>{userrequestLabelConstants[1].remark}</td>
                                <td>{userrequestLabelConstants[3].editbutton}</td>
                                <td>{userrequestLabelConstants[3].deletebutton}</td>

                            </tr>
                        </thead>

                        <tbody key={formData._id}>
                            <tr>
                                <td>{formData._id}</td>
                                <td>{formData.startdate}</td>
                                <td>{formData.enddate}</td>
                                <td>{formData.assetId?.device}</td>
                                <td>{formData.assetId?.makeAndModel}</td>
                                <td>{formData.businessJustification}</td>
                                <td>
                                    {formData.status ? 'Approved' : 'Pending'}
                                </td>
                                <td>{formData.status ? 'Approved' : 'Pending'}</td>
                                <td>
                                    <Link to={`/edit_request/${formData._id}`}>
                                        <button className='myrequest-edit-button'>
                                            <img src={Edit} className='myrequest-edit-img' />
                                            {userrequestLabelConstants[3].editbutton}
                                        </button>
                                    </Link>

                                </td>
                                <td style={{ borderRight: "1px solid white" }}>

                                    <button className='myrequest-delete-button'>
                                        <img src={Delete} className='myrequest-edit-img' />
                                        {userrequestLabelConstants[3].deletebutton}
                                    </button>

                                </td>

                            </tr>
                        </tbody>
                        {/* ))
                        ) : (
                            <div>No Data Available</div>
                        )
                        } */}
                    </table>
                    {/* <h1>{formData.assetId.device}</h1> */}
                    {Array.isArray(data) ? (<Paginate totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />) : []}
                </div>
            </div>
        </div>
    )
}

export default MyRequest
