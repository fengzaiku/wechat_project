
const Api = require('../../utils/api')
Page({
    data:{
        list:[],
        loading:true,
        movies:[]
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        Api.http('in_theaters', 1, 3).then(res => {
            console.log(res)
            this.setData({ movies:res.data.subjects, loading: false })  
        }).catch(res =>{
            console.error(res)
            this.setData({loading: false })                
        })
    },
    jumpboard(){
        wx.navigateTo({
            url: '../board/board'
        })
    }
})