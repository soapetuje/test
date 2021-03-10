document.addEventListener('DOMContentLoaded', function() {
    const table = document.createElement('table')
    for (var i = 0; i < 100; i++) {
        const tr = document.createElement('tr');
        for (var j = 0; j < 100; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
        };
        table.appendChild(tr);
    };
    const head = document.querySelector('#head');
    head.appendChild(table);
    
});