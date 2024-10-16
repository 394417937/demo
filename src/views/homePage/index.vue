<template>
    <div class="home-page">
        <div class="home-page-content">
            <div class="home-page-title">组件</div>
            <div class="home-page-list">
                <div class="home-page-list-item">
                    <router-link v-for="(item, index) in list" :key="index" :to="item.path">{{ item.name }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home-Page',
    components: {},
    data() {
        return {
            list: [
                { path: '/web', name: 'WEB' },
                { path: '/h5', name: 'H5' },
                { path: '/dome', name: 'demo' }
            ]
        }
    },
    computed: {},
    created() {},
    methods: {},
    watch: {}
}
</script>

<style lang="less" scoped></style>
