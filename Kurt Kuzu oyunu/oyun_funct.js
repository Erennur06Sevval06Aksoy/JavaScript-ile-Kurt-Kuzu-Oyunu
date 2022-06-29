
var kuzuYer=1;
var kurtYer=1;
var samanYer=1;
var sandalYer=1;

var btnKuzu=document.getElementById("kuzu");
btnKuzu.onclick=function(){
  if (kuzuYer == 1 && sandalYer == 1) {
    kuzu.style.left="560px";
    kuzu.style.top="380px";  
    kuzuYer++; 
  }
}

var btnKurt=document.getElementById("kurt");
btnKurt.onclick=function(){
  if (kurtYer == 1 && sandalYer == 1) {
    kurt.style.left="570px";
    kurt.style.top="400px";
    kurtYer++;
  }    
}

var btnSaman=document.getElementById("saman");
btnSaman.onclick=function(){
  if (samanYer == 1 && sandalYer == 1) {
    saman.style.left="560px";
    saman.style.top="410px";
    samanYer++;
  }
}

var btnSandal=document.getElementById("sandal");
    btnSandal.onclick=function(){ 
    if (kuzuYer == 2 ) {
      kuzu.style.left="780px";
      kuzu.style.top="380px";
      kuzuYer++;
      sandal.style.left="750px";
      sandal.style.top="410px";
      sandalYer++;
      var btnKuzu=document.getElementById("kuzu");
      btnKuzu.onclick=function(){
        kuzu.style.left="960px";
        kuzu.style.top="380px";  
        kuzuYer++; 
    }
    var btnSandal=document.getElementById("sandal");
    btnSandal.onclick=function(){
      sandal.style.left="515px";
      sandal.style.top="410px";
      sandalYer++;
    }
    var btnKurt=document.getElementById("kurt");
    btnKurt.onclick=function(){
    if (kurtYer == 1 && sandalYer == 3) {
      kurt.style.left="570px";
      kurt.style.top="400px";
      kurtYer++;
      }   
      var btnSandal=document.getElementById("sandal");
      btnSandal.onclick=function(){
        if (kurtYer == 2) {
          sandal.style.left="750px";
          sandal.style.top="410px";
          sandalYer++;
          kurt.style.left="790px";
          kurt.style.top="400px";
          kurtYer++;
        } 
      }   
      var btnKurt=document.getElementById("kurt");
      btnKurt.onclick=function(){
        if (sandalYer == 4 && kurtYer == 3) {
          kurt.style.left="970px";
          kurt.style.top="475px";
          kurtYer++;
        }
        var btnSandal=document.getElementById("sandal");
        btnSandal.onclick=function(){
        if (kuzuYer == 4 && kurtYer == 4) {
          alert("oyun bitti");
          window.location.reload(false); 
          }        
        }
      } 
      var btnKuzu=document.getElementById("kuzu");
      btnKuzu.onclick=function(){
      if (kuzuYer == 4 && sandalYer == 4) {
        kuzu.style.left="780px";
        kuzu.style.top="380px";  
        kuzuYer++; 
      }
      var btnSandal=document.getElementById("sandal");
      btnSandal.onclick=function(){
        if (kuzuYer == 5) {
          sandal.style.left="515px";
          sandal.style.top="410px";
          sandalYer++;
          kuzu.style.left="560px";
          kuzu.style.top="380px";  
          kuzuYer++;
        }        
      }
      var btnKuzu=document.getElementById("kuzu");
      btnKuzu.onclick=function(){
      if (kuzuYer == 6 && sandalYer == 5) {
        kuzu.style.left="430px";
        kuzu.style.top="390px";  
        kuzuYer++; 
        }
      }
      var btnSaman=document.getElementById("saman");
      btnSaman.onclick=function(){
      if (samanYer == 1 && sandalYer == 5) {
        saman.style.left="560px";
        saman.style.top="410px";
        samanYer++;
        }
        var btnSandal=document.getElementById("sandal");
        btnSandal.onclick=function(){
        if (samanYer == 2) {
          sandal.style.left="750px";
          sandal.style.top="410px";
          sandalYer++;
          saman.style.left="795px";
          saman.style.top="420px";
          samanYer++;
          }       
        }
        var btnSaman=document.getElementById("saman");
        btnSaman.onclick=function(){
        if (samanYer == 3 && sandalYer == 6) {
          saman.style.left="970px";
          saman.style.top="565px";
          samanYer++;
          }
          var btnSandal=document.getElementById("sandal");
          btnSandal.onclick=function(){
            sandal.style.left="515px";
            sandal.style.top="410px";
            sandalYer++;
          }
          var btnKuzu=document.getElementById("kuzu");
          btnKuzu.onclick=function(){
          if (kuzuYer == 7 && sandalYer == 7) {
            kuzu.style.left="560px";
            kuzu.style.top="380px";  
            kuzuYer++; 
            }
          var btnSandal=document.getElementById("sandal");
          btnSandal.onclick=function(){
          if (kuzuYer == 8 ) {
            kuzu.style.left="780px";
            kuzu.style.top="380px";
            kuzuYer++;
            sandal.style.left="750px";
            sandal.style.top="410px";
            sandalYer++;
            var btnKuzu=document.getElementById("kuzu");
            btnKuzu.onclick=function(){
              kuzu.style.left="960px";
              kuzu.style.top="380px";  
              kuzuYer++; 
              alert("oyunu kazandın");
              window.location.reload(false);
                } 
              }
            }
          }
        }
      } 
    } 
  }
    var btnSaman=document.getElementById("saman");
    btnSaman.onclick=function(){
    if (samanYer == 1 && sandalYer == 3) {
      saman.style.left="560px";
      saman.style.top="410px";
      samanYer++;
      }
      var btnSandal=document.getElementById("sandal");
      btnSandal.onclick=function(){
        if (samanYer == 2) {
          sandal.style.left="750px";
          sandal.style.top="410px";
          sandalYer++;
          saman.style.left="795px";
          saman.style.top="420px";
          samanYer++;
        }       
      }
      var btnSaman=document.getElementById("saman");
      btnSaman.onclick=function(){
        if (sandalYer == 4 && samanYer == 3) {
          saman.style.left="970px";
          saman.style.top="565px";
          samanYer++;
        }
        var btnSandal=document.getElementById("sandal");
        btnSandal.onclick=function(){
        if (kuzuYer == 4 && samanYer == 4) {
          alert("oyun bitti");
          window.location.reload(false); 
          }        
        }
      } 
      var btnKuzu=document.getElementById("kuzu");
      btnKuzu.onclick=function(){
      if (kuzuYer == 4 && sandalYer == 4) {
        kuzu.style.left="780px";
        kuzu.style.top="380px";  
        kuzuYer++; 
      }
      var btnSandal=document.getElementById("sandal");
      btnSandal.onclick=function(){
        if (kuzuYer == 5) {
          sandal.style.left="515px";
          sandal.style.top="410px";
          sandalYer++;
          kuzu.style.left="560px";
          kuzu.style.top="380px";  
          kuzuYer++;
         }
      }
      var btnKuzu=document.getElementById("kuzu");
      btnKuzu.onclick=function(){
      if (kuzuYer == 6 && sandalYer == 5) {
        kuzu.style.left="430px";
        kuzu.style.top="390px";  
        kuzuYer++; 
        }
      }
      var btnKurt=document.getElementById("kurt");
      btnKurt.onclick=function(){
      if (kurtYer == 1 && sandalYer == 5) {
        kurt.style.left="570px";
        kurt.style.top="400px";
        kurtYer++;
        }  
        var btnSandal=document.getElementById("sandal");
        btnSandal.onclick=function(){
        if (kurtYer == 2) {
          sandal.style.left="750px";
          sandal.style.top="410px";
          sandalYer++;
          kurt.style.left="790px";
          kurt.style.top="400px";
          kurtYer++;
          }       
        }  
        var btnKurt=document.getElementById("kurt");
        btnKurt.onclick=function(){
        if (kurtYer == 3 && sandalYer == 6) {
          kurt.style.left="975px";
          kurt.style.top="470px";
          kurtYer++;
          }
          var btnSandal=document.getElementById("sandal");
          btnSandal.onclick=function(){
            sandal.style.left="515px";
            sandal.style.top="410px";
            sandalYer++;
          }
          var btnKuzu=document.getElementById("kuzu");
          btnKuzu.onclick=function(){
          if (kuzuYer == 7 && sandalYer == 7) {
            kuzu.style.left="560px";
            kuzu.style.top="380px";  
            kuzuYer++; 
            }
            var btnSandal=document.getElementById("sandal");
            btnSandal.onclick=function(){
            if (kuzuYer == 8 ) {
              kuzu.style.left="780px";
              kuzu.style.top="380px";
              kuzuYer++;
              sandal.style.left="750px";
              sandal.style.top="410px";
              sandalYer++;
              var btnKuzu=document.getElementById("kuzu");
              btnKuzu.onclick=function(){
                kuzu.style.left="960px";
                kuzu.style.top="380px";  
                kuzuYer++; 
                alert("oyunu kazandın");
                window.location.reload(false);
                }
              }
            }
          }
        }
      }
    }
  }   
}

    if (kurtYer == 2 ) {
      alert("oyun bitti");
      kurtYer--;
      window.location.reload(false); 
    }

    if (samanYer == 2) {
      alert("oyun bitti");
      samanYer--;
      window.location.reload(false);
    } 

}
