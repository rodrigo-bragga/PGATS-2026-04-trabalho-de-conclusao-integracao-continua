import { ServicoDePagamento } from "../src/servicoDePagamento.js";
import assert from "node:assert";

describe("Teste de serviço de pagamento", () => {(
    it("Deve registrar um pagamento com categoria padrão com valor até 100", () => {
      const servicoDePagamento = new ServicoDePagamento();

      servicoDePagamento.pagar("0123-4567-8910", "Samar", 100);

      const retornoPagamento = servicoDePagamento.ultimoPagamento();

      assert.equal(retornoPagamento.codigoBarras, "0123-4567-8910");
      assert.equal(retornoPagamento.empresa, "Samar");
      assert.equal(retornoPagamento.valor, 100);
      assert.equal(retornoPagamento.categoria, "padrão");
    }),
    it("Deve registrar um pagamento com categoria cara com valor acima de 100", () => {
      const servicoDePagamento = new ServicoDePagamento();

      servicoDePagamento.pagar("0123-4567-8910", "Intelbras", 101);

      const retornoPagamento = servicoDePagamento.ultimoPagamento();

      assert.equal(retornoPagamento.codigoBarras, "0123-4567-8910");
      assert.equal(retornoPagamento.empresa, "Intelbras");
      assert.equal(retornoPagamento.valor, 101);
      assert.equal(retornoPagamento.categoria, "cara");
    }),
    it("Deve mostrar último registro de pagamento", () => {
      const servicoDePagamento = new ServicoDePagamento();

      servicoDePagamento.pagar("0198-7654-3210", "Petrobras", 1);

      servicoDePagamento.pagar("0123-4567-8910", "Intelbras", 1001);

      const retornoPagamento = servicoDePagamento.ultimoPagamento();

      assert.equal(retornoPagamento.codigoBarras, "0123-4567-8910");
      assert.equal(retornoPagamento.empresa, "Intelbras");
      assert.equal(retornoPagamento.valor, 1001);
      assert.equal(retornoPagamento.categoria, "cara");
    }));
});
