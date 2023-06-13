import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Asset_data({ getCount }){
    const [asset, setAsset] = useState([]);
    const [count, setCount] = useState(0);
    const [activeCount, setActiveCount] = useState(0);

    useEffect(() => {
        console.log('use effect console... loadAsset function');
        loadAsset();
    }, []);

    const loadAsset = async () => {
        try {
            const response = await axios.get('http://172.19.113.88:3000/api/asset');
            console.log(response);
            const result = response.data.data;
            setAsset(result);
            setCount(result.length);
            // console.log(result);
            // console.log(result.length);

            const activeAssets = result.filter(item => item.active === true);
            setActiveCount(activeAssets.length);
            // console.log(activeAssets.length);

            if (typeof getCount === 'function') {
                getCount(result.length); // Pass the count value to the parent component
              }

        } catch (error) {
            console.error('Error occurred', error);
        }
    };

    if (typeof getCount === 'function') {
        return <>
                {activeCount}/{count}
            </>; // Return null if getCount prop is provided
      }
    
      return count; // Return only the count value
    

    // return (
    //     <>
    //         {activeCount}/{count}
    //     </>
    // );
}
///
export function Asset_request() {
    
    const [countP, setCountP] = useState(0);

    useEffect(() => {
        console.log('use effect console... load request Asset function');
        loadReq_Asset();
    }, []);

    const loadReq_Asset = async () => {
        try {
            const response = await axios.get('http://172.19.113.88:3000/api/request');
            console.log(response);
            const result = response.data.data;

             const pendingAssets = result.filter(item => item.status !== true);
             console.log(pendingAssets)

             setCountP(pendingAssets.length);

        } catch (error) {
            console.error('Error occurred', error);
        }
    };

    return (
        <>
            {countP}
        </>
    );
}
