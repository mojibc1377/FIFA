import * as React from 'react';
import CurrentList from '../component/currentChallenges';

function CurrentAcceptedChallenges (){
    return(
        <CurrentList
        challenges={JSON.parse(localStorage.getItem("acceptedChallenges"))}
       
      />
    )
}
export default CurrentAcceptedChallenges;