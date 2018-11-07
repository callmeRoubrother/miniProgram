// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    circular: true,
    inputShowed: false,
    inputVal: "",
    url: 'https://ilovedreamother.com/lankit/public/index.php?s=api/home/homepage',
    bannerList: [],
    goodsImg: [],
    newImgs: [],
    cataImgs: [],
    staticImgs: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    const requestData = require('../../utils/util.js').requestData;
    requestData(this.data.url).then((res) => {
      that.setData({
        bannerList: res.data.lunBo,
        goodsImg: res.data.goodgoods,
        newImgs: res.data.newgoods,
        cataImgs: res.data.cata,
        staticImgs: res.data.static
      })
    })
    wx.stopPullDownRefresh();
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
    this.onLoad();
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