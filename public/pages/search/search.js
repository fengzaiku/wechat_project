const Api = require('../../utils/api')
Page({
    data:{
        page:0,
        size:20,
        search:'',
        nomore:false,
        movies:[]
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
    },
    handleClickSearch:function(event){
        if(!event.detail.value.length){return;}
        this.setData({"page":0,"search":event.detail.value,"movies":[]})
        this.loadMore();
    },
    loadMore: function() {
        if(this.data.nomore){
            wx.showToast({
                title: '已加载完毕！',
                duration: 2000
              })
            return;
        } 
        wx.showLoading({title: '加载中...'});
        let page = ++this.data.page;
        Api.http("search",page,this.data.size,this.data.search).then(res => {
            if(res.data.subjects.length){
                this.setData({movies: this.data.movies.concat(res.data.subjects),page:page})
            }else{
                wx.showToast({
                    title: '已加载完毕！',
                    duration: 2000
                  })
                this.setData({"nomore":true})
            }
            wx.hideLoading()
        }).catch(res =>{
            wx.hideLoading()
        })
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
        this.loadMore();
    }
})