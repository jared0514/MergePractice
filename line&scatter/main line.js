let myGraph2= document.getElementById('myGraph line');

let trace5 = {};
trace5.mode = "lines+markers";
trace5.type = "scatter";
trace5.name ="世界總人口數";
trace5.marker={
    size: 10
};
trace5.x =[];
trace5.y =[];
trace5.text =[];

for(let i=0;i<set5.length;i++){
    trace5.x[i] = set5[i][0];
    trace5.y[i] = set5[i][1];
    trace5.text[i] =set5[i][2];
}

let trace6={};
trace6.mode ="lines+markers";
trace6.type ="scatter";
trace6.name ="15~64歲人口數";
trace6.x =[];
trace6.y =[];
trace6.text =[];

for(let i=0; i<set6.length; i++) {
    trace6.x[i] =set6[i][0];
    trace6.y[i] =set6[i][1];
    trace6.text[i] =set6[i][2];
}

let trace7 ={};
trace7.mode ="lines+markers";
trace7.type ="scatter";
trace7.name ="15歲以下人口數";
trace7.marker={
    size: 5
};
trace7.x =[];
trace7.y =[];
trace7.text =[];

for(let i=0; i<set7.length; i++) {
    trace7.x[i] =set7[i][0];
    trace7.y[i] =set7[i][1];
    trace7.text[i] =set7[i][2];
}

let trace8 ={};
trace8.mode ="lines+markers";
trace8.type ="scatter";
trace8.name ="64歲以上人口數";
trace8.marker={
    size: 5
};
trace8.x =[];
trace8.y =[];
trace8.text =[];

for(let i=0; i<set8.length; i++) {
    trace8.x[i] =set8[i][0];
    trace8.y[i] =set8[i][1];
    trace8.text[i] =set8[i][2];
}

let data2 =[];
data2.push(trace5);
data2.push(trace6);
data2.push(trace7);
data2.push(trace8);

let layout2 ={
    margin:{
        t:100
    },
    xaxis:{
        range:[2000,2023]
    },
    yaxis:{
        range:[0,10000000000]
    },
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false, false]],
                    label:'世界總人口數'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false, false]],
                    label: '15~64歲人口數'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true, false]],
                    label: '15歲以下人口數'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, false, true]],
                    label: '64歲以上人口數'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true, true]],
                    label: 'Display All'
                }
            ]

        }
    ],
    title:'世界人口數'
};
Plotly.newPlot(myGraph2, data2, layout2);
