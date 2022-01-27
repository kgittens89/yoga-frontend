import React from 'react';
import axios from 'axios';


function MySequenceNav({ sequencePose }) {
    const handleClick = () => {
        const sequenceObj = sequencePose.map((pose) => {
            return {
                englishName: pose.englishName,
                image: pose.image
            }
        })
        
        const obj = {
            sequenceName: 'User Sequence',
            sequencePoses: sequenceObj
        }

        const url = 'https://still-sands-89510.herokuapp.com/flowfactory/sequence';
        
        axios.post(url, obj)   
            .then(err => console.log(err))
    }
    
    return (
        <>
        <div>
        {sequencePose.map((pose) => {
            return (
                <>
                    <p id={pose._id}>{pose.englishName}</p>
                    <img src={pose.image} alt={pose.englishName} />
                </>
                )
            })}
            </div>
            <button onClick={handleClick}>Save Sequence</button>
            </>
            );
        }
        
        export default MySequenceNav;