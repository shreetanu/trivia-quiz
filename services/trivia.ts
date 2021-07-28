import axios from "axios";
import {opentdb} from "./baseURL";

export const getQuestions = async (difficulty: string, type: string = "multiple") => {
    const params = {
        type, difficulty
    }
    return  axios.get(opentdb, {params}).then(res=>res.data.results);
};