import { defineStore } from 'pinia'
// interface PersistStrategy {
//   key?: string // 存储的key名
//   storage?: Storage // 保存方式 (默认: sessionStorage)
//   paths?: string[] // 列出要存储在存储器中的状态键
// }
export const useStore = defineStore('user', {
  state: () => {
    return {
      name: '我的名字是李斯',
      age: 20
    }
  },
  getters: {},
  actions: {}
})
