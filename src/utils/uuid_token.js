import { v4 as uuidv4 } from 'uuid';
//生产随机字符串，每次执行不发生变化，游客身份持久储存
export const getUUID = () => {
    //本地存储里看看有没有uuid ，
    let uuid_token = localStorage.getItem('UUIDTOKEN');

    if (!uuid_token) {
        uuid_token = uuidv4();

        localStorage.setItem('UUIDTOKEN', uuid_token)
    }
    return uuid_token
}