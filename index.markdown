---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: "San Francisco Crime & Tourism"

---
<head>
  <link rel="stylesheet" href="{{ site.baseurl }}/style.css">
</head>


## Topic Introduction

In this analysis, we chose to examining crime evolution from **2014 to 2024** in connection with **historic landmarks** of San Francisco. By exploring trends in  near key landmarks, we aim to identify potential patterns and assess whether certain locations are becoming more vulnerable over time or if the crime rate has declined. This insight can help in understanding how crime dynamics shift around significant city sites, particularly those frequented by tourists.

## Crime Analysis
From the crimes categories available in our dataset, the most concerning ones regarding tourists are **robbery** and **larcency/theft**.

<iframe src="/images/Larceny_Theft_timeseries.html" width="100%" height="600px"></iframe>

<!-- <iframe src="/images/Robbery_timeseries.html" width="100%" height="600px"></iframe> -->






Looking at their trend evolution in the below graph, we observe that larceny/theft is the most prevalent crime, consistently dominating the total crime count. However, its trend is less stable, with significant fluctuations over the past decade. The most noticeable drop occurred around 2020, most likely influenced by external factors such as the pandemic, which affected patterns due to reduced mobility and tourism. After 2020, there was a sharp rebound, indicating that larceny incidents returned to pre-pandemic levels as restrictions eased.

On the other hand, robbery has shown a much more stable trend in comparison to the previous category. While the number of incidents has fluctuated slightly, it has not experienced the same dramatic ups and downs as larceny. The steady nature of robbery suggests it is less impacted by external factors.


## Landmarks Data  
Data sourced from:  
[San Francisco Landmark Listings](https://data.sfgov.org/Housing-and-Buildings/Map-of-Landmarks-Listed-in-Article-10-of-the-San-F/hycf-nc3x)

