import { useState, useEffect } from 'react';

function useFetchRandomPose() {
    const [randomId, setRandomId] = useState(null);

    useEffect(() => {
			getPosesData();
			//eslint-disable-next-line
		}, [])

     function getPosesData() {
        const url =
					'https://yoga-production-8fa1.up.railway.app/flowfactory/asana';
         fetch(url)
         .then (res => res.json())
             .then((res) => {
                 let randomNumber = Math.floor(Math.random() * res.length);
               return res[randomNumber - 1]
        })
             .then((poseObj) => {
                setRandomId(poseObj._id)
            })
            .catch(err => console.log(err))
    }
    return randomId
}

export default useFetchRandomPose;