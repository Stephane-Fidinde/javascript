const url = 'https://www.exampl.com';
const timeout = 10000; // temps d'attente maximal en millisecondes

const startTime = Date.now(); // temps de départ

fetch(url, {method: 'HEAD', mode: 'no-cors', cache: 'no-cache', redirect: 'follow', referrerPolicy: 'no-referrer'})
  .then(response => {
    const endTime = Date.now(); // temps d'arrivée
    const responseTime = endTime - startTime; // temps de réponse en millisecondes
    console.log(`Le site est en ligne. Temps de réponse : ${responseTime} ms.`);
  })
  .catch(error => {
    console.error(`Le site est hors ligne : ${error}`);
  });

setTimeout(() => {
  console.error(`La requête a dépassé le temps d'attente maximal de ${timeout} ms.`);
}, timeout);
