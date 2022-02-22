const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

const rcs = ['minecraft:crafting_shapeless'];
const rcd = ['minecraft:crafting_shaped'];
const rfs = ['minecraft:smelting', 'minecraft:smoking'];
const ral = ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting'];

const air = 'minecraft:air';

const grv = '#forge:gravel';
const flt = 'minecraft:flint';
const cls = '#minecraft:coals';
const Mcl = 'minecraft:coal';
const cbl = 'minecraft:cobblestone';
const drt = 'minecraft:dirt';
const cly = '#forge:clay';
const prm = '#forge:gems/prismarine';
const snd = '#minecraft:sand';
const sfb = '#minecraft:soul_fire_base_blocks';
const brk = 'minecraft:brick';
const bks = 'minecraft:bricks';
const nbk = 'minecraft:nether_brick';
const nbs = 'minecraft:nether_bricks';
const gls = 'minecraft:glowstone';
const stk = '#forge:rods/wooden';
const plk = '#minecraft:planks';
const log = '#minecraft:logs';
const pns = '#forge:glass_panes';
const gla = '#forge:glass';
const cld = 'minecraft:packed_ice';

const tIi = '#forge:ingots/iron';
const tDi = '#forge:dusts/iron';
const tPi = '#forge:plates/iron';
const tRi = '#forge:rods/iron';

const tDf = '#forge:dusts/fluorite';
const tGf = '#forge:gems/fluorite';

const tDu = '#forge:dusts/uranium';
const tPu = '#forge:plates/uranium';
const tIu = '#forge:ingots/uranium';

const tRe = '#forge:rods/electrum';
const tDe = '#forge:dusts/electrum';
const tPe = '#forge:plates/electrum';
const tIe = '#forge:ingots/electrum';

const tPc = '#forge:plates/copper';
const tDc = '#forge:dusts/copper';
const tIc = '#forge:ingots/copper';
const tRc = '#forge:rods/copper';
const tWc = '#forge:wires/copper';

const tPl = '#forge:plates/lead';
const tIl = '#forge:ingots/lead';
const tDl = '#forge:dusts/lead';
const tWl = '#forge:wires/lead';
const tRl = '#forge:rods/lead';

const tRs = '#forge:rods/steel';
const tPs = '#forge:plates/steel';
const tDs = '#forge:dusts/steel';
const tWs = '#forge:wires/steel';

const tDg = '#forge:dusts/gold';
const tIg = '#forge:ingots/gold';
const tRg = '#forge:rods/gold';
const tPg = '#forge:plates/gold';

const tIt = '#forge:ingots/tin';
const tGd = 'minecraft:diamond';

const tEd = 'mekanism:enriched_diamond';

const rsilver = '#forge:rods/silver';
const psilver = '#forge:plates/silver';

const tSG = '#forge:slag';
const tST = '#forge:string';
const tWA = '#forge:buckets/water';
const tMI = '#minecraft:milk_bucket';
const tMk = '#forge:milk';
const lav = 'minecraft:lava_bucket';
const mlb = 'farmersdelight:milk_bottle';
const ric = 'farmersdelight:cooked_rice';

const tDw = '#forge:dusts/wood';
const tSw = '#minecraft:wooden_slabs';
const tSs = 'minecraft:smooth_stone_slab';
const tTs = 'minecraft:smooth_stone_slab';
const tTb = 'minecraft:smooth_stone';

const klp = 'minecraft:dried_kelp';
const egg = '#forge:eggs';
const ink = 'minecraft:ink_sac';
const bow = 'minecraft:bow';
const pis = 'create:mechanical_piston';

const Mae = 'minecraft:apple';
const Mcr = 'minecraft:carrot';
const Mbr = 'minecraft:beetroot';
const Mcp = 'minecraft:compass';
const Mcw = '#forge:chests/wooden';
const Mfu = 'minecraft:furnace';
const Mct = 'minecraft:crafting_table';
const Mcf = 'minecraft:campfire';
const Mwh = 'minecraft:wheat';
const Msu = 'minecraft:sugar';
const Msb = 'minecraft:sweet_berries';
const Mca = 'minecraft:cake';
const Mbk = 'minecraft:book';
const Mpp = 'minecraft:paper';
const Mlt = 'minecraft:leather';
const Mrh = 'minecraft:rabbit_hide';
const Msp = 'minecraft:stone_pressure_plate';
const Mgp = 'minecraft:gunpowder';
const Mrt = 'minecraft:redstone_torch';
const Mss = 'minecraft:smooth_stone';
const Msl = '#forge:slimeballs';
const rst = 'minecraft:redstone';

const Msc = 'minecraft:scute';
const Mwr = 'minecraft:red_wool';
const Mwb = 'minecraft:black_wool';
const Mww = 'minecraft:white_wool';
const Mwy = 'minecraft:yellow_wool';
const Mwl = 'minecraft:lime_wool';
const Mwg = 'minecraft:gray_wool';

const Caa = 'create:andesite_alloy';
const Cc1 = 'create:andesite_casing';
const Cc2 = 'create:copper_casing';
const Cc3 = 'create:brass_casing';
const Crc = 'compressedcreativity:rotational_compressor';
const Cem = 'createaddition:electric_motor';
const Cpe = 'create:piston_extension_pole';

const KCg = 'mekanism:clump_gold';
const KCi = 'mekanism:clump_iron';
const KCc = 'mekanism:clump_copper';
const KCl = 'mekanism:clump_lead';
const KCu = 'mekanism:clump_uranium';
const KSg = 'mekanism:shard_gold';
const KSi = 'mekanism:shard_iron';
const KSc = 'mekanism:shard_copper';
const KSl = 'mekanism:shard_lead';
const KSu = 'mekanism:shard_uranium';
const KKg = 'mekanism:crystal_gold';
const KKi = 'mekanism:crystal_iron';
const KKc = 'mekanism:crystal_copper';
const KKl = 'mekanism:crystal_lead';
const KKu = 'mekanism:crystal_uranium';

const Krh = 'mekanism:resistive_heater';
const Kfc = 'mekanismgenerators:fission_reactor_casing';
const Kff = 'mekanismgenerators:fusion_reactor_frame';
const Kpp = 'mekanism:pellet_polonium';
const Kpl = 'mekanism:pellet_plutonium';
const Kte = 'mekanism:thermal_evaporation_block';
const Kam = 'mekanism:pellet_antimatter';
const Kdt = 'mekanism:dynamic_tank';
const Kct = 'mekanism:basic_chemical_tank';
const Kut = 'mekanism:ultimate_chemical_tank';
const Ktb = 'mekanism:energy_tablet';
const FTB = Item.of('mekanism:energy_tablet', '{mekData:{EnergyContainers:[{Container:0b,stored:"250000"}]}}');
const Kca = 'mekanism:steel_casing';
const Kfi = 'mekanismgenerators:fission_reactor_casing';
const Ktu = 'mekanismgenerators:turbine_casing';
const Kfu = 'mekanismgenerators:fusion_reactor_frame';
const Ktc = 'mekanism:teleportation_core';
const Kec = '#mekanism:enriched/carbon';
const Ket = '#mekanism:enriched/tin';
const Keg = '#mekanism:enriched/gold';
const Ked = '#mekanism:enriched/diamond';
const Keo = '#mekanism:enriched/obsidian';
const tDo = 'mekanism:dust_obsidian';
const Ker = '#mekanism:enriched/redstone';
const Ksm = 'mekanism:scuba_mask';
const Kst = Item.of('mekanism:scuba_tank', {HideFlags:2,mekData:{GasTanks:[{Tank:0,stored:{gasName:'mekanism:oxygen',amount:24000}}]}});
const Khd = 'mekanism:hdpe_sheet';
const mm1 = 'mekanism:alloy_infused';
const mm2 = 'mekanism:alloy_reinforced';
const mm3 = 'mekanism:alloy_atomic';

const Dbp = 'diregoo:gooblockpoison';
const Dad = 'diregoo:antigoodust';
const Dmc = 'diregoo:coremelt';
const Df1 = 'diregoo:focust1';
const Df4 = 'diregoo:focust4';
const Dt1 = 'diregoo:gntblockt1';
const Dt2 = 'diregoo:gntblockt2';
const Dt3 = 'diregoo:gntblockt3';
const Dt4 = 'diregoo:gntblockt4';

const Irm = 'immersiveengineering:toolupgrade_revolver_magazine';
const Itf = 'immersiveengineering:hemp_fabric';
const Ihe = 'immersiveengineering:heavy_engineering';
const Ile = 'immersiveengineering:light_engineering';
const Ire = 'immersiveengineering:rs_engineering';
const Ibb = 'immersiveengineering:blastbrick';
const Icb = 'immersiveengineering:cokebrick';
const Iab = 'immersiveengineering:alloybrick';
const Ibr = 'immersiveengineering:blastbrick_reinforced';
const Iec = 'immersiveengineering:empty_casing';
const Ies = 'immersiveengineering:empty_shell';
const Iel = 'immersiveengineering:electric_lantern';
const Ihf = 'immersiveengineering:hemp_fabric';
const Ic1 = 'immersiveengineering:capacitor_lv';
const Ic2 = 'immersiveengineering:capacitor_mv';
const Ic3 = 'immersiveengineering:capacitor_hv';
const Ik1 = 'immersiveengineering:connector_lv';
const Ik2 = 'immersiveengineering:connector_mv';
const Ik3 = 'immersiveengineering:connector_hv';
const Ir1 = 'immersiveengineering:connector_lv_relay';
const Iw1 = 'immersiveengineering:wirecoil_copper';
const Icl = 'immersiveengineering:coil_lv';
const Icm = 'immersiveengineering:coil_mv';
const Ihm = Item.of('immersiveengineering:hammer').ignoreNBT();
const Iwc = Item.of('immersiveengineering:wirecutter').ignoreNBT();
const Itw = '#forge:treated_wood';
const Its = 'immersiveengineering:stick_treated';
const Ift = 'immersiveengineering:treated_fence';
const Icc = 'immersiveengineering:coal_coke';
const HOP = 'immersiveengineering:ingot_hop_graphite';
const btm = 'immersivepetroleum:bitumen';
const pet = 'immersivepetroleum:petcoke';

const Cpr = 'create:propeller';
const Cft = 'create:fluid_tank';
const Cfp = 'create:fluid_pipe';
const Cmp = 'create:mechanical_pump';
const Cpm = 'create:precision_mechanism';
const Cic = 'create:integrated_circuit';
const Cwf = 'create:wheat_flour';
const Csh = 'create:shaft';
const Ccw = 'create:cogwheel';
const Cgl = Item.of('create:super_glue', '{Damage:0}');
const Cca = 'createaddition:capacitor';

const ltx = '#forge:slimeballs';

const Apq = 'appliedenergistics2:purified_certus_quartz_crystal';
const Apf = 'appliedenergistics2:purified_fluix_crystal';
const Amc = 'appliedenergistics2:memory_card';
const Abc = 'appliedenergistics2:basic_card';
const Aac = 'appliedenergistics2:advanced_card';
const Aqg = 'appliedenergistics2:quartz_glass';

const _cu = 'appliedenergistics2:crafting_unit';

const Pig = 'pneumaticcraft:compressed_iron_gear';
const Pgt = 'pneumaticcraft:gps_tool';
const Plc = 'pneumaticcraft:logistics_core';
const Ppt = 'pneumaticcraft:pressure_tube';
const Pac = 'pneumaticcraft:air_canister';

// TIERS

const _K1 = 'mekanism:basic_control_circuit';
const _K2 = 'mekanism:advanced_control_circuit';
const _K3 = 'mekanism:elite_control_circuit';
const _K4 = 'mekanism:ultimate_control_circuit';

const _y1 = '#forge:plates/iron';
const _y2 = '#forge:plates/copper';
const _y3 = '#forge:plates/steel';
const _y4 = '#forge:plates/electrum';
const _y5 = 'mekanism:pellet_polonium';

const _x1 = '#forge:plates/electrum';
const _x2 = 'mekanism:hdpe_sheet';
const _x3 = HOP;
const _x4 = 'mekanism:pellet_polonium';

const _I1 = 'immersiveengineering:hemp_fiber';
const _I2 = 'immersiveengineering:component_iron';
const _I3 = 'immersiveengineering:component_steel';
const _I4 = 'create:electron_tube';

const _AA = 'minecraft:clay_ball';
