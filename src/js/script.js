const vinhos = [
  { nome: "Cabernet Sauvignon", tipo: "Tinto", safra: 2018, estoque: 10 },
  { nome: "Chardonnay", tipo: "Branco", safra: 2020, estoque: 3 },
  { nome: "Merlot", tipo: "Tinto", safra: 2017, estoque: 6 },
  { nome: "Rosé Provence", tipo: "Rosé", safra: 2021, estoque: 2 },
];

function adicionarVinho(nome, tipo, safra, estoque) {
  vinhos.push({ nome, tipo, safra, estoque });
}

function listarVinhos() {
  console.log("🍷 Lista de Vinhos:");
  vinhos.forEach(vinho => {
    console.log(`- ${vinho.nome} | Tipo: ${vinho.tipo} | Safra: ${vinho.safra} | Estoque: ${vinho.estoque}`);
  });
}

function vinhosComEstoqueBaixo() {
  const baixos = vinhos.filter(vinho => vinho.estoque < 5);
  console.log("⚠️ Vinhos com estoque abaixo de 5:");
  baixos.forEach(v => console.log(`- ${v.nome} (Estoque: ${v.estoque})`));
  alert(`⚠️ ${baixos.length} vinho(s) com estoque baixo:\n` + baixos.map(v => `• ${v.nome} (${v.estoque})`).join("\n"));
}

function calcularEstoqueTotal() {
  const total = vinhos.reduce((soma, vinho) => soma + vinho.estoque, 0);
  console.log(`📦 Estoque total da vinícola: ${total} garrafas`);
  alert(`📦 Estoque total: ${total} garrafas`);
}

function nomesEmCaixaAlta() {
  const nomes = vinhos.map(v => v.nome.toUpperCase());
  console.log("🆙 Nomes dos vinhos em CAIXA ALTA:", nomes);
  alert("🆙 Vinhos em caixa alta:\n" + nomes.join("\n"));
}

listarVinhos();
vinhosComEstoqueBaixo();
calcularEstoqueTotal();
nomesEmCaixaAlta();
