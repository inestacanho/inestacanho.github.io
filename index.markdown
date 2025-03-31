---
layout: home
# title: "San Francisco Crime & Tourism"
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

<header class="post-header">
    <h1 class="post-title">San Francisco Crime & Tourism</h1>
</header>
<!-- # San Francisco Crime & Tourism -->

## Topic Introduction

San Francisco, one of the most popular cities in the United States (House of Travel), draws many tourists yearly with its iconic landmarks, picturesque views, and well-known neighborhoods. However, with high tourism comes an increased exposure to the possibility of theft and crime. These visitors unfamiliar with the area might be more prone to become targets. One of the most common types of crime that tourists are exposed to is theft (Ronald W. Glesnor and Kenneth J. Peak, 2004).

Therefore, in this analysis, we will examine **Larceny/Theft trends** in San Francisco from **2014 to 2024**, aiming to understand how the trends fluctuate throughout the years and how they relate to the city's **landmarks** (obtained from (DataSF, 2025)) that tourists often tend to visit the most. By analyzing these patterns, we hope to help tourists avoid/be aware of high-risk areas and thus navigate the city more safely in the present day.

## Crime Overview

<!-- San Francisco’s crime landscape is very broad, but from the crime categories available in our dataset, one crime category stands out for its particular relevance to tourists: **larceny/theft** (Harper, 2001). This includes pickpocketing, purse snatching, and other possible opportunistic thefts (FBI) that frequently target visitors, especially in crowded tourist areas. 
We chose to focus on larceny/theft crimes since they represent the most common form of crime affecting tourists. With tourists often carrying valuable things such as smartphones, wallets, and cameras, they become easy targets for thieves. Pickpocketing, in particular, has been a popular topic of discussion, especially in popular tourist areas, making it important to understand where and when these crimes are most likely to happen. -->

We start by giving a general overview of the larceny/theft crimes over the years, along with a district-by-district crime overview.

<button onclick="showDiv1()">Larceny/Theft Crimes Overview</button>
<button onclick="showDiv2()">Larceny/Theft Crimes by District</button>

<div>
  <div id="iframeContainer">
      <div id="larceny_placeholder" class="demo-placeholder" style="display:block;">
          <iframe id="larceny" src="{{ site.baseurl }}images/Larceny_Theft_timeseries.html" width="100%" height="450px" title="Larceny/Theft Crime Count from 2014 to 2024"></iframe>
      </div>
  </div>

  <div id="iframeContainer">
      <!-- Initially Hidden Div with iframe for Larceny/Theft Crimes by District -->
      <div id="larceny_district_placeholder" class="demo-placeholder">
          <iframe id="larceny_district" src="{{ site.baseurl }}images/Larceny_Districts_Interactive.html" width="100%" height="450px" title="Larceny/Theft Crime Count by District from 2014 to 2024"></iframe>
      </div>
  </div>
  <figcaption> Figure 1: Time-series graphs of Larceny/Theft crimes from 2014 to 2024. </figcaption>
</div>

<div> 
  <br/>
</div>

The above time-series graph of larceny/theft crimes shows how this crime has evolved in San Francisco over the past decade. As shown in the graph, there is a noticeable decline in larceny/theft incidents around 2020, which aligns with the global outbreak of the COVID-19 pandemic. During this period, restrictions imposed resulted in a significant decrease in tourism and public gatherings, likely leading to fewer opportunities for theft. Nevertheless, after 2020, there was a sharp rebound, indicating that larceny incidents returned to pre-pandemic levels as restrictions eased.

This trend is also reflected in the second interactive plot, which presents larceny/theft crime counts by district. Crime levels dropped sharply with the emergence of the pandemic and subsequent restrictions, but quickly rebounded as those restrictions were gradually lifted, returning to near pre-pandemic levels. 

Furthermore, it is also visible that San Francisco has experienced a significant reduction in larceny/theft crimes recently, since around September of 2023, primarily due to a sharp decline in car break-ins, one of the most common crimes in the city (San Francisco Chronicle, 2025). From 2023 to 2024, car break-ins fell by 54%, according to police data, leading to an overall 37% drop in larceny/theft incidents.

<!-- While the overall number of larceny/theft crimes has decreased due to the reduction in car break-ins, it is worth noting that this data does not provide insights into other types of theft, such as pickpocketing. Given that our project focuses on tourist-targeted crimes, particularly pickpocketing, we cannot definitively state whether pickpocketing incidents have followed the same trend as car break-ins. Further analysis would be necessary to make conclusions about pickpocketing trends in San Francisco. -->

<!-- At first glance, the **most prevalent districts of larceny crimes are Central, Southern, and Northern**. However, it should be emphasized that while the Southern district presents a vast number of larceny/theft incidents early in the decade, surpassing 1,000 crimes in summer 2015, it experienced a steady decline from 2018 onwards. In contrast, Central and Northern districts maintained high crime levels throughout the period, with noticeable spikes even post-pandemic. This observation could suggest a potential shift in crime hotspots over time, possibly influenced by changing urban dynamics, policing strategies, or economic factors. -->

## Crime Hotspots

In order to visualize if the hotspots of crime within SF are linked to the locations of the landmarks, the following heatmap of the crime distribution throughout the years, along with the landmarks (in blue), is plotted.

<figure>
  <iframe src="{{ site.baseurl }}/images/heat_map.html" width="100%" height="450px"></iframe>
  <figcaption> Figure 2: Heatmap of Larceny/Theft crimes from 2014 to 2024. </figcaption>
</figure>

As the visualization plays, it can be observed that there is consistently more activity in the upper and middle right side of San Francisco, where many of the landmarks are located, compared to the regions with sparse landmarks. This indicates that a lot of the larceny/theft-related crimes might certainly be *linked* to tourist attractions! However, it is also important to note that it is hard to classify whether the crimes within these areas are solely targeted at tourists visiting these landmarks or are simply a coincidence, since no information within our dataset indicates whether the victims of these crimes are tourists or not. But, a strong argument could be made that there is a relation between landmarks and larceny/theft crime as **[San Francisco Census Maps](https://sfstandard.com/2022/12/08/san-francisco-neighborhood-new-census-data-maps/)** shows that, in 2022, around 9.4% of the population live in the Sunset district (to the left of the map) which seemingly is around the same population as the Central, Northern, and Southern districts combined (to the upper right of the map), but the latter have more larceny/theft criminal activity compared to the other and their only differing factor within our analysis is the density of landmarks within the areas!

## Daily Distribution of Crimes

Now that we have an idea of what places have high larceny/theft activity for tourists to be aware of, we further explore if there is a specific timeframe for when it would be the *safest* for tourists to visit San Francisco.

<figure>
  <img src="/images/crime_calendar_plot.png" alt="Crime Calendar Plot" width="100%" style="width: 100%; height: auto;">
  <figcaption> Figure 3: Larceny /Theft crime calendar plot from 2014 to 2024.</figcaption>
</figure>

In regards to the analysis over the years, larceny/theft crimes in San Francisco show a bit of a vague seasonal trend. There are noticeable increases during the summer months, particularly in June and July, as well as in late November and December, but depending on the year, the crimes could also be more spread out throughout the whole year. Generally, weekends also tend to present slightly higher crime rates, likely due to increased foot traffic in popular areas. A particularly interesting pattern is the consistently high number of theft incidents recorded on and around the end of June across multiple years. Coincidentally, the last weekend of June is seemingly when the annual **[Pride Parade](https://en.wikipedia.org/wiki/San_Francisco_Pride)** takes place in San Francisco. Due to the huge number of people that would be present at the parade, it becomes an easy target for many larceny/theft-related crimes. The parade did not take place in 2020 and 2021, which is also clearly reflected in the calendar plot!

Prior to 2020, larceny incidents remained relatively stable. However, as mentioned previously, there was a significant decline in overall crimes in 2020 and 2021 due to COVID-19 restrictions and limitations on tourism and public activity. By 2022, crime rates began to rise again, though they have not yet reached pre-pandemic levels. Furthermore, and as previously mentioned, it is also to note the fact that the number of larceny crimes has consistently been dropping since the last third of 2023, with last year registering numbers that are very close to the critical pandemic period.

## Conclusion

Overall, our analysis reveals that there is a link between locations with many landmarks and larceny/theft activity, and that there is also more activity during potential holiday periods (around June, July, late November, and December). If any incoming tourists are very particular about the safety of their possessions, then it would be ideal to visit areas that are towards the left of the city and during non-holiday periods. <!-- Also, as there is relatively less crime in 2024 compared to previous years, and if the crime counts continue to decline, tourists may remain hopeful to visit any and all landmarks without fear in the future! -->

Additionally, while the overall number of larceny/theft crimes has decreased due to the reduction in car break-ins, it is worth noting that this data does not provide insights into other types of tourist-targeted crimes, such as pickpocketing. Given that our analysis focuses on a broader range of crimes, we cannot definitively state whether pickpocketing incidents have followed the same trend as car break-ins. Therefore, it is still important for tourists to be aware of their surroundings, as there is still crime within these recommended areas. 

<!-- the recent sharp decline in car break-ins, which has significantly contributed to the overall decrease in larceny/theft crimes, offers hope that other crimes within this category might follow a similar downward trend. However, it is still important for tourists to be aware of their surroundings, as there is still crime within these recommended areas.  -->

 <!-- If such continues, it may lead to an even smaller number of incidents in the future, creating a safer environment for both residents and tourists. As crime levels in 2024 remain lower compared to previous years, tourists may remain hopeful to visit any and all landmarks without fear in the future! -->

### References

- House of Travel. The USA's 7 most iconic cities. houseoftravel.co.nz. Retrieved from https://www.houseoftravel.co.nz/blogs/north-america/usa/the-usas-7-most-iconic-cities 
- Ronald W. Glesnor and Kenneth J. Peak (2004). https://popcenter.asu.edu/content/crimes-against-tourists-0
<!-- - Dee Wood Harper Jr. (2001). Comparing Tourists Crime Victimization. popcenter.asu.edu. Retrieved from https://popcenter.asu.edu/sites/default/files/problems/crimes_against_tourists/PDFs/HarperJr._2001.pdf  -->
<!-- - FBI. Larceny-theft definition. ucr.fbi.gov. Retrieved from https://ucr.fbi.gov/crime-in-the-u.s/2017/crime-in-the-u.s.-2017/topic-pages/larceny-theft   -->
- DataSF. Landmarks Listed in Article 10 of the San Francisco Planning Code. data.sfgov.org. Retrieved from https://data.sfgov.org/Housing-and-Buildings/Landmarks-Listed-in-Article-10-of-the-San-Francisc/97yj-54sx/about_data  
- San Francisco Chronicle. (2025). San Francisco violent, property crime fell to 20-year low in 2024. Retrieved from https://www.sfchronicle.com/crime/article/san-francisco-2024-data-20020378.php
- https://en.wikipedia.org/wiki/San_Francisco_Pride
- https://sfstandard.com/2022/12/08/san-francisco-neighborhood-new-census-data-maps/

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
