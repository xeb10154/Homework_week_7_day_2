const PubSub = {
  publish: function(channel, payload){
    console.log(`publish channel: ${channel}, payload: ${payload}.`)
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    console.log(`subscribe channel: ${channel}, callback: ${callback}.`)
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
