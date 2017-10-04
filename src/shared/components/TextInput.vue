<template>
    <div ref="mdl" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" :pattern='pattern' :value='input' type="text" :id='name' :name='name'/>
        <label class="mdl-textfield__label" :for='name'>{{title}}</label>
        <span v-if="error" class="mdl-textfield__error">{{error}}</span>
    </div>
</template>

<script>
export default {
    name: 'textinput',
    props: ['pattern', 'input', 'name', 'error', 'title'],
    mounted() {
        componentHandler.upgradeElement(this.$refs.mdl)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
