// pake unique code pada huruf
function fearNotLetter(str) {
    const source = str.split('').map(angka => angka.charCodeAt(0));
    const compare = [];

    const hurufAwal = str.charCodeAt(0);
    const hurufAkhir = str.charCodeAt(str.length - 1);

    for(let i = hurufAwal; i <= hurufAkhir; i++){
        compare.push(i);
    }

    const result = compare.filter(el => !source.includes(el)).join();
    return result ? String.fromCharCode(result) : undefined;
  
}
  
console.log(fearNotLetter("abce"));