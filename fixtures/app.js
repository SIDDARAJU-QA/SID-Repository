
import {test as base} from './loginf'
import { opertunitypage } from '../Pages/opertunities'
import { contactpage } from '../Pages/contact'


export const test= base.extend({
    opper:async ({loginadmin},use)=>{
        const oppertunityapp=new opertunitypage(loginadmin)
        
        await use(oppertunityapp)

    }
})