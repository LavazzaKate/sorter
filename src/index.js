class Sorter {
  constructor() {
    this.sorter=[];
    this.comporator =function(a, b){
      return a-b;
    };
      }

  add(element) {
  this.sorter.push(element);
     }

  at(index) {
   return this.sorter[index];
  }

  get length() {
    return this.sorter.length;
  }

  toArray() {
    return this.sorter;
  }

  sort(indices) {
     var arrSorter=[];
     indices.sort();
     for(var i=0; i<indices.length; i++) {
       arrSorter.push(this.sorter[indices[i]]);
     }
      arrSorter.sort(this.comporator);

      for(var i=0; i<indices.length; i++) {
        this.sorter[indices[i]]=arrSorter[i];

      }
   
return this.sorter;
   
  }

  
   
  setComparator(compareFunction) {
     this.comporator = compareFunction; 
  }

}
module.exports = Sorter;
