const tm = require('task_manager');

function initCB(err) {
    if(err)
        console.error(err);
    else {
        console.log('good');
        setInterval(()=> {}, 500);
    }

        
}

function errCB(err) {
    console.error('ERr', err);
}

tm.init(initCB, errCB);
