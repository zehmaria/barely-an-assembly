onEvent('recipes', event => {
    const _KFL = ['smelting', 'enriching', 'crushing', 'combining', 'purifying', 'injecting', 'infusing', 'sawing'];
    const _KOL = ['mekanism:energized_smelter', 'mekanism:enrichment_chamber', 'mekanism:crusher', 'mekanism:combiner', 'mekanism:purification_chamber', 'mekanism:chemical_injection_chamber', 'mekanism:metallurgic_infuser', 'mekanism:precision_sawmill'];

    const _sc = 'create:shadow_steel_casing';
    const _mn = 'kubejs:monolith_node';
    const __c = 'appliedenergistics2:controller';
    const _co = 'appliedenergistics2:controller[state=online]';
    const __f = 'appliedenergistics2:fluix_block';
    const _ub = 'kubejs:monolith_node';
    const __q = 'appliedenergistics2:purified_certus_quartz_crystal';
    const _qb = 'appliedenergistics2:quartz_block';

    function ct (t, r) { event.custom({ type: 'custommachinery:custom_machine', machine: 'custommachinery:monolith', time: t, requirements: r }); }
    function sd (t, r) { event.custom({ type: 'custommachinery:custom_machine', machine: 'custommachinery:monoside', time: t, requirements: r }); }
    function pl (t, r) { event.custom({ type: 'custommachinery:custom_machine', machine: 'custommachinery:monopillar', time: t, requirements: r }); }
    function rstc (p, k) { return { type: 'custommachinery:structure', pattern: p, keys: k, jei: true }; }
    function rblo (m, a, p, w, f, b, x) { return {type:'custommachinery:block',mode:m,action:a,pos:p,whitelist:w,filter:f,block:b,amount:x}; }
    function drop (m, a, r, w, i, o, x, c) {
        return { type: "custommachinery:drop", mode: m, action: a, radius: r, withelist: w, input: i, output: o, amount: x, chance: c };
    }
    const rtime = { type: 'custommachinery:time', times: [">=16000", "<=20000"] };

    event.remove({ output: 'immersiveengineering:wirecoil_steel' });
    ct(3, [ // HV WIRES
        rstc([['m'], [' '], ['c']], { c: __c }),
        drop('input', 'consume', 4, true, ['immersiveengineering:wirecoil_electrum'], null, 1, 1),
        drop('output', 'produce', 4, true, null, 'immersiveengineering:wirecoil_steel', 1, 1)
    ]);
    event.remove({ output: 'diregoo:antigoodust' });
    ct(3, [ // ANTIGOO DUST
        rstc([['m'], [' '], ['c']], { c: __c }),
        drop('input', 'consume', 4, true, ['diregoo:gooresidue'], null, 1, 1),
        drop('output', 'produce', 4, true, null, 'diregoo:antigoodust', 2, 1)
    ]);

    function _m (A, B) {
        event.remove({ output: A });
        ct(50, [
            rstc([['m'], [' '], ['c'], ['c'], ['c']], { c: _co }),
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
        sd(50, [
            rstc([[' ', 'm'], [' ', ' '], ['c', ' ']], { c: __c }),
            rblo('input', 'replace_destroy',  [0, 3, 0, 0, 3, 0], true, [B], _mn, 1),
            rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], false, [], A, 1)
        ]);
    }
    function _sf (A, B) {
        sd(50, [
            rstc([[' ', 'm'], [' ', ' '], ['c', ' '], ['c', ' '], ['c', ' '], ['c', ' ']], { c: _co }),
            rblo('input', 'replace_destroy',  [0, 3, 0, 0, 3, 0], true, [B], _mn, 1),
            rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], false, [], A, 1)
        ]);
    }
    function _cf (A, B) {
        ct(100, [
            rstc([['m'], [' '], ['c'], ['c'], ['c'], ['c']], { c: _co }),
            rblo('input', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, [B], _mn, 1),
            rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], false, [], A, 1)
        ]);
    }
    function s1 (A, B) { event.remove({ output: A }); _s(A, B); }
    function s1A (A, B) { event.remove({ output: A }); ['north', 'south', 'west', 'east'].forEach(X => _s(A+'[facing='+X+']', B+'[facing='+X+']')); }
    function s1D (A, B) { event.remove({ output: A }); _s(A+'[facing=down]', B); }
    function sf1 (A, B) { event.remove({ output: A }); _sf(A, B); }
    function sf1A (A, B) { event.remove({ output: A }); ['north', 'south', 'west', 'east'].forEach(X => _sf(A+'[facing='+X+']', B+'[facing='+X+']')); }
    function cf1 (A, B) { event.remove({ output: A }); _cf(A, B); }
    function cf1A (A, B) { event.remove({ output: A }); ['north', 'south', 'west', 'east'].forEach(X => _cf(A+'[facing='+X+']', B+'[facing='+X+']')); }

    s1D('immersiveengineering:connector_hv', 'immersiveengineering:connector_mv');
    s1D('immersiveengineering:connector_hv_relay', 'immersiveengineering:connector_mv_relay');
    s1('create:haunted_bell', 'create:peculiar_bell');
    s1(Dt2, Dt1);
    sf1('immersiveengineering:coil_hv', 'immersiveengineering:coil_mv');
    sf1('immersiveengineering:capacitor_hv', 'immersiveengineering:capacitor_mv');
    sf1(__f, _qb);
    sf1(Dt3, Dt2);

    ['induction_cell', 'induction_provider', 'pressurized_tube', 'thermodynamic_conductor'].forEach(X => {
        s1('mekanism:advanced_' + X, 'mekanism:basic_' + X);
        cf1('mekanism:ultimate_' + X, 'mekanism:advanced_' + X);
    });
    ['bin', 'chemical_tank'].forEach(X => {
        s1A('mekanism:advanced_' + X, 'mekanism:basic_' + X);
        cf1A('mekanism:ultimate_' + X, 'mekanism:advanced_' + X);
    });

    for (var i = 0; i < _KFL.length; i++) { s1A('mekanism:basic_' + _KFL[i] + '_factory', _KOL[i]); }
    _KFL.forEach(X => { cf1A('mekanism:ultimate_' + X + '_factory', 'mekanism:advanced_' + X + '_factory'); });

    // END GOAL
    ct(1, [
        rstc([['m'], [' '], ['c'], ['c'], ['c'], ['c'], ['c']],                { c: _co }),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], true, [__c], 'mekanism:qio_drive_array', 1),
        rblo('input', 'check', [ 0,  11,  0,  0, 11,  0], true, ['mekanismgenerators:fusion_reactor_controller{cache:{burning:true}}'], _mn, 1),
        rblo('output', 'destroy', [-2, 7, -2, 2, 11, 2], false, [], _mn, 125)
    ]);

    // RESET/PROTECT
    const _ML = [
        'minecraft:zombie', 'minecraft:skeleton', 'minecraft:husk', 'minecraft:drowned', 'minecraft:wither_skeleton', 'minecraft:creeper', 'minecraft:stray', 'minecraft:spider', 'minecraft:pillager', 'minecraft:piglin_brute', 'minecraft:vindicator', 'minecraft:ghast', 'minecraft:ravager',
        'minecraft:cave_spider', 'minecraft:blaze', 'minecraft:enderman', 'minecraft:endermite', 'minecraft:evoker', 'minecraft:magma_cube', 'minecraft:phantom', 'minecraft:piglin', 'minecraft:silverfish', 'minecraft:slime', 'minecraft:vex', 'minecraft:witch', 'minecraft:zombie_villager',
        'hordes:zombie_player', 'hordes:drowned_player',
        'minecraft:illusioner', 'majruszs_difficulty:giant', 'majruszs_difficulty:pillager_wolf', 'majruszs_difficulty:elite_skeleton', 'majruszs_difficulty:sky_keeper', 'majruszs_difficulty:creeperling'
    ];

    /*
    sd(1, [
        rstc([[' ', 'm'], [' ', ' '], [' ', ' '], ['u', ' '], ['u', ' '], ['u', ' '], ['u', ' ']], { u: _ub }),
        { type: 'custommachinery:entity', mode: 'input', amount: 1, radius: 11, action: 'kill', filter: _ML, whitelist: true }
    ]);*/
    ct(20, [
        rstc([['m'], [' '], [' '], ['u'], ['u'], ['u'], ['u']], { u: _ub }),
        { type: 'custommachinery:entity', mode: 'input', amount: 1, radius: 11, action: 'kill', filter: _ML, whitelist: true }
    ]);
    ct(1, [
        rstc([['m'], [' '], ['c'], ['c']], { c: __c }),
        rblo('output', 'replace_destroy', [0, 3, 0, 0, 3, 0], true, [__c], _ub, 1),
        rblo('output', 'replace_destroy', [0, 4, 0, 0, 4, 0], false, [], _ub, 1),
        rblo('output', 'replace_destroy', [0, 5, 0, 0, 5, 0], false, [], _ub, 1),
        rblo('output', 'replace_destroy', [0, 6, 0, 0, 6, 0], false, [], _ub, 1),
        { type: 'custommachinery:entity', mode: 'input', amount: 1, radius: 11, action: 'kill', filter: _ML, whitelist: true }
    ]);
});
