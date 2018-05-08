function Father() {
    (()=> {
        console.log("this is init");
        this.name = "father";
    })();
}
let father = new Father();

Father.prototype.Son = function(){
	console.log("name:",this.name);
}
father.Son();