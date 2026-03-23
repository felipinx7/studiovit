const numeroTelefone = '5588992179617'

export function mensagemWhatsapp(mensagem: string) {
  return `https://wa.me/${numeroTelefone}?text=${mensagem}`
}
