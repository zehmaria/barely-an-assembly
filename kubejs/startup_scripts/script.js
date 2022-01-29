// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)');

onEvent('item.registry', event => {
    //event.create('imcomplete_raw_basic_processor').displayName('Imcomplete Raw Basic Processor');
});

onEvent('block.registry', event => {
    //event.create('ashes').material('earth').displayName('Campfire Ashes').model('kubejs:machine/ashes').defaultCutout().box(0, 0, 0, 16, 1, 16, true);
    event.create('conveyor_basic_mimic').material('stone').displayName('Conveyor Belt').defaultCutout().box(0, 0, 0, 16, 3, 16, true);
    event.create('monolith_node').material('glass').displayName('Monolith Node').model('kubejs:machine/monolith').lightLevel(20);
});

onEvent('fluid.registry', event => {
    const Z = {
        // 'molten_manasteel' :            ['Molten Manasteel',            0x006afc],
    };

    Object.keys(Z).forEach(X => {
        event.create(X).textureThick(Z[X][1]).temperature(2000).luminosity(8).viscosity(8000).density(1500).displayName(Z[X][0]);
    });
});

const cIT = ['create:shadow_steel_casing', 'appliedenergistics2:dense_energy_cell', 'appliedenergistics2:creative_energy_cell', 'kubejs:monolith_node', 'appliedenergistics2:controller'];
const hIT = ['diregoo:gooblockterrain', 'diregoo:gooblock'];
const eIT = ['factoriores:coal_ore', 'factoriores:iron_ore', 'factoriores:gold_ore', 'factoriores:copper_ore', 'factoriores:lead_ore', 'factoriores:uranium_ore'];
onEvent('block.modification', event => {
    cIT.forEach(X => event.modify(X, block => { block.destroySpeed = 1000000; block.explosionResistance = 1000000; }));
    hIT.forEach(X => event.modify(X, block => { block.destroySpeed = 100; block.explosionResistance = 16; }));
    eIT.forEach(X => event.modify(X, block => { block.explosionResistance = 1000000; }));
});
