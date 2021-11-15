# GD Utilities
GD Utilities is a discord bot made by me, which accesses the GD servers to fetch level data. Using GD Colon's [gdbrowser api](https://gdbrowser.com/api).

## Contributing

First, install [node.js](https://nodejs.org). You also need a mongoDB account, so create one [here](https://mongodb.com)
Next, clone the repository and install dependencies with `npm install`.
Create a `config.json` and paste the following content in. Replace "your-token-goes-here" with your testing bot's token, and "your-mongodb-connection-goes-here" with your mongoDB connection uri.
```json
{
    "token": "your-token-goes-here",
    "mongoUri": "your-mongodb-connection-goes-here"
}
```
Debug and add features to your liking! When you fully test the bot, submit a pull request and stuff.