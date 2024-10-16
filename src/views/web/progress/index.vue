<template>
    <div class="web-progress">
        <Progress v-for="item in list1" :key="item.percentage" :percentage="item.percentage" :defineBackColor="item.color" :roundBackColor="item.color[1]"></Progress>
        <br />
        <br />
        <br />
        <Progress v-for="item in list2" :key="item.percentage" :percentage="item.percentage" :defineBackColor="item.color" :roundBackColor="item.color[1]"></Progress>
    </div>
</template>

<script>
import Progress from '@/components/web/Progress'
export default {
    name: 'Pro-Gress',
    components: { Progress },
    data() {
        return {
            list1: [
                { percentage: 1, color: ['#ee9ca7', '#ffdde1'] },
                { percentage: 30, color: ['#30e8bf', '#ff8235'] },
                { percentage: 40, color: ['#373b44', '#4286f4'] }
            ],
            list2: [
                { percentage: 50, color: ['#fc4a1a', '#f7b733'] },
                { percentage: 60, color: ['#a1ffce', '#faffd1'] },
                { percentage: 70, color: ['#a8ff78', '#78ffd6'] }
            ]
        }
    },
    computed: {},
    created() {},
    methods: {},
    watch: {}
}
</script>

<style lang="less" scoped>
.web-progress {
    width: 100%;
    height: 100vh;
    background-color: #000;
}
</style>
