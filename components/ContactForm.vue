<template>
  <div class="col-12 col-md-6 ml-auto">
    <h2>Drop us a line</h2>
    <form>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <input type="text" class="form-control" placeholder="Company Name" />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col">
          <input type="text" class="form-control" placeholder="Phone" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Country" />
        </div>
      </div>

      <div class="row mt-4">
        <!-- <div class="col">
                                <select class="form-control" required="">
                                    <option value="">Select Department</option>
                                    <option value="1">Support</option>
                                    <option value="2">Sales</option>
                                    <option value="3">Accounting</option>
                                </select>
                            </div> -->
      </div>
      <div class="row mt-4">
        <div class="col">
          <textarea
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
   
   methods: {
        async submitForm() {
            try {

                const response = await axios.post('/.netlify/functions/contact', {
                    name: 'name',
                        email: 'test@gmail.com',
                        details: "gimmie dem deets babe"
                })
                console.info({response})
            } catch (error) {
                console.info({error})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>