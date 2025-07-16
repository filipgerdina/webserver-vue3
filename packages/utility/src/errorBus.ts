
import mitt from 'mitt'

type Events = {
  error: string 
}

export const errorBus = mitt<Events>()

console.log("init")