<template>
    <div class="shark">
        <Shark> 李哈哈 </Shark>

        <Shark>
            <img class="img" src="../../../assets/images/ececa9a5.7y0amw.png" alt="" />
        </Shark>
    </div>
</template>

<script>
import Shark from '@/components/web/Shark'
export default {
    name: 'Shark-Vue',
    components: { Shark },
    data() {
        return {}
    },
    computed: {},
    created() {},
    methods: {},
    watch: {}
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
