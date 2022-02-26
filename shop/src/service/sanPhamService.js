import axios from "axios";
import {SANPHAM_GETALL} from "../constants/AppPath";

export class sanPhamService {
    getData(data){
        return axios({
            method : 'GET',
            url : SANPHAM_GETALL,
            data : null
        }).catch(err => {
            console.log(err)
        })
    }


}