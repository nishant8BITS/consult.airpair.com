# Expert Mojo Endoint

Mojo is how AirPair's matching algorithm matches experts against technology tags 
and other customer specifications like price and availability. Mojo is comprised
of 4 sub-scores.

- Requirements (Tags, Level of Difficulty)
- Experience (# of AirPairs, Feedback, Articles, Workshops)
- Engagement (Reply rate, Frequency to airpair.com, Time online in Chat)
- Social (GH followers / contributions, SO karma, IN Endorsements)

## GET

### /experts/mojo/me

The self endpoint contains both a top level numeric compontent for equirements,
experience, engagement & social scores as well as sub scores describing the
components that make up the top level scores.

#### Examples

```
// Get Experience, Engagement & Social scores
/experts/mojo/me

// Get Experience, Engagement & Social + Requirements Score calculated  for
// node.js with availability in the next 2 hours at $150/hr budget

/experts/mojo/me?tags=node.js&rate=150&availability=2hr
```

### /experts/mojo/rank

The ranking endpoint has only a numeric component for each of the requirements,
experience, engagement & social scores.

#### Examples
```
// Top ranked experts on AirPair
/experts/mojo/rank

// Top ranked experts for AngularJS & HTML5 (in order priority) with a budget of $90/hr
/experts/mojo/rank?tags=angularjs,html5&rate=90
```

## POST

This endpoint does not support POST

## PUT

This endpoint does not support PUT

## DELETE

This endpoint does not support DELETE
