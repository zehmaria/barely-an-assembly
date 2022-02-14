// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)');

onEvent('jei.hide.items', event => {
    console.info('**** Hiding ' + global.hiding.length + ' items! ***');
    global.hiding.forEach(i => event.hide(i));
    event.hide('/appliedenergistics2:facade/');
    event.hide('/ftblibrary:fluid_container/');
});
