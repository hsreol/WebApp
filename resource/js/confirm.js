function Send(){
    if(confirm("보내시겠습니까?")){
        alert("무사히 보내졌습니다.")
        window.location.reload();
    }
    else{
        alert("취소되었습니다.")
    }
}