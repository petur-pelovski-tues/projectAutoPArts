
var routes = {
    Home: Home,
    Choose: Choose,
    Offroad: Offroad,
    Wheels: Wheels,
    Lightning: Lightning,
    Accessoaries: Accessoaries,
    Expedition: Expedition,
    About: About,
    Contacts: Contacts,
};


function route(state){
    if(state === "load"){
        container.innerHTML = routes['Home'];
        window.location.href = "#Home";
    }
    else{
        if(window.location.hash){
            let hash = window.location.href.split('#')[1];
            container.innerHTML = routes[hash];
            if(hash === "Home"){
            }
        }
        else{
            let hash = 'home';
            container.innerHTML = routes[hash];
        }
    }
}

