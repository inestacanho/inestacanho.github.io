---
layout: home
#title: "San Francisco Crime & Tourism"
---
<head>
  <link rel="stylesheet" href="{{ site.baseurl }}/style.css">
  <script src="{{ site.baseurl }}/scripts.js" defer></script> <!-- Ensure this file exists and has the JS code -->
  <style>
    /* CSS to hide the div by default */
    .demo-placeholder {
      display: none;
    }
  </style>
</head>

# San Francisco Crime & Tourism

## Topic Introduction

San Francisco, one of the most iconic cities in the United States (House of Travel), draws many tourists each year with its iconic landmarks, picturesque views, and well-known neighborhoods. However, with high tourism comes an increased risk of crime, particularly for visitors unfamiliar with the area. 

In this analysis, we examine larceny/theft trends in San Francisco from **2014 to 2024**, aiming to understand the **patterns of this crime**, how it **fluctuates throughout the year**, and how it relates to the city's **historic landmarks**. By analyzing these trends, we hope to help tourists navigate the city more safely, avoiding high-risk areas and knowing when to be extra cautious.

## Crime Analysis: Larceny/Theft

San Francisco’s crime landscape is very broad, but from the crime categories available in our dataset, one crime category stands out for its particular relevance to tourists: **larceny/theft** (Harper, 2001). This includes pickpocketing, purse snatching, and other possible opportunistic thefts (FBI) that frequently target visitors, especially in crowded tourist areas.

We chose to focus on larceny/theft crimes since they represent the most common form of crime affecting tourists. With tourists often carrying valuable things such as smartphones, wallets, and cameras, they become easy targets for thieves. Pickpocketing, in particular, has been a popular topic of discussion, especially in popular tourist areas, making it important to understand where and when these crimes are most likely to happen. 

We start by giving a general overview of the larceny/theft crimes, as well as by district, as per below.

<button onclick="showDiv1()">Larceny/Theft Crimes Overview</button>
<button onclick="showDiv2()">Larceny/Theft Crimes by District</button>

<div id="iframeContainer">
    <div id="larceny_placeholder" class="demo-placeholder" style="display:block;">
        <iframe id="larceny" src="{{ site.baseurl }}images/Larceny_Theft_timeseries.html" width="100%" height="450px"></iframe>
    </div>
</div>

<div id="iframeContainer">
    <!-- Initially Hidden Div with iframe for Larceny/Theft Crimes by District -->
    <div id="larceny_district_placeholder" class="demo-placeholder">
        <iframe id="larceny_district" src="{{ site.baseurl }}images/Larceny_Districts_Interactive.html" width="100%" height="450px"></iframe>
    </div>
</div>

The time-series graph overview of larceny/theft crimes shows how this crime has evolved in San Francisco in the past decade. As shown in the graph, there is a noticeable decline in larceny/theft incidents around 2020, which aligns with the global outbreak of the COVID-19 pandemic. During this time, due to restrictions imposed, there was a very significant decrease in tourism levels as well as public gatherings, which likely led to fewer opportunities for theft. Nevertheless, after 2020, there was a sharp rebound, indicating that larceny incidents returned to pre-pandemic levels as restrictions eased.

The same can be seen in the interactive line plot showcasing the larceny/theft crimes by district. Crime levels drop sharply when the pandemic and subsequent restrictions emerge, but quickly rebound when the same are gradually lifted, returning to near pre-pandemic levels. At first glance, the **most prevalent districts of larceny crimes are Central, Southern, and Northern**. However, it should be emphasized that while the Southern district presents a vast number of larceny/theft incidents early in the decade, surpassing 1,000 crimes in summer 2015, it experienced a steady decline from 2018 onwards. In contrast, Central and Northern districts maintained high crime levels throughout the period, with noticeable spikes even post-pandemic. This observation could suggest a potential shift in crime hotspots over time, possibly influenced by changing urban dynamics, policing strategies, or economic factors.

## Distribution of the Crimes on the Map

<figure>
  <iframe src="{{ site.baseurl }}/images/heat_map.html" width="100%" height="450px"></iframe>
  <figcaption> ALTER AND ADD CAPTION </figcaption>
</figure>

## Distribution of Larceny Crimes over the Years

<figure>
  <img src="/images/crime_calendar_plot.png" alt="Crime Calendar Plot" width="100%" style="width: 100%; height: auto;">
  <figcaption> Larceny crime calendar plot over the years in San Francisco.</figcaption>
</figure>

In regards to the analysis over the years, larceny and theft crimes in San Francisco show a bit of a vague seasonal trends, since there are noticable increases during the summer months, particularly in June and July, as well as in late November and December, but depending on the year, the crimes could also be more spread out throughout the whole year. Generally, weekends also tend to present slightly higher crime rates, likely due to increased foot traffic in popular areas.

Prior to 2020, larceny incidents remained relatively stable. However, as also mentioned previously, there was a significant decline in 2020 and 2021, due to COVID-19 restrictions and limitations on tourism and public activity. By 2022, crime rates began to rise again, though they have not yet reached pre-pandemic levels.  

A particularly interesting pattern is the consistently high number of theft incidents recorded on June 30th across multiple years. Several factors may contribute to this, including peak tourism season, major public events, and the potential for the date to fall on a high-activity weekend.

Furthermore, it is also worth noting that the number of larceny crimes has consistently been dropping since the last third of 2023, with last year registering numbers that are very close to the critical pandemic period.

## Conclusion



### References

- House of Travel. The USA's 7 most iconic cities. houseoftravel.co.nz. Retrieved from https://www.houseoftravel.co.nz/blogs/north-america/usa/the-usas-7-most-iconic-cities 
- Dee Wood Harper Jr. (2001). Comparing Tourists Crime Victimization. popcenter.asu.edu. Retrieved from https://popcenter.asu.edu/sites/default/files/problems/crimes_against_tourists/PDFs/HarperJr._2001.pdf 
- FBI. Larceny-theft definition. ucr.fbi.gov. Retrieved from https://ucr.fbi.gov/crime-in-the-u.s/2017/crime-in-the-u.s.-2017/topic-pages/larceny-theft  

<!-- Include your JavaScript at the end of the body to ensure the DOM is fully loaded -->
<script>
  function showDiv1() {
    // Hide all iframe containers to ensure only one iframe is visible
    const iframeContainers = document.querySelectorAll('.demo-placeholder');
    iframeContainers.forEach(container => {
      container.style.display = 'none';
    });

    // Show the Larceny Overview iframe
    document.getElementById("larceny_placeholder").style.display = 'block';
  }

  function showDiv2() {
    // Hide all iframe containers to ensure only one iframe is visible
    const iframeContainers = document.querySelectorAll('.demo-placeholder');
    iframeContainers.forEach(container => {
      container.style.display = 'none';
    });

    // Show the Larceny District iframe
    document.getElementById("larceny_district_placeholder").style.display = 'block';
  }
</script>
