// страница 182 //115

let calc = () => {

  var sit, chair, armChair, kuhUgolok, sofa, sofa2, sofa3, sofaCorner, coverChair, coverArmchair, coverSofa, coverSofa2, coverSofa3, coverSofaCorner, flok, shenil, velur, jacard, ecoLeather, leather;

  var sitLength, chairLength, armChairLength, kuhUgolokLength, sofaLength, sofa2Length, sofa3Length, sofaCornerLength, coverChairLength, coverArmchairLength, coverSofaLength, coverSofa2Length, coverSofa3Length, coverSofaCornerLength, flokLength, shenilLength, velurLength, jacardLength, ecoLeatherLength, leatherLength;

  var psit, pchair, parmChair, pkuhUgolok, psofa, psofa2, psofa3, psofaCorner, pcoverChair, pcoverArmchair, pcoverSofa, pcoverSofa2, pcoverSofa3, pcoverSofaCorner, pflok, pshenil, pvelur, pjacard, pecoLeather, pleather;

  // id work
  sit = document.querySelector('#sidenie');
  chair = document.querySelector('#sidenie_spinka');
  armChair = document.querySelector('#kreslo');
  kuhUgolok = document.querySelector('#kuhUgolok');
  sofa = document.querySelector('#sofa');
  sofa2 = document.querySelector('#sofa2');
  sofa3 = document.querySelector('#sofa3');
  sofaCorner = document.querySelector('#sofaCorner');
  coverChair = document.querySelector('#coverChair');
  coverArmchair = document.querySelector('#coverArmchair');
  coverSofa = document.querySelector('#coverSofa');
  coverSofa2 = document.querySelector('#coverSofa2');
  coverSofa3 = document.querySelector('#coverSofa3');
  coverSofaCorner = document.querySelector('#coverSofaCorner');

  // id textile
  flok = document.querySelector('#flok'); shenil = document.querySelector('#shenil');
  velur = document.querySelector('#velur'); jacard = document.querySelector('#jacard');
  ecoLeather = document.querySelector('#ecoLeather'); leather = document.querySelector('#leather');

  // prices for work (p = price)
  psit = 500; pchair = 1050; parmChair = 4000; pkuhUgolok = 5500; psofa = 7000; psofa2 = 10000; psofa3 = 12000;
  psofaCorner = 15000; pcoverChair = 900; pcoverArmchair = 3500; pcoverSofa = 8000; pcoverSofa2 = 9000; pcoverSofa3 = 12000; pcoverSofaCorner = 13000;

  // prices for textile (p = price)
  pflok = 900; pshenil = 1250; pjacard = 2000; pvelur = 1500; pecoLeather = 1300; pleather = 4500;

  // length textile on things
  sitLength = 0.5; chairLength = 1; armChairLength = 4.5; kuhUgolokLength = 5; sofaLength = 7; sofa2Length = 9;
  sofa3Length = 12; sofaCornerLength = 15; coverChairLength = 2; coverArmchairLength = 5; coverSofaLength = 8; coverSofa2Length = 10; coverSofa3Length = 13; coverSofaCornerLength = 17;

  let result = document.querySelector('.result p');
  let btn = document.querySelector('#btn_count');
  btn.onclick = () => {
    // chair
    if(sit.checked && flok.checked){
      result.innerHTML = psit + (pflok * sitLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sit.checked && shenil.checked){
      result.innerHTML = psit + (pshenil * sitLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sit.checked && jacard.checked){
      result.innerHTML = psit + (pjacard * sitLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sit.checked && velur.checked){
      result.innerHTML = psit + (pvelur * sitLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sit.checked && ecoLeather.checked){
      result.innerHTML = psit + (pecoLeather * sitLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sit.checked && leather.checked){
      result.innerHTML = psit + (pleather * sitLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(chair.checked && flok.checked){
      result.innerHTML = pchair + (pflok * chairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(chair.checked && shenil.checked){
      result.innerHTML = pchair + (pshenil * chairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(chair.checked && jacard.checked){
      result.innerHTML = pchair + (pjacard * chairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(chair.checked && velur.checked){
      result.innerHTML = pchair + (pvelur * chairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(chair.checked && ecoLeather.checked){
      result.innerHTML = pchair + (pecoLeather * chairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(chair.checked && leather.checked){
      result.innerHTML = pchair + (pleather * chairLength) + ' руб.' + ' ' + 'Работа + материал';
    } 
    // armchair
    else if(armChair.checked && flok.checked){
      result.innerHTML = parmChair + (pflok * armChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(armChair.checked && shenil.checked){
      result.innerHTML = parmChair + (pshenil * armChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(armChair.checked && velur.checked){
      result.innerHTML = parmChair + (pvelur * armChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(armChair.checked && jacard.checked){
      result.innerHTML = parmChair + (pjacard * armChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(armChair.checked && ecoLeather.checked){
      result.innerHTML = parmChair + (pecoLeather * armChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(armChair.checked && leather.checked){
      result.innerHTML = parmChair + (pleather * armChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } 

    // sofa
    else if(kuhUgolok.checked && flok.checked){
      result.innerHTML = pkuhUgolok + (pflok * kuhUgolokLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(kuhUgolok.checked && shenil.checked){
      result.innerHTML = pkuhUgolok + (pshenil * kuhUgolokLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(kuhUgolok.checked && velur.checked){
      result.innerHTML = pkuhUgolok + (pvelur * kuhUgolokLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(kuhUgolok.checked && jacard.checked){
      result.innerHTML = pkuhUgolok + (pjacard * kuhUgolokLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(kuhUgolok.checked && ecoLeather.checked){
      result.innerHTML = pkuhUgolok + (pecoLeather * kuhUgolokLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(kuhUgolok.checked && leather.checked){
      result.innerHTML = pkuhUgolok + (pleather * kuhUgolokLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa.checked && flok.checked){
      result.innerHTML = psofa + (pflok * sofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa.checked && shenil.checked){
      result.innerHTML = psofa + (pshenil * sofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa.checked && shenil.checked){
      result.innerHTML = psofa + (pshenil * sofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa.checked && velur.checked){
      result.innerHTML = psofa + (pvelur * sofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa.checked && jacard.checked){
      result.innerHTML = psofa + (pjacard * sofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa.checked && ecoLeather.checked){
      result.innerHTML = psofa + (pecoLeather * sofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa.checked && leather.checked){
      result.innerHTML = psofa + (pleather * sofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa2.checked && shenil.checked){
      result.innerHTML = psofa2 + (pshenil * sofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa2.checked && flok.checked){
      result.innerHTML = psofa2 + (pflok * sofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa2.checked && velur.checked){
      result.innerHTML = psofa2 + (pvelur * sofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa2.checked && jacard.checked){
      result.innerHTML = psofa2 + (pjacard * sofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa2.checked && ecoLeather.checked){
      result.innerHTML = psofa2 + (pecoLeather * sofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa2.checked && leather.checked){
      result.innerHTML = psofa2 + (pleather * sofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa3.checked && flok.checked){
      result.innerHTML = psofa3 + (pflok * sofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa3.checked && shenil.checked){
      result.innerHTML = psofa3 + (pshenil * sofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa3.checked && velur.checked){
      result.innerHTML = psofa3 + (pvelur * sofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa3.checked && jacard.checked){
      result.innerHTML = psofa3 + (pjacard * sofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa3.checked && ecoLeather.checked){
      result.innerHTML = psofa3 + (pecoLeather * sofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofa3.checked && leather.checked){
      result.innerHTML = psofa3 + (pleather * sofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofaCorner.checked && flok.checked){
      result.innerHTML = psofaCorner + (pflok * sofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofaCorner.checked && shenil.checked){
      result.innerHTML = psofaCorner + (pshenil * sofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofaCorner.checked && velur.checked){
      result.innerHTML = psofaCorner + (pvelur * sofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofaCorner.checked && jacard.checked){
      result.innerHTML = psofaCorner + (pjacard * sofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofaCorner.checked && ecoLeather.checked){
      result.innerHTML = psofaCorner + (pecoLeather * sofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(sofaCorner.checked && leather.checked){
      result.innerHTML = psofaCorner + (pleather * sofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } 

    //cover
    else if(coverChair.checked && flok.checked){
      result.innerHTML = pcoverChair + (pflok * coverChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverChair.checked && shenil.checked){
      result.innerHTML = pcoverChair + (pshenil * coverChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverChair.checked && velur.checked){
      result.innerHTML = pcoverChair + (pvelur * coverChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverChair.checked && jacard.checked){
      result.innerHTML = pcoverChair + (pjacard * coverChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverChair.checked && ecoLeather.checked){
      result.innerHTML = pcoverChair + (pecoLeather * coverChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverChair.checked && leather.checked){
      result.innerHTML = pcoverChair + (pleather * coverChairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverArmchair.checked && flok.checked){
      result.innerHTML = pcoverArmchair + (pflok * coverArmchairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverArmchair.checked && velur.checked){
      result.innerHTML = pcoverArmchair + (pvelur * coverArmchairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverArmchair.checked && shenil.checked){
      result.innerHTML = pcoverArmchair + (pshenil * coverArmchairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverArmchair.checked && jacard.checked){
      result.innerHTML = pcoverArmchair + (pjacard * coverArmchairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverArmchair.checked && ecoLeather.checked){
      result.innerHTML = pcoverArmchair + (pecoLeather * coverArmchairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverArmchair.checked && leather.checked){
      result.innerHTML = pcoverArmchair + (pleather * coverArmchairLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa.checked && flok.checked){
      result.innerHTML = pcoverSofa + (pflok * coverSofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa.checked && shenil.checked){
      result.innerHTML = pcoverSofa + (pshenil * coverSofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa.checked && velur.checked){
      result.innerHTML = pcoverSofa + (pvelur * coverSofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa.checked && jacard.checked){
      result.innerHTML = pcoverSofa + (pjacard * coverSofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa.checked && ecoLeather.checked){
      result.innerHTML = pcoverSofa + (pecoLeather * coverSofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa.checked && leather.checked){
      result.innerHTML = pcoverSofa + (pleather * coverSofaLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa2.checked && flok.checked){
      result.innerHTML = pcoverSofa2 + (pflok * coverSofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa2.checked && shenil.checked){
      result.innerHTML = pcoverSofa2 + (pshenil * coverSofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa2.checked && velur.checked){
      result.innerHTML = pcoverSofa2 + (pvelur * coverSofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa2.checked && jacard.checked){
      result.innerHTML = pcoverSofa2 + (pjacard * coverSofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa2.checked && ecoLeather.checked){
      result.innerHTML = pcoverSofa2 + (pecoLeather * coverSofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa2.checked && leather.checked){
      result.innerHTML = pcoverSofa2 + (pleather * coverSofa2Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa3.checked && flok.checked){
      result.innerHTML = pcoverSofa3 + (pflok * coverSofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa3.checked && shenil.checked){
      result.innerHTML = pcoverSofa3 + (pshenil * coverSofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa3.checked && velur.checked){
      result.innerHTML = pcoverSofa3 + (pvelur * coverSofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa3.checked && jacard.checked){
      result.innerHTML = pcoverSofa3 + (pjacard * coverSofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa3.checked && ecoLeather.checked){
      result.innerHTML = pcoverSofa3 + (pecoLeather * coverSofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofa3.checked && leather.checked){
      result.innerHTML = pcoverSofa3 + (pleather * coverSofa3Length) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofaCorner.checked && flok.checked){
      result.innerHTML = pcoverSofaCorner + (pflok * coverSofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofaCorner.checked && shenil.checked){
      result.innerHTML = pcoverSofaCorner + (pshenil * coverSofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofaCorner.checked && velur.checked){
      result.innerHTML = pcoverSofaCorner + (pvelur * coverSofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofaCorner.checked && jacard.checked){
      result.innerHTML = pcoverSofaCorner + (pjacard * coverSofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofaCorner.checked && ecoLeather.checked){
      result.innerHTML = pcoverSofaCorner + (pecoLeather * coverSofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else if(coverSofaCorner.checked && leather.checked){
      result.innerHTML = pcoverSofaCorner + (pleather * coverSofaCornerLength) + ' руб.' + ' ' + 'Работа + материал';
    } else {
      result.innerHTML = 'Пожалуйста выбирите модель мебели и тип ткани';
    }
  }
}

calc();