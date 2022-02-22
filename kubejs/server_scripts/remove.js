// priority: -1000

onEvent('item.tags', event => {
    global.hiding.forEach(X => event.add('barely:removed', X));
});

onEvent('recipes', event => {
    console.info(global.hiding);
    global.hiding.forEach(X => event.remove({ output: X }));
    ['minecraft:crafting_special_suspiciousstew','minecraft:crafting_special_tippedarrow', 'minecraft:crafting_special_shulkerboxcoloring', 'create:toolbox_dyeing'].forEach(X => event.remove({ type: X }));
});
