function CurrentList({ challenges}) {



  return (
    <div className="text-gray-200 absolute w-full top-14 fade-out pt-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Challenges List</h2>
      <ul className="space-y-10">
        {challenges.map((challenge, index) => (
          <li
            key={index}
            className="border-b flex align-middle justify-between flex-row pl-10 fade-out border-gray-600 pb-2"
          >
            <div className="challengeData text-left">
              <p>
                <span className="challengelist font-bold">
                  {challenge.challengerName}
                </span>
              </p>
              <p>
                <span className="challengelist font-bold">
                  {challenge.gameName}
                </span>
              </p>
              <p>
                <span className="challengelist font-bold">
                  {challenge.consoleType}
                </span>
              </p>
              <p className="akhari mb-4">
                <span className="challengelist font-bold">
                  ${challenge.challengeAmount}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrentList;
