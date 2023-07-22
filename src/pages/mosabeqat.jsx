import * as React from 'react';
import ChallengesList from '../component/challengeList';
import challenges from '../data/challenges';

function ChallengePage(){
    return(
        <>
        <ChallengesList className="challenge-page " challenges = {challenges}/>
        </>
    )
}
export default ChallengePage;