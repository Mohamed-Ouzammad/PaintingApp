export const handler = async (event, context) => {
    const params = event.queryStringParameters;
    const { objectNumber } = params;

    if (!objectNumber) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Object-number is required." })
        };
    }

    const apiKey = process.env.VITE_API_KEY;
    const culture = 'en';
    const apiUrl = `https://www.rijksmuseum.nl/api/${culture}/${objectNumber}?key=${apiKey}`;

    console.log(`API URL: ${apiUrl}`);

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from the API, status code: ${response.status}`);
        }

        const result = await response.json();
        console.log('API response:', result);

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (error) {
        console.error("Error fetching data: ", error);
        return {
            statusCode: 200,
            body: JSON.stringify({ error: "An error occurred while fetching the description." })
        };
    }
};
