import PageTemplate from "../Templates/PageTemplate";

export default function Fortune() {
  return (
    <PageTemplate
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
