import firebase, { db } from './config';
import { set } from "firebase/database";
import {queryByDisplayValue} from "@testing-library/react";
import React from "react";
import {AuthContext} from "../Context/AuthProvider";

export const addDocument = (collection, data) => {
    const query = db.collection(collection);

    query.add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};

export const leaveRoom = async (collection,data) =>{
    let romOld = (await db.collection(collection).doc(data.id).get());
    let membernew = [];
    romOld.data().members.map((item)=>{
        if(item != data.user.uid)
            membernew.push(item);
    });
    db.collection(collection).doc(data.id).update({
        members : membernew
    });


}
export const deleteRoom =(collection,data) =>{

    // let listRomNew = room.members.map((item) =>{
    //     return item != data
    // })
    // db.collection(collection).doc(data).update({
    //     members :
    // });


}

// tao keywords cho displayName, su dung cho search
export const generateKeywords = (displayName) => {
    // liet ke tat cac hoan vi. vd: name = ["David", "Van", "Teo"]
    // => ["David", "Van", "Teo"], ["David", "Teo", "Van"], ["Teo", "David", "Van"],...
    const name = displayName.split(' ').filter((word) => word);

    const length = name.length;
    let flagArray = [];
    let result = [];
    let stringArray = [];

    /**
     * khoi tao mang flag false
     * dung de danh dau xem gia tri
     * tai vi tri nay da duoc su dung
     * hay chua
     **/
    for (let i = 0; i < length; i++) {
        flagArray[i] = false;
    }

    const createKeywords = (name) => {
        const arrName = [];
        let curName = '';
        name.split('').forEach((letter) => {
            curName += letter;
            arrName.push(curName);
        });
        return arrName;
    };

    function findPermutation(k) {
        for (let i = 0; i < length; i++) {
            if (!flagArray[i]) {
                flagArray[i] = true;
                result[k] = name[i];

                if (k === length - 1) {
                    stringArray.push(result.join(' '));
                }

                findPermutation(k + 1);
                flagArray[i] = false;
            }
        }
    }

    findPermutation(0);

    const keywords = stringArray.reduce((acc, cur) => {
        const words = createKeywords(cur);
        return [...acc, ...words];
    }, []);

    return keywords;
};
