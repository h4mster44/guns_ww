const swap = 25693219;
const swapon = -1652282711;
const gun = -295349450;



RequestModel(swap);
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
const object = CreateObject(swap,x,y,z,1);
SetEntityAsMissionEntity(object,true,true)


if (IsPedMale(pp) == 1) {
    AttachEntityToEntity(object, pp, 350, +0.08, 0.2, -0.02, +23.20, +80.10, +0.0, false, false, true, true, 0, true, false, false);
  }
    if (IsPedMale(pp) == false) {
        AttachEntityToEntity(object, pp, 408, +0.08, 0.2, -0.02, +23.20, +80.10, +0.0, false, false, true, true, 0, true, false, false);
  }





Citizen.invokeNative("0x5E3BDDBCB83F3D84", pp, GetHashKey("weapon_melee_hammer"),1,1,true,1,true,0.5,1.0,true,0.0);
Citizen.invokeNative("0xE9BD19F8121ADE3E",pp, gun)

const ticker = setTick(() => {



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



    }
}); 