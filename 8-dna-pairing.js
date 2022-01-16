// function pairElement(str) {
//     // pecah string menjadi array
//     const strArray = str.split('');
//     const result = [];
    
//     strArray.forEach((el) => {
//       if(el === 'G'){
//         result.push(['G', 'C']);
//         } 
//         else if(el === 'C') {
//             result.push(['C', 'G']);     
//         }
//         else if(el === 'A') {
//             result.push(['A', 'T']);     
//         }
//         else if(el === 'T') {
//             result.push(['T', 'A']);     
//         }
//     });
//     return result;
// }
  
// console.log(pairElement("GCG"));

//* CAra lain

function pairElement(str) {
    const pair = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'T'
    };
    return str.split('').map(el => [el, pair[el]]);
}
  
console.log(pairElement("GCG"));