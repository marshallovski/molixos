const logging = {
  lastError: '',
  eventJournal: '',
  log (text) {
    this.eventJournal += `\n[${new Date().toLocaleDateString()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]: ${text}`
  }
}

molix.totalModules++;