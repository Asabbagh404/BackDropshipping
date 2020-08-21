import { getImagesUrl } from "../modules/crawler";
import { googleSearch, googleParsing } from '../modules/google_crawler'
import {ds_filter} from "../modules/ds_filter";

exports.index =  async function (req, res) {
    const URL = req.query.url
    if (URL) {
        let ds = [];
        let ImageSrcs = await getImagesUrl(URL);
        for(let src in ImageSrcs){
            let googleHtmlResponse = await googleSearch(URL)
            let linksGoogleHtmlResponse = await googleParsing(googleHtmlResponse);
            for(let link in linksGoogleHtmlResponse){
                console.log(url)
                ds_filter(url);
            }
        }
        res.send('hello')
    } else {
        res.send('no parameters');
    }
};



