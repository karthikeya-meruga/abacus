const root = document.getElementById('abacus')


const createColumn = () => {
    const column = document.createElement('div');
    column.className='column';
    root.appendChild(column)
    
    var row = [];
    function update(e, n){
        const id = parseInt(e.target.id);
        const start = (n===2) ? 0 : 2;
        while(n>0){
            const check = start+n-1;
            row[check].style.opacity = (check===id) ? '0' : '1'; 
            row[check].style.border = (check===id) ? 'none' : '0.5px solid black';
            n--;
        }
        const value1 = (row[0].style.opacity==="0") ? 5 : 0;
        var value2;
        for(i=2;i<7;i++){
            if(row[i].style.opacity === '0') {
                value2 = i-2;
                break;
            }
        }
    
        row[7].innerHTML = `${value1+value2}`;
    }
    
    function handleClick(event) {
        const id = parseInt(event.target.id)
        if (id<2)  update(event, 2); else  update(event, 5);
    }
    
    for (i=0;i<7;i++){//Making the beads
        if(i===0 || i===2){
            column.appendChild(document.createElement("hr"));
        }
    
    
    
        row[i] = document.createElement("div");
        //row[i].innerHTML = "working";
    
        column.appendChild(row[i]);
        row[i].id = `${i}`;
        row[i].className = "bead";
        row[i].style.opacity = (i===1 || i===2) ? "0" : "1";
        if(i===1 || i===2) row[i].style.border = "none";
        row[i].addEventListener('click', (event) => handleClick(event))
        //console.log(row[i].style.backgroundColor)
    }
    
    column.appendChild(document.createElement("hr"));
    row[7] = document.createElement("div");
    row[7].innerHTML = "0";
    row[7].className = "value";
    column.appendChild(row[7]);
    
    row[8] = document.createElement("div");
    row[8].className = "vertical";
    column.appendChild(row[8]);

    return column
}

const columns = [];

for(j=0;j<17;j++){
    columns.push(createColumn());
}

console.log(root)