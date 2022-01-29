const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

const rcs = ['minecraft:crafting_shapeless'];
const rcd = ['minecraft:crafting_shaped'];
const rfs = ['minecraft:smelting', 'minecraft:smoking'];
const ral = ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting'];

const air = 'minecraft:air';

const grv = '#forge:gravel';
const flt = 'minecraft:flint';
const cls = '#minecraft:coals';
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
const tGu = '#forge:gears/uranium';
const tIu = '#forge:ingots/uranium';

const tRe = '#forge:rods/electrum';
const tDe = '#forge:dusts/electrum';
const tPe = '#forge:plates/electrum';
const tGe = '#forge:gears/electrum';
const tIe = '#forge:ingots/electrum';

const tPc = '#forge:plates/copper';
const tDc = '#forge:dusts/copper';
const tGc = '#forge:gears/copper';
const tIc = '#forge:ingots/copper';
const tRc = '#forge:rods/copper';
const tWc = '#forge:wires/copper';

const tPl = '#forge:plates/lead';
const tGl = '#forge:gears/lead';
const tIl = '#forge:ingots/lead';
const tDl = '#forge:dusts/lead';
const tWl = '#forge:wires/lead';

const tRs = '#forge:rods/steel';
const tPs = '#forge:plates/steel';
const tGs = '#forge:gears/steel';
const tDs = '#forge:dusts/steel';
const tWs = '#forge:wires/steel';

const tDg = '#forge:dusts/gold';
const tIg = '#forge:ingots/gold';
const tRg = '#forge:rods/gold';
const tPg = '#forge:plates/gold';

const tIt = '#forge:ingots/tin';

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

const Mmc = 'minecraft:magma_cream';
const Mae = 'minecraft:apple';
const Mcr = 'minecraft:carrot';
const Mbr = 'minecraft:beetroot';
const Mcp = 'minecraft:compass';
const Mcw = '#forge:chests/wooden';
const Mbs = 'minecraft:brewing_stand';
const Mga = 'minecraft:golden_apple';
const Mct = 'minecraft:crafting_table';
const Mcf = 'minecraft:campfire';
const Mwh = 'minecraft:wheat';
const Msu = 'minecraft:sugar';
const Msb = 'minecraft:sweet_berries';
const Mca = 'minecraft:cake';
const Mgb = 'minecraft:glass_bottle';
const Meb = 'minecraft:experience_bottle';
const Mbk = 'minecraft:book';
const Mec = 'minecraft:ender_chest';
const Mpm = 'minecraft:phantom_membrane';
const Mpp = 'minecraft:paper';
const Mgt = 'minecraft:ghast_tear';
const Mws = 'minecraft:wither_skeleton_skull';
const Mlt = 'minecraft:leather';
const Mrh = 'minecraft:rabbit_hide';
const Mhs = 'minecraft:heart_of_the_sea';
const Mbp = 'minecraft:blaze_powder';
const Msp = 'minecraft:stone_pressure_plate';
const Mgp = 'minecraft:gunpowder';
const Mrt = 'minecraft:redstone_torch';
const Mss = 'minecraft:smooth_stone';
const Mns = 'minecraft:nether_star';
const Msh = 'minecraft:nautilus_shell';
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
const Cc2 = 'create:brass_casing';
const Cc3 = 'create:copper_casing';

const Kse = 'mekanism:superheating_element';
const Ktt = 'mekanismgenerators:turbine_casing';
const Kfc = 'mekanismgenerators:fission_reactor_casing';
const Kff = 'mekanismgenerators:fusion_reactor_frame';
const Kpp = 'mekanism:pellet_polonium';;
const Kte = 'mekanism:thermal_evaporation_block';
const Kam = 'mekanism:pellet_antimatter';
const Kdt = 'mekanism:dynamic_tank';
const Kct = 'mekanism:basic_chemical_tank';
const Ktb = 'mekanism:energy_tablet';
const Kca = 'mekanism:steel_casing';
const Ktc = 'mekanism:teleportation_core';
const Kec = '#mekanism:enriched/carbon';
const Ket = '#mekanism:enriched/tin';
const Keg = '#mekanism:enriched/gold';
const Ked = '#mekanism:enriched/diamond';
const Keo = '#mekanism:enriched/obsidian';
const Ker = '#mekanism:enriched/redstone';
const Ksm = 'mekanism:scuba_mask';
const Kst = Item.of('mekanism:scuba_tank', {HideFlags:2,mekData:{GasTanks:[{Tank:0,stored:{gasName:'mekanism:oxygen',amount:24000}}]}});
const Khd = 'mekanism:hdpe_sheet';
const mm1 = 'mekanism:alloy_infused';
const mm2 = 'mekanism:alloy_reinforced';
const mm3 = 'mekanism:alloy_atomic';

const Dbp = 'diregoo:gooblockpoison';
const Dag = 'diregoo:antigoopaste';
const Dad = 'diregoo:antigoodust';
const Df1 = 'diregoo:focust1';
const Df4 = 'diregoo:focust4';
const Dt1 = 'diregoo:gntblockt1';
const Dt2 = 'diregoo:gntblockt2';
const Dt3 = 'diregoo:gntblockt3';
const Dt4 = 'diregoo:gntblockt4';

const Ibr = 'immersiveengineering:blastbrick_reinforced';
const Iec = 'immersiveengineering:empty_casing';
const Ies = 'immersiveengineering:empty_shell';
const Iel = 'immersiveengineering:electric_lantern';
const Ihf = 'immersiveengineering:hemp_fabric';
const Ic1 = 'immersiveengineering:capacitor_lv';
const Ic2 = 'immersiveengineering:capacitor_mv';
const Ic3 = 'immersiveengineering:capacitor_hv';
const Ik1 = 'immersiveengineering:connector_lv';
const Ir1 = 'immersiveengineering:connector_lv_relay';
const Iw1 = 'immersiveengineering:wirecoil_copper';
const Ihm = 'immersiveengineering:hammer';
const Iwc = 'immersiveengineering:wirecutter';
const Itw = '#forge:treated_wood';
const Its = 'immersiveengineering:stick_treated';
const HOP = 'immersiveengineering:ingot_hop_graphite';
const btm = 'immersivepetroleum:bitumen';

const Cpr = 'create:propeller';
const Cft = 'create:fluid_tank';
const Cfp = 'create:fluid_pipe';
const Cpm = 'create:precision_mechanism';
const Cic = 'create:integrated_circuit';
const Cwf = 'create:wheat_flour';
const Csh = 'create:shaft';
const Ccw = 'create:cogwheel';
const Cgl = Item.of('create:super_glue', '{Damage:0}');

const ltx = 'myrtrees:latex';

const Apq = 'appliedenergistics2:purified_certus_quartz_crystal';

const Ppt = 'pneumaticcraft:pressure_tube';
const Pac = Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}');

// TIERS

const _K1 = 'mekanism:basic_control_circuit';
const _K2 = 'mekanism:advanced_control_circuit';
const _K3 = 'mekanism:elite_control_circuit';
const _K4 = 'mekanism:ultimate_control_circuit';

const _y1 = '#forge:plates/iron';
const _y2 = '#forge:plates/copper';
const _y3 = '#forge:plates/steel';;
const _y4 = '#forge:plates/electrum';
const _y5 = 'mekanism:pellet_polonium';

const _x1 = '#forge:plates/electrum';
const _x2 = 'mekanism:hdpe_sheet';
const _x3 = 'minecraft:diamond';
const _x4 = 'mekanism:pellet_polonium';

const _I1 = 'immersiveengineering:hemp_fiber';
const _I2 = 'immersiveengineering:component_iron';
const _I3 = 'immersiveengineering:component_steel';
const _I4 = 'create:electron_tube';
const _I5 = 'immersiveengineering:circuit_board';
const _I6 = 'immersiveengineering:stick_steel';

const _AA = 'minecraft:clay_ball';
const _RR = 'minecraft:obsidian';
