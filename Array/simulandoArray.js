const quaserArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaserArray)

Object.defineProperty(quaserArray, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})

const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaserArray.toString(), meuArray)