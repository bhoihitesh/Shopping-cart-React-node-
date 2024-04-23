import React, { useEffect, useState } from "react";
import axios from "axios";

const Crickscore = () => {
  const [matchScore, setMatchScore] = useState([]);
  useEffect(() => {
    const cricketScores = async () => {
      const options = {
        method: "GET",
        url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live",
        headers: {
          "X-RapidAPI-Key":
            "e0bb9b6bddmsh43109cf55e35b7ep17114bjsn3eff4acfc380",
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setMatchScore(response.data.typeMatches);
      } catch (error) {
        console.error(error);
      }
    };

    cricketScores();
  }, []); // Empty dependency array to ensure useEffect runs only once

  console.log("api req",matchScore)
  const a = "A Online Computer Science Portal for Geeks";
  const b = isNaN;
  const c = null;

  console.log("adding", a);
  // console.log("adding", typeof(a), typeof(b), typeof(c));

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {matchScore.map((match, i) => {
              const matchSeries = match.seriesMatches;
              return (
                <div key={i + 1}>
                  <div className="match-score-container">
                    <p>{match.matchType}</p>
                    {/* <p>{matchSeries}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Crickscore;
