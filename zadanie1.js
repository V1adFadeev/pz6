let arr = [false, false, true, false, true, false, false, false, true, false];
    let damaged = false; // Повреждений ещё не было 
 
    for (let i = 0, x = 0; i < arr.length; ++i) {
        // Безусловно сообщить о перемещении
        console.log(`танк переместился на позицию ${i+1}`);
        if (arr[i]) { // boolean не нужно второй раз сравнивать с true
            if (damaged) { // boolean не нужно второй раз сравнивать с true
                console.log('танк уничтожен');
                break;
            }
            else {
                damaged = true; 
                console.log('танк поврежден');
            }
        } 
    }
