import { copy } from 'fs-extra'

copy('public', 'dist', { overwrite: true })
  .then(() => console.log('Copied public → dist'))
  .catch(err => console.error('Copy failed:', err))
