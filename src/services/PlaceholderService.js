import Api from '@/services/Api';

export default {
    getPlaceholders(){
        return Api().get('/photos')
    },
    getUser(){
        return Api().get('/users')
    }
}