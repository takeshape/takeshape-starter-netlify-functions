import fetch from 'node-fetch';
// require('dotenv').config();

exports.handler = async function(){
    try{
        const result = await fetch(process.env.REACT_APP_TAKESHAPE_ENDPOINT,
            {
                method: 'POST',
                headers: {'Authorization': `Bearer ${process.env.REACT_APP_TAKESHAPE_API_KEY}`},
                body: JSON.stringify({
                    query: `query {
                        getProductList{
                            items{
                                price
                                name
                                _id
                                image{
                                    sourceUrl
                                }
                            }
                        }
                    }
                    `
                }),
            }
        )
        const resultJSON = await result.json();
        return {
            statusCode: 200,
            body: JSON.stringify(resultJSON)
        }        
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: `Failed to fetch from TakeShape! ${err}`
            })
        }
    }
}