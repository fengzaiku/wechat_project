
const Api = require('../../utils/api')
Page({
    data:{
        movies:{}
    },
    onLoad:function(options){
        console.log(options)
        // 生命周期函数--监听页面加载
        wx.showLoading({ title: '拼命加载中...' });
        Api.httpOnce(options.id).then(res =>{
            console.log(res)
            wx.hideLoading()
            wx.setNavigationBarTitle({ title: res.title + ' 电影 豆瓣' })
            this.setData({movies:res})
        }).catch(res =>{
            wx.hideLoading()
            wx.showModal({
                title: '错误',
                content: '加载异常，请重新加载',
                success: function(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        })
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
    },
    onShow:function(){
        // 生命周期函数--监听页面显示
    },
    onShareAppMessage: function() {
        // 用户点击右上角分享
        // return {
        //   title: 'title', // 分享标题
        //   desc: 'desc', // 分享描述
        //   path: 'path' // 分享路径
        // }
    }
})