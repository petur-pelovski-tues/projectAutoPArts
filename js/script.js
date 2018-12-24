
var pages = {
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
        alert(hash);
        crossroads.addRoute("{hash}", function(){
            $(container).load(pages[hash]);
        });
        crossroads.parse(document.location.pathname);
    });
}