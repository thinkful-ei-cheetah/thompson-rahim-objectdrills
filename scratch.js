
const loaf ={
    flour: 300,
    water: 210,
    hydration: function(){
        return 100*this.water/this.flour;
    }
} 

console.log(loaf);
console.log(loaf.hydration() );
