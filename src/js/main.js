
//////////// def
import spoller from './libs/spoller';
import slider from './libs/slider';
import dynamicAdaptive from './libs/dynamicAdaptive';
import def from './services/default';
////////////

///////////Own
import burger from './modules/burger';



///////////


// import getResource from './services/request'


window.onload = function (){
    def();
    burger();

    // spoller();
    // slider();
    // dynamicAdaptive();
}