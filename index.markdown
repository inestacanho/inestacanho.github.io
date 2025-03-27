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
    <iframe id="larceny" src="/images/Larceny_Theft_timeseries.html" width="100%" height="450px"></iframe>
    <iframe id="robbery" src="/images/Robbery_timeseries.html" width="100%" height="450px"></iframe>
</div>

Looking at their trend evolution in the graphs, we observe that larceny/theft is the most prevalent crime, consistently dominating the total crime count. However, its trend is less stable, with significant fluctuations over the past decade. The most noticeable drop occurred around 2020, most likely influenced by external factors such as the pandemic, which affected patterns due to reduced mobility and tourism. After 2020, there was a sharp rebound, indicating that larceny incidents returned to pre-pandemic levels as restrictions eased.

On the other hand, robbery has shown a much more stable trend in comparison to the previous category. While the number of incidents has fluctuated slightly, it has not experienced the same dramatic ups and downs as larceny. The steady nature of robbery suggests it is less impacted by external factors.