import  { Message} from 'node-nats-streaming'
import { BaseListener } from './base-listener'
import { Subjects } from './subjects'
import { TicketCreatedEvent } from './ticket-created-event'


export class TicketCreatedListener extends BaseListener<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated
    queueGroupName = 'payments-service'

    onMessage(data: TicketCreatedEvent['data'], message: Message): void  {
        console.log('event')

        message.ack()
    }
    
}