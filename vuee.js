const Sales = [
	{id: 1,nameOfitem: 'Bag', price: 1830.00, Quantity: 1, image:'img/شنطة.jpg'},  
	{id: 2,nameOfitem: 'Watche',price: 1200.00, Quantity: 1,image: 'img/banner-03.jpg'},  
	{id: 3,nameOfitem: 'Shoes',price: 420.00,Quantity: 1,image: 'img/كوتشي2.jpg'},  
	{id: 4,nameOfitem: 'Glass',price: 265.00, Quantity: 1, image: 'img/banner-05.jpg'},  
];
// Component Chart El Fo2
Vue.component('shopping-cart', {
  props: ['items'],
  computed: {
    TotalPrice() {
      let total = 0;
      this.items.forEach(item => {
        total += (item.price * item.Quantity);
      });
      return total;
    }
  },

  methods: {
		// Remove item by its index
    DeleteItem(index) {
      this.items.splice(index, 1)
    }
  }
})
//end of  Component Chart El Fo2


const vm = new Vue({
  el: '#MustafaApp',
	
  data: {
    NewItemsCart: [],
    items : Sales
  },
	
  methods: {
      
		// Add Items to cart
    addItemToCart(Newitem) {

      // Add the item or increase Quantity
			let itemInCart = this.NewItemsCart.filter(item => item.id===Newitem.id);
			let ItemFound = itemInCart.length > 0;

      if (ItemFound === false) {
        this.NewItemsCart.push(Newitem);
      } 
    }
    
  }
})
