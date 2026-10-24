export function renderPage() {
  const cards = [
    {
      id: "card-1",
      front: { eyebrow: "Design", title: "Nadia Haddad", sub: "Product Designer" },
      back: {
        heading: "Nadia Haddad",
        detail: "7 years in B2B SaaS design. Led the redesign that cut onboarding drop-off by 34%. Based in Beirut, works async with teams in 4 time zones.",
      },
      accent: "#5b8cff",
    },
    {
      id: "card-2",
      front: { eyebrow: "Engineering", title: "Omar Fakih", sub: "Backend Lead" },
      back: {
        heading: "Omar Fakih",
        detail: "Built the payments pipeline handling 40k tx/day with zero downtime in 18 months. Prefers Postgres over NoSQL for anything with money in it.",
      },
      accent: "#2fb67c",
    },
    {
      id: "card-3",
      front: { eyebrow: "Growth", title: "Lina Boutros", sub: "Marketing Strategist" },
      back: {
        heading: "Lina Boutros",
        detail: "Ran the campaign that took a cold-outreach reply rate from 2% to 11% by rewriting every subject line around the recipient's own metrics.",
      },
      accent: "#e0834f",
    },
    {
      id: "card-4",
      front: { eyebrow: "Data", title: "Karim Yazbek", sub: "Data Analyst" },
      back: {
        heading: "Karim Yazbek",
        detail: "Builds the weekly revenue dashboard the whole team actually opens. Caught a $12k billing bug before it hit a single invoice.",
      },
      accent: "#c75b9e",
    },
    {
      id: "card-5",
      front: { eyebrow: "Support", title: "Yara Chamoun", sub: "Customer Success" },
      back: {
        heading: "Yara Chamoun",
        detail: "Holds a 96% CSAT across 400+ tickets this quarter. Writes the macros everyone else on the team quietly copies.",
      },
      accent: "#4fb6c7",
    },
    {
      id: "card-6",
      front: { eyebrow: "Ops", title: "Rami Nassar", sub: "Operations Manager" },
      back: {
        heading: "Rami Nassar",
        detail: "Cut vendor onboarding time from 3 weeks to 4 days by replacing a 9-step email chain with a single form and an approval webhook.",
      },
      accent: "#9a7bd1",
    },
  ];

  const cardHtml = cards
    .map(
      (c) => `
    <button type="button" class="flip-card" id="${c.id}" data-flipped="false" aria-pressed="false">
      <div class="flip-card-inner">
        <div class="flip-card-face flip-card-front" style="border-top-color:${c.accent}">
          <span class="eyebrow">${escapeHtml(c.front.eyebrow)}</span>
          <h2>${escapeHtml(c.front.title)}</h2>
          <p class="sub">${escapeHtml(c.front.sub)}</p>
          <span class="hint">Click to flip</span>
        </div>
        <div class="flip-card-face flip-card-back" style="border-top-color:${c.accent}">
          <h3>${escapeHtml(c.back.heading)}</h3>
          <p class="detail">${escapeHtml(c.back.detail)}</p>
          <span class="hint">Click to flip back</span>
        </div>
      </div>
    </button>`
    )
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Flip Card Team Grid — Puzzle #24</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, Segoe UI, sans-serif;
    background: #0b0e14;
    color: #eee;
    min-height: 100vh;
    padding: 48px 24px;
  }
  .wrap { max-width: 1000px; margin: 0 auto; }
  h1 { font-size: 1.8rem; margin-bottom: 0.3rem; text-align: center; }
  p.lede { text-align: center; color: #99a; margin-bottom: 40px; }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    perspective: 1200px;
  }
  .flip-card {
    position: relative;
    width: 100%;
    height: 220px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
  }
  .flip-card[data-flipped="true"] .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 14px;
    border-top: 4px solid #555;
    background: #171b26;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.35);
  }
  .flip-card-back {
    transform: rotateY(180deg);
    justify-content: flex-start;
    padding-top: 28px;
  }
  .eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #889;
    margin-bottom: 8px;
  }
  .flip-card-front h2 { margin: 0 0 4px; font-size: 1.25rem; }
  .flip-card-front .sub { margin: 0; color: #aab; font-size: 0.9rem; }
  .flip-card-back h3 { margin: 0 0 10px; font-size: 1.1rem; }
  .flip-card-back .detail { margin: 0; font-size: 0.85rem; line-height: 1.45; color: #ccd; }
  .hint {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    font-size: 0.68rem;
    color: #667;
  }
  .flip-card:focus-visible .flip-card-inner {
    outline: 2px solid #5b8cff;
    outline-offset: 4px;
  }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Meet the team</h1>
    <p class="lede">Click any card for the detail behind the headline — real 3D rotateY flip, not a crossfade.</p>
    <div class="grid">
${cardHtml}
    </div>
  </div>
  <script>
    document.querySelectorAll(".flip-card").forEach((card) => {
      card.addEventListener("click", () => {
        const flipped = card.getAttribute("data-flipped") === "true";
        card.setAttribute("data-flipped", String(!flipped));
        card.setAttribute("aria-pressed", String(!flipped));
      });
    });
  </script>
</body>
</html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
