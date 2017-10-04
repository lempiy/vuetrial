<template>
    <div class="radio-pick">
        <label ref="mdl" v-for="option in options" :key="option.value" class="mdl-radio mdl-js-radio mdl-js-ripple-effect" :for="option.value">
            <input type="radio" :id="option.value" class="mdl-radio__button" :name="name" :value="option.value" v-model="chosen">
            <span class="mdl-radio__label">{{option.title}}</span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'textinput',
    props: ['options', 'name'],
    data: () => ({
        chosen: "",
    }),
    mounted() {
        componentHandler.upgradeElements(this.$refs.mdl)
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    .radio-pick
        display: flex
        align-items: center
        justify-content: space-around
        width: 100%
</style>
