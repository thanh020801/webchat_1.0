import { defineStore } from 'pinia'

export const messagesStore = defineStore("messageStore",{
  state: () => ({
    // list: [],
  }),
})

export const userStore = defineStore("userStore",{
  state: () => ({
    // list: [],
    isOnline: false,
    addFriend:[],
  }),
})

export const friendStore = defineStore("friendStore",{
  state: () => ({
     onlines: [],
     list: [],
     search: {people: "",isFriend:false},
  }),
})

export const roomStore = defineStore("roomStore",{
  state: () => ({
    // list: [],
  }),
})