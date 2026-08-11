import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Kepsha.VIP — Stěhování, přeprava nákladu a vyklizení po ČR i Evropě";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0A0A0B";
const SIGNAL = "#CDFF3E";
const BONE = "#F4F3EE";
const MUTED = "#A3A39B";

// Load a Google font subset for correct Czech diacritics (latin-ext).
async function loadFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })).text();
    const src = css.match(/src: url\((.+?)\) format/);
    if (!src) return null;
    const res = await fetch(src[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  const brand = "Kepsha.VIP";
  const eyebrow = "STĚHOVÁNÍ · PŘEPRAVA NÁKLADU · VYKLÍZENÍ";
  const headline = "Převezeme. Vyřešíme. Zařídíme.";
  const sub = "Po celé ČR i Evropě · +420 775 929 681";
  const allText = brand + eyebrow + headline + sub;

  const [display, body] = await Promise.all([
    loadFont("Space+Grotesk", 700, allText),
    loadFont("Inter", 500, allText),
  ]);

  const fonts = [
    display && { name: "Display", data: display, weight: 700 as const, style: "normal" as const },
    body && { name: "Body", data: body, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 700 | 500; style: "normal" }[];

  const displayFont = display ? "Display" : "sans-serif";
  const bodyFont = body ? "Body" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          backgroundImage:
            "radial-gradient(900px 500px at 82% -10%, rgba(205,255,62,0.18), transparent 60%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "auto, 48px 48px, 48px 48px",
          padding: "64px 72px",
        }}
      >
        {/* Top row: brand + coverage badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 16, height: 16, borderRadius: 16, background: SIGNAL }} />
            <div style={{ display: "flex", fontFamily: displayFont, fontSize: 34, color: BONE, fontWeight: 700 }}>
              <span>Kepsha</span>
              <span style={{ color: SIGNAL }}>.VIP</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: bodyFont,
              fontSize: 22,
              color: SIGNAL,
              border: `1px solid rgba(205,255,62,0.35)`,
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            ČR + Evropa
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: bodyFont, fontSize: 24, letterSpacing: 3, color: MUTED, marginBottom: 22 }}>
            {eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: displayFont, fontSize: 92, lineHeight: 1.0, fontWeight: 700 }}>
            <div style={{ color: BONE }}>Převezeme.</div>
            <div style={{ color: BONE }}>Vyřešíme.</div>
            <div style={{ color: SIGNAL }}>Zařídíme.</div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ fontFamily: bodyFont, fontSize: 26, color: MUTED }}>{sub}</div>
          <div style={{ fontFamily: bodyFont, fontSize: 26, color: BONE }}>kepsha-vip.cz</div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
