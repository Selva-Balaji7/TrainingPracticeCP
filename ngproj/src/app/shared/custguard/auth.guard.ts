import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(!!sessionStorage.getItem("users")){
    return true;
  }else{
    return false;
  }
 
};
