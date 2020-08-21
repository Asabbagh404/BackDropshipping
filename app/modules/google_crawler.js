import axios from "axios";
import {parse} from "node-html-parser";

export const googleSearch = async function(url){
    await axios.get('https://images.google.com/searchbyimage?image_url=' + url);
};

export const googleParsing = async function(html){
    var googleParsed = parse(html);
    return googleParsed.querySelectorAll('a').map(el=>el.getAttribute('href'));
};




