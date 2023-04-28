import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard2/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
            {
                categoryNews.map(news=> <NewsCard key={news.category_id} news = {news}></NewsCard>)
            }
        </div>
    );
};

export default Category;