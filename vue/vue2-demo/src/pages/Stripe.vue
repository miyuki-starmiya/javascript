<template>
  <div>
    <h1>Stripe demo page</h1>
    <button @click="createMount">show</button>

    <section class="row payment-form">

      <h5 class="#e0e0e0 grey lighten-4">
          Payment Method
          <span class="right">$25</span>
      </h5>

      <label>Card</label>
      <div id="card"></div>

    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      stripe: null,
      card: null,
      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null,
    }
  },
  mounted() {
    this.createMount();
  },
  methods: {
    createMount() {
      var stripe = window.Stripe("pk_test_51JgcxjAQjSIe0mCFI2ToTYGFo0bljksOstzBEtWgd8ZWXO9KyBPgq0RoTDbDJGwGWrLUWL6evWcirlI3zg6kagBE00kBvDObQK");
      var elements = stripe.elements();
      console.log(elements);

      var card = elements.create("card");
      card.mount("#card");

      console.log("method success")
    }
  }
}
</script>

<style scoped>

</style>
