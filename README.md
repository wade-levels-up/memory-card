# Digimon Memory Card Game

This is a project I created as part of The Odin Project curriculum

The objective of this project was to continue to build upon my experience using React, the useState hook and to get to grips with the useEffect hook to interact with an external API.

This project was fairly straightforward though I learnt a little bit about React.memo whilst in the process of making it. Originally I was passing props to the Card components which were props that changed their values. This would cause the memoization of the Cards to be inefficient. Instead of passing props that changed over time such as the score to the cards I passed functions as props to the Card components which let them change the state on parent elements.
Memoization of the cards meant that once their data was loaded in it didn't need to be re-loaded each time which made rendering the components faster.

All in all I really enjoyed this product, learning about useEffect, dependancy arrays and cleanup.
