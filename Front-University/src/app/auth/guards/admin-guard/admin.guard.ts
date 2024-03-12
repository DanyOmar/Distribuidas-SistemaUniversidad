import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import {Injectable} from '@angular/core'
import { StorageService } from '../../services/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: "root"
})

export class AdminGuard implements CanActivate{

  constructor(
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    if(StorageService.isStudentLoggedIn()){
      this.router.navigateByUrl("/student/dashboard");
      this.snackbar.open("No tienes acceso a esta página.","Cerrar",{duration:5000});
      return false;
    }else if(!StorageService.hasToken()){
      StorageService.logout();
      this.router.navigateByUrl("/login");
      this.snackbar.open("No has accedido","Close",{duration:5000});
      return false;
    }
    return true;
  }
}
