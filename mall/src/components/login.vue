<template>
  <el-container class="login-from">
    <el-form :model="loginForm" status-icon :rules="validator" ref="loginForm" label-width="100px" class="login-box">
      <el-form-item label="用户名" prop="userName">
        <el-input type="password" v-model="loginForm.userName" auto-complete="off"/>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="loginForm.passWord" auto-complete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" class="login-btn">提交</el-button>
      </el-form-item>
    </el-form>
  </el-container>

</template>

<script>
  export default {
    name: 'login',
    data() {
      var validatePassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.passWord !== '') {
            this.$refs.loginForm.validateField('passWord');
          }
          callback();
        }
      };
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.loginForm.passWord !== '') {
            this.$refs.loginForm.validateField(' userName');
          }
          callback();
        }
      };
      return {
        loginForm: {
          userName: '',
          passWord: ''
        },
        validator: {
          userName: [
            {validator: validateUserName, trigger: 'blur'}
          ],
          passWord: [
            {validator: validatePassWord, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .login-box {
    margin-top: 200px;
    height: 100%;
    width: 400px;
  }

  .login-from {
    justify-content: center;
  }

  .login-btn {
    width: 100%;
  }

</style>
