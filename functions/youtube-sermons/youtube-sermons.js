const axios = require("axios");


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
  }).then( (res) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(res.data),
    })
    
  })
  .catch ((err) => {
    callback(err)
  })
}
