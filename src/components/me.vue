<template>
  <div>
    <div @click="reFile">return</div>
        <el-form :model="numberValidateForm" class="demo-ruleForm">
          <el-form-item
            prop="smallName"
            :rules="[
                              { required: true, message: '年龄不能为空'},
                            ]"
          >
            <span>昵称</span>
            <el-input type="smallName" v-model.number="numberValidateForm.smallName" auto-complete="off" clearable
                      @change ="testSmName" @keyup.enter.native="testSmName" @blur ="testSmName"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-form :model="numberValidateForm" class="demo-ruleForm">
          <el-form-item
            prop="name"
            :rules="[
                              { required: true, message: '年龄不能为空'},
                            ]"
          >
            <span>姓名</span>
            <el-input type="name" v-model.number="numberValidateForm.name" auto-complete="off" clearable
                      @change ="testName" @keyup.enter.native="testName" @blur="testName"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-form :model="numberValidateForm" class="demo-ruleForm">
          <el-form-item
            prop="phone"
            :rules="[
                              { required: true, message: '年龄不能为空'},
                            ]"
          >
            <span>手机号</span>
            <el-input type="phone" v-model.number="numberValidateForm.phone" auto-complete="off" clearable
                      @change ="testPhone" @keyup.enter.native="testPhone" @blur="testPhone"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-form :model="numberValidateForm" class="demo-ruleForm">
          <el-form-item
            prop="person"
            :rules="[
                          { required: true, message: '年龄不能为空'},
                        ]"
          >
            <span>身份证</span>
            <el-input type="person" v-model.number="numberValidateForm.person" auto-complete="off" clearable
                      @change ="testPerson" @keyup.enter.native="testPerson" @blur="testPerson"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-form :model="numberValidateForm" class="demo-ruleForm">
      <el-form-item
        prop="sex"
        :rules="[
                          { required: true, message: '年龄不能为空'},
                        ]"
      >
        <span>性别</span>
        <el-input type="sex" v-model.number="numberValidateForm.sex" auto-complete="off" clearable
                  @change ="testSex" @keyup.enter.native="testSex" @blur="testSex"
        ></el-input>
      </el-form-item>
    </el-form>
        <el-form :model="numberValidateForm" class="demo-ruleForm">
      <el-form-item
        prop="mail"
        :rules="[
                          { required: true, message: '年龄不能为空'},
                        ]"
      >
        <span>邮箱</span>
        <el-input type="mail" v-model.number="numberValidateForm.mail" auto-complete="off" clearable
                  @change ="testMail" @keyup.enter.native="testMail" @blur="testMail"
        ></el-input>
      </el-form-item>
    </el-form>
      <div class="test">
        {{testData}}
      </div>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import { testRule } from '../common/js/test.js'
import { CustomerHttp } from '../common/js/http.js'
export default{
  data () {
    return {
      testData: '',
      numberValidateForm: {
        person: '',
        phone: '',
        smallName: '',
        name: '',
        sex: '',
        mail: ''
      }
    }
  },
  methods: {
    reFile () {
      this.$router.go(-1)
    },
    testPerson () {
      const data = '身份证'
      const regP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      this.testData = testRule(regP,this.numberValidateForm.person,data)
    },
    testPhone () {
      const data = '手机号'
      const reg = /^1[3578]\d{9}$/
      this.testData = testRule(reg,this.numberValidateForm.phone,data)
    },
    testSmName () {
      const data = '昵称'
      const reg = /^.*/
      this.testData = testRule(reg,this.numberValidateForm.smallName,data)
    },
    testName () {
      const data = '姓名'
      const reg = /^.*/
      this.testData = testRule(reg,this.numberValidateForm.name,data)
    },
    testSex () {
      const data = '性别'
      const reg = /^[男|女]$/
      this.testData = testRule(reg,this.numberValidateForm.sex,data)
    },
    testMail () {
      const data = '邮箱'
      const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      this.testData = testRule(reg,this.numberValidateForm.mail,data)
    },
    submit () {
      const url = '/api'
      const data = CustomerHttp.httpGet(url,{
        person: this.numberValidateForm.person,
        phone: this.numberValidateForm.phone,
        smallName: this.numberValidateForm.smallName,
        name: this.numberValidateForm.name,
        sex: this.numberValidateForm.sex,
        mail: this.numberValidateForm.mail
      })
      //promise对象里面数据应用
      data.then(function(val){
        //请求成功时返回的数据
        console.log(val)
      },function(err){
        //请求失败时返回的数据
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
span
  font-size:10px;
  display:inline-block;
  width:40px;
el-input
  padding-left:10px;
.test
  color:red;
  font-size:10px;
</style>
