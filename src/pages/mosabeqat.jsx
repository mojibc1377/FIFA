/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ChallengesList from '../component/challengeList';
import { request } from '../services/requests';

function ChallengePage() {
  const [challenges, setChallenges] = useState([]);
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);
  React.useEffect(()=>{
    const fetchProducts = async() =>{
      const {data} = await request.get('/api/challenges');
      setChallenges(data)
      console.log("challenges are fetched")
    }
    fetchProducts();
  },[])

  const handleAcceptChallenge = (challenge) => {
    
    setAcceptedChallenges((prevAcceptedChallenges) => [...prevAcceptedChallenges, challenge]);
  };

  const pendingChallenges = challenges.filter((challenge) => challenge.accepterId === '');

  return (
    <div>
      <ChallengesList
        challenges={pendingChallenges}
        onAcceptChallenge={handleAcceptChallenge}
        status={true} //status means for accept(+accept button)"true" fro show (-acceot button ) "false"
      />
    </div>
  );
}

export default ChallengePage;
