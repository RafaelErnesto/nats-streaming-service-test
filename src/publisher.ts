import nats from 'node-nats-streaming'
import { TicketCreatePublisher } from './events/ticket-created-publisher'

console.clear()

const stan =  nats.connect(`ticketing`, `abc`, {
    url: 'http://localhost:4222'
})

stan.on('connect', async () => {
  
    const publisher = new TicketCreatePublisher(stan)

    try {
        await publisher.publish({
            id: '123',
            title: 'concert',
            price: 20
        })
    } catch(err) {
        console.log(err)
    }
})