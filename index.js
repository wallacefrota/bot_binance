// par shibbusd
// min 42980
// max 48398

const WebSocket = require('ws');
// realizando conexão
const ws = new WebSocket('wss://stream.binance.com:9443/ws/shibbusd@kline_1h');

const { Telegraf } = require('telegraf');
const bot = new Telegraf('token chat');

// recebendo dados
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const valor_atual = parseFloat(data.k.c)

    // verificando entradas
    if (valor_atual >= 3718)
        // envia mensagem ao telegram
        bot.telegram.sendMessage(chat_id, 'Vender!')
    // console.log('Vender')
    else if (valor_atual <= 3690)
        bot.telegram.sendMessage(chat_id, 'Comprar!')
    // console.log('Comprar')
}

console.log('conectado')