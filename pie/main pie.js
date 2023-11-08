let myGraph3=document.getElementById('myGraph pie');
let trace9 ={};
trace9.type ="pie";
trace9.title ="112年 1~8月";
trace9.labels =[];
trace9.values =[];
trace9.hole=0.4;
trace9.domain ={
    row:0,
    column:0
};
for(let x=0; x<ratio1.length; x++){
    trace9.labels[x] =ratio1[x]['name'];
    trace9.values[x] =ratio1[x]['count'];
}

let trace10 ={};
trace10.type ="pie";
trace10.title ="111年";
trace10.labels =[];
trace10.values =[];
trace10.hole=0.4;
trace10.domain ={
    row:0,
    column:1
};
for(let x=0; x<ratio2.length; x++){
    trace10.labels[x] =ratio2[x]['name'];
    trace10.values[x] =ratio2[x]['count'];
}

let trace11 ={};
trace11.type ="pie";
trace11.title ="110年";
trace11.labels =[];
trace11.values =[];
trace11.hole=0.4;
trace11.domain ={
    row:1,
    column:0
};
for(let x=0; x<ratio3.length; x++){
    trace11.labels[x] =ratio3[x]['name'];
    trace11.values[x] =ratio3[x]['count'];
}

let trace12={};
trace12.type ="pie";
trace12.title ="109年";
trace12.labels =[];
trace12.values =[];
trace12.hole=0.4;
trace12.domain ={
    row:1,
    column:1
};
for(let x=0; x<ratio3.length; x++){
    trace12.labels[x] =ratio3[x]['name'];
    trace12.values[x] =ratio3[x]['count'];
}

let data3=[];
data3.push(trace9);
data3.push(trace10);
data3.push(trace11);
data3.push(trace12);

let layout3={
    margin:{
        t:60,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    },
    title:"台灣乳品業產品歷年結構比比較"
};
Plotly.newPlot(myGraph3,data3,layout3);
