<template>
    <div>
        <section
            class="fdb-block"
            style="background-image: url(/imgs/shapes/8.svg)"
        >
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 col-lg-5">
                        <img
                            alt="image"
                            class="fdb-icon"
                            src="/imgs/icons/github.svg"
                        />
                        <h1>Design Blocks</h1>
                        <p class="lead">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                        </p>
                    </div>
                    <div class="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">
                        <img
                            alt="image"
                            class="img-fluid rounded-0"
                            src="/imgs/draws/chat.svg"
                        />
                    </div>
                </div>
            </div>
        </section>

		<FaqCard
			v-for="(faq, index) in faqs"
			:key="`faq-${index}`"
			:question="faq.q"
			:answer="faq.a"
			:right="!!(index % 2)"
		/>

    </div>
</template>

<script>
import FaqCard from '@/components/FaqCard.vue'
export default {
	components: {
		FaqCard
	},
	data: () => ({
		faqs: [
			{
				q: 'How do I know if the GameBox Truck can come to my house?',
				a: 'We can go nearly anywhere. We need 50-60 feet of level road/ cul-de-sac. It is possible to use a nearby park or large parking lot.',
			},
			{
				q: 'Do I have to pay for the party in advance?',
				a: `
					A non-refundable deposit of $50.00 is required to secure your event date.
					<br>
					For non-profit/civic entities who must pay in a different manner (purchase order, etc.) please contact us to discuss a solution.
				`,
			},
			{
				q: 'Where can I view your payment policies?',
				a: 'Please click HERE for payment policies.',
			},
			{
				q: 'What time should I make the party?',
				a: 'In our experience, having guests arrive 30 minutes prior is a good idea. This will let the kids see the grand arrival of the GameBox!',
			},
			{
				q: 'What time will the GameBox Truck arrive?',
				a: `
					Approximately 20 minutes prior in order to set-up.
					<br>
					Certain GameBox Packages include games that require you to have an internet connection. In this case, we arrive 30-45min prior.
				`,
			},
			{
				q: 'What about bad weather?',
				a: `
					The GameBox Truck is climate controlled. We have done parties below freezing, heavy rains, and sunshine above 100 degrees!
					<br>
					As long as it is safe for us to drive!
				`,
			},
			{
				q: 'What types of games does GameBox provide?',
				a: 'We will coordinate what type of games are appropriate, as each party\'s game list is tailored to fit the event. We will make specific games unavailable, based on your wishes.',
			},
		]
	})
}

</script>

<style lang="css" scoped>

</style>
