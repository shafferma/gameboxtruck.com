<template>
    <section class="fdb-block"  :class="{ 'bg-gray': right }">
        <div class="container">
            <div class="row" :class="{ 'justify-content-end': right }">
                <div class="col col-sm-10 col-md-8 text-left">
					<h2 v-html="question" />
                    <p class="lead" v-html="answer" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
	props: {
		right: {
			type: Boolean,
			required: false,
			default: false
		},
		question: {
			type: String,
			required: true,
			default: ''
		},
		answer: {
			type: String,
			required: true,
			default: ''
		}
	}
}
</script>

<style lang="css" scoped>
</style>
