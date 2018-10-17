const instrumentData = require('./data/instrument_data')
const InstrumentFamilies = require('./models/instrument_families')
const InstrumentView = require('./views/instrument_view')
const SelectView = require('./views/select_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

const instrumentFamilies = new InstrumentFamilies(instrumentData);
instrumentFamilies.bindEvents();

const divInstrumentsInfo = document.querySelector('#displayInfoArea')
const instrumentView = new InstrumentView(divInstrumentsInfo);
instrumentView.bindEvents();

const selectOption = document.querySelector('#instrument-families')
const selectView = new SelectView(selectOption);
selectView.bindEvents();

});
