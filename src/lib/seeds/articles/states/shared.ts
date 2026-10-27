// Shared building blocks for the state guides. Provider facts mirror FACTS
// and the Trustpilot fields in ../../home-warranty.ts (kept here as plain
// data because that module imports the articles - importing it back would be
// circular). Update both together.

export type ProviderId =
  | "choice-home-warranty"
  | "american-home-shield"
  | "select-home-warranty"
  | "first-american"
  | "home-warranty-of-america"
  | "home-service-club"
  | "2-10-home-buyers-warranty";

const PROVIDERS: Record<ProviderId, { name: string; fee: string; caps: string; trustpilot: string }> = {
  "choice-home-warranty": { name: "Choice Home Warranty", fee: "~$100", caps: "$3,000 per covered item", trustpilot: "3.9 (63,234)" },
  "american-home-shield": { name: "American Home Shield", fee: "$100 or $125", caps: "Up to $5,000 HVAC; $2,000-$4,000 per appliance", trustpilot: "3.5 (16,329)" },
  "select-home-warranty": { name: "Select Home Warranty", fee: "~$60-$75", caps: "~$500 per item; ~$3,000 HVAC", trustpilot: "3.2 (6,413)" },
  "first-american": { name: "First American", fee: "$100 or $125", caps: "$3,500-$7,000 appliances; high HVAC limits", trustpilot: "4.0 (19,350)" },
  "home-warranty-of-america": { name: "Home Warranty of America", fee: "~$100", caps: "Up to $5,000 on most repairs", trustpilot: "4.0 (3,403)" },
  "home-service-club": { name: "The Home Service Club", fee: "~$65-$125", caps: "$300-$2,000 per item", trustpilot: "No profile" },
  "2-10-home-buyers-warranty": { name: "2-10 Home Buyers Warranty", fee: "$65-$125", caps: "$5,000 AC; $2,000 per appliance", trustpilot: "No profile" },
};

export const ORDER: ProviderId[] = [
  "choice-home-warranty",
  "american-home-shield",
  "select-home-warranty",
  "first-american",
  "home-warranty-of-america",
  "home-service-club",
  "2-10-home-buyers-warranty",
];

/**
 * Availability + key-terms table for one state. `notes` holds the
 * state-specific "availability / what to know" cell for each provider.
 */
export function providerTable(stateName: string, notes: Record<ProviderId, string>): string {
  const rows = ORDER.map((id) => {
    const p = PROVIDERS[id];
    return `<tr><td><a href="/reviews/${id}">${p.name}</a></td><td>${notes[id]}</td><td>${p.fee}</td><td>${p.caps}</td><td>${p.trustpilot}</td></tr>`;
  }).join("\n");
  return `<table>
<thead><tr><th>Company</th><th>In ${stateName}</th><th>Service fee</th><th>Key limits</th><th>Trustpilot (Oct 2026)</th></tr></thead>
<tbody>
${rows}
</tbody>
</table>
<p><em>Fees and limits are typical figures from published plans and sample contracts and vary by plan, state and contract year; confirm them in the sample contract for ${stateName}. Choice, Home Warranty of America and The Home Service Club are sister brands under the same parent company, Rely Home.</em></p>`;
}

/** Links block to the other state guides (excludes the current one). */
const STATES: [string, string][] = [
  ["texas", "Texas"],
  ["california", "California"],
  ["florida", "Florida"],
  ["arizona", "Arizona"],
  ["georgia", "Georgia"],
  ["north-carolina", "North Carolina"],
];
export function otherStates(current: string): string {
  const links = STATES.filter(([slug]) => slug !== current)
    .map(([slug, name]) => `<a href="/articles/best-home-warranty-${slug}">${name}</a>`)
    .join(" · ");
  return `<p><strong>Other state guides:</strong> ${links} · <a href="/articles/home-warranty-by-state">All states</a></p>`;
}
