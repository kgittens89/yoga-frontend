import { useState, useEffect } from 'react';

function useFetchRandomPose() {
    const [pose, setPose] = useState();
    const [poseData, setPoseData] = useState([]);
    const [randomId, setRandomId] = useState();
    
    
    useEffect(() => {
			// fetchRandomPose()
			getPosesData();
			//eslint-disable-next-line
		}, [])

    async function getPosesData() {
        const url = 'https://still-sands-89510.herokuapp.com/flowfactory/asana';
        
        const res = await fetch(url)
        const resJson = await res.json()
        setPoseData(resJson)

        let randomNumber = await Math.floor(Math.random() * poseData.length);
        
        const poseObj = await poseData.filter((pose) => {
            console.log(pose.id)
            return pose.id === randomNumber;
        });

        setPose( poseObj );

        // let randomPathId = await pose[0]._id

        // setRandomId(randomPathId)
    }
    
    
    return randomId
}

export default useFetchRandomPose;