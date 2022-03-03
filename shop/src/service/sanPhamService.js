import axios from "axios";
import {SANPHAM_GETALL,SANPHAM_FINDONE} from "../constants/AppPath";

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
    findone(data){
        return axios({
            method : 'POST',
            url : SANPHAM_FINDONE,
            data : {
                id : data
            }
        }).catch(err => {
            console.log(err)
        })
    }


}