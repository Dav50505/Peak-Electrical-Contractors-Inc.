import { ImageResponse } from "next/og";

export const alt = "Peak Electrical Contractors | Sacramento Electricians";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e3a5f",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 16 }}>
          Peak Electrical Contractors
        </div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>
          Sacramento Electricians | Panel Upgrades, EV Chargers & Rewiring
        </div>
      </div>
    ),
    { ...size }
  );
}
