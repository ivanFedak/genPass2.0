
//////////// def
import spoller from './libs/spoller';
import slider from './libs/slider';
import dynamicAdaptive from './libs/dynamicAdaptive';
import def from './services/default';
////////////

///////////Own
import burger from './modules/burger';
import checkBox from './modules/checkbox';
import generate from './components/generatePassword';


///////////


// import getResource from './services/request'


window.onload = function (){
    def();
    burger();
    checkBox();
    generate();
    // spoller();
    // slider();
    // dynamicAdaptive();
};