// pages/list/list.js
const app = getApp();
const utils = require('../../utils/util.js');
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
    url: '/home/homepage',
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
    const requestUrl = app.globalData.HTTP_BASE_URL + this.data.url;
    console.log(requestUrl);
    utils.requestData(requestUrl).then((result) => {
      this.setData({
        bannerList: result.lunBo,
        goodsImg: result.goodgoods,
        newImgs: result.newgoods,
        cataImgs: result.cata,
        staticImgs: result.static
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

  },

  /**
   * 
   */
  gotoKind (e) {
    var id = e.currentTarget.dataset.item.cata_id;
    console.log(e.currentTarget.dataset.item.cata_id);
    wx.switchTab({
      url: "../kind/kind?type=0&page=0&cata_id=" + id
    })
  }
})