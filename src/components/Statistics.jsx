import React, { useEffect, useState } from "react";
import axios from "axios";
import GitHubCalendar from "react-github-calendar";
import "../styles/Statistics.css"; 

const Statistics = () => {
  const [repoCount, setRepoCount] = useState(0);
  const [starCount, setStarCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const repoResponse = await axios.get(
          "https://api.github.com/users/M-Premnath/repos"
        );
        const userResponse = await axios.get(
          "https://api.github.com/users/M-Premnath"
        );

        const repos = repoResponse.data;
        const user = userResponse.data;

        const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        setRepoCount(repos.length);
        setStarCount(stars);
        setFollowerCount(user.followers);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="statistics" className="stats-container">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold bungee-shade-regular title">Github Statistics</h2>

      <div className="stats-content">
        {/* Left Side: GitHub Calendar */}
        <div className="stats-calendar">
          <h3 className="stats-subtitle">Contribution Calendar</h3>
          <GitHubCalendar username="M-Premnath" colorScheme="dark" />
        </div>

        {/* Right Side: GitHub Stats Cards */}
        <div className="stats-cards">
          <a
            href="https://github.com/M-Premnath?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="stats-card">
              <h3>Repositories</h3>
              <div className="stats-divider"></div>
              <p>{repoCount}</p>
            </div>
          </a>

          <div className="stats-card">
            <h3>Stars</h3>
            <div className="stats-divider"></div>
            <p>{starCount}</p>
          </div>

          <div className="stats-card">
            <h3>Followers</h3>
            <div className="stats-divider"></div>
            <p>{followerCount}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
