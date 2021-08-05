var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

//for( let i=0; i<library.length; i++){
  //console.log(library[i].author);
  //console.log(library[i].title);
  //console.log(library[i].readingStatus);
//}

for( let i=0; i<library.length; i++){
  if(library[i].readingStatus){
   console.log(library[i].author + " by " + library[i].title + " Is Already Read" ) ;
  }
  else{
    console.log(library[i].author + " by " + library[i].title + " Yet To Be Read" ) ;
  }
}