const apiKey = '0ABX7rBAG3-ziVh9JtCmf568bdfCm0R0wadMkgzAZgXFftRnkmNymJiaN4oGiH0LGt4ysknJuuHxQvdUt7u-vG1SgIMJOzvhVhLlHz78nP8_IzkTmIY9wqZdaZAYY3Yx';
//I tried to append cors anywhere to my api key to help host on Netlify but failed only can run using local host

const Yelp = {
    search(term, location, sortBy) {

        return fetch(`/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;