---

layout: home
title: "San Francisco Crime & Tourism"

---
<head>
  <link rel="stylesheet" href="{{ site.baseurl }}/style.css">
  <script src="{{ site.baseurl }}/scripts.js" defer></script> <!-- Ensure this file exists and has the JS code -->
</head>

## Topic Introduction

In this analysis, we chose to examining crime evolution from **2014 to 2024** in connection with **historic landmarks** of San Francisco. By exploring trends in  near key landmarks, we aim to identify potential patterns and assess whether certain locations are becoming more vulnerable over time or if the crime rate has declined. This insight can help in understanding how crime dynamics shift around significant city sites, particularly those frequented by tourists.

## Crime Analysis
From the crimes categories available in our dataset, the most concerning ones regarding tourists are **robbery** and **larcency/theft**.

<button onclick="showIframe('larceny')">Show Larceny/Theft</button>
<button onclick="showIframe('robbery')">Show Robbery</button>

<div id="iframeContainer">
    <!-- Initial state: All iframes are hidden -->
    <iframe id="larceny" src="/images/Larceny_Theft_timeseries.html" width="100%" height="600px"></iframe>
    <iframe id="robbery" src="/images/Robbery_timeseries.html" width="100%" height="600px"></iframe>
</div>