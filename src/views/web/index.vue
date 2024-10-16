<template>
    <div class="web-page">
        <div class="web-page-list">
            <div class="web-page-item" v-for="(item, index) in list" :key="index" @click="$router.push(item.path)">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Web-Page',
    components: {},
    data() {
        return {
            list: [
                { path: '/progress', name: '进度条' },
                { path: '/ecg', name: '心电图' },
                { path: '/shark', name: '扫光效果' },
                { path: '/officePreview', name: 'office预览' }
            ]
        }
    },
    computed: {},
    created() {},
    methods: {},
    watch: {}
}
</script>

<style scoped lang="less">
.web-page {
    padding: 20px;
    .web-page-list {
        display: grid;
        // 自适应一行N个宽度
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 20px;
        .web-page-item {
            margin: 0 auto;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 10px 0;
            width: 150px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .web-page-item:hover {
            border: 1px solid #409eff;
            color: #409eff;
            transition: all 0.3s ease;
        }
    }
}
</style>
