class Bag {
    constructor (weight) {
        if (!weight) {
            throw new Error("bag needs weight")
        }
        this.weight = weight;
    }
        // 1. Weight
            //1a. Should handle an exception in case user adds no weight and throw an error.
  
}
try {
    const bag = new Bag();
} catch(err) {
    console.log(err)
}

module.exports = Bag;
