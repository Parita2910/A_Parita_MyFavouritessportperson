import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'contentTypeFilter'
})
export class FiltersPipe implements PipeTransform {

  transform(contentList: Content[], filterByThisType?: string): Content[] {
    console.log("filter value: ", filterByThisType);
    return contentList.filter(c => {
      if (filterByThisType) {
        return c.type?.toLowerCase() == filterByThisType.toLowerCase();
      } else { 
        return !c.type; 
      }
    });
  }

}
