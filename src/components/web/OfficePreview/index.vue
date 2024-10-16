<template>
    <div class="office-preview-component" v-loading="loading" element-loading-text="文件加载中">
        <!-- # docx 文档预览组件
            npm install @vue-office/docx vue-demi@0.14.6
            # excel 文档预览组件
            npm install @vue-office/excel vue-demi@0.14.6
            # pdf 文档预览组件
            npm install @vue-office/pdf vue-demi@0.14.6 -->
        <!-- 如果是 vue2.6 版本或以下还需要额外安装 @vue/composition-api -->

        <VueOfficeDocx v-if="type === 'docx'" @rendered="renderedHandler" :src="src" />

        <VueOfficeExcel v-if="type === 'xlsx' || type === 'xls'" @rendered="renderedHandler" />

        <VueOfficePdf v-if="type === 'pdf'" @rendered="renderedHandler" />
    </div>
</template>

<script>
import VueOfficeDocx from '@vue-office/docx'
import VueOfficeExcel from '@vue-office/excel'
import VueOfficePdf from '@vue-office/pdf'

import '@vue-office/docx/lib/index.css'
import '@vue-office/excel/lib/index.css'

export default {
    name: 'Office-Preview',
    components: { VueOfficeDocx, VueOfficeExcel, VueOfficePdf },
    props: {
        type: {
            type: String,
            default: 'docx'
        },
        src: {
            type: [String, Blob, ArrayBuffer],
            default: 'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    computed: {},
    created() {},
    methods: {
        renderedHandler() {
            console.log('渲染完成')
            this.$emit('update:loading', false)
        }
    },
    watch: {}
}
</script>

<style lang="less" scoped>
.office-preview-component {
    min-height: 500px;
    height: 100%;
}
</style>
