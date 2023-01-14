type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor (
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ) {}

    isProductReady(): boolean {
        for(const key in this) {
            console.log('here! ' + this[key])
            switch(typeof this[key]) {
                case 'string':
                    if(String(this[key]).length <= 0) throw Error (`${key} is empty`)
                break;
                case 'number':
                    if(String(this[key]).length <= 0) throw Error (`${key} is empty`)
                break;
                default:
                    throw Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }

    toString() {
        //DRY
        if(!this.isProductReady) return
        return `${ this.name } ${this.price}, ${this.size}`
    }
}

(() => {
    const bluePants = new Product ('Blue Large Pants', 10, 'M');
    console.log(bluePants.toString())
})();