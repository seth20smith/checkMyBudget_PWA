# checkMyBudget_PWA


# Budget Tracker Starter Code

AS AN avid traveler

I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
S
O THAT my account balance is accurate when I am traveling 


GIVEN a budget tracker without an internet connection

WHEN the user inputs an expense or deposit

THEN they will receive a notification that they have added an expense or deposit

WHEN the user reestablishes an internet connection

THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated


const WebpackPwaManifest = require("webpack-pwa-manifest");

{
  "name": "Food Event",
  "short_name": "Foodies",
  "description": "An app that allows you to view upcoming food events."
}

"background_color": "#01579b",
"theme_color": "#ffffff"

"icons": [
  {
    "src": "/img/icons/icons-192.png",
    "type": "image/png",
    "sizes": "192x192"
  },
  {
    "src": "/img/icons/icons-512.png",
    "type": "image/png",
    "sizes": "512x512"
  }
]