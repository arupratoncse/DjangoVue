<template>
    <div class="row mt-2">
      <div class="col-md-4 offset-md-4">
        <div class="card border-primary">
          <div class="card-header text-white bg-primary">
              <i class="fa fa-user"></i>
              Login
          </div>
          <div class="card-body" @submit.prevent="userLogin">
              <form>

                  <!--<div class="alert alert-danger mt-2"  role="alert">-->
                      <!--<div class="text-left">-->

                      <!--</div>-->
                  <!--</div>-->
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" v-model="user.username" id="username" class="form-control" placeholder="User name" required autofocus>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="user.password" id="password" class="form-control" placeholder="Password" required>
                  </div>
                  <button class="btn btn-success col-12" type="submit">Login</button>
                </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Login",
        data(){
            return{
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions([
              'login',
            ]),
            userLogin(){
                this.login(this.user)
                    .then(() => {
                        this.user = {
                            username:'',
                            password: ''
                        }
                        this.$router.push({name:'home'})
                    })
            }
        }
    }
</script>

<style scoped>

</style>
