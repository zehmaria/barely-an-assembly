onEvent('recipes', event => {
    const _KFL = ['smelting', 'enriching', 'crushing', 'combining', 'purifying', 'injecting', 'infusing', 'sawing'];
    const _KOL = ['mekanism:energized_smelter', 'mekanism:enrichment_chamber', 'mekanism:crusher', 'mekanism:combiner', 'mekanism:purification_chamber', 'mekanism:chemical_injection_chamber', 'mekanism:metallurgic_infuser', 'mekanism:precision_sawmill'];

    const _sc = 'create:shadow_steel_casing';
    const _dc = 'appliedenergistics2:dense_energy_cell';
    const _cc = 'appliedenergistics2:creative_energy_cell';
    const _mn = 'kubejs:monolith_node';
    const __c = 'appliedenergistics2:controller';
    const _co = 'appliedenergistics2:controller[state=online]';
    const __f = 'appliedenergistics2:fluix_block';
    const _ub = 'extendedcrafting:the_ultimate_block';
    const __q = 'appliedenergistics2:purified_certus_quartz_crystal';
    const _qb = 'appliedenergistics2:quartz_block';

    function mono (t, r) { event.custom({ type: 'custommachinery:custom_machine', machine: 'custommachinery:monolith', time: t, requirements: r }); }
    function rstc (p, k) { return { type: 'custommachinery:structure', pattern: p, keys: k, jei: true }; }
    function rblo (m, a, p, w, f, b, x) { return {type:'custommachinery:block',mode:m,action:a,pos:p,whitelist:w,filter:f,block:b,amount:x}; }
    function drop (m, a, r, w, i, o, x, c) {
        return { type: "custommachinery:drop", mode: m, action: a, radius: r, withelist: w, input: i, output: o, amount: x, chance: c };
    }
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

    mono(1, [ // MONOLITH TIER 1
        rstc([['m'], [' '], ['c'], ['n'], ['n'], ['n'], ['n']],                      { c: __c, n: _mn }),
        rblo('output', 'replace_destroy', [0, 2, 0, 0, 2, 0], true, [__c], __c, 1),
        rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], true, [_mn], __c, 1),
        rblo('output', 'replace_destroy', [0, 4, 0, 0, 4, 0], true, [_mn], __c, 1),
        rblo('input', 'destroy', [-1,  3, -1,  1,  3,  1], true, [_ub], _mn, 4)
    ]);

    mono(1, [ // MONOLITH TIER 2
        rstc([['m'], [' '], ['o'], ['o'], ['o'], ['n'], ['n']],                      { o: _co, n: _mn }),
        rblo('output', 'replace_destroy', [0, 1, 0, 0, 1, 0], false, [], _cc, 1),
        rblo('output', 'replace_destroy', [0, 5, 0, 0, 5, 0], true, [_mn], __c, 1),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, [_mn], __c, 1),
        rblo('input', 'destroy', [-1,  3, -1,  1,  3,  1], true, [_ub], _mn, 8)
    ]);

    event.remove({ output: 'immersiveengineering:wirecoil_steel' });
    mono(100, [ // HV WIRES
        rstc([['m'], [' '], ['o'], ['o'], ['o']], { o: _co }),
        drop('input', 'consume', 4, true, ['immersiveengineering:wirecoil_electrum'], null, 64, 1),
        drop('output', 'produce', 4, true, null, 'immersiveengineering:wirecoil_steel', 64, 1)
    ]);

    function _m (A, B) {
        event.remove({ output: A });
        mono(50, [
            rstc([['m'], [' '], ['o'], ['o'], ['o']], { o: _co }),
            rblo('input',  'replace_destroy', [-1,  3,  0, -1,  3,  0], true, [B], _mn, 1),
            rblo('input',  'replace_destroy', [ 1,  3,  0,  1,  3,  0], true, [B], _mn, 1),
            rblo('input',  'replace_destroy', [ 0,  3, -1,  0,  3, -1], true, [B], _mn, 1),
            rblo('input',  'replace_destroy', [ 0,  3,  1,  0,  3,  1], true, [B], _mn, 1),
            rblo('output', 'replace_destroy', [-1,  3,  0, -1,  3,  0], false, [], A, 1),
            rblo('output', 'replace_destroy', [ 1,  3,  0,  1,  3,  0], false, [], A, 1),
            rblo('output', 'replace_destroy', [ 0,  3, -1,  0,  3, -1], false, [], A, 1),
            rblo('output', 'replace_destroy', [ 0,  3,  1,  0,  3,  1], false, [], A, 1)
        ]);
    }

    function _s (A, B) {
        mono(50, [
            rstc([[' ', 'm'], [' ', 'c'], ['o', 'c'], ['o', ' '], ['o', ' ']], { c: _sc, o: _co }),
            rblo('input', 'replace_destroy',  [0, 3, 0, 0, 3, 0], true, [B], _mn, 1),
            rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], false, [], A, 1)
        ]);
    }
    function _sf (A, B) {
        mono(50, [
            rstc([[' ', 'm'], [' ', 'c'], ['o', 'c'], ['o', ' '], ['o', ' '], ['o', ' ']], { c: _sc, o: _co }),
            rblo('input', 'replace_destroy',  [0, 3, 0, 0, 3, 0], true, [B], _mn, 1),
            rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], false, [], A, 1)
        ]);
    }
    function s1 (A, B) { event.remove({ output: A }); _s(A, B); }
    function s1A (A, B) { event.remove({ output: A }); ['north', 'south', 'west', 'east'].forEach(X => _s(A+'[facing='+X+']', B+'[facing='+X+']')); }
    function s1D (A, B) { event.remove({ output: A }); _s(A+'[facing=down]', B); }
    function sf1 (A, B) { event.remove({ output: A }); _sf(A, B); }
    function sf1A (A, B) { event.remove({ output: A }); ['north', 'south', 'west', 'east'].forEach(X => _sf(A+'[facing='+X+']', B+'[facing='+X+']')); }

    s1(__f, _qb);
    s1(Dbp, 'diregoo:gooblockterrain');
    s1(Dbp, 'diregoo:gooblock');
    s1(Dt4, Dt3);
    s1('diregoo:antigoofieldgen', 'diregoo:turretblock');
    s1('immersiveengineering:coil_hv', 'immersiveengineering:coil_mv');
    s1('immersiveengineering:capacitor_hv', 'immersiveengineering:capacitor_mv');
    s1D('immersiveengineering:connector_hv', 'immersiveengineering:connector_mv');
    s1D('immersiveengineering:connector_hv_relay', 'immersiveengineering:connector_mv_relay');

    ['induction_cell', 'induction_provider', 'pressurized_tube', 'thermodynamic_conductor'].forEach(X => {
        s1('mekanism:advanced_' + X, 'mekanism:basic_' + X);
        sf1('mekanism:ultimate_' + X, 'mekanism:advanced_' + X);
    });
    ['bin', 'chemical_tank'].forEach(X => {
        s1A('mekanism:advanced_' + X, 'mekanism:basic_' + X);
        sf1A('mekanism:ultimate_' + X, 'mekanism:advanced_' + X);
    });

    for (var i = 0; i < _KFL.length; i++) { s1A('mekanism:basic_' + _KFL[i] + '_factory', _KOL[i]); }
    _KFL.forEach(X => { sf1A('mekanism:ultimate_' + X + '_factory', 'mekanism:advanced_' + X + '_factory'); });

    // CREATIVE ITEMS
    mono(1, [
        rstc([['m'], [' '], ['o'], ['o'], ['o'], ['o']],                      { o: _co }),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, ['mekanism:ultimate_induction_cell'], 'immersiveengineering:capacitor_creative', 1),
        rblo('input', 'destroy', [-1,  3, -1,  1,  3,  1], true, [_ub], _mn, 8)
    ]);
    mono(1, [
        rstc([['m'], [' '], ['o'], ['o'], ['o'], ['o']],                      { o: _co }),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, [Kse], 'pneumaticcraft:creative_compressed_iron_block', 1),
        rblo('input', 'destroy', [-1,  3, -1,  1,  3,  1], true, [_ub], _mn, 8)
    ]);
    mono(1, [
        rstc([['m'], [' '], ['o'], ['o'], ['o'], ['o']],                      { o: _co }),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, [Crc], 'pneumaticcraft:creative_compressor', 1),
        rblo('input', 'destroy', [-1,  3, -1,  1,  3,  1], true, [_ub], _mn, 8)
    ]);
    mono(1, [
        rstc([['m'], [' '], ['o'], ['o'], ['o'], ['o']],                      { o: _co }),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, [Cem], 'create:creative_motor', 1),
        rblo('input', 'destroy', [-1,  3, -1,  1,  3,  1], true, [_ub], _mn, 8)
    ]);

    // END GOAL
    mono(1, [
        rstc([['m'], [' '], ['o'], ['o'], ['o'], ['o'], ['o']],                      { o: _co }),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, [__c], 'mekanism:qio_drive_array', 1),
        rblo('input', 'destroy', [-1,  3, -1,  1,  4,  1], true, [_ub], _mn, 16)
    ]);

    // RESET/PROTECT
    const _ML = [
        'minecraft:zombie', 'minecraft:skeleton', 'minecraft:husk', 'minecraft:drowned', 'minecraft:wither', 'minecraft:creeper', 'minecraft:stray', 'minecraft:spider', 'minecraft:pillager', 'minecraft:piglin_brute', 'minecraft:vindicator', 'minecraft:ghast', 'minecraft:ravager',
        'minecraft:cave_spider', 'minecraft:blaze', 'minecraft:enderman', 'minecraft:endermite', 'minecraft:evoker', 'minecraft:magma_cube', 'minecraft:phantom', 'minecraft:piglin', 'minecraft:silverfish', 'minecraft:slime', 'minecraft:vex', 'minecraft:witch', 'minecraft:zombie_villager',
        'hordes:zombie_player', 'hordes:drowned_player'
    ];

    mono(1, [
        rstc([[' ', 'm'], [' ', ' '], [' ', ' '], ['u', ' '], ['u', ' '], ['u', ' '], ['u', ' ']], { u: _ub }),
        { type: 'custommachinery:entity', mode: 'input', amount: 1, radius: 16, action: 'kill', filter: _ML, whitelist: true }
    ]);
    mono(1, [
        rstc([['m'], [' '], ['c'], ['u'], ['u'], ['u'], ['u']],                      { c: __c, u: _ub }),
        { type: 'custommachinery:entity', mode: 'input', amount: 5, radius: 16, action: 'kill', filter: _ML, whitelist: true }
    ]);
    mono(1, [
        rstc([['m'], [' '], ['c'], ['c'], ['c']],                                    { c: __c, u: _ub }),
        rblo('output', 'replace_destroy', [0, 1, 0, 0, 1, 0], false, [], _dc, 1),
        rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], true, [__c], _ub, 1),
        rblo('output', 'replace_destroy', [0, 4, 0, 0, 4, 0], true, [__c], _ub, 1),
        rblo('output', 'replace_destroy', [0, 5, 0, 0, 5, 0], false, [], _ub, 1),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], false, [], _ub, 1),
        { type: 'custommachinery:entity', mode: 'input', amount: 10, radius: 16, action: 'kill', filter: _ML, whitelist: true }
    ]);
});
