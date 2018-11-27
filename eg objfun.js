// var calc={
//     add:function(a,b){
//         console.log(a+b);
//     }
// }
// var scien_calc=Object.create(calc);
// scien_calc.add(10,20);



var bike={
    bikename:"yamahafz",
    cc:"150",
    bikecolor:"red",
    minspeed:40,
    maxspeed:120,
    currentspeed:0,
    gear1:10,
    gear2:20,
    gear3:40,
    gear4:80,
    currentstate:false,
    ignation:false,
    onoff:function(){
        if(this.ignation===false){
            this.ignation=true;
        }
        else{
            this.ignation=false;
        }
    },

    first: function(){
        if(this.ignation===true){
           if(this.currentspeed < this.gear1){
                this.currentspeed=this.gear1;
            }
        }
    },
    second: function(){
        if(this.ignation===true){
           if(this.currentspeed < this.gear2){
                this.currentspeed=this.gear2;
            }
        }
    },
    third: function(){
        if(this.ignation===true){
           if(this.currentspeed < this.gear3){
                this.currentspeed=this.gear3;
            }
        }
    },

    fourth: function(){
        if(this.ignation===true){
           if(this.currentspeed < this.gear4){
                this.currentspeed=this.gear4;
            }
        }
    },
}
console.log(bike.ignation);
bike.onoff();
console.log(bike.ignation);
bike.first();
console.log(bike.currentspeed);
bike.second();
console.log(bike.currentspeed);
bike.third();
console.log(bike.currentspeed);
bike.fourth();
console.log(bike.currentspeed);





    



