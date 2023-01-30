


const aleatorio = Math.floor(Math.random() * (10 + 20) + 10)
const aleatorio2 = Math.floor(Math.random() * (0 + 9) + 0)

const data = new Date
const ano = data.getFullYear()
const segundos = data.getSeconds();
let mix = [ano, aleatorio, segundos].join('')

if (mix.length < 8) {
    mix = [ano, aleatorio, aleatorio2, segundos ].join('')

}


console.log(mix)