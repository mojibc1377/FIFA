import * as React from 'react';
import { MdPlaylistAddCheck } from 'react-icons/md';
import { CgPlayListAdd } from 'react-icons/cg';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { PiUserListDuotone } from 'react-icons/pi';
import ChallengeForm from '../component/challengeForm';
import ChallengePage from './mosabeqat';
import MyChallenges from '../component/mychallenges';
import CurrentAcceptedChallenges from './currentAcceptedChallenge';

function Chals() {
  const [activeTab, setActiveTab] = React.useState('all');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-gray-100 self-center flex flex-col pt-20 p-8 rounded-md fade-out xl:flex-col lg:flex-col lg:justify-between">
      <div className="flex flex-wrap gap-2 md:justify-center sm:justify-center justify-center space-y-0 space-x-0">
        <TabButton
          active={activeTab === 'all'}
          onClick={() => {handleTabChange('all')}}
          icon={<HiOutlineClipboardList className="mr-2 " />}
        >
          تمام چالش ها
        </TabButton>
        
        <TabButton
          active={activeTab === 'accepted'}
          onClick={() => {handleTabChange('accepted')}}
          icon={<MdPlaylistAddCheck className="mr-2" />}
        >
          چالش های پذیرفته شده
        </TabButton>
        <TabButton
          active={activeTab === 'my'}
          onClick={() => {handleTabChange('my')}}
          icon={<PiUserListDuotone className="mr-2" />}
        >
          چالش های من
        </TabButton>
        <TabButton
          active={activeTab === 'create'}
          onClick={() => {handleTabChange('create')}}
          icon={<CgPlayListAdd className="mr-2 mt-1" />}
        >
          ایجاد چالش جدید
        </TabButton>
      </div>
      <div className="mt-2">
        {activeTab === 'all' && <ChallengePage/>}
        {activeTab === 'create' && <ChallengeForm/>}
        {activeTab === 'accepted' && <CurrentAcceptedChallenges/>}
        {activeTab === 'my' && <MyChallenges/>}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, children }) {
  const baseClasses =
    'border-b-2 border-l-2 border-r-2 border-transparent bg-gray-700 hover:text-gray-800 py-2 px-4 rounded-xl focus:outline-none';
  const activeClasses = active
    ? 'border-gray-300 bg-white text-black'
    : 'hover:bg-gray-100';
  const inactiveClasses = !active
    ? 'hover:bg-gray-100'
    : 'border-gray-300 bg-white text-black';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${inactiveClasses} flex items-center space-x-2`}
      style={{ minWidth: '140px' }} // Adjust the minimum width as needed
    >
      {icon}
      {children}
    </button>
  );
}

export default Chals;
