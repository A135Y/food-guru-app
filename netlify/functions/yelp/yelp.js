// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const yelp = require("yelp-fusion");

const apiKey =
    "0ABX7rBAG3-ziVh9JtCmf568bdfCm0R0wadMkgzAZgXFftRnkmNymJiaN4oGiH0LGt4ysknJuuHxQvdUt7u-vG1SgIMJOzvhVhLlHz78nP8_IzkTmIY9wqZdaZAYY3Yx";

const client = yelp.client(apiKey);

const handler = async (event) => {
    try {
        const response = await client.search(event.queryStringParameters);

        return {
            statusCode: 200,
            body: JSON.stringify(response.jsonBody.businesses, null, 2),
            // // more keys you can return:
            // headers: { "headerName": "headerValue", ... },
            // isBase64Encoded: true,
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};

module.exports = { handler };