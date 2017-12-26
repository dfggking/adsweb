<template>
  <div class="trade-wrap" style="width: 100%;height:100%;">
    <mt-header class="header" :title="active">
    </mt-header>
    <mt-tab-container class="trade-container" v-model="active">
      <mt-tab-container-item id="交易" class="forex-tab">
        <mt-cell class="user-tab-header" title="用户" label="17671711476">
          <span class="mint-cell-text money">
            <span class="mint-cell-text">余额</span>
            <span class="mint-cell-label">¥20,000</span>
          </span>
          <button class="mint-button mint-button--primary mint-button--small">
            <label class="mint-button-text">充值</label>
          </button>
        </mt-cell>
        <mt-cell class="cell-header" title="币种">
          <span class="mint-cell-text latest">最新价</span>
          <span class="mint-cell-text chg">涨跌幅</span>
        </mt-cell>
        <mt-cell class="mint-cell forex-cell" title="英镑/美元" label="OUU" v-for="n in 15"
                 :class="n%3==0 ? 'low' : 'high'">
          <span class="mint-cell-text latest" v-text="19433.3422"></span>
          <span class="mint-cell-text chg" v-text="n%3==0 ? '-'+n+'.00%' : n+'.00%'"></span>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单" class="order-tab">
        <mt-cell class="user-tab-header" title="用户" label="17671711476">
          <span class="mint-cell-text money">
            <span class="mint-cell-text">余额</span>
            <span class="mint-cell-label">¥20,000</span>
          </span>
          <button class="mint-button mint-button--primary mint-button--small">
            <label class="mint-button-text">充值</label>
          </button>
        </mt-cell>
        <mt-cell class="cell-header" title="币种">
          <span class="mint-cell-text">距结束</span>
          <span class="mint-cell-text">最新价</span>
          <span class="mint-cell-text">涨跌幅</span>
        </mt-cell>
        <mt-cell class="order-cell" title="比特币" v-for="n in 5" :class="n%2==0 ? 'low' : 'high'">
          <span class="mint-cell-text" style="color:#fff;">40s</span>
          <span class="mint-cell-text">7.7463</span>
          <span class="mint-cell-text" v-text="n%2==0 ? '-'+n+'.00%' : '+'+n+'.00%'"></span>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="历史" class="history-tab">
        <mt-cell class="user-tab-header" title="用户" label="17671711476">
          <span class="mint-cell-text money">
            <span class="mint-cell-text">余额</span>
            <span class="mint-cell-label">¥20,000</span>
          </span>
          <button class="mint-button mint-button--primary mint-button--small">
            <label class="mint-button-text">充值</label>
          </button>
        </mt-cell>
        <mt-cell class="cell-header" title="币种">
          <span class="mint-cell-text">周期</span>
          <span class="mint-cell-text">涨跌</span>
          <span class="mint-cell-text">盈亏</span>
          <span class="mint-cell-text">数量</span>
        </mt-cell>
        <mt-cell class="history-cell" title="比特币" label="2017-12-08 14:23:33" v-for="n in 15"
                 :class="n%4==0 ? 'low' : 'high'">
          <span class="mint-cell-text" style="color:#fff;">3M</span>
          <span class="mint-cell-text">看涨</span>
          <span class="mint-cell-text">+80</span>
          <span class="mint-cell-text">200</span>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我" class="me-tab">
        <div class="user-info">
          <span class="username">
            <span class="span1">用户名</span>
            <span class="span2">17671711476</span>
          </span>
          <span class="money-info">
            <p class="title">总资产</p>
            <p class="money">0.0000</p>
          </span>
        </div>
        <mt-cell title="充值"></mt-cell>
        <mt-cell title="提现"></mt-cell>
        <mt-cell title="提现记录"></mt-cell>
        <mt-cell title="交易记录"></mt-cell>
        <mt-cell title="申请代理"></mt-cell>
        <mt-cell title="修改密码"></mt-cell>
        <mt-cell title="退出"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active">
      <mt-tab-item id="交易">
        <img slot="icon" v-if="'交易'==active" src="../../assets/img/app/tabbar-jy-active.png">
        <img slot="icon" v-else src="../../assets/img/app/tabbar-jy.png">
        交易
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" v-if="'订单'==active" src="../../assets/img/app/tabbar-order-active.png">
        <img slot="icon" v-else src="../../assets/img/app/tabbar-order.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="历史">
        <img slot="icon" v-if="'历史'==active" src="../../assets/img/app/tabbar-history-active.png">
        <img slot="icon" v-else src="../../assets/img/app/tabbar-history.png">
        历史
      </mt-tab-item>
      <mt-tab-item id="我">
        <img slot="icon" v-if="'我'==active" src="../../assets/img/app/tabbar-wo-active.png">
        <img slot="icon" v-else src="../../assets/img/app/tabbar-wo.png">
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Header, Tabbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';

export default {
  name: 'Main',
  data() {
    return {
      active: '交易'
    }
  },
  components: {
    'Header.name': Header,
    'Tabbar.name': Tabbar,
    'TabItem.name': TabItem,
    'TabContainer,name': TabContainer,
    'TabContainerItem.name': TabContainerItem
  },
  mounted: function(){
    $('.mint-tab-container').height($(document).height() - 95);
  },
  methods: {
  
  
  
  }
};
</script>

<style>
  
  .trade-wrap .header{
    height: 45px;
    background: #2E2D3B;
  }
  .trade-wrap .trade-container{
    overflow-y: auto;
    -webkit-overflow-scrolling:touch;
    background: #27242F;
  }
  .trade-wrap .trade-container .mint-cell{
    background-color: #32313F;
  }
  .trade-wrap .trade-container .mint-cell:last-child{
    background-image: linear-gradient(0deg,#272633,#272633 50%,transparent 0);
  }
  .trade-wrap .trade-container .mint-cell .mint-cell-wrapper{
    min-height: 55px;
    background-image: linear-gradient(180deg,#272633,#272633 50%,transparent);
    background-size: 100% 1px;
  }
  .trade-wrap .trade-container .mint-cell .mint-cell-text{
    color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  
  .trade-wrap .trade-container .user-tab-header .mint-cell-value{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .trade-wrap .trade-container .user-tab-header .mint-cell-value .mint-cell-text{
    text-align: left !important;
  }
  .trade-wrap .trade-container .cell-header{
    min-height: 40px;
    background: #2C2C38;
  }
  .trade-wrap .trade-container .cell-header .mint-cell-wrapper{
    min-height: 40px !important;
  }
  .trade-wrap .trade-container .cell-header .mint-cell-wrapper .mint-cell-text{
    color: #B7B9C1;
  }
  .trade-wrap .trade-container .cell-header .latest{
    text-align: center;
  }
  .trade-wrap .trade-container .cell-header .chg{
    text-align: right;
  }
  
  
  
  .trade-wrap .forex-tab .mint-cell-value{
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
  }
  
  .trade-wrap .trade-container .forex-cell .latest{
    text-align: center;
  }
  .trade-wrap .trade-container .forex-cell .chg{
    text-align: right;
  }
  .trade-wrap .trade-container .high .mint-cell-value .mint-cell-text{
    color: #DF4E60;
  }
  .trade-wrap .trade-container .low .mint-cell-value .mint-cell-text{
    color: #4BB294;
  }
  
  .trade-wrap .mint-tabbar>.mint-tab-item{
    background-color: #2E2E3B;
    color: #fff;
  }
  .trade-wrap .mint-tabbar>.mint-tab-item.is-selected{
    background-color: #2E2E3B;
    color: #DF4E60;
  }
  .trade-wrap .order-tab .mint-cell-value .mint-cell-text{
    text-align: center;
  }
  .trade-wrap .order-tab .mint-cell-value .mint-cell-text:last-child{
    text-align: right;
  }
  .trade-wrap .order-tab .mint-cell-value{
    -webkit-box-flex: 3;
    -ms-flex: 3;
    flex: 3;
  }
  .trade-wrap .history-tab .mint-cell-value{
    -webkit-box-flex: 4;
    -ms-flex: 4;
    flex: 4;
  }
  
  .trade-wrap .history-tab .mint-cell-value .mint-cell-text:nth-child(2),.trade-wrap .history-tab .mint-cell-value
  .mint-cell-text:nth-child(3){
    padding-left: 20px;
  }
  .trade-wrap .history-tab .mint-cell-value .mint-cell-text{
    text-align: center;
  }
  .trade-wrap .history-tab .mint-cell-value .mint-cell-text:last-child{
    text-align: right;
  }
  .trade-wrap .me-tab{
    background: #2E2D3B;
  }
  .trade-wrap .me-tab .mint-cell{
    background-color: #fefefe;
  }
  .trade-wrap .me-tab .mint-cell .mint-cell-wrapper{
    background-image: linear-gradient(180deg,#EAEBEA,#EAEBEA 50%,transparent);
  }
  .trade-wrap .me-tab .mint-cell .mint-cell-text{
    color: #333;
  }
  .trade-wrap .me-tab .user-info {
    margin-bottom: 15px;
    color: #fff;
  }
  .trade-wrap .me-tab .user-info .username{
    display: inline-block;
    width: 49%;
    padding: 20px;
    font-size: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .trade-wrap .me-tab .user-info .username .span1{
    color: #888;
    display: block;
    font-size: 16px;
    margin-bottom: 6px;
  }
  .trade-wrap .me-tab .user-info .username .span2{
    color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  
  .trade-wrap .me-tab .money-info{
    display: inline-block;
    width: 49%;
    padding: 20px;
    font-size: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .trade-wrap .me-tab .money-info .title{
    margin: 0;
    padding-bottom: 6px;
    font-size: 16px;
    color: #97969A;
  }
  .trade-wrap .me-tab .money-info .money{
    margin: 0;
    font-size: 20px;
    color: #EC4B5D;
  }
</style>
