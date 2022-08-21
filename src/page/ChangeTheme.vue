<template>
    <ElContainer>
        <ElInput v-model="input" placeholder="测试element" />
        <ElButton type="primary">test</ElButton>
    </ElContainer>
</template>

<script>
export default {
    name: 'ChangeTheme',
    data() {
        return {
            input:'在呢'
        };
    },
    methods: {},
}
</script>
<style scoped>
</style>
