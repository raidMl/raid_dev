function change_color() {



    // var select = document.sel.selectedIndex;
    // var selected = document.sel[select].value;
    var a = document.getElementById("themes").value;
    // console.log(a);
    if (a == 1) {
        // window.location.reload();

        document.getElementById("banner").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";

        document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";
        document.getElementById("footer").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";

        // document.getElementByClassName("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        document.getElementById("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";


        var many = document.getElementsByClassName("fas");
        for (i = 0; i < many.length; i++)

        // console.log(many);
            many[i].style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";

        var btn = document.getElementsByClassName("btn-primary");
        console.log(btn);
        for (i = 0; i < btn.length; i++)
            btn[i].style.backgroundImage = "linear-gradient(to right, rgb(132, 17, 136), rgb(68, 4, 62))";
    } else
    if (a == 2) {

        document.getElementById("banner").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";

        document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        document.getElementById("footer").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";

        // document.getElementByClassName("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        document.getElementById("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";


        var many = document.getElementsByClassName("fas");
        for (i = 0; i < many.length; i++)

        // console.log(many);
            many[i].style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";

        var btn = document.getElementsByClassName("btn-primary");
        console.log(btn);
        for (i = 0; i < btn.length; i++)
            btn[i].style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
    } else if (a == 3) {
        document.getElementById("banner").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";

        document.getElementById("navbar").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";
        document.getElementById("footer").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";

        // document.getElementByClassName("btn-primary").style.backgroundImage = "linear-gradient(to right, rgb(45 68 185), rgb(2 1 23))";
        // document.getElementById("btn-primary").style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";
        var btn = document.getElementsByClassName("btn-primary");
        console.log(btn);
        for (i = 0; i < btn.length; i++)
            btn[i].style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";

        var many = document.getElementsByClassName("fas");
        for (i = 0; i < many.length; i++)
        // console.log(many);
            many[i].style.backgroundImage = "linear-gradient(to right, #00889e, rgb(1 35 43))";















    }


    document.getElementById("themes").append(selected);




}