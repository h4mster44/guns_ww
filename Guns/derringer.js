const swap = -992264861;
const swapon = -1160142962;
const gun = 2075992054;
const maxammo = 2;


RequestModel(swap);
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
const object = CreateObject(swap,x,y,z,1);
SetEntityAsMissionEntity(object,true,true)



if (IsPedMale(pp)) == 1) {
  AttachEntityToEntity(object, pp, 350, +0.08, +0.05, -0.02, -92.01, 0.0, +0.0, false, false, true, true, 0, true, false, false)
}
  if (IsPedMale(pp)) == false) {
    AttachEntityToEntity(object, pp, 408, +0.08, +0.05, -0.02, -92.01, 0.0, +0.0, false, false, true, true, 0, true, false, false)
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




if (ammo > [1,2]) {

  SetAmmoInClip(pp,gun,maxammo)
  ClearPedTasks(pp)

    }
    }
}); 