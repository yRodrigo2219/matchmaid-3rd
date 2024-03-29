export const isValid = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido!",
    tip: (
      <span>
        <div>Email inválido</div>
        <div>Ex: exemplo_01@email.com</div>
      </span>
    ),
  },
  senha: {
    regex: /^.{8,}$/,
    message: "Senha inválida",
    tip: (
      <span>
        <div>Deve conter pelo menos 8 caracteres</div>
      </span>
    ),
  },
  cpf: {
    regex: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}$/,
    message: "CPF inválido",
    tip: (
      <span>
        <div>Deve estar no modelo</div>
        <div>ex: XXX.XXX.XXX-XX</div>
      </span>
    ),
  },
  nome: {
    regex: /^[a-zA-Z\u00C0-\u00FF ]{3,}$/,
    message: "Nome inválido",
    tip: (
      <span>
        <div>Deve conter pelo menos 3 letras</div>
        <div>Não pode conter números</div>
      </span>
    ),
  },
  cep: {
    regex: /^[0-9]{5}-?[0-9]{3}$/,
    message: "CEP inválido",
    tip: (
      <span>
        <div>Deve estar no modelo</div>
        <div>XXXXX-XXX</div>
      </span>
    ),
  },
  cidade: {
    regex: /^[a-zA-Z\u00C0-\u00FF ]{3,}$/,
    message: "Nome de cidade inválido",
    tip: (
      <span>
        <div>Deve conter pelo menos 3 letras</div>
      </span>
    ),
  },
  estado: {
    regex: /^[A-Z]{2}$/i,
    message: "Nome de estado inválido",
    tip: (
      <span>
        <div>Deve conter 2 letras</div>
        <div>Ex: BA</div>
      </span>
    ),
  },
  numeroCasa: {
    regex: /^[0-9]{1,}[A-Za-z]{0,}$/,
    message: "Número inválido",
    tip: (
      <span>
        <div>Deve conter pelo menos 1 dígito</div>
      </span>
    ),
  },
  precoHora: {
    regex: /^[0-9]{1,}$/,
    message: "Preço inválido",
    tip: (
      <span>
        <div>Dever ser inteiro e conter pelo menos um dígito</div>
      </span>
    ),
  },
  bairro: {
    regex: /^[a-zA-Z\u00C0-\u00FF ]{3,}$/,
    message: "Nome de bairro inválido",
    tip: (
      <span>
        <div>Deve conter pelo menos 3 letras</div>
      </span>
    ),
  },
  rua: {
    regex: /^[a-zA-Z0-9.\u00C0-\u00FF ]{5,}$/,
    message: "Nome de rua inválido",
    tip: (
      <span>
        <div>Deve conter pelo menos 5 caracteres</div>
      </span>
    ),
  },
  telefone: {
    regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/,
    message: "Número de celular inválido",
    tip: (
      <span>
        <div>Digite o DDD e o número do celular</div>
        <div>(XX)XXXXXXXXX</div>
      </span>
    ),
  },
};
