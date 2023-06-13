import vector from './Images1/vector.png'
import timer from './Images1/timer.png'
import space from './Images1/space.png';
import que from './Images1/que.png';
import all_out from './Images1/all_out.png';
import used_product from './Images1/used_product.png';
import tablet from './Images1/tablet.png';
import show_time from './Images1/show_time.png';
import cancel_request from './Images1/cancel_request.png'
import extend_request from './Images1/extend_request.png'
import {Asset_data, Asset_request} from './ApiCall';


export const data1=[
    {
        num: <Asset_data getCount={() => {}} />,
        desc: 'Stock Inventory',
        img: vector,
        color:'#0596FF'
    },
    {

        num: <Asset_request/>,
        desc: 'No. of Pending Approvals',
        img: timer,
        color: '#FF5269'
    },
    {

        num: '01',
        desc: 'Extension Request',
        img: space,
        color:'#FF5269'
    },
    {

        num: <Asset_data  />,
        desc: 'Allocated Assests',
        img: all_out,
        color:'#0596FF'

    },
    {
        num: '02',
        desc: 'Overdue Assets',
        img: que,
        color:'#FF5269'

    },

    {
        num: '00',
        desc: 'Obsolete Assets',
        img: used_product,
       color:' #A375FF'
    }

]
 
export const user_data1 = [
    {

        num: '02',
        desc: 'Total Requests',
        img: all_out,
        color:'#0596FF'

    },

    {

        num: '01',
        desc: 'In Que',
        img: que,
        color:'#0596FF'

    },
]

export const user_data2 = [
    {
        head:' My Request Status',
        para: '#041: Approved! In-Use',
        para_sec: '#025:Pending Approval',
        img: [tablet, timer]
    },
]

export const user_data3 = [
    {

       time: '23:59:59',
        desc: 'time to return device',
        img: [show_time,cancel_request, extend_request],
        color:'#0596FF'
        
    }
]

export const data = [
    {
        id: '6463709c75fbfd038c6d224c',
        userId: 'user',
        designation: 'Associate Consultant',
        gcm: 1,
        groupId: 'gcpid',
        name: 'admin',
        baseLocation: 'pune',
        password: 'amruta',
        role: 'user',
        active: 'true'
    },
    {
        id: '6463709c75fbfd038c6d224c',
        userId: 'admin',
        designation: 'Associate Consultant',
        gcm: 1,
        groupId: 'gcpid',
        name: 'admin',
        baseLocation: 'pune',
        password: 'admin',
        role: 'admin',
        active: 'true'
    },
    {
        id: '6463709c75fbfd038c6d224c',
        userId: 'ashwini',
        designation: 'Associate Consultant',
        gcm: 1,
        groupId: 'gcpid',
        name: 'admin',
        baseLocation: 'pune',
        password: 'admin',
        role: 'admin',
        active: 'true'
    }
]
 