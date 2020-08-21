import {parse} from "node-html-parser";
import axios from "axios";
import validUrl from "valid-url";

export const getImagesUrl = async function(url) {
    const datas = await getPage(url);
    var parsedDatas = parse(datas.data);
    var imgs = parsedDatas.querySelectorAll('img')
    return imgs.map(function (el) {
        var src = el.getAttribute('src');
        if (validUrl.isUri(src)) {
            return src
        } else {
            return url + src;
        }
    });
}

const getPage = async function(url) {
    return await axios.get(url)
}