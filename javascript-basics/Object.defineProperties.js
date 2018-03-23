// being explicit
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

var account = {
  cash: 12000,
  _name: 'Default',
  withdraw: function(amount) {
    this.cash -= amount
    console.log('Withdrew ' + amount + ', new cash reserve is: ')
  }
}

// Object.defineProperty(obj, prop, descriptor)
Object.defineProperty(account, 'name', {
  get: function() {
    return this._name
  },
  set: function(name) {
    this._name = name
  }
})

console.log(account.name)

account.name = 'ID000-3'

console.log(account.name)
