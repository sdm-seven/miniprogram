page({
  data:function(){
    list:[]
  },
  onReady: function() {
   
  },
  onShow:function(){
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8082/demo/superadmin/areaList',
      method:'GET',
      data:{},
      success:function(res){
        var list = res.data.areaList;
        if (list == null){
          wx.showToast({
            title: 'toastTest',
            icon:'',
            duration:2000
          });
        }else{
          this.setData({
            list:list
          })
        }
      }
    })
  }
});