const swap = -1260080402;
const swapon = 1864950433;
const gun = 1845102363;
const maxammo = 1;


RequestModel(swap);
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
const object = CreateObject(swap,x,y,z,1);
SetEntityAsMissionEntity(object,true,true)



if (IsPedMale(pp) == 1) {
  AttachEntityToEntity(object, pp, 350, +0.08, +0.06, -0.02, -112.01, -20.01, +0.0, false, false, true, true, 0, true, false, false)
}
  if (IsPedMale(pp) == false) {
  AttachEntityToEntity(object, pp, 408, +0.08, +0.06, -0.02, -112.01, -20.01, +0.0, false, false, true, true, 0, true, false, false)
}




const ticker = setTick(() => {

const ammo = GetAmmoInClip(pp, gun);


if (IsControlPressed(0,0xA5BDCD3C) == true) {
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
  }

if (Citizen.invokeNative("0x8425C5F057012DAB", pp)  != gun) { 
    let interval = setInterval(() => 
    {
        SetEntityVisible(object, false);
   },
   10000);
  }

if (Citizen.invokeNative("0x8425C5F057012DAB", pp)  == gun) { 
      
    
    SetEntityVisible(object, true);

    
let interval = setInterval(() => 
    {

const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
DoesObjectOfTypeExistAtCoords(x,y,z,10.0,swapon,false,false,false)
const prop = GetClosestObjectOfType(x,y,z,10.0,swapon,false,false,false)
SetEntityAsMissionEntity(prop,true,true);
SetEntityVisible(prop, false);


    },
    10000);

  if (IsPedShooting(pp) == true) {

    const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
    AddExplosion(x, y+0.4, z+0.5, 12, 0.1, true, false, 6.0);

    setTimeout(() => 
    {
        const msg = "15 секунд до перезарядки"
        const str = Citizen.invokeNative("0xFA925AC00EB830B9", 10, "LITERAL_STRING", msg, Citizen.resultAsLong())
        Citizen.invokeNative("0xFA233F8FE190514C", str)
        Citizen.invokeNative("0xE9990552DEC71600")
        const a = Citizen.invokeNative("0xDFF0D417277B41F8", Citizen.resultAsInteger())

},
100);

setTimeout(() => 
    {
        const msg = "5 секунд до перезарядки"
        const str = Citizen.invokeNative("0xFA925AC00EB830B9", 10, "LITERAL_STRING", msg, Citizen.resultAsLong())
        Citizen.invokeNative("0xFA233F8FE190514C", str)
        Citizen.invokeNative("0xE9990552DEC71600")
        const a = Citizen.invokeNative("0xDFF0D417277B41F8", Citizen.resultAsInteger())

},
10000);

setTimeout(() => 
    {
        const msg = "~e~Fire"
        const str = Citizen.invokeNative("0xFA925AC00EB830B9", 10, "LITERAL_STRING", msg, Citizen.resultAsLong())
        Citizen.invokeNative("0xFA233F8FE190514C", str)
        Citizen.invokeNative("0xE9990552DEC71600")
        const a = Citizen.invokeNative("0xDFF0D417277B41F8", Citizen.resultAsInteger())

},
15000);


let interval2 = setInterval(() => 
{
SetAmmoInClip(pp,gun,0)
},
200);

setTimeout(() => 
{
clearInterval(interval2)
},
15000);

}


if (ammo > [1,1]) {

  SetAmmoInClip(pp,gun,maxammo)
  ClearPedTasks(pp)

    }
    }
}); 