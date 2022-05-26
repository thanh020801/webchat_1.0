import { defineStore } from 'pinia'

export const sendStore = defineStore("sendStore",{
  state: () => ({
    messages: [],
  }),
})

export const userStore = defineStore("userStore",{
  state: () => ({
    profile: null,
  }),
})

export const friendStore = defineStore("friendStore",{
  state: () => ({
    list: [],
  }),
})