
const Api = require('../../utils/api')
Page({
    data:{
        boards:{
            'in_theaters':{},
            'coming_soon':{},
            'new_movies':{},
            'top250':{},
            'weekly':{},
            'top250':{},
            'us_box':{} 
        }
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        
        wx.showLoading({ title: '拼命加载中...' })
        let task = (Object.keys(this.data.boards)).map(item =>{
            return Api.http(item, 1, 8).then(res => {
                return {
                    key:item,
                    title:res.data.title,
                    movies:res.data.subjects
                };
            })
        })
        Promise.all(task).then(item => {
            let boards ={};
            item.map(list =>{
                boards[list.key] = list;
            })
            this.setData({boards:boards});
            wx.hideLoading()
        })
    }
})