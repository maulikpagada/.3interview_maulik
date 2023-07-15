import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Listdoc from './Listdoc';

function Doctor(props) {

    const Data = [
        {
            id: 101,
            name: 'maulik',
            besingations: 'pagada',
            description: 'BCA',
            url: 'https://picsum.photos/300/200',
        },
        {
            id: 102,
            name: 'meet',
            besingations: 'lathiya',
            description: 'B.COM',
            url: 'https://picsum.photos/300/200',
        },
        {
            id: 103,
            name: 'ketan',
            besingations: 'ramani',
            description: 'BIC',
            url: 'https://picsum.photos/300/200',
        },
        {
            id: 104,
            name: 'Divyesh',
            besingations: 'ramoliya',
            description: 'IT',
            url: 'https://picsum.photos/300/200',
        }
    ]

    localStorage.setItem("Data", JSON.stringify(Data))
   
    const [data, setdata] = useState([]);
    const [fdata, setFdata] = useState()


    useEffect(() => {

        let localdata = JSON.parse(localStorage.getItem("Data"));

        setdata(localdata)

    }, [])

    const handlesearch = (value) => {
        console.log(value);

        if (value !== "") {
            let filteredData = data.filter((m) => (
                m.name.toLowerCase().includes(value.toLowerCase()) ||
                m.besingations.toString().includes(value) ||
                m.description.toString().includes(value))
            );
            setFdata(filteredData)
        } else {
            setFdata()
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <input type="text" placeholder='Search Book' onChange={(e) => handlesearch(e.target.value)} />

                    <Listdoc mdata={fdata ? fdata : data} />
                </div>
            </div>
        </>
    );
}

export default Doctor;