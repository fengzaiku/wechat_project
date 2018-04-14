const API_URL = 'http://localhost:8080/api'

function fetchApi(type,params){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:`${API_URL}/${type}`,
            data: Object.assign({},params),
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                "Content-Type":"application/json"
            }, // 设置请求的 header
            success:resolve,
            // success:function(res){
            //     console.log(res)
            //     resolve(res)
            // },
            fail:reject
        })
    })
}

module.exports={
    http(type,page = 1,count = 20, search = ""){
        const params = {
            start : (page - 1) * count,
            count : count,
            city:"北京"
        }
        
        return fetchApi(type,search ? Object.assign(params,{q:search}) : params)
    },
    httpOnce(id){
        return fetchApi('subject/' + id).then(res => res.data)
    }
}


