namearray=[];

function submit(){
    var name_1=document.getElementById("name1").value;
    var name_2=document.getElementById("name2").value;
    var name_3=document.getElementById("name3").value;
    var name_4=document.getElementById("name4").value;

    namearray.push(name_1);
    namearray.push(name_2);
    namearray.push(name_3);
    namearray.push(name_4);

    console.log(namearray)

    document.getElementById("display_name").innerHTML=namearray;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}

function sorting(){
    namearray.sort();
    console.log(namearray);
    document.getElementById("display_name").innerHTML=namearray;
}