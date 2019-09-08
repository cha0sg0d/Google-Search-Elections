This project extends a study done by Laura Granka, the UX Director at Google Search and Assistant.

Laura uses Google Trends data to build a model for predicting US general election results

Here is that paper: https://www.uvm.edu/~dguber/POLS234/articles/granka.pdf

In order to do this work, I needed Google Search data

1. I used a Google Trends Javascript API made by Pat310 to gather the data.
	a. For the time period of July 1 - October 31 for the elections of 2004, 2008, 2012, and 2016, I gathered state-level Trends data comparing the candidate's names
	b. For example, in 2016, 56 percent of searches for either Clinton or Trump were for Trump
2. Following the paper's example, I then added supplementary metrics:
	a. Lag vote - The % Republican vote of the state in the previous general election
	b. State/National Ratio - For a better comparison, this metric compares the state-level search percentage for each candidate to the national percentage search percentage for each candidate
3. Run a simple linear regression in R!
	a. Model:
	VOTE R = LAGVOTE R + REP [St/Nat] + DEM[St/Nat] + Rep/Dem Ratio
4. Results:

5. Next steps:
I have improved on the preliminary lag-vote model but in order to do better, here is some additional hypotheses I would like to add to the regression:
- Order of candidate names signals support
- Searches for the n-word - from Seth Stevens-Dadowitz's book Everybody Lies
- College education in the state
- Interaction terms between features
