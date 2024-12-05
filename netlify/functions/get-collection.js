export const handler = async (event, context) => {
    const params = event.queryStringParameters;
    console.log(params.searchTerm);
    const apiKey = process.env.VITE_API_KEY;
    const apiUrl = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=${params.ps}`;
    console.log(apiUrl)
    const response = await fetch(
        apiUrl
    );
    const result = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
}