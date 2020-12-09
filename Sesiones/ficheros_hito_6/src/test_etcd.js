/*
    Fichero para hacer un pequeño ejemplo de uso de etcd, relativo al hito 6.
*/

const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {
    const clave = await client.get('clave').string();
    
    console.log('La clave introducida es: ', clave);
  
    await client.delete().all();

})();
