class pizza {
    constructor() {
        this.toppings = ['cheese'];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

}

//Create new class instance (object)
let pizza1 = new pizza();
//log the toppings property from this object
console.log(pizza1.toppings);
//Call the method created inside the class with a custom value
pizza1.addTopping('mushroom')
//Call method inside the class with a custom value;
pizza1.addTopping('peppers');








let pizza2 = new pizza();