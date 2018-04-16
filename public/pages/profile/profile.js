Page({
    data:{
        userInfo:null
    },
    onLoad:function(options){
        let $this=this;
        wx.getUserInfo({
            success: function(res){
                $this.setData({userInfo:res.userInfo})
            },
            fail: function() {
                wx.showToast({
                    title: '获取失败！',
                    duration: 2000
                  })    
                }
        })
        // 生命周期函数--监听页面加载
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
    }
})