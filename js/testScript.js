
var pages = {
    Choose: Choose,
    Home: Home,
    Offroad: Offroad,
    Wheels: Wheels,
    Lightning: Lightning,
    Accessoaries: Accesoaries,
    Expedition: Expedition,
    About: About,
    Contacts: Contacts,
};

var hash = "";

function route(state){
    $(document).ready(function(){
        if(state === "load"){
            window.location.hash = "Home";
            hash = "Home";
        }
        else{
            hash = window.location.href.split('#')[1];
        }
        crossroads.addRoute("{hash}", function(){
            container.innerHTML = pages["Home"];
        });
        homePageBuilder();
        crossroads.parse(hash);
    });
}

function homePageBuilder(){
    let count = 30; // this is the count of the items that the function will recieve from the server 
    pages["Home"] += '<div class="row" class="rowItems">';
    for(let i = 1; i <= count; i++){
        pages["Home"] += itemBuildController("Brake disc", i, "Some random brake disc"); // The values passed to itemBuildController should be recieved from the server, but since i have no server i hardcoded them
        if(i%4 == 0){
            pages["Home"] += '</div>';
            pages["Home"] += '<div class="row" class="rowItems">';
        }
    }
    pages["Home"] += '</div>';
}



function itemBuildController(name, price, description){
    let templateScript = Handlebars.compile(item);
    let context = { "name" : name, "description" : description, "price" : price };
    return templateScript(context);
}