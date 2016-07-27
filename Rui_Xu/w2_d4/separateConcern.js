var savingAccount = {
  balance : 0,
  dePosit : function(deposit,accountFlg){
    if(accountFlg==="saving"){
        savBalance+=deposit;
        globalBalance+=deposit;
    }else if(accountFlg==="checking"){
        chkBalance+=deposit;
        globalBalance+=deposit;
    }else{
      console.log('FLAG ERROR!');
    }
  },
  withDraw : function(withdraw,accountFlg){
    //console.log(" | ");
      if(globalBalance<withdraw){
        return false;
      }else{
        if(accountFlg==="saving"){
            if(withdraw<=savBalance){
              savBalance-=withdraw;
              globalBalance-=withdraw;
            }else{
              savBalance=0;
              globalBalance-=withdraw;
              chkBalance=globalBalance;
              return savingAccount.balanceErr;
            }
        }else if(accountFlg==="checking"){
          if(withdraw<=chkBalance){
            chkBalance-=withdraw;
            globalBalance-=withdraw;
          }else{
            chkBalance=0;
            globalBalance-=withdraw;
            savBalance=globalBalance;
            return balanceErr;
          }
        }else{
          console.log('FLAG ERROR!:withdraw');
        }
      }
  },
  balanceErr : "Insufficient"
}
var globalBalance=1000.011;
var savBalance=500.011;
var chkBalance=500;

var savTeller =document.getElementById('tellerSav');
var savWthBtn = document.getElementById('saveW');
var savDepBtn = document.getElementById('saveD');
var savDiv = document.getElementById('savingBlnc');
//checking account
var chkTeller =document.getElementById('tellerCh');
var chkWthBtn = document.getElementById('checkW');
var chkDepBtn = document.getElementById('checkD');
var chkDiv = document.getElementById('checkingBlnc');

var showBlncSv=document.getElementById("savingBlnc");
var showBlncchk=document.getElementById("checkingBlnc");
showBlncSv.textContent="$"+savBalance.toFixed(2);
showBlncchk.textContent="$"+chkBalance.toFixed(2);

var headsupS=document.getElementById('savingWarning');
var headsupC=document.getElementById('checkingWarning');


savDepBtn.addEventListener('click', function(teller,flg) {
  headsupS.textContent='';
  teller=savTeller.value;
  flg="saving";
  depoSit(+teller, flg);
  showBlncSv.textContent="$"+savBalance.toFixed(2);
});
savWthBtn.addEventListener('click', function(teller,flg) {
  headsupS.textContent='';
  teller=savTeller.value;
  flg="saving";
  withDraw(+teller, flg);
  showBlncSv.textContent="$"+savBalance.toFixed(2);
  showBlncchk.textContent="$"+chkBalance.toFixed(2);
});



chkDepBtn.addEventListener('click', function(teller,flg) {
  headsupC.textContent='';
  teller=chkTeller.value;
  flg="checking";
  console.log(teller);
  depoSit(+teller, flg);
  showBlncchk.textContent="$"+chkBalance.toFixed(2);
});
chkWthBtn.addEventListener('click', function(teller,flg) {
  headsupC.textContent='';
  teller=chkTeller.value;
  flg="checking";
  withDraw(+teller, flg);
  showBlncchk.textContent="$"+chkBalance.toFixed(2);
  showBlncSv.textContent="$"+savBalance.toFixed(2);
});

//
// function numFormat(num,flg){
//   lgth=num.toFixed(2).length;
//   if(lgth>8){
//     if(flg="saving"){
//
//     }
//   }
//   return
// }





function withDraw(withdraw,accountFlg){
  //console.log(" | ");
    if(globalBalance<withdraw){
      warning(accountFlg,undefined);
    }else{
      if(accountFlg==="saving"){
          if(withdraw<=savBalance){
            savBalance-=withdraw;
            globalBalance-=withdraw;
          }else{
            warning("saving",withdraw-savBalance);
            savBalance=0;
            globalBalance-=withdraw;
            chkBalance=globalBalance;
          }
      }else if(accountFlg==="checking"){
        if(withdraw<=chkBalance){
          chkBalance-=withdraw;
          globalBalance-=withdraw;
        }else{
          warning("checking",withdraw-chkBalance);
          chkBalance=0;
          globalBalance-=withdraw;
          savBalance=globalBalance;
        }
      }else{
        console.log('FLAG ERROR!:withdraw');
      }
    }
}

function warning(msg,deficit){
  var appendMsg;

      console.log(msg+" | "+deficit);
  if(typeof deficit==='undefined'&&msg==="saving"){
    console.log(" | ");
    headsupS.textContent="Insufficient Balance! Transaction Cancelled";
  }else if(typeof deficit==='undefined'&&msg==="checking"){
    headsupC.textContent="Insufficient Balance! Transaction Cancelled";
  }else if(msg==="saving"){
    headsupS.textContent="Insufficient! $"+deficit+" transfered from checking";
  }else if(msg==="checking"){
    headsupC.textContent="Insufficient! $"+deficit+" transfered from saving";
  }else{
    console.log("Error in displaying msg!");
  }
}
//withDraw(501,"saving");
// test cases: withDraw
// withDraw(100,"checking");
// console.log(globalBalance+" | "+chkBalance+" | "+savBalance);
// withDraw(501,"saving");
// console.log(globalBalance+" | "+chkBalance+" | "+savBalance);
//

//test cases:deposit
  // depoSit(1000,'saving');
  // depoSit(1000,'checking');
  // console.log(globalBalance+" | "+savBalance);
  // console.log(globalBalance+" | "+savBalance);

// .addEventListener('click', function(a, b) {
//   functionIWantCalled(a, b);
// })
