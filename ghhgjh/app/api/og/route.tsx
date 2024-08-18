import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = {
  width: 300,
  height: 300,
};

export async function GET() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: '#000000' }}>
        <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>[ Outpost ]</h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
