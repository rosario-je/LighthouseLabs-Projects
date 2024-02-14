class pizza {
    constructor() {
        this.toppings = ['cheese'];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }
    setSize(size) {
        if (size === 's' || size === 'm' || size === 'l'){
            this.size = size;
        }
    }
      getSize() {
        return this.size;
    }

}


const pizza = new pizza();
pizza.setSize('m');
pizza.getSize(); // m








let pizza2 = new pizza();