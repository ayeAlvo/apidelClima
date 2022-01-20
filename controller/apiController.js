const fetch = require('node-fetch')

module.exports = {
  home: (req, res) => {
    fetch('https://ws.smn.gob.ar/map_items/weather')
    .then( response => response.json())
    .then( datas => {
      const arrayProvinces = datas.map( valor => valor.province);
      const setArrayProvinces = new Set(arrayProvinces); // crea un Conjunto No hay elementos repetidos en un array
      
      const provincesHome = [];
      const laPlata = datas.find(data => data.name == 'La Plata');
      const cordoba = datas.find(data => data.name == 'Córdoba');
      const sanLuis = datas.find(data => data.name == 'San Luis');
      const mendoza = datas.find(data => data.name == 'Mendoza');
      const rosario = datas.find(data => data.name == 'Rosario');
      const caba = datas.find(data => data.name == 'Capital Federal');
      provincesHome.push(laPlata, cordoba, sanLuis, mendoza, rosario, caba);
      res.locals = {provinces: setArrayProvinces}
      // let str = 'hola como va';
      // console.log(str.includes('hol'));
      // console.log(provincesHome);
      // console.log(setArrayDeProvincias);
      res.render('home', { 
        data: datas,
        provinces: setArrayProvinces,
        provincesHome,
      })
    })
  },
  
  processData: (req, res) => {
    fetch('https://ws.smn.gob.ar/map_items/weather')
    .then( response => response.json())
    .then( datas => {
      const arrayProvinces = datas.map( valor => valor.province);
      const setArrayProvinces = new Set(arrayProvinces); // crea un Conjunto No hay elementos repetidos en un array
      res.locals = {provinces: setArrayProvinces}

      let province = req.body.valor;
      if(province){
       const provincieChoose = datas.filter(data => data.province == province);
       return res.render('filter', {
         data: datas,
         nameProv: province, 
         province: provincieChoose,
         
       });
      }      
    })    
  }
}
