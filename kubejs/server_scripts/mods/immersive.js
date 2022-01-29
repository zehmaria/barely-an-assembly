onEvent('fluid.tags', event => {
    event.removeAll('minecraft:water'); event.add('minecraft:water', ['minecraft:water', 'minecraft:flowing_water']);
});

onEvent('recipes', event => {
    const _ws = '#forge:wires/steel';
    const _wl = '#forge:wires/lead';
    const _gd = 'mekanism:gauge_dropper';
    const __i = 'immersiveengineering:sheetmetal_iron';
    const _ts = 'immersiveengineering:treated_scaffold';

    addShaped(event, [
        ['kubejs:conveyor_basic_mimic',                 [[Mlt, Mlt], [tPs, tPs]]],

        ['4x immersiveengineering:wirecoil_steel',      [[air, _ws, air], [_wl, stk, _wl], [air, _ws, air]]],
        ['4x immersiveengineering:wirecoil_redstone',   [[air, _wl, air], [rst, stk, rst], [air, _wl, air]]],
        ['immersiveengineering:survey_tools',           [[Mbk, _gd, Ihm], [Ihf, Ihf, Ihf]]],

        ['immersiveengineering:drillhead_iron',         [[tPi, Ccw, tPi], [tPi, tPi, tPi], [air, tPi, air]]],
        ['immersiveengineering:drillhead_steel',        [[tPs, Ccw, tPs], [tPs, tPs, tPs], [air, tPs, air]]],
        ['immersiveengineering:shield',                 [[tPs, Itw, tPs], [tPs, tPs, tPs], [tPs, Itw, tPs]]],
        ['immersiveengineering:powerpack',              [[Iw1, Ik1, Iw1], [Mlt, Ktb, Mlt]]],

        ['4x immersiveengineering:concrete',            [[tSG, cly, tSG], [grv, ltx, grv], [tSG, cly, tSG]]],
        ['4x immersivepetroleum:asphalt',               [[tSG, btm, tSG], [grv, ltx, grv], [tSG, btm, tSG]]],

        ['immersivepetroleum:projector',                [[Khd, air, air], [tPs, ltx, air], [air, tPs, Itw]]],

        ['immersiveengineering:blastfurnace_preheater', [[__i, __i, __i], [__i, air, __i], [__i, Kse, __i]]],

        ['16x immersiveengineering:empty_casing',       [[tPc, air, tPc], [tPc, air, tPc], [air, tPc, air]]],

        [Item.of('immersiveengineering:blueprint', '{blueprint:"bullet"}'),        [[Mpp, Mpp], [Iec, Iec]]],
        [Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'), [[Mpp, Mpp], [Ic3, Ic3]]],
        ['immersiveengineering:steel_scaffolding_wooden_top',                      [[tPs, _ts, tPs], [air, tRs, air], [tRs, air, tRs]]],
    ]);

    event.replaceInput({}, 'immersiveengineering:craftingtable', 'minecraft:crafting_table');
    rm2(event, 'immersiveengineering:component_', ['iron', 'steel'], ['minecraft:crafting_shaped']);

    bpIE(event, 'create:electron_tube',
         ['#forge:glass', '#forge:plates/electrum', ['#forge:wires/copper', 2], 'minecraft:redstone'], 'components');

    bpIE(event, '8x immersiveengineering:casull', [[Iec, 8], tDl, tPi], 'bullet');
    bpIE(event, '8x immersiveengineering:armor_piercing', [[Iec, 8], Mgp, tPs, tPl], 'bullet');
    bpIE(event, '8x immersiveengineering:homing', [[Iec, 8], Mgp, _K1, 'minecraft:ender_eye'], 'specialBullet');
    bpIE(event, '8x immersiveengineering:he', [[Iec, 8], Mgp, ['minecraft:tnt', 8]], 'bullet');

    bpIE(event, '8x immersiveengineering:buckshot', [[Ies, 8], Mgp, [tDs, 2]], 'specialBullet');
    bpIE(event, '8x immersiveengineering:wolfpack', [[Ies, 8], ['immersiveengineering:homing', 8], Mgp], 'specialBullet');
    bpIE(event, '8x immersiveengineering:dragons_breath', [[Ies, 8], Mgp, tDf], 'specialBullet');
    bpIE(event, Item.of('8x immersiveengineering:flare', '{flareColour:2925323}'), [[Ies, 8], Mgp, tDf, '#forge:dyes/green'], 'specialBullet');
    bpIE(event, Item.of('8x immersiveengineering:flare', '{flareColour:13381126}'), [[Ies, 8], Mgp, tDf, '#forge:dyes/red'], 'specialBullet');
    bpIE(event, Item.of('8x immersiveengineering:flare', '{flareColour:16777090}'), [[Ies, 8], Mgp, tDf, '#forge:dyes/yellow'], 'specialBullet');

    event.remove({ id: 'immersivepetroleum:mixer/napalm' });
    event.custom({
        type: 'immersiveengineering:mixer',
        inputs: [{ count: 3, base_ingredient: { tag: 'forge:dusts/fluorite' } }],
        result: { fluid: 'immersivepetroleum:napalm', amount: 500 },
        fluid: { tag: 'forge:gasoline', amount: 500 },
        energy: 3200
    });

    event.remove({ id: 'immersiveengineering:crafting/treated_wood_horizontal' });
    event.custom({
        type: 'create:filling',
        ingredients: [
            { tag: 'minecraft:planks' },
            { fluid: 'immersiveengineering:creosote', nbt: {}, amount: 500 }
        ],
        results: [{ item: 'immersiveengineering:treated_wood_horizontal' }]
    });

    // REMOVE BIODIESEL
    event.remove({ id: 'immersiveengineering:crafting/blueprint_bannerpatterns' });
    event.remove({ type: 'immersiveengineering:fermenter' });
    event.remove({ type: 'immersiveengineering:bottling_machine' });
    ['refinery/biodiesel', 'mixer/herbicide', 'squeezer/melon_seeds', 'squeezer/beetroot_seeds', 'squeezer/pumpkin_seeds', 'squeezer/hemp_seeds', 'squeezer/wheat_seeds'].forEach(X => event.remove({ id: 'immersiveengineering:' + X }));

    // REMOVE BY ID
    ['cokebrick', 'blastbrick_reinforced', 'hempcrete', 'croncrete_leaded', 'insulating_glass'].forEach(X => event.remove({ id: 'immersiveengineering:crafting/' + X + '_from_slab' }));
});

/*
  onEvent('recipes', event => {
    const hvB = 'immersiveengineering:capacitor_hv';
    const lvC = 'immersiveengineering:coil_lv';
    const lvL = 'immersiveengineering:connector_lv';
    const Krg = 'mekanism:ingot_refined_glowstone';
    const Dgl = 'druidcraft:growth_lamp';
    const Idy = 'immersiveengineering:dynamo';

    addShaped(event, [
        ['immersiveengineering:furnace_heater',    [[_y1, tPc, _y1], [_P1, lvC, _B1], [_y1, _K2, _y1]]],
        ['immersiveengineering:cloche',            [[Bmg, _I4, Bmg], [Bmg, Dgl, Bmg], [Itw, _K4, Itw]]],
        ['immersiveengineering:tesla_coil',        [[_P1, _B4, _B1], [air, lvC, air], [hvB, _K4, hvB]]],
        ['immersiveengineering:charging_station',  [[_P1, lvL, _B1], [Bmg, Bmg, Bmg], [Itw, _K4, Itw]]],
        ['immersiveengineering:turntable',         [[_P1, Itw, _B1], [_K2, lvC, _K2]]],
        ['immersiveengineering:item_batcher',      [[Itw, _K2, Itw], [_P1, _I2, _B1], [Itw, _I5, Itw]]],
        ['immersiveengineering:radiator',          [[_y2, _P1, _y2], [tPc, Mhs, tPc], [_y2, _P1, _y2]]],
        ['immersiveengineering:generator',         [[_y2, _P1, _y2], [tPe, Idy, tPe], [_y2, _P1, _y2]]],
        ['immersiveengineering:dynamo',            [[_K2, lvC, _K2], [_y2, _P1, _y2]]],

        ['immersiveengineering:capacitor_lv',      [[_y1, _y1, _y1], [Krg, tBl, _E3], [Itw, _K2, Itw]]],
        ['immersiveengineering:capacitor_mv',      [[_y2, _y2, _y2], [Krg, tBl, _E3], [Itw, _K3, Itw]]],
        ['immersiveengineering:capacitor_hv',      [[_y3, _y3, _y3], [Krg, tBl, _E3], [Itw, _K4, Itw]]],

        ['immersiveengineering:rs_engineering',    [[_y1, _K1, _y1], [_K1, tPc, _K1], [_y1, _K1, _y1]]],
        ['immersiveengineering:light_engineering', [[_y1, _I2, _y1], [tPc, _K2, _P1], [_y1, _I2, _y1]]],
        ['immersiveengineering:heavy_engineering', [[_y2, _I3, _y2], [tPe, _K3, _P1], [_y2, _I3, _y2]]]
        ]);

});
*/
