import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({

  state: {
    identity: -1,
    undone: [],//已提交但未审核的申请｛id,self｛name,sex,age｝,location,duration,category,file，status｝
    notice: [
      {
        id: 1,
        title: "Never Settle",
        msg: "今天也是元气满满的一天呐~",
        time: "2023-10-02",
      },
      {
        id: 2,
        title: "关于2023-01-01春熙路摊点2暂停开放的通知",
        msg: "春熙路摊点2因某些原因，将于2023-01-01暂停开放，恢复时间另行通知",
        time: "2022-12-30",
      },

    ],//公告信息{id,title,msg,time}
    noticeId: 3,
    // --------------------------------------------------------
    nextId: 21,
    view: 'all',//默认展示所有表项
    complain: [
      {
        id: 0,
        self: {
          name: "李正秘",
          phone: '18008180449'
        },
        location: "成都",
        date: "2020-02-20",
        category: ['百货', "服务"],
        status: 0,
        des: "质量极差",
        sendTime: (new Date()).toLocaleString()
      },


    ],
    comId: 1,
  },
  // 只有mutation才有权利修改state
  mutations: {
    updateIdentity(state, value) {
      state.identity = value
    },
    initUndone(state, value) {
      state.undone = value
    },

    updateUndone(state, value) {
      const id = value.id;
      const status = value.status;
      const i = state.undone.findIndex((x) => x.id === id)
    },

    pushUndone(state, value) {
      const obj = {
        id: state.nextId,
        status: 0,
        self: value.self,
        date: value.date,
        category: value.category,
        location: value.location,
        timeEnd: value.timeEnd,
        timeStart: value.timeStart,
        des: value.des
      };

      state.undone.push(obj)
      state.nextId++
    },

    removeUndone(state, id) {
      //将目标id表项赋值给i
      const i = state.undone.findIndex((x) => x.id === id)
      if (i !== -1) {
        //从索引i删除1项
        state.undone.splice(i, 1)
      }
    },


    addNotice(state, value) {
      const obj = {};
      obj.msg = value.msg;
      obj.title = value.title;
      obj.id = state.noticeId;
      obj.time = (new Date()).toLocaleDateString();
      state.noticeId++;
      state.notice.push(obj);
    },
    pushComplain(state, value) {
      const obj = {
        id: state.comId,
        self: {
          name: value.self.name,
          phone: value.self.phone,
        },
        location: value.location,
        date: value.date,
        category: value.category,
        status: "0",
        des: value.des,
        sendTime: (new Date()).toLocaleString()
      };
      state.complain.push(obj);
      state.comId++;
    }


  },
  //对state数据加工形成新数据，类似computed
  getters: {
    passCount(state) {
      //将未完成的表项过滤出
      const i = state.undone.filter(x => x.status == 1)
      console.log("已通过的表项:", i);
      return i
    },
    rejectCount(state) {
      const i = state.undone.filter(x => x.status == 2)
      console.log("已驳回的表项:", i);
      return i
    },
    unCount(state) {
      const i = state.undone.filter(x => x.status == 0)
      console.log("待审核的表项:", i);
      return i
    },
    viewHandel(state) {
      if (state.view == "all") {
        return state.list
      } else if (state.view == "undone") {
        return state.list.filter(x => x.done === false)
      } else if (state.view == "done") {
        return state.list.filter(x => x.done === true)
      }
    }
  },


  //异步操作
  actions: {
    getList(context) {
      axios.get('/list.json').then(res => {
        context.commit('initUndone', res.data)
      })
    },

  },
})
