
var stripe = Stripe('pk_test_51JgcxjAQjSIe0mCFI2ToTYGFo0bljksOstzBEtWgd8ZWXO9KyBPgq0RoTDbDJGwGWrLUWL6evWcirlI3zg6kagBE00kBvDObQK');
var elements = stripe.elements(); // cardのエレメントをつくる

// Element作成時に options から スタイルを調整できます.
var style = {
  base: {
    // ここでStyleの調整をします。
    fontSize: '16px',
    color: "#32325d",
  }
};

// card Element のインスタンスを作成
var card = elements.create('card');
card.mount('#card-element');


