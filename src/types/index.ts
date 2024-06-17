export interface Atelie {
  AtelieID: number
  Nome: string
  UsuarioID: number
  VerificacaoDocumentos: string
}

export interface Estilistum {
  EstilistaID: number
  Nome: string
  UsuarioID: number
  VerificacaoDocumentos: string
}

export interface Perfil {
  PerfilID: number
  UsuarioID: number
  Biografia: string | null
  FotoPerfil: string | null
}

export interface User {
  UsuarioID: number
  Nome: string
  CPF_CNPJ: string
  Email: string
  Telefone: string
  Senha: string
  Tipo: 'Atelie' | 'Estilista'
  Atelie: Atelie | null
  Estilistum: Estilistum | null
  Perfil: Perfil | null
}

export interface DefaultResponse {
  message: string
}

export interface RegisterResponse extends DefaultResponse {
  usuario: User
}
