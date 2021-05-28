import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/albums";

export const fetchData = () => 
{
    return fetch(url)
     .then(results => results.json())
}
