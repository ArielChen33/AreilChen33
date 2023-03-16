import React from 'react'

export default function projects() {
  return<div className="projects">
    <div>
      <h1>Projects</h1>
      <strong>Introduction Website of NTUGB - University of Pittsburgh</strong>
      <ul>
      <li>Used JavaScript, HTML, and CSS to form the structure.</li>
      <li>There is map performed by Tableau, table, and timeline to well present the information.</li>
      </ul>
      <strong>Surface Coatings Testing of PPG Industries Analytics – University of Pittsburgh</strong>
      <ul>
        <li>Analyzed the influence of elements on the corrosion of surface</li>
        <li>Got a prediction result of accuracy of 0.82 by regressions and random forest in R studio</li>
      </ul>
      <strong>Pet Information Chatbot Construct – National Taiwan</strong>
      <ul>
        <li>Deployed on Heroku, so users could gain related information by chatting.</li>
        <li>Used Python flask as backend, Google map API and Government API as location information</li>
      </ul>
      <strong>MLB Players’ Hitting Performance Prediction – National Taiwan University</strong>
      <ul>
        <li>Constructed machine learning models with logistic regression, DNN by Python</li>
        <li>The final prediction could explain elements leading to hits or home runs</li>
      </ul>
    </div>
  </div>
}
