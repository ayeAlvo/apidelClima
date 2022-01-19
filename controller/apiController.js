const fetch = require('node-fetch')

module.exports = {
  home: (req, res) => {
    fetch('https://ws.smn.gob.ar/map_items/weather')
    .then( response => response.json())
    .then( datas => {
      let arrayProvinces = datas.map( valor => valor.province);
      let setArrayProvinces = new Set(arrayProvinces); // crea un Conjunto No hay elementos repetidos en un array
      // console.log(data);
      // console.log(setArrayDeProvincias);
      res.render('home', { 
        data: datas,
        provinces: setArrayProvinces,
      })
    })
  },
  
  processData: (req, res) => {
    fetch('https://ws.smn.gob.ar/map_items/weather')
    .then( response => response.json())
    .then( datas => {
      let province = req.body.valor;
      if(province){
       const provincieChoose = datas.filter(data => data.province == province);
       return res.render('filter', {
         data: datas,
         province: provincieChoose,
         nameProv: province 
       });
      }      
    })    
  }
}
