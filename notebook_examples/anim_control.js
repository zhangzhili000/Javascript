(function a1() {
  let done = false;
  console.log("here is a1()");
  function b(){
    console.log("here is b()");
    let position = 0;
    let des = 0;
    /**codeing here.*/
    if(position === des){console.log("here is position === des");
      done = true;
    }
    if(done){
      console.log("here is clearInterval.");
      clearInterval(id);
      a2();
    }
  }
  let id = setInterval(b,1000/60);
})();

function a2(){
  /**coding here.*/console.log("here is a2()");
  a3();
}

function a3(){
  /**next animation;*/console.log("here is a3()");
};