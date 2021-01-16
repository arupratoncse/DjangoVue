<template>
    <div class="row mt-2">
      <div class="col-md-4 offset-md-4">
          <div class="card border-primary">
              <div class="card-header text-white bg-primary">
                  <i class="fa fa-user-plus"></i>
                  Sign Up
              </div>
              <div class="card-body">
                  <form @submit.prevent="register">
                      <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" v-model="user.username" id="username" class="form-control" placeholder="User name" required autofocus>
                        <div class="text-danger"></div>
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="user.email" id="email" class="form-control" placeholder="E-mail" required>
                        <div class="text-danger"></div>
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="user.password" id="password" class="form-control" placeholder="Password" required>
                        <div class="text-danger"></div>
                      </div>
                      <button class="btn btn-success col-12" type="submit">Sign Up</button>
                    </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return {
                user: {
                    username: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            register(){
                this.$store.dispatch('register', this.user)
                    .then(res => {
                        this.user = {
                            username:'',
                            password: '',
                            email: ''
                        }
                        this.$router.push({name: 'home'})
                    })
            }
        }
    }
</script>

<style scoped>

</style>
