<template>
  <div class="container pb-5">
    <div v-if="isLoading">
      <b-notification :closable="false">
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true" loading-background="rgba(255,255,255)" />
      </b-notification>
    </div>
    <div class="card-container card my-5 shadow">
      <div class="login-header text-center p-3">
        <h2 class="title-text">
          Fibonacci Sequence
        </h2>
      </div>
      <h4 class="text-center py-4">
        Welcome to a simple Fibonacci Sequence Game
      </h4>

      <form class="mx-5 pb-5" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="max-number">Max Number </label>
          <input
            v-model="maxNumber"
            type="number"
            class="form-control form-control-sm"
            placeholder="Enter a max number"
          >
        </div>

        <div class="form-group">
          <label for="next-number">Next Number</label>
          <input
            v-model="nextNumber"
            type="number"
            class="form-control form-control-sm"
            placeholder="Enter next number in the sequence"
          >
        </div>

        <div class="add-cont d-flex justify-content-end mt-5">
          <button type="button" class="btn w-50 btn-success" @click="onAdd">
            Add
          </button>
        </div>
        <div class="buttons my-5">
          <button type="submit" class="btn btn-info submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ResultModal from '../components/ResultModal'

export default {
  data () {
    return {
      maxNumber: null,
      nextNumber: null,
      isLoading: false,
      isFullPage: true,
      isActive: false
    }
  },

  computed: {
    ...mapState('fibonacci', ['fibonacciSequence', 'nextSequence'])
  },

  methods: {
    async onAdd () {
      if (this.maxNumber == null) {
        this.$buefy.notification.open({
          message: 'Please enter a max number to generate the fibonacci sequence',
          type: 'is-danger',
          duration: 3000,
          position: 'is-top',
          'has-icon': true
        })
        return
      } else if (this.nextNumber == null) {
        this.$buefy.notification.open({
          message: 'Please enter a  number to predict the next fibonacci sequence',
          type: 'is-danger',
          duration: 3000,
          position: 'is-top',
          'has-icon': true
        })
        return
      }

      this.isLoading = true
      this.maxNumber = this.maxNumber * 1
      this.nextNumber = this.nextNumber * 1
      await this.$store.dispatch('fibonacci/generateFibonacci', this.maxNumber)
      const lastNum = this.fibonacciSequence[this.fibonacciSequence.length - 1]
      const beforLast = this.fibonacciSequence[this.fibonacciSequence.length - 2]
      const nextSequence = lastNum + beforLast
      await this.$store.commit('fibonacci/setNextSequence', nextSequence)
      if (this.nextSequence === this.nextNumber) {
        this.maxNumber = this.nextSequence
        await this.$store.commit('fibonacci/addNextNumber', this.nextNumber)
        this.nextNumber = null
        setTimeout(() => {
          this.isLoading = false
        }, 1 * 500)
        this.$buefy.notification.open({
          message: 'Great!!! You inserted the next fibonacci sequence correctly',
          type: 'is-success',
          duration: 5000,
          position: 'is-top',
          'has-icon': true
        })
      } else {
        this.$buefy.notification.open({
          message: 'Huh!!! That was incorrect. Try Again',
          type: 'is-danger',
          duration: 5000,
          position: 'is-top',
          'has-icon': true
        })
        setTimeout(() => {
          this.isLoading = false
        }, 1 * 500)
      }
    },
    async onSubmit () {
      this.maxNumber = this.maxNumber * 1
      this.nextNumber = this.nextNumber * 1
      await this.$store.dispatch('fibonacci/generateFibonacci', this.maxNumber)
      const lastNum = this.fibonacciSequence[this.fibonacciSequence.length - 1]
      const beforLast = this.fibonacciSequence[this.fibonacciSequence.length - 2]
      const nextSequence = lastNum + beforLast
      await this.$store.commit('fibonacci/setNextSequence', nextSequence)
      if (this.nextSequence === this.nextNumber) {
        this.maxNumber = this.nextSequence
        await this.$store.commit('fibonacci/addNextNumber', this.nextNumber)
        this.$buefy.modal.open({
          parent: this,
          component: ResultModal,
          hasModalCard: true,
          trapFocus: true
        })
      } else {
        this.$buefy.modal.open({
          parent: this,
          component: ResultModal,
          hasModalCard: true,
          trapFocus: true
        })
      }
    }
  }
}
</script>

<style scoped lang='scss'>
/* deep__blue #00113d */
/* light cyan ##72f3ec */

@media screen and (min-width: 600px) {
  .card-container {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (min-width: 400px) {
  .login,
  .submit {
    flex-grow: 1;
    width: 40%;
  }
  .buttons {
    display: flex;
  }
}
.card-container {
  position: relative;
  color: #00113d;
}
.login-header {
  background-color: #00113d;
  color: white;
}
.title-text {
  font-size: 25px;
}
.line-or {
  display: flex;
  justify-content: space-between;
}
.line-wrapper {
  display: inline-block;
  flex-grow: 2;
}
.line {
  border: 0.7px solid grey;
  text-align: center;
  margin-top: 12px;
}
.fb-btn {
  background-color: #72f3ec;
}
</style>
