interface AuthInterface {
    _id: number;
    userName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    minLenName: number;
    minLenPassword: number;
}

export const configReg: AuthInterface = {
    _id: Date.now(),
    userName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    minLenName: 5,
    minLenPassword: 8,
  };
  