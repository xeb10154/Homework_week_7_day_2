const PubSub = require('../helper/pubSub')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('instruments_data:data_ready', this.data)

}



module.exports = InstrumentFamilies;
