import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInstate = false; // biến lưu trạng thái đăng nhập của người dùng

  login() {
    // xử lý đăng nhập ở đây
    // ...
    this.isLoggedInstate = true; // đánh dấu người dùng đã đăng nhập thành công
  }

  logout() {
    // xử lý đăng xuất ở đây
    // ...
    this.isLoggedInstate = false; // đánh dấu người dùng đã đăng xuất
  }

  isLoggedIn(): boolean {
    return this.isLoggedInstate; // trả về trạng thái đăng nhập của người dùng
  }
}
