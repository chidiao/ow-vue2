<template>
  <div class="contact">
    <toppic :img="toppic"></toppic>

    <div class="wrapper">
      <bigtitle info="CONTACT US" title="联系我们" style="text-align: center"></bigtitle>

      <div class="form">
        <el-row :gutter="24">
          <el-col :xs="24" :sm="12">
            <input type="text" placeholder="姓名" v-model="form.name">
          </el-col>
          <el-col :xs="24" :sm="12">
            <input type="text" placeholder="电子邮件" v-model="form.email">
          </el-col>
          <el-col :xs="24" :sm="12">
            <input type="text" placeholder="手机号码" v-model="form.mobile">
          </el-col>
          <el-col :xs="24" :sm="12">
            <input type="text" placeholder="主题" v-model="form.subject">
          </el-col>
          <el-col :xs="24">
            <textarea rows="6" placeholder="我们能为您做些什么？" v-model="form.detail"></textarea>
          </el-col>
        </el-row>
        <div style="display: flex;justify-content: center">
          <el-button type="primary" class="btn" @click="submit">提交</el-button>
        </div>
      </div>
    </div>

    <contact></contact>
  </div>
</template>

<script>
import toppic from '@/views/History/toppic'
import contact from '@/views/Contact/map'
import bigtitle from '@/components/bigtitle'
export default {
  components: {
    toppic,
    contact,
    bigtitle
  },
  data() {
    return {
      toppic: require('../../assets/images/bg1.png'),
      form: {
        name: '',
        email: '',
        mobile: '',
        subject: '',
        detail: ''
      }
    }
  }, 
  methods: {
    submit() {
      if (this.form.name && this.form.email && this.form.mobile && this.form.subject && this.form.detail) {
        this.axios.post(this.$myapi + '/contact', this.form).then(res => {
          if (res.data.success) {
            this.$message({
              message: '提交成功！',
              type: 'success'
            });
            this.clear();
          }
        })
      } else {
        this.$message({
          message: '请填写完整~',
          type: 'warning'
        });
      }
    },
    clear() {
      this.form = {
        name: '',
        email: '',
        mobile: '',
        subject: '',
        detail: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @maxwd: 1400px;

  .wrapper {
    max-width: @maxwd;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 60px;
    padding: 16px;
    padding-top: 50px;
  }

  .form {
    width: 600px;
    padding: 30px 0;

    input,
    textarea {
      width: 100%;
      border: none;
      outline: none;
      background: #F2F3F4;
      padding: 12px 16px;
      box-sizing: border-box;
    }

    .btn {
      margin: 40px auto;
      padding: 12px 50px;
      background-color: #0087D7;
      border-color: #0087D7;
    }
  }
  .el-col {
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    .form {
      width: 100%;
    }
  }
</style>