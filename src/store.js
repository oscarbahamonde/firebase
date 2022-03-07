import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [],
        user: 'guest'
    },
    mutations: {},
    setters: {
        setProducts: async()=>{ this.state.products = await fetch("https://jsonplaceholder.typicode.com/photos")}
    },
    actions: {
        
    }
})