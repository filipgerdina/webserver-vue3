// src/utils/errorBus.ts
// npm i mitt   (1 kB publish-sub library)
import mitt from 'mitt'

type Events = {
  error: string   // you could pass richer objects later
}

export const errorBus = mitt<Events>()

console.log("init")