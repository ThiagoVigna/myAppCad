// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthResponse {
  user: {
    token(arg0: string, token: any);
    // eslint-disable-next-line @typescript-eslint/member-ordering
    id: number;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    nome: string;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    cpf: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/member-ordering
    access_token: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/member-ordering
    expires_in: number;
};
}
