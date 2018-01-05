<template>
    <main>
        <!-- lazy-load -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>lazy-load</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <Yep-lazy-load></Yep-lazy-load>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
</style>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
        },
        components: {
        }
    }
</script>

