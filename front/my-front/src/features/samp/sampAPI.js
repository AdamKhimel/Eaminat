import { MY_SERVER } from '../../app/env'
import axios from 'axios'

export function getStudents() {
    // console.log("getttt")
    return new Promise((resolve) =>
        axios.get(MY_SERVER).then(res => resolve({ data: res.data }))
    );
}
export const addStudents = async (email, name, grade, subject) => {
    const payload = { email, name, grade, subject };
    const response = await axios.post(`${MY_SERVER}`, payload);
    return response;
  };
export function delStudent(id) {

    return new Promise((resolve) =>
        axios.delete(MY_SERVER+"/"+ id).then(res => resolve({ data: res.data }))
    );
}

