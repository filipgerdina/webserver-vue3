export type CrossTabLockOptions = {
  lockKey: string
  lockTtl?: number
  guid: string
  verifyDelay?: number
}

export class CrossTabLock {
  private lockKey: string
  private lockTtl: number
  private guid: string
  private verifyDelay: number

  constructor({ lockKey, lockTtl = 15000, guid, verifyDelay = 80 }: CrossTabLockOptions) {
    this.lockKey = lockKey
    this.lockTtl = lockTtl
    this.guid = guid
    this.verifyDelay = verifyDelay
  }

  private getLock() {
    const val = localStorage.getItem(this.lockKey)
    if (!val) return null
    try {
      return JSON.parse(val)
    } catch { return null }
  }

  private isLocked() {
    const lock = this.getLock()
    if (!lock) return false
    return (Date.now() - lock.ts < this.lockTtl)
  }

  async acquire(): Promise<boolean> {
    const now = Date.now()
    localStorage.setItem(this.lockKey, JSON.stringify({ tabId: this.guid, ts: now }))
    await new Promise(res => setTimeout(res, this.verifyDelay))
    const lock = this.getLock()
    return lock && lock.tabId === this.guid && (Date.now() - lock.ts < this.lockTtl)
  }

  release() {
    const lock = this.getLock()
    if (lock && lock.tabId === this.guid) {
      localStorage.removeItem(this.lockKey)
    }
  }

  async waitForUnlock(timeout = this.lockTtl): Promise<boolean> {
    let waited = 0
    while (this.isLocked()) {
      await new Promise(r => setTimeout(r, 200))
      waited += 200
      if (waited > timeout) return false
    }
    return true
  }

  isLockedPublic() {
    return this.isLocked()
  }
}
