

//auth
const createAuth = (set) => ({
    logged:{},
    setAuth: (status=true) => set(state=>{
        state.auth.logged = {ricardo:status}
    })
})

export default createAuth