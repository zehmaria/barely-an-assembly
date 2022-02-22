onEvent('recipes', event => {
    const Rdr = 'minecraft:detector_rail';
    const _hr = 'mekanism:hdpe_rod';
    const __R = 'minecraft:rail';
    const __P = 'minecraft:powered_rail';
    const _mR = 'moreminecarts:maglev_rail';
    const _mP = 'moreminecarts:maglev_powered_rail';
    const _lp = 'moreminecarts:levitation_powder';
    const __g = 'mekanism:crystal_gold';
    const __f = 'create:andesite_funnel';

    addShaped(event, [
        ['moreminecarts:high_speed_upgrade',         [[Khd, _lp, _lp], [_lp, _lp, tPu]]],
        ['moreminecarts:chunk_loader',               [[Khd, Keo, Khd], [Keo, 'immersiveengineering:coil_mv', Keo], [Khd, Plc, Khd]]],
        ['moreminecarts:coupler',                    [[tPi, ltx, tPi]]],

        ['4x moreminecarts:wooden_rail',             [[Its, air, Its], [Its, Its, Its], [Its, air, Its]]],
        ['8x moreminecarts:maglev_rail',             [[_hr, _lp, _hr], [_hr, __R, _hr], [_hr, _lp, _hr]]],
        ['8x moreminecarts:maglev_powered_rail',     [[_hr, _lp, _hr], [_hr, __P, _hr], [_hr, _lp, _hr]]],
        ['8x moreminecarts:lightspeed_rail',         [[__g, Apf, __g], [cld, _mR, cld], [__g, HOP, __g]]],
        ['8x moreminecarts:lightspeed_powered_rail', [[__g, Apf, __g], [cld, _mP, cld], [__g, HOP, __g]]],

        ['8x moreminecarts:locking_rail',            [[_I3], [__R]]],
        ['8x moreminecarts:powered_locking_rail',    [[_I3], ['create:controller_rail']]],

        ['moreminecarts:minecart_loader',            [[Caa, __f, Caa], [Plc, Cc3, Plc], [Caa, _K2, Caa]]],
        ['moreminecarts:minecart_unloader',          [[Caa, _K2, Caa], [Plc, Cc3, Plc], [Caa, __f, Caa]]],
        ['moreminecarts:transport_battery',          [[tPs, tPs, tPs], [tPs, Ic1, tPs], [tPs, Plc, tPs]]],
        ['moreminecarts:transport_tank',             [[tPs, tPs, tPs], [tPs, Cft, tPs], [tPs, Plc, tPs]]],
    ]);

    colors.forEach(X => addShaped(event, [['moreminecarts:color_detector_rail_' + X, [['#forge:dyes/' + X], [Plc], [Rdr]]]]));

    event.remove({ output: _lp });
    event.custom({
        type: 'create:filling',
        ingredients: [
            { tag: 'forge:slimeballs' },
            { fluid: 'immersivepetroleum:lubricant', nbt: {}, amount: 50 }
        ],
        results: [{ item: _lp }]
    });
    event.replaceInput({}, 'minecraft:emerald_block', mm3);
    event.remove({ id: 'moreminecarts:glass_from_spines' });
});
