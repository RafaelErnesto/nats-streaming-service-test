import  { Message} from 'node-nats-streaming'
import { BaseListener } from './base-listener'


export class TicketCreatedListener extends BaseListener {
    subject = 'ticket:created'
    queueGroupName = 'payments-service'

    onMessage(data: any, message: Message): void  {
        console.log('event')

        message.ack()
    }
    
}