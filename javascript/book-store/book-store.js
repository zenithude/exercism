const prices = {
    '1': 800,
    '2': 1520,
    '3': 2160,
    '4': 2560,
    '5': 3000
}

export const cost = (books) => {
    if (new Set(books).size == books.length) {
        return prices[books.length + ""] ? prices[books.length + ""] : 0;
    }        
    books = books.sort(function(a, b) {return a - b;}).reverse();
    let sets = [];
    while (books.length) {
        let item = books.pop();
        if (!sets.length || sets.every((val) => val.has(item))) {
            sets.push(new Set());
            books.push(item);
        } else {
            sets[shortest(sets,item)].add(item);
        }
    }
    if (calcPrice(sets) > calcPrice(improve(copySets(sets)))) {
        sets=improve(sets);
    }
    return calcPrice(sets);
};
  
function copySets(sets){
    let arr = [];
    sets.forEach((el,index)=>{
        arr.push(new Set());
        Array.from(el).forEach(item =>{
            arr[index].add(item);
        })
    });
    return arr;
}
  
function improve(sets){
    let bestSet = sets;
    bestSet.forEach(el=>{
        Array.from(el).forEach(item => bestSet.forEach(element => {
            if(el != element && !element.has(item)){
                element.add(item);
                el.delete(item);
                }
            })
        )
    if(calcPrice(bestSet) > calcPrice(sets)) 
        bestSet=sets;
    })
    return bestSet;
}

function calcPrice(sets){
    let sum = 0;
    sets.forEach(el => sum += prices[el.size+""]);
    return sum;
}

function shortest(sets,item){
    let i, mLength = Number. MAX_SAFE_INTEGER;
    sets.forEach((el, index)=>{
        if (!el.has(item) && el.size<mLength){ 
            i=index;
            mLength = el.size;
        }
    });
    return i;
}