This project replicates a study done by Laura Granka, the UX Director at Google Search and Assistant.

Laura uses Google Trends data to build a model for predicting general election results


Theories
- Order of candidate names signals support

- Searches for the n-word

 - States with a greater ratio of Republican to Democratic searches
 will be more likely to vote Republican.

 c) Republican Candidate: State volume/National volume
 d) Democratic Candidate: State volume/National volume
 e) Home computer access, college educated persons

H2a. States with a greater candidate ratio than national average will be more
likely to vote for that candidate



 H2b: States with a greater issue ratio than national average will be more 
 likely to vote for the party that champions that issue

 H3: States with a higher proportion of home-computer use will have a 
 greater candidate and issue ratios than the national average

Dependent variable:
We create a second baseline, predicting the percentage of 2012
Republican popular vote in each state based on the lagged
percentage of Republican popular vote. These lagged-vote
trends alone account for approximately 85% of the variance in
predicting the state-level popular vote (table 2), and incor-
rectly predict only four states (Indiana, Montana, Missouri,
and North Carolina

 Model:

 VOTE R = LAGVOTE R + REP [St/Nat] + DEM[St/
 Nat] + TAX [St/Nat] + COLLEGE + COMP + TAX[St/
 Nat] * COLLEGE + REP [St/Nat] * COMP + DEM[St/
 Nat] * COMP
 

Implementation Challenge:

Retrieving the data is slow.

Problem - data doesn't exactly match the online Trends tool