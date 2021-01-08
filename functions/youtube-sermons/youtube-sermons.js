const axios = require("axios");

function parseTitle(string) {
  // Function assumes a naming format of: Date | Title | Type
  let res = string.split("|")
  let date = res[0].split(" ")

  return {
    date : {
      day: date[0],
      month: date[1],
      year: date[2]
    },
    title : res[1],
    type: res[2]
  }
}

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = (event, context, callback) => {
  const key = process.env.GOOGLE_API_KEY;
  const baseURL = "https://www.googleapis.com/youtube/v3";

  axios
  .get(`${baseURL}/search/`, {
    params: {
      key: key,
      channelId : "UClnCId37ib0qSFxCqnXnbvQ",
      part : "snippet, id",
      order : "date",
      maxResults : "20"
    },
  }).then( ({ data: { items }}) => {
    callback(null, {
      statusCode: 200,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(
        items.map((i) => ({
          id: i.id.videoId,
          kind: i.id.kind,
          info: parseTitle(i.snippet.title),
          description: i.snippet.description
        }))
      ),
    })
    
  })
  .catch ((err) => {
    callback(err)
  })
}
