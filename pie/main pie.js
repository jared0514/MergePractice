let myGraph3=document.getElementById('myGraph pie');
let trace9 ={};
trace9.type ="pie";trace9.title ="機器學習概論";trace9.labels =[];trace9.values =[];trace9.domain ={row:0,column:0};for(letx=0; x<evaluation_ratio_1.length; x++){trace9.labels[x] =evaluation_ratio_1[x]['name'];trace9.values[x] =evaluation_ratio_1[x]['count'];}
