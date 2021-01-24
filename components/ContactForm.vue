<template>
  <div class="col-12 col-md-6 ml-auto">
      <template v-if="loading">
          ... sending message
      </template>

      <template v-else-if="success">
          Message sent successfully.
      </template>

    <template v-else>
        <p v-if="error">
            There was an error sending the message. If the problem continues please try contacting us by phone.
        </p>
      <h2>Drop us a line</h2>
      <form>
        <div class="row mt-4">
          <div class="col">
            <input
              v-model="form.name"
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="col">
            <input
              v-model="form.phone"
              type="text"
              class="form-control"
              placeholder="Phone"
            />
          </div>
        </div>

        <div class="row mt-4">
          <div class="col">
            <textarea
              v-model="form.message"
              class="form-control"
              name="message"
              rows="5"
              placeholder="How can we help?"
            ></textarea>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <button
              @click.prevent="submitForm"
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    loading: false,
    error: false,
    success: false,
    form: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  }),
  methods: {
    async submitForm() {
      this.loading = true
      this.error = false
      this.success = false

      try {
        await axios.post('/.netlify/functions/contact', this.form)
        this.success = true
      } catch (error) {
        this.error = true
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>