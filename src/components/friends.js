import React, { Component } from "react";
import "./css/friends.css";

const Friend = () => {
  return (
    <div class="col-15">
      <ul class="list-group">
        <p class="list-group-item heading">Friend List</p>
        <p class="list-group-item heading">Number of Friends: 18</p>
        <p class="list-group-item">Sir Cat</p>
        <p class="list-group-item">Captain Jackson</p>
        <p class="list-group-item">Steve</p>
        <p class="list-group-item">Thanos Stark</p>
        <p class="list-group-item">Kanye Northeast</p>
        <p class="list-group-item">Frank Nocean</p>
        <p>
          <small class="text-muted">View More</small>
        </p>
      </ul>
    </div>
  );
};

export default Friend;
