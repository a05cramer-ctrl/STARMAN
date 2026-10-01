window.STAR_CFG = {
  NAME: "STARMAN",
  TICKER: "STAR",
  CA: "5HLLtoRKS7BCHKK5veePQ2M22P3bN6Z5AyxCoQVaTrQd",
  CHAIN: "solana",
  PAD: "pumpfun",
  PAIR: "",
  PAIR_NAME: "",
  X: "https://x.com/starmanroad",
  BUY: "",
  CHART: ""
};
// pump.fun has no pair: drop the "paired with" lines
(function () {
  if (window.STAR_CFG.PAD !== "pumpfun") return;
  function fix() {
    document.querySelectorAll("[data-pairname]").forEach(function (el) {
      var p = el.closest("p"); if (!p || !p.isConnected) return;
      if (p.classList.contains("kick")) { p.remove(); return; }
      p.innerHTML = "$STAR &middot; <a data-x>X</a> &middot; <a data-chart>chart</a>";
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fix); else fix();
})();
