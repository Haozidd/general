<template>
  <div id="infoList">
    <el-form class="demo-form-inline" size="medium">
      <el-form-item>
        <el-button type="primary" @click="addInfo">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
        :data="tableData"
        border
        style="width: 100%;height: 100%;"
    >
      <el-table-column prop="id" label="Id" align="center"/>
      <el-table-column prop="name" label="姓名" align="center"/>
      <el-table-column prop="age" label="年龄" align="center"/>
      <el-table-column prop="sex_text" label="性别" align="center"/>
      <el-table-column prop="father" label="父亲姓名" align="center"/>
      <el-table-column prop="mother" label="母亲姓名" align="center"/>
      <el-table-column prop="time" label="入学时间" align="center"/>
      <el-table-column prop="address" label="地址" align="center"/>
      <el-table-column prop="phone" label="电话" align="center"/>
      <el-table-column label="操作" align="center" width="150px">
        <template v-slot="scope">
          <el-button type="danger" size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="status?'添加学生信息':'修改学生信息'" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Age" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Gender" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">male</el-radio>
          <el-radio v-model="form.sex" label="2">female</el-radio>
        </el-form-item>
        <el-form-item label="Father" :label-width="formLabelWidth" prop="father">
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Mother" :label-width="formLabelWidth" prop="mother">
          <el-input v-model="form.mother" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Enrollment Time" :label-width="formLabelWidth" prop="time">
          <el-date-picker
              v-model="form.time"
              format="yyyy:MM:dd"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="Pick date">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Address" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Phone" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

  </div>


</template>

<script>
import Pagination from "@/components/Pagination";
import {uuid} from "mockjs/src/mock/random/misc";
import {nanoid} from "nanoid";
import {dealInfoData} from "@/utils/dealApiData";

export default {
  name: "",
  data() {
    return {
      formInline: {},
      tableData: [],
      form: {
        name: '',
        age: '',
        sex: '1',
        father: '',
        mother: '',
        time: '',
        address: '',
        phone: '',
      },
      formLabelWidth: "130px",
      status: true, //展示 新增 还是 修改 标题
      dialogFormVisible: false,
      confirmState: 1,//1 表示提交接口 2 表示修改接口
      rules: {
        name: [{required: true, message: 'input your name'}],
        age: [{required: true, message: 'input your name'}],
        sex: [{required: true, message: 'input your name'}],
        time: [{required: true, message: 'input your name'}],
        address: [{required: true, message: 'input your name'}],
        phone: [{required: true, message: 'input your name'}],
      },
    }
  },
  mounted() {
    dealInfoData.getInfoList(this)
  },
  methods: {
    edit(form) {
      this.status = false
      this.form = {...form}
      this.dialogFormVisible = true
      this.confirmState = 2
    },
    del(id) {
      this.$alert('do you want to delete the data?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            dealInfoData.deleteInfoData(this,id)
            done()
          } else {
            done()
          }
        }
      })

    },
    addInfo() {
      this.dialogFormVisible = true
      this.$refs.form.resetFields()
      this.confirmState = 1
    },
    confirm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (this.confirmState === 1) {
            this.form.id=nanoid()
            dealInfoData.addInfoData(this,this.form)
          } else {
            dealInfoData.modifyInfoData(this,this.form)
          }
        }
      })

    },
    cancel() {
      this.dialogFormVisible = false
    },

  },
}
</script>

<style lang="scss" scoped>
.el-form-item {
  margin: 10px 0 25px 10px;
}

</style>