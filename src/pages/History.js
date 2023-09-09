import React from "react";
import { BiHistory } from "react-icons/bi";
import "../components/History.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("historyvid")) || [
      { id: "history", msg: "No history Data Found" },
    ];
    setHistoryList(savedHistory);
  }, []);

  return (
    <div className="history text-light">
      <h4 className="ms-4">
        <BiHistory className="mx-3]2 fs-3" />
        History
      </h4>
      {historyList.map((videos) => (
        <div className="">
          {videos.id === "history" ? (
            <h3>{videos.msg}</h3>
          ) : (
            <Link
              className="links text-light"
              to={`/video/${videos.id}`}
              key={videos.id}
            >
              <div className="video-style ">
                <img
                  className="his-thumbnail"
                  src={videos.thumbnailSrc}
                  alt=""
                />

                <div className="video-content ">
                  <div className="video-info">
                    <p className="mb-3 video-title_1">{videos.title}</p>
                  </div>
                  <div className="mb-3 channel-content">
                    <img
                      className="video-thumbnail"
                      src={videos.channelIconSrc}
                      alt=""
                      style={{ width: 35, height: 35 }}
                    />
                    <p className="my-auto video-channel-name">
                      {videos.channelName}
                    </p>
                  </div>
                  <p className="mb-1 video-views">
                    {videos.subscribers} subscribers
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default History;
