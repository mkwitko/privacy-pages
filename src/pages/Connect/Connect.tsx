import ConnectTemplate from "../Templates/ConnectTemplate";

export default function Connect() {
  return (
    <ConnectTemplate
      name="Connect"
      email="comercial@prosperapps.com.br"
      excludeEmail="ti@prosperapps.com.br"
      people={[
        {
          name: "Mauricio",
          email: "ti@prosperapps.com.br",
          type: "Desenvolvedor",
          position: "Lider de Desenvolvimento",
        },
        {
          name: "Julio Fleck",
          email: "comercial@prosperapps.com.br",
          type: "Comercial",
          position: "Lider de Vendas",
        },
      ]}
    />
  );
}
