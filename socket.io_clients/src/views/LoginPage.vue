<template>
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <!-- <form> -->
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="text" v-model='phone' id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Your phone</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" v-model='password' id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            <!-- Checkbox -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <!-- Submit button -->
          <button class="btn btn-primary btn-lg btn-block" @click='login()'>Sign in</button>
          <br/>
          <router-link to='/register'>
            <button class="btn btn-success btn-lg btn-block">Sign up</button>
          </router-link>
 <!--          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
 -->
        <!-- </form> -->
      </div>
    </div>
  </div>
</section>
</template>
<script>
  import realtime from '@/services/realTime.js'
import { userStore,messagesStore,friendStore,roomStore } from "@/stores/sendStore.js"
	export default {
    data(){
      return{
        socketInstant: realtime(),
        phone: "123456",
        password: "123456",
      }
    },
    setup(){
      const user = userStore()
      const messages = messagesStore()
      const friend = friendStore()
      const room = roomStore()
      return {user,messages,friend,room}
    },
    methods:{
      login(){
        // lời gọi login
        this.socketInstant.emit('CLIENT-LOGIN',{phone: this.phone, password: this.password})
        // lắng nghe login thành công trả về user và chuyển hướng sang trang nhắn tin
        this.socketInstant.on('SERVER-LOGIN-SUCCESS',data=>{
          this.user.profile = data.onlineUser
          this.friend.list = data.listFriend
          if(this.user.profile){
            this.$router.push('/chats')
          }
        })
        // lắng nghe login thất bại
        this.socketInstant.on('LOGIN-FAILED',data=>{
          alert('login failed')
        })
      },

    },
  }
</script>
<style type="text/css" scoped>
section{
  background-color: #262032;
  color: white;
}
input{
  background-color: #585265;
  color: white;
}
.form-control:focus{
  background-color: #2e1a35;
  color: white;
}
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}	

</style>