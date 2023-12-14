import React , {useEffect, useState} from 'react'
import {FaStar} from 'react-icons/fa'
const colors={
    oragne : "#FFA500",
    gray : "#808080"
} 
function Rating({rating}) {
    const stars=Array(5).fill(0);
    const [currentvalue,setcurrentvalue]=useState(0);
    useEffect(()=>{
        setcurrentvalue(rating);
    },[rating])
    
    return (
        <>
            {
                stars.map((_, index) => {
                    return (
                        <FaStar key={index}
                            style={{
                                cursor: 'pointer'
                            }}
                            color={(currentvalue) > index ? colors.oragne : colors.gray}

                        />

                    )
                })
            }
        </>
    )
}

export default Rating
