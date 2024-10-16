<template>
    <div class="progress-content">
        <div class="progress">
            <div class="title-box">
                <div class="icon" :style="{ backgroundImage: 'url(' + icon + ')' }"></div>
                <div class="title">{{ title }}</div>
            </div>
            <div class="progress-box">
                <div class="progress-bar">
                    <div :style="styleProgress()" class="progress-bg">
                        <div :style="styleProgressUp()" class="progress-up">
                            <div :style="styleRound()" class="round-box" v-if="percentage">
                                <div :style="styleRound1()" class="round-box1 center"></div>
                                <div :style="styleRound2()" class="round-box2 center"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="progress-num-box">
                    <div class="progress-num">{{ num }}</div>
                    <div :style="progressNumlLine()" class="progress-num-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { calculateVeryLightColor } from '@/utils/index'
import progressIcon from '@/assets/images/progress/progress.png'
export default {
    name: 'Pro-Gress',
    components: {},
    props: {
        // 进度条的百分比
        percentage: {
            type: Number,
            default: 80
        },
        // 进度条数值
        num: {
            type: Number,
            default: 80
        },
        title: {
            type: String,
            default: '标题'
        },
        icon: {
            type: String,
            default: progressIcon
        },
        // 进度条宽度
        width: {
            type: Number,
            default: 200
        },
        // 进度条高度
        height: {
            type: Number,
            default: 10
        },
        // 进度条底色
        defineBottomBackColor: {
            type: String,
            default: '#0E2E4D'
        },
        // 进度条颜色
        defineBackColor: {
            type: Array,
            default: () => ['#0E2E4D', '#0E2E4D']
        },
        // 圆角
        radius: {
            type: Number,
            default: 5
        },
        // 圆点背景色
        roundBackColor: {
            type: String,
            default: '#8EFFCE'
        },
        id: {
            type: [String, Number],
            default: ''
        }
        // 圆环背景色
    },
    data() {
        return {}
    },
    computed: {},
    created() {},
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.styleProgress()
            this.styleProgressUp()
            this.styleRound()
            this.styleRound1()
            this.styleRound2()
        },

        // 底部进度条样式
        styleProgress() {
            return {
                width: this.width + 'px',
                height: this.height + 'px',
                backgroundColor: this.defineBottomBackColor,
                borderRadius: this.height + 'px'
            }
        },
        // 顶部进度条样式
        styleProgressUp() {
            return {
                width: this.percentage + '%',
                height: this.height + 'px',
                borderRadius: this.height + 'px',
                background: `linear-gradient(to right, ${this.defineBackColor[0]}, ${this.defineBackColor[1]} 60%)`,
                '--progress-width': this.percentage + '%'
            }
        },
        // 圆点样式
        styleRound() {
            return {
                width: this.height + 3 + 'px',
                height: this.height + 3 + 'px',
                backgroundColor: this.roundBackColor,
                borderRadius: this.height * 2 + 'px',
                '--round-width': -this.height / 2 + 'px'
            }
        },
        styleRound1() {
            return {
                width: this.height * 2 + 'px',
                height: this.height * 2 + 'px',
                backgroundColor: calculateVeryLightColor(this.roundBackColor),
                opacity: 0.7
            }
        },
        styleRound2() {
            return {
                width: this.height * 2 + 10 + 'px',
                height: this.height * 2 + 10 + 'px',
                border: '2px solid #fff',
                opacity: 0.4
            }
        },
        // 设置数值底下横线的颜色
        progressNumlLine() {
            return {
                backgroundColor: this.defineBackColor[1]
            }
        }
    },
    watch: {}
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
