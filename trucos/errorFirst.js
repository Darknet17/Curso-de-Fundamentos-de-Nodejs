function asincrona(callback) {
   setTimeout(()=>{
      try{
          let a = 3 + z;
          callback(null, a);
      } catch (e) {
          callback(e);
      }
   }, 1000);
}

asincrona((err, dato)=> {
    if (err){
        // console.error('Tenemos un error');
        // console.error(err);
        // return false;
        // throw err; // no va a funcionar en un try catch
    }
    console.log('Todo ha ido bien, mi data es', dato);
});
