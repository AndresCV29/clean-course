//import axios from 'axios';

/*Esto se conoce como patron adaptador. Se crea una clase adaptadora para
utilizar una libreria de terceros.*/

export class HttpClient {

    /* async get(url: string){
        const {data, status} = await axios.get(url);
        console.log({status});
        return {data, status};
    } */

    async get(url:string){
        const resp = await fetch(url);
        const data = await resp.json();

        return {data: data, status: resp.status};
    }

}