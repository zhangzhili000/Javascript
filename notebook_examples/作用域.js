var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){ let _this = this;
　　　　　　return function(){
　　　　　　　　return name;
　　　　　　};
　　　　}
　　};
　　console.log(object.getNameFunc()());



var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){ let _this = this;
　　　　　　return function(){
　　　　　　　　return _this.name;
　　　　　　};
　　　　}
　　};
　　console.log(object.getNameFunc()());