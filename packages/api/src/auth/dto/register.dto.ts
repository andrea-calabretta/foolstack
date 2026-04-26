import { UserRole } from '../../user/user.entity';

export class RegisterDto {
  email: string;
  password: string;
  name: string;
  role?: UserRole;
}
