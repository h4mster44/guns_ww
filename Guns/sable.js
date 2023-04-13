const swap = -422520518;
const swapon = -37044699;
const gun = 680856689;



RequestModel(swap);
const [x,y,z] = GetEntityCoords(PlayerPedId(),false);
const object = CreateObject(swap,x,y,z,1);
SetEntityAsMissionEntity(object,true,true)

if (IsPedMale(pp)) == 1) {
    AttachEntityToEntity(object, pp, 342, -0.06, -0.06, -0.05, -40.01, -70.01, -90.01, false, false, true, true, 0, true, false, false);
  }
    if (IsPedMale(pp)) == false) {
    AttachEntityToEntity(object, pp, 400, -0.06, -0.06, -0.05, -40.01, -70.01, -90.01, false, false, true, true, 0, true, false, false);
  }




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