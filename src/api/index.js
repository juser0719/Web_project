import axios from 'axios';

const url = "http://covid19.mathdro.id/api";

export const fetchData = async(country) =>{
    let newurl = url;

    if(country){
        newurl = url+'/countries/'+country;
    }

    try {
        const { data: {confirmed,recovered,deaths,lastUpdate} } = await axios.get(newurl);

        return { confirmed , recovered , deaths , lastUpdate };
    } catch (error){
        console.log(error);
    }
    

}

export const fetchDailyData = async() =>{
    try {
        const { data } = await axios.get(url+'/daily');
        
        const modifideData = data.map( (dailyData) => 
        ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            data: dailyData.reportDate,
        })
        ); 
        
        return modifideData;
    } catch (error){
        console.log(error);
    }
    
}

export const fetchCountries = async() =>{
    try {
        const { data: {countries} } = await axios.get(url+'/countries');      
        return countries.map((country) => country.name );
    } catch (error){
        console.log(error);
    }
    
};