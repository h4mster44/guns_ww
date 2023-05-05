/eval
const swap = -992264861;
const swapon = 1053179219;
const gun = -2082646505;
const maxammo = 2;

RequestModel(swap);
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
const object = CreateObject(swap,x,y,z,1);

const attachParam = IsPedMale(pp) ? 350 : 408;
AttachEntityToEntity(object, pp, attachParam, +0.08, +0.05, -0.02, -92.01, 0.0, +0.0, false, false, true, true, 0, true, false, false);

let interval = setInterval(() => 
{
  const [x1,y1,z1] = GetEntityCoords(object,false);
  if (DoesObjectOfTypeExistAtCoords(x1, y1, z1,0.000000000000001,swapon,false,false,false) == 1) {
  let prop = GetClosestObjectOfType(x1,y1,z1,0.000000000000001,swapon,false,false,false)
  SetEntityVisible(prop, true);
  SetEntityVisible(prop, false);
  }
},
3000);



const ticker = setTick(() => {

const ammo = GetAmmoInClip(pp, gun);


if (IsControlPressed(0,0x430593AA) == true) {
    if (IsControlJustPressed(0,0xA5BDCD3C) == true) {
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
DoesObjectOfTypeExistAtCoords(x,y,z,10.0,swapon,false,false,false)
DoesObjectOfTypeExistAtCoords(x,y,z,10.0,swap,false,false,false)
const prop = GetClosestObjectOfType(x,y,z,10.0,swapon,false,false,false)
const prop2 = GetClosestObjectOfType(x,y,z,10.0,swap,false,false,false)
SetEntityAsMissionEntity(prop,true,true);
SetEntityVisible(prop, false);
SetEntityVisible(prop2, false);
DeleteObject(object)
clearTick(ticker)
clearInterval(interval)
}
}

if (Citizen.invokeNative("0x8425C5F057012DAB", pp)  != gun) { 
SetEntityVisible(object, false);
}

if (Citizen.invokeNative("0x8425C5F057012DAB", pp)  == gun) {    
SetEntityVisible(object, true);
}


setTimeout(() => 
{
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
DoesObjectOfTypeExistAtCoords(x,y,z,10.0,swapon,false,false,false)
const prop = GetClosestObjectOfType(x,y,z,10.0,swapon,false,false,false)
SetEntityAsMissionEntity(prop,true,true);
SetEntityVisible(prop, false);

},
1000);

if (IsPedAimingFromCover(pp)  == true) { 

SetEntityVisible(object, true);
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
DoesObjectOfTypeExistAtCoords(x,y,z,10.0,swapon,false,false,false)
const prop = GetClosestObjectOfType(x,y,z,10.0,swapon,false,false,false)
SetEntityAsMissionEntity(prop,true,true);
SetEntityVisible(prop, false);
}
if (Citizen.invokeNative("0x698F456FB909E077")  == 1) { 
    SetEntityVisible(object, true);
    const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
    DoesObjectOfTypeExistAtCoords(x,y,z,10.0,swapon,false,false,false)
    const prop = GetClosestObjectOfType(x,y,z,10.0,swapon,false,false,false)
    SetEntityAsMissionEntity(prop,true,true);
    SetEntityVisible(prop, false);
}

    if (IsPedShooting(pp) == true) {
      const dict = "anm_oddf"
      const name = "ent_anim_oddf_powder_flash"
      const scale = 0.4;
      RequestNamedPtfxAsset(dict)
      UseParticleFxAsset(dict)
      const smoke = StartNetworkedParticleFxNonLoopedOnEntity(name, object, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, scale, false, false, false)

    }
if (ammo > [1,2]) {

  SetAmmoInClip(pp,gun,maxammo)
  ClearPedTasks(pp)

}
});