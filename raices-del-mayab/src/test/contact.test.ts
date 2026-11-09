import { describe, expect, it } from "vitest";
import { whatsappLink } from "@/lib/contact";

describe("WhatsApp de pedidos", () => {
  it("abre el chat con el número 656 751 8415 (México)", () => {
    expect(whatsappLink("hola")).toBe("https://wa.me/526567518415?text=hola");
  });
});
