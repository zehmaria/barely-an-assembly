/*
  onEvent('item.tags', event => {
    event.removeAll('forge:chests');
    event.removeAll('forge:chests/wooden');
    event.removeAll('forge:chests/trapped');

    event.add('forge:chests/wooden', ['krate:krate_small', 'krate:krate_basic', 'krate:krate_big', 'krate:krate_large']);
    event.add('forge:chests', ['krate:krate_small', 'krate:krate_basic', 'krate:krate_big', 'krate:krate_large']);
});

onEvent('recipes', event => {
    const __s = '#minecraft:stripped_logs';
    addShaped(event, [
        ['krate:shulker_upgrade', [['mekanism:pellet_antimatter', Dag], [Dag, 'krate:empty_upgrade']]],
        ['krate:krate_small', [[__s, __s, __s], [__s, air, __s], [__s, __s, __s]]],
        ['krate:krate_big', [[__s, __s, __s], [tPi, _I3, tPi], [__s, __s, __s]]]
    ]);
});
*/
