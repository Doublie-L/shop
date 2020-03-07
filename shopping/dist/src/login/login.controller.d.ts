import { AuthService } from '../auth/auth.service';
export declare class LoginController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        user: import("../interfaces/user.interface").User;
    }>;
    getProfile(req: any): any;
}
