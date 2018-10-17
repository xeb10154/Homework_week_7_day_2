const PubSub = require('../helper/pubSub')

const SelectView = function(displayDiv){
  this.displayDiv = displayDiv;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('instruments_data:data_ready', (event) => {
    const allInstruments = event.detail;
    console.log(allInstruments)
    this.populate(allInstruments)

  });
  // PubSub.publish()
}

SelectView.prototype.populate = function(allInstruments){
  console.log(allInstruments)
  allInstruments.forEach((instrument, index) => {
    const option = document.createElement('option')
    option.textContent = instrument.name;
    option.value = index;
    this.displayDiv.appendChild(option);
  })

}

module.exports = SelectView;
