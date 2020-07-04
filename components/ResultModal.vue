<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Fibinacci Sequence Result
        </p>
      </header>
      <section class="modal-card-body">
        <h1 class="mb-2 desc-text">
          This are the correct fibonacci sequence  inserted
        </h1>
        <div class="d-flex">
          <h2 v-for="(item, index) in fibonacciSequence" :key="index" class="px-3 py-2 bg-dark m-2 text-white">
            {{ item }}
          </h2>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger" type="button" @click="$parent.close()">
          Close
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('fibonacci', ['fibonacciSequence'])
  }
}
</script>
<style>
.desc-text{
  font-size: 20px;
}
</style>
