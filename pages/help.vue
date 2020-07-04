<template>
  <section class="hero is-medium is-info is-bold help-container">
    <h1 class="title text-center mt-5">
      The Fibonacci Sequence
    </h1>
    <div class="hero-body pt-1">
      <div class="container">
        <h1 class="title mb-5">
          How to play the game
        </h1>
        <h2 class="subtitle">
          1. Enter the Max Number &twoheadrightarrow; <i class="lead">
            This will generate a Fibonacci Sequence from <strong>0</strong> up to and include the number inserted
          </i>
        </h2>
        <h2 class="subtitle">
          2. Enter the Next Number &twoheadrightarrow; <i class="lead">
            This is the next number in the sequence e.g if 8 was entered as the max number, the next number is 13.<br>
            <i class="pl-5">if the number inserted is correct, the number is added to the sequence and becomes the <strong>Max Number</strong></i> <br>
            <i class="pl-5">If the number is incorrect, You get a notification of <strong>Incorrect Number Inserted</strong> and will not be added to the sequence</i>
          </i>
        </h2>
        <h2 class="subtitle">
          3. Click on Add button &twoheadrightarrow; <i class="lead">
            This will add the <strong>Next Number</strong> to the sequence if correct and shows notification to that effect
          </i>
        </h2>
        <h2 class="subtitle">
          4. Click on Submit button &twoheadrightarrow; <i class="lead">
            This will show all the generated and correctly inserted fibonacci sequence numbers
          </i>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.help-container{
  min-height: 80vh;
}
</style>
