onEvent('item.tags', event => {});

onEvent('recipes', event => {
    const _sc = 'create:shadow_steel_casing';
    const _dc = 'appliedenergistics2:dense_energy_cell';
    const _cc = 'appliedenergistics2:creative_energy_cell';
    const _mn = 'kubejs:monolith_node';
    const __c = 'appliedenergistics2:controller';
    const _co = 'appliedenergistics2:controller[state=online]';
    const __f = 'appliedenergistics2:fluix_block';
    const _ub = 'extendedcrafting:the_ultimate_block';
    const _qb = 'appliedenergistics2:quartz_block';

    function mono (t, r) { event.custom({ type: 'custommachinery:custom_machine', machine: 'custommachinery:monolith', time: t, requirements: r }); }
    function rstc (p, k) { return { type: 'custommachinery:structure', pattern: p, keys: k, jei: true }; }
    function rblo (m, a, p, w, f, b, x) { return {type:'custommachinery:block',mode:m,action:a,pos:p,whitelist:w,filter:f,block:b,amount:x}; }

    const mlrec = { type: 'custommachinery:block', mode: 'output', action: 'replace_destroy', pos: [-1,0,-1,1,0,1], whitelist:true,
                    filter: ['mekanism:block_charcoal'], block: 'minecraft:diamond_block' };
    const rtime = { type: 'custommachinery:time', times: [">=16000", "<=20000"] };
    const rkill = { type: 'custommachinery:entity', mode: 'output', amount: 20, radius: 20, action: 'kill', filter: [], whitelist: false };

    // NODES
    mono(100, [rstc([['m'], [' '], ['c'], ['a']],                                    { c: __c, a: air }),
               rblo('output', 'place', [0, 3, 0, 0, 3, 0], true, [], _mn, 1)]);
    mono(100, [rstc([['m'], [' '], ['c'], ['n'], ['a']],                             { c: __c, n: _mn, a: air }),
               rblo('output', 'place', [0, 4, 0, 0, 4, 0], true, [], _mn, 1)]);
    mono(100, [rstc([['m'], [' '], ['c'], ['n'], ['n'], ['a']],                      { c: __c, n: _mn, a: air }),
               rblo('output', 'place', [0, 5, 0, 0, 5, 0], true, [], _mn, 1)]);
    mono(100, [rstc([['m'], [' '], ['c'], ['n'], ['n'], ['n'], ['a']],               { c: __c, n: _mn, a: air }),
               rblo('output', 'place', [0, 6, 0, 0, 6, 0], true, [], _mn, 1)]);
    mono(1, [
        rstc([['m'], [' '], ['c'], ['n'], ['n'], ['n'], ['n']],                      { c: __c, n: _mn }),
        rblo('output', 'replace_destroy', [0, 2, 0, 0, 2, 0], true, [__c], __c, 1),
        rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], true, [_mn], __c, 1),
        rblo('output', 'replace_destroy', [0, 4, 0, 0, 4, 0], true, [_mn], __c, 1),
        rblo('input', 'destroy', [-1,  3,   0, -1,  3,   0], true, [_ub], _mn, 1),
        rblo('input', 'destroy', [ 1,  3,   0,  1,  3,   0], true, [_ub], _mn, 1),
        rblo('input', 'destroy', [ 0,  3,  -1,  0,  3,  -1], true, [_ub], _mn, 1),
        rblo('input', 'destroy', [ 0,  3,   1,  0,  3,   1], true, [_ub], _mn, 1)
    ]);

    event.remove({ output: 'appliedenergistics2:purified_fluix_crystal' });
    mono(100, [ // FLUIX
        rstc([['m'], [' '], ['o'], ['o'], ['o']], { n: _mn, o: _co }),
        rblo('input', 'replace_destroy', [-1,  3,   0, -1,  3,   0], true, [_qb], _mn, 1),
        rblo('input', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], true, [_qb], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], true, [_qb], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], true, [_qb], _mn, 1),
        rblo('output', 'replace_destroy', [-1,  3,   0, -1,  3,   0], false, [], __f, 1),
        rblo('output', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], false, [], __f, 1),
        rblo('output', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], false, [], __f, 1),
        rblo('output', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], false, [], __f, 1)
    ]);

    const _dt = 'diregoo:gooblockterrain';
    event.remove({ output: Dbp });
    mono(100, [ // POISONED GOO
        rstc([['m'], [' '], ['o'], ['o'], ['o']], { n: _mn, o: _co }),
        rblo('input', 'replace_destroy', [-1,  3,   0, -1,  3,   0], true, [_dt], _mn, 1),
        rblo('input', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], true, [_dt], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], true, [_dt], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], true, [_dt], _mn, 1),
        rblo('output', 'replace_destroy', [-1,  3,   0, -1,  3,   0], false, [], Dbp, 1),
        rblo('output', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], false, [], Dbp, 1),
        rblo('output', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], false, [], Dbp, 1),
        rblo('output', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], false, [], Dbp, 1)
    ]);
    const _da = 'diregoo:gooblock';
    mono(100, [ // POISONED GOO
        rstc([['m'], [' '], ['o'], ['o'], ['o']], { n: _mn, o: _co }),
        rblo('input', 'replace_destroy', [-1,  3,   0, -1,  3,   0], true, [_da], _mn, 1),
        rblo('input', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], true, [_da], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], true, [_da], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], true, [_da], _mn, 1),
        rblo('output', 'replace_destroy', [-1,  3,   0, -1,  3,   0], false, [], Dbp, 1),
        rblo('output', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], false, [], Dbp, 1),
        rblo('output', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], false, [], Dbp, 1),
        rblo('output', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], false, [], Dbp, 1)
    ]);
    event.remove({ output: Dt4 });
    mono(100, [ // GNT TIER 4
        rstc([['m'], [' '], ['o'], ['o'], ['o']], { n: _mn, o: _co }),
        rblo('input', 'replace_destroy', [-1,  3,   0, -1,  3,   0], true, [Dt3], _mn, 1),
        rblo('input', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], true, [Dt3], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], true, [Dt3], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], true, [Dt3], _mn, 1),
        rblo('output', 'replace_destroy', [-1,  3,   0, -1,  3,   0], false, [], Dt4, 1),
        rblo('output', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], false, [], Dt4, 1),
        rblo('output', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], false, [], Dt4, 1),
        rblo('output', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], false, [], Dt4, 1)
    ]);
    const Daf = 'diregoo:antigoofieldgen';
    const Dtb = 'diregoo:turretblock';
    event.remove({ output: Daf });
    mono(100, [ // Antigoo field
        rstc([['m'], [' '], ['o'], ['o'], ['o']], { n: _mn, o: _co }),
        rblo('input', 'replace_destroy', [-1,  3,   0, -1,  3,   0], true, [Dtb], _mn, 1),
        rblo('input', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], true, [Dtb], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], true, [Dtb], _mn, 1),
        rblo('input', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], true, [Dtb], _mn, 1),
        rblo('output', 'replace_destroy', [-1,  3,   0, -1,  3,   0], false, [], Daf, 1),
        rblo('output', 'replace_destroy', [ 1,  3,   0,  1,  3,   0], false, [], Daf, 1),
        rblo('output', 'replace_destroy', [ 0,  3,  -1,  0,  3,  -1], false, [], Daf, 1),
        rblo('output', 'replace_destroy', [ 0,  3,   1,  0,  3,   1], false, [], Daf, 1)
    ]);
});

const hIT = ['diregoo:gooblockterrain', 'diregoo:gooblock'];
onEvent('block.break', event => {
    hIT.forEach(X => { if (event.block.equals(X)) {  event.entity.attack(10); event.entity.playSound('minecraft:block.glass.hit'); } });
});

onEvent('block.right_click', event => {
    if (event.block.equals('create:shadow_steel_casing') &&
        (event.item.equals('create:wrench') || event.item.equals('pneumaticcraft:pneumatic_wrench'))) {
        event.cancel(); event.entity.playSound('minecraft:block.wood.hit');
    }
    if (event.block.hasTag('minecraft:beds')) {
        event.cancel(); event.entity.playSound('minecraft:block.wood.hit');
    }
});

onEvent('player.logged_in', event => {
    event.player.tell('Warning: This modpack is still under development. Configuration and recipes are currently not completely fine tuned and quest line is imcomplete.');
});

//PLACING
onEvent('block.right_click', event => {
    if (event.item.equals('appliedenergistics2:purified_fluix_crystal') && (event.item.getCount() === 8)) {
        event.block.offset(event.getFacing()).set('appliedenergistics2:fluix_block');
        event.item.setCount(0);
    }
    if (event.item.equals('appliedenergistics2:purified_certus_quartz_crystal') && (event.item.getCount() === 8)) {
        event.block.offset(event.getFacing()).set('appliedenergistics2:quartz_block');
        event.item.setCount(0);
    }
});
