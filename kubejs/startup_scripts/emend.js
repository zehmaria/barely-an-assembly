/*
const _total = ['aluminum', 'lapis', 'ancient_debris', 'silver', 'nickel', 'osmium', 'tin', 'zinc', 'cobalt', 'certus_quartz', 'charged_certus_quartz', 'fluix', 'bitumen', 'cinnabar', 'apatite', 'potassium_nitrate', 'arcane', 'dimensional', 'bronze', 'brass', 'constantan', 'invar', 'signalum', 'lumium', 'enderium', 'thallasium', 'iesnium', 'regalium', 'utherium', 'froststeel', 'cloggrum', 'nebu', 'emerald', 'quartz', 'ruby', 'sapphire', 'iridium', 'peridot', 'cast_iron'];

const _bmtags = ['fragment', 'gravel'];
const _mektags = ['clump', 'crystal', 'dirty_dust', 'shard'];
const _forgetags = ['bucket', 'ore', 'ingot', 'storage_block', 'nugget', 'gem', 'dust', 'chunk', 'gear', 'plate', 'rod', 'cluster'];

// TOTAL DELETION
hide2('emendatusenigmatica:', ['enigmatic_fortunizer', 'enigmatic_hammer']);
hide2('#create:crushed_ores/', _total);
hide3('#bloodmagic:', _bmtags, 's'); // MOD NOT INCLUDED
hide4('#mekanism:', _mektags, 's/', _total);
hide1(['#mekanism:dirty_dusts']); // TOTALLY EXCLUDED
hide4('#forge:', _forgetags, 's/', _total);

hide3('emendatusenigmatica:', ['silicon', 'arcane'], '_gem');
hide3('emendatusenigmatica:', ['ender', 'graphite', 'lithium', 'wood', 'obsidian', 'charcoal'], '_dust');
hide2('emendatusenigmatica:coke_', ['block', 'gem', 'dust']);

// PARTIAL DELETION
const _partial = ['sulfur', 'redstone', 'diamond', 'fluorite', 'coal'];
hide2('#create:crushed_ores/', _partial);
hide4('#mekanism:', _mektags, 's/', _partial);
hide3('emendatusenigmatica:molten_', _partial, '_bucket');
hide2('emendatusenigmatica:fluorite_', ['block', 'ore', 'chunk', 'cluster']);
hide2('emendatusenigmatica:coal_', ['chunk', 'cluster']);
hide2('emendatusenigmatica:sulfur_', ['block', 'gem', 'dust', 'chunk', 'cluster']);
hide2('emendatusenigmatica:redstone_', ['chunk', 'cluster']);
hide2('emendatusenigmatica:diamond_', ['chunk', 'cluster', 'dust', 'gear', 'plate', 'rod']);
hide3('emendatusenigmatica:', ['steel', 'electrum'], '_crushed');
hide2('emendatusenigmatica:redstone_', ['chunk', 'cluster']);
hide2('#forge:', ['nuggets', 'storage_blocks']);

// USED, BUT PICK ONLY ONE ORE TYPE?
const _strata = ['', '_andesite', '_granite', '_diorite', '_sand', '_gravel', '_netherrack', '_blackstone', '_basalt', '_soul_soil', '_end_stone', '_gabbro', '_c_limestone', '_scoria', '_weathered_limestone', '_jasper', '_marble', '_slate', '_deepslate', '_mossy_stone', '_brimstone', '_subzero_ash', '_blue_netherrack', '_nylium_soul_soil', '_ether_stone', '_cryptic_stone', '_flavolite', '_sulphuric_rock', '_violecite', '_raw_marble'];
const _pick = ['coal', 'iron', 'gold', 'diamond', 'emerald', 'lapis', 'redstone', 'quartz', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'zinc', 'fluorite', 'sulfur'];
hide5('emendatusenigmatica:', _pick, '', _strata, '_ore');
*/
