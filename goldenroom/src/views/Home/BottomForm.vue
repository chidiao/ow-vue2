<template>
  <div>
    <a-input class="ipt" v-model="name" placeholder="请输入您的姓名" />
    <a-input class="ipt" v-model="mobile" placeholder="请输入您的号码" />
    <a-textarea
      class="ipt"
      v-model="content"
      placeholder="请输入您给我们的建议……"
      :auto-size="{ minRows: 4, maxRows: 8 }"
    />

    <div class="btn" @click="check">立即发送</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      mobile: "",
      content: "",
    };
  },
  methods: {
    check() {
      if (!this.name || !this.content) {
        this.$msg.error("请输入有效信息");
        return;
      }
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.mobile)) {
        this.$msg.error("请输入有效信息");
        return;
      }
      this.submit();
    },
    submit() {
      this.$http.post('/suggest', {
        name: this.name,
        mobile: this.mobile,
        content: this.content
      }).then(res => {
        let { msg } = res.data
        this.$msg.info(msg)
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.ipt {
  margin: 12px 0;
  color: #979797;
  border: 1px solid #979797;
  background: transparent;

  @media screen and (max-width: 575px) {
    margin: 8px 0;
  }
}

.ant-input {
  font-size: 14px;
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
}

.btn {
  cursor: pointer;
  margin: 8px 0;
  width: 178px;
  height: 49px;
  border-radius: 4px;
  background: #a58453;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 575px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border-radius: 8px;
  }
}
</style>