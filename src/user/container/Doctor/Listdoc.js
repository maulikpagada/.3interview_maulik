import React from 'react';
import CustomCard from '../../UL/CustomCard';

function Listdoc({ mdata }) {
    return (
        <>
            {
                mdata.map((a, i) => {
                    return (
                        <CustomCard value={a} />
                    )
                })
            }
        </>
    );
}

export default Listdoc;