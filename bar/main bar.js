let myGraph=document.getElementById('myGraph bar');
let trace1 ={};
trace1.type ="bar";
trace1.name ="1月"
trace1.x =[];
trace1.y =[];

for(let i=0;i<set1.length;i++){
    trace1.x[i]=set1[i]["name"]
    trace1.y[i]=set1[i]["count"]
}

let trace2 ={};
trace2.type ="bar";
trace2.name ="4月"
trace2.x =[];
trace2.y =[];

for(let i=0;i<set2.length;i++){
    trace2.x[i]=set2[i]["name"]
    trace2.y[i]=set2[i]["count"]
}
let trace3 ={};
trace3.type ="bar";
trace3.name ="7月"
trace3.x =[];
trace3.y =[];

for(let i=0;i<set3.length;i++){
    trace3.x[i]=set3[i]["name"]
    trace3.y[i]=set3[i]["count"]
}

let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout ={
    margin:{
        t:100
    },
    yaxis:{
        range:[100,160]
    },
    title:'住宅價格指數 1 4 7月份比較'
};
Plotly.newPlot(myGraph, data, layout);
