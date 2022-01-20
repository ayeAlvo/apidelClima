const fetch = require('node-fetch')

module.exports = {
  home: (req, res) => {
    fetch('https://ws.smn.gob.ar/map_items/weather')
    .then( response => response.json())
    .then( datas => {
      const arrayProvinces = datas.map( valor => valor.province);
      const setArrayProvinces = new Set(arrayProvinces); // crea un Conjunto No hay elementos repetidos en un array
      const laPlata = datas.find(data => data.name == 'La Plata');
      const cordoba = datas.find(data => data.name == 'Córdoba');
      // console.log(cordoba);
      // console.log(setArrayDeProvincias);
      res.render('home', { 
        data: datas,
        provinces: setArrayProvinces,
        laPlata,
        cordoba,
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
         nameProv: province, 
         province: provincieChoose,
         
       });
      }      
    })    
  }
}
