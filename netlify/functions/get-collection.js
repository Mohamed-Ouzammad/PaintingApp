export const handler = async (event, context) => {
    const params = event.queryStringParameters;
    console.log(params.searchTerm);
    return {
        statusCode: 200,
        body: JSON.stringify("test LOL")
    };
}