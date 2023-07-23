import React, { useState, useEffect } from 'react';
import ChallengesList from '../component/challengeList';
import challengesData from '../data/challenges';

function ChallengePage() {
  // eslint-disable-next-line no-unused-vars
  const [challenges, setChallenges] = useState(challengesData);
  const [acceptedChallenges, setAcceptedChallenges] = useState([]);

//   const handleAddChallenge = (acceptedChallenge) => {
//     // Retrieve the user's ID (You'll need to replace this with your actual user ID retrieval logic)
//     const userId = "user123"; // Replace this with your user ID retrieval logic

//     // Get the existing accepted challenges from localStorage (if any)
//     const existingAcceptedChallenges = JSON.parse(localStorage.getItem(userId + "acceptedChallenges")) || {};

//     // Add the new accepted challenge to the existing accepted challenges
//     const updatedAcceptedChallenges = [...existingAcceptedChallenges, acceptedChallenge];

//     // Save the updated accepted challenges to localStorage
//     localStorage.setItem(userId + "acceptedChallenges", JSON.stringify(updatedAcceptedChallenges));
//   };

  const handleAcceptChallenge = (challenge) => {
    setAcceptedChallenges((prevAcceptedChallenges) => [...prevAcceptedChallenges, challenge]);
  };

 
  // useEffect hook to render CurrentChallenges whenever acceptedChallenges changes
  useEffect(() => {
    // Call handleAddChallenge with the updated value of acceptedChallenges
    // handleAddChallenge(acceptedChallenges);

    // Log the updated value of acceptedChallenges
    console.log(acceptedChallenges);
        localStorage.setItem("acceptedChallenges", JSON.stringify(acceptedChallenges));

  }, [acceptedChallenges]);
  

  return (
    <div>
      <ChallengesList
        challenges={challenges}
        onAddChallenge={()=>console.log(".")}
        onAcceptChallenge={handleAcceptChallenge}
      />
    </div>
  );
}

export default ChallengePage;
