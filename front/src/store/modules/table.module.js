import axios from '@/axios/db'
export default {
    namespaced:true,
    state(){
        return {
            rows:[],
            colsName:[]
        }
    },
    mutations: {
        setRows(state,payload){
            state.rows = []
            state.rows = payload
        },
        addColName(state,payload){
            state.colsName.push(payload)
        },
        addRow(state,payload){
            state.rows.push(payload)
        }
    },
    actions: {
        async getAll({ commit }){
            try {
                const {data} = await axios.get(`/welbex`)
                commit('setRows',data)
                console.log(await axios.get(`/welbex`))
                if(data.length > 0){
                    Object.keys(data[0]).forEach(key => 
                        commit('addColName',key))
                }
            } catch (error) {
                console.log(error)
            }
        },
        async create({ commit }, payload){
            try {
                const data = await axios.post(`/welbex`,payload)
                commit('addRow',payload)
            } catch (error) {
                console.log(error)
            }
        },
        async sorting({ commit }, payload){
            try {
                console.log(payload)
                const {data} = await axios.get(`/welbex/${payload.type}?v=${payload.value}&c=${payload.colName}`)
                commit('setRows',data)
            } catch (error) {
                console.log(error)
            }
        }
    }, 
    getters:{
        rows(state){
            return state.rows
        },
        colsName(state){
            return state.colsName
        },
        // typeError
    }
}