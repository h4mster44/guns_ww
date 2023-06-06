const swap = 296006912;
const swapon = -37044699;
const gun = 680856689;

RequestModel(swap);
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
const object = CreateObject(swap,x,y,z,1);
SetEntityAsMissionEntity(object,true,true)

const attachParam = IsPedMale(pp) ? 342 : 400;
AttachEntityToEntity(object, pp, attachParam, -0.06, -0.005, -0.074, -40.01, -70.01, -90.01, false, false, true, true, 0, true, false, false);

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
    

    
    });