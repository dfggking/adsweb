

const state = {
  mobile: '', // 手机号
  inviteCode: '' // 邀请码
};

const getters = {
  mobile: state => state.mobile,
  inviteCode: state => state.inviteCode
};

const actions = {

};

const mutations = {
  saveMobile(state, mobile){
    state.mobile = mobile;
  },
  saveInviteCode(state, inviteCode){
    state.inviteCode = inviteCode;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

