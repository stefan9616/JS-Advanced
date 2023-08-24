window.addEventListener("load", solve);

function solve() {

  let profitMade = 0;
  let profitField = document.querySelector('#profit')

  let publishButton = document.querySelector('#publish');
  publishButton.addEventListener('click', publish);

  let makeSelectElement = document.querySelector('#make');
  let modelSelectElement = document.querySelector('#model');
  let productionYearSelectElement = document.querySelector('#year');
  let fuelSelectElement = document.querySelector('#fuel');
  let originalCostSelectElement = document.querySelector('#original-cost');
  let sellingPriceSelectElement = document.querySelector('#selling-price');

  let tableBody = document.querySelector('#table-body');
  let sellContainer = document.querySelector('#cars-list')

  function publish(event) {
    event.preventDefault();

    let makeValue = makeSelectElement.value;
    let modelValue = modelSelectElement.value;
    let productionYearValue = productionYearSelectElement.value;
    let fuelValue = fuelSelectElement.value;
    let originalCostValue = originalCostSelectElement.value;
    let sellingPriceValue = sellingPriceSelectElement.value;

    if (Number(originalCostValue) > Number(sellingPriceValue)) {
      return;
    };

    if (makeValue == '' || modelValue == '' || productionYearValue == '' || fuelValue == '' || originalCostValue == '' || sellingPriceValue == '') {
      return;
    }

    let tableContainerElement = document.createElement('tr');
    tableContainerElement.className = 'row';

    let makeTableDataElement = document.createElement('td');
    makeTableDataElement.textContent = makeValue;

    let modelTableDataElement = document.createElement('td');
    modelTableDataElement.textContent = modelValue;

    let productionYearTableDataElement = document.createElement('td');
    productionYearTableDataElement.textContent = productionYearValue;

    let fuelValueTableDataElement = document.createElement('td');
    fuelValueTableDataElement.textContent = fuelValue;

    let originalCostTableDataElement = document.createElement('td');
    originalCostTableDataElement.textContent = originalCostValue;

    let sellingPriceTableDataElement = document.createElement('td');
    sellingPriceTableDataElement.textContent = sellingPriceValue;

    let buttonsTableDataElement = document.createElement('td');
    let editButton = document.createElement('button');
    buttonsTableDataElement.appendChild(editButton);
    editButton.className = 'action-btn edit'
    editButton.textContent = 'Edit';

    let sellButton = document.createElement('button');
    buttonsTableDataElement.appendChild(sellButton);
    sellButton.className = 'action-btn sell';
    sellButton.textContent = 'Sell';

    editButton.addEventListener('click', edit);
    sellButton.addEventListener('click', sell);


    tableContainerElement.appendChild(makeTableDataElement);
    tableContainerElement.appendChild(modelTableDataElement);
    tableContainerElement.appendChild(productionYearTableDataElement);
    tableContainerElement.appendChild(fuelValueTableDataElement);
    tableContainerElement.appendChild(originalCostTableDataElement);
    tableContainerElement.appendChild(sellingPriceTableDataElement);
    tableContainerElement.appendChild(buttonsTableDataElement);
    tableContainerElement.appendChild(editButton);
    tableContainerElement.appendChild(sellButton);

    console.log(tableContainerElement);

    tableBody.appendChild(tableContainerElement);

    makeSelectElement.value = '';
    modelSelectElement.value = '';
    productionYearSelectElement.value = '';
    fuelSelectElement.value = '';
    originalCostSelectElement.value = '';
    sellingPriceSelectElement.value = '';


    function edit(event) {
      event.preventDefault();

      let makeInputElement = makeValue;
      let modelInputElement = modelValue;
      let productionYearInputElement = productionYearValue;
      let fuelInputElement = fuelValue;
      let originalCostInputElement = originalCostValue;
      let sellingPriceInputElement = sellingPriceValue;

      makeSelectElement.value = makeInputElement;
      modelSelectElement.value = modelInputElement;
      productionYearSelectElement.value = productionYearInputElement;
      fuelSelectElement.value = fuelInputElement;
      originalCostSelectElement.value = originalCostInputElement;
      sellingPriceSelectElement.value = sellingPriceInputElement;

      let eventTarget = event.currentTarget.parentNode;
      eventTarget.remove();
     
    }
    function sell(event) {

      event.preventDefault();

      let makeValueSell = makeValue.value;
      let modelValueSell = modelValue.value;
      let productionYearValueSell = productionYearValue.value;
      let fuelValueSell = fuelValue.value;
      let originalCostValueSell = originalCostValue.value;
      let sellingPriceValueSell = sellingPriceSelectElement.value;

      let sellContainerElement = document.createElement('li');
      sellContainerElement.classList.add('each-list');

      let makeAndModelElement = document.createElement('span');
      makeAndModelElement.textContent = `${makeValue} ${modelValue}`

      let prodYearElement = document.createElement('span');
      prodYearElement.textContent = `${productionYearValue}`

      let difference = Number(sellingPriceValue) - Number(originalCostValue).toFixed(2);
      profitMade += difference;

      let differenceElement = document.createElement('span');
      differenceElement.textContent = difference;

      sellContainerElement.appendChild(makeAndModelElement);
      sellContainerElement.appendChild(prodYearElement);
      sellContainerElement.appendChild(differenceElement);

      sellContainer.appendChild(sellContainerElement);

      profitField.textContent = profitMade.toFixed(2);

      let eventTarget = event.currentTarget.parentNode;
      eventTarget.remove();
    }
  }
}



