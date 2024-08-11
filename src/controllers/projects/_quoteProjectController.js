import axios from 'axios';

// CONTROLADOR quotesProject ------
export const quotesProject = async (req, res) => {
    try {
        const response = await axios.get(process.env.API_URL_QUOTABLE);
        const apiData = response.data;

        res.render('projects/_quoteProject', { title: 'QuotesProject', data: apiData });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error en la API');
    }
};
//-------------------------