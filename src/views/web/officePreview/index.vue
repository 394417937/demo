<template>
    <div class="office-preview">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <div class="search">
                <div>
                    <el-radio-group v-model="radio">
                        <el-radio-button label="远程文件"></el-radio-button>
                        <el-radio-button label="本地文件"></el-radio-button>
                    </el-radio-group>
                </div>

                <div class="input" v-show="radio === '远程文件'">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>

                <div class="input" v-show="radio === '远程文件'">
                    <el-button type="primary" @click="preview" :loading="loading">预览</el-button>
                </div>

                <div v-show="radio !== '远程文件'" style="margin-left: 20px">
                    <el-upload class="upload-demo" :accept="accept" :file-list="fileList" :show-file-list="false" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange">
                        <el-button type="primary">点击上传</el-button>
                    </el-upload>
                </div>
            </div>
            <el-tab-pane label="DOCX" name="docx">
                <div class="container">
                    <officePreview type="docx" :src="src" :loading.sync="loading" />
                </div>
            </el-tab-pane>
            <el-tab-pane label="EXCEL" name="xls">
                <div class="container">
                    <officePreview type="xls" :src="src" :loading.sync="loading" />
                </div>
            </el-tab-pane>
            <el-tab-pane label="PDF" name="pdf">
                <div class="container">
                    <officePreview type="pdf" :src="src" :loading.sync="loading" />
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import officePreview from '@/components/web/OfficePreview'
export default {
    name: 'Office-Preview',
    components: { officePreview },
    data() {
        return {
            activeName: 'docx',
            radio: '远程文件',
            input: 'https://gzhlshss.sanskj.cn/file/docx.docx',
            fileList: [],
            src: 'https://gzhlshss.sanskj.cn/file/docx.docx',
            loading: false,
            accept: ''
        }
    },
    computed: {},
    created() {},
    methods: {
        // todo 预览
        preview() {
            this.src = this.input
            this.loading = true
        },
        // 上传文件
        handleChange(e) {
            const file = e.raw
            let fileReader = new FileReader()
            fileReader.readAsArrayBuffer(file)
            fileReader.onload = () => {
                this.src = fileReader.result
                console.log(this.src)
            }
        },
        handleClick({ index }) {
            switch (index) {
                case '0':
                    this.accept = '.docx'
                    this.src = this.input = 'https://gzhlshss.sanskj.cn/file/docx.docx'
                    break

                case '1':
                    this.accept = '.xls,.xlsx'
                    this.src = this.input = 'https://gzhlshss.sanskj.cn/file/xls.xls'
                    break
                case '2':
                    this.accept = '.pdf'
                    break

                default:
                    break
            }
        },
        // todo 上传xls
        async uploadDocx(e) {
            const file = e.target.files[0]
            let fileReader = new FileReader()
            fileReader.readAsArrayBuffer(file)
            fileReader.onload = () => {
                this.src = fileReader.result
                console.log(this.src)
            }
        }
    },
    watch: {}
}
</script>

<style lang="less" scoped>
.office-preview {
    padding: 20px;
    height: 100vh;
    box-sizing: border-box;
    .search {
        display: flex;
        align-content: center;
        margin-bottom: 20px;

        .input {
            margin-left: 20px;
            width: 40%;
        }
    }
    .container {
        height: 100%;
        box-sizing: border-box;
    }
}
</style>
