molix.logging = {
  lastError: '',
  eventJournal: '',
  log (text) {
    molix.logging.eventJournal += `\n[${new Date().toLocaleDateString()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}]: ${text}`
  }
}

molix.totalModules++;