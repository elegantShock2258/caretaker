"use client";
import styles from "./search.module.css";

import React, { useEffect, useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const history = localStorage.getItem("searchHistory");
    setSearchHistory(history ? JSON.parse(history) : []);
  }, []);

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.top}>Search</div>
        <div className={styles.form}>
          <input
            id="ip"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
            className={styles.search}
          />
          <div
            onClick={() => {
              //@ts-ignore
              searchHistory.push(document.getElementById("ip")?.value);
              setSearchHistory(searchHistory);
            }}
          >
            🔎
          </div>
        </div>
        <div className={styles.recent}>
          <div className={styles.recentTop}>
            <p>Recent</p>
            <button
              className={styles.clear}
              onClick={() => {
                setSearchHistory([]);
              }}
            >
              Clear all
            </button>
          </div>
        </div>
        {searchHistory.map((searchHistoryEle, i) => {
          return (
            <div className={styles.history} key={i}>
              <p className={styles.historyName}>{searchHistoryEle}</p>
              <div
                className={styles.removeBtn}
                onClick={() => {
                  searchHistory.splice(i, 1);
                  setSearchHistory(searchHistory);
                  setSearchQuery(searchQuery);
                }}
              >
                x
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
