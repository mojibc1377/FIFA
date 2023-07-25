import React, { useState, useEffect } from 'react';
import ChallengesList from '../component/challengeList';
import { request } from '../services/requests';

function ChallengePage() {
  // eslint-disable-next-line no-unused-vars
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
  useEffect(() => {
    //db
        localStorage.setItem("acceptedChallenges", JSON.stringify(acceptedChallenges));

  }, [acceptedChallenges]);
  
  return (
    <div>
      <ChallengesList
        challenges={challenges}
        onAcceptChallenge={handleAcceptChallenge}
        status={true} //status means for accept(+accept button)"true" fro show (-acceot button ) "false"
      />
    </div>
  );
}

export default ChallengePage;
