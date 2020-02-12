// pages/posts/posts.js
var posts = require('../../data/posts-data');
Page({
  onPostTap:function(e){
    // 获取用户点击的当前标识
    var postId = e.currentTarget.dataset.index;

    wx.navigateTo({
      url: './posts-detail/posts-detail?id='+postId,
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  process:function(){

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      // posts : posts = posts
      // ES6 可以将 同名字 简写
      posts: posts.posts

    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})