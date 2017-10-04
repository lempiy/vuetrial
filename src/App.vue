<template>
  <div id="app">
    <div class="outlet">
        <aside class='logos'>
            <div class='flex-cell'>
                <img src="./assets/dt.png" alt="Dragon Tail logo"></img>
            </div>
            <div class='flex-cell'>
                <img src="./assets/domino.jpg" alt="Companies logo"></img>
            </div>
        </aside>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
.logos
	width: 97vw
	max-width: 1680px
	display: flex
	justify-content: flex-end
	margin: 0px auto
	padding: 10px 0
	padding-top: 30px
	margin-bottom: 0px
	@media (max-width: 980px)
		margin-bottom: -40px
		justify-content: center
		padding: 0
		
		.flex-cell:first-of-type
			display: none
	.flex-cell
		display: flex
		justify-content: center
		align-items: center
		img
			max-height: 75px
			width: auto

</style>
