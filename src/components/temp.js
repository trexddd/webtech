import {xi} from './Build'
var nam=[];
        var s=[];
        var sum=0
        for(let i=0;i<xi.length;i++){
        s=xi[i].split("_");
        nam[i]=s[0];
        sum+=parseInt(s[1]);
        }
        nam[8]=sum;
export{nam};