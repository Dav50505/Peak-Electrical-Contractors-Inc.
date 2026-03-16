/**
 * Blog post content
 * All posts live here — used by blog index, individual pages, and homepage preview.
 */

import type { BlogPost } from "@/lib/blog-types";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-a-zinsco-panel-and-why-replace-it",
    title: "What is a Zinsco Panel and Why Should You Replace It?",
    tag: "Panel Safety",
    excerpt:
      "Zinsco panels were common in Sacramento homes built in the 1960s and 70s — but they're now known to be fire hazards. Here's what every homeowner needs to know.",
    date: "2026-01-15",
    image: "/images/blog/what-is-a-zinsco-panel-and-why-replace-it.png",
    imageAlt: "Zinsco electrical panel being replaced by a licensed electrician",
    content: [
      {
        type: "p",
        text: "If you own a Sacramento-area home built between the 1960s and 1970s, there's a good chance your electrical panel was manufactured by Zinsco. These panels were once popular for their low cost, but decades of use have revealed serious safety issues that make them a fire risk today.",
      },
      {
        type: "h2",
        text: "What is a Zinsco Panel?",
      },
      {
        type: "p",
        text: "Zinsco (also known as Zinsco-Sylvania or GTE-Sylvania) manufactured electrical panels and breakers from the 1950s through the 1970s. They were installed in millions of homes across California, including many in Sacramento, Elk Grove, and the surrounding suburbs.",
      },
      {
        type: "p",
        text: "You can often identify a Zinsco panel by its distinctive design: breakers that slide into a bus bar, with a characteristic look that differs from modern Square D, Eaton, or Siemens panels. The Zinsco name may appear on the panel door or inside the enclosure.",
      },
      {
        type: "h2",
        text: "Why Are Zinsco Panels Dangerous?",
      },
      {
        type: "p",
        text: "Over time, Zinsco panels develop several failure modes that create fire and shock hazards:",
      },
      {
        type: "ul",
        items: [
          "Breakers can fail to trip during overloads or short circuits, allowing wires to overheat and potentially start a fire.",
          "The aluminum bus bar corrodes and overheats, causing arcing and melting.",
          "Breakers can fuse to the bus bar, making them impossible to shut off in an emergency.",
          "Many Zinsco panels no longer meet current National Electrical Code (NEC) requirements.",
        ],
      },
      {
        type: "h2",
        text: "When Should You Replace a Zinsco Panel?",
      },
      {
        type: "p",
        text: "If you have a Zinsco panel, replacement is strongly recommended — especially if you're planning to sell your home, add major loads (EV charger, heat pump, solar), or if your insurance company has flagged it. Many insurers now refuse to cover homes with Zinsco panels or require replacement as a condition of coverage.",
      },
      {
        type: "p",
        text: "Peak Electrical Contractors specializes in Zinsco panel replacements in the Sacramento area. We work directly with insurance companies when your policy covers the upgrade, and we handle all permitting and inspections. Contact us for a free assessment.",
      },
    ],
  },
  {
    slug: "smud-ev-charger-rebates-2026-sacramento-guide",
    title: "SMUD EV Charger Rebates in 2026: Complete Sacramento Guide",
    tag: "SMUD Rebates",
    excerpt:
      "The SMUD Charge@Home program offers up to $500 back on EV charger circuit installation. Learn who qualifies, how much you can save, and how to apply.",
    date: "2026-02-03",
    image: "/images/blog/smud-ev-charger-rebates-2026-sacramento-guide.png",
    imageAlt: "SMUD EV charger rebate application for Sacramento homeowners",
    content: [
      {
        type: "p",
        text: "Sacramento Municipal Utility District (SMUD) offers rebates to help Sacramento-area homeowners offset the cost of installing EV charger circuits. As an official SMUD-Approved Contractor, Peak Electrical Contractors handles the paperwork so you can focus on driving electric.",
      },
      {
        type: "h2",
        text: "Charge@Home Rebate: Up to $500",
      },
      {
        type: "p",
        text: "The SMUD Charge@Home program provides rebates of up to $500 for qualifying Level 2 (240V) EV charger circuit installations. To qualify, you must be a SMUD customer, have the work performed by a SMUD-Approved Contractor like Peak, and meet program guidelines.",
      },
      {
        type: "h2",
        text: "What's Covered?",
      },
      {
        type: "p",
        text: "The rebate typically covers the cost of the dedicated circuit, permit, and installation labor. Some charger models may qualify for additional incentives. Program details can change — we recommend checking current SMUD guidelines or asking us during your free consultation.",
      },
      {
        type: "h2",
        text: "How Peak Makes It Easy",
      },
      {
        type: "p",
        text: "We verify your eligibility, submit the rebate application on your behalf, and can often apply the rebate as an upfront discount so you pay less out of pocket. No paperwork on your end — we handle it all.",
      },
      {
        type: "p",
        text: "Ready to power up your EV? Contact Peak for a free estimate and rebate eligibility check.",
      },
    ],
  },
  {
    slug: "5-signs-your-electrical-panel-needs-an-upgrade",
    title: "5 Signs Your Home's Electrical Panel Needs an Upgrade",
    tag: "Electrical Tips",
    excerpt:
      "Flickering lights, tripped breakers, and burning smells are more than annoyances — they're warning signs. Know when it's time to call a licensed electrician.",
    date: "2026-02-20",
    image: "/images/blog/5-signs-electrical-panel-needs-upgrade.png",
    imageAlt:
      "Sacramento homeowner inspecting electrical panel with flickering lights",
    content: [
      {
        type: "p",
        text: "Your electrical panel is the heart of your home's electrical system. When it's outdated or overloaded, it can't safely distribute power — and that can lead to flickering lights, tripped breakers, and in worst cases, fire. Here are five signs it's time for an upgrade.",
      },
      {
        type: "h2",
        text: "1. Flickering or Dimming Lights",
      },
      {
        type: "p",
        text: "Lights that flicker or dim when you turn on the AC, dryer, or other large appliances suggest your panel is struggling to meet demand. This often means your service is undersized for modern electrical loads.",
      },
      {
        type: "h2",
        text: "2. Frequently Tripped Breakers",
      },
      {
        type: "p",
        text: "Breakers that trip regularly — especially when using multiple appliances — indicate overloaded circuits. If you're constantly resetting breakers, your panel may need more capacity or a full upgrade.",
      },
      {
        type: "h2",
        text: "3. Buzzing, Humming, or Burning Smells",
      },
      {
        type: "p",
        text: "Unusual sounds or odors from your panel are serious warning signs. Loose connections, corroded bus bars, or failing breakers can cause arcing and overheating. Don't ignore these — call a licensed electrician immediately.",
      },
      {
        type: "h2",
        text: "4. Adding Major New Loads",
      },
      {
        type: "p",
        text: "Planning to add an EV charger, heat pump, solar panels, or a major renovation? Many older 100-amp panels can't handle the additional load. Upgrading to 200-amp service is often required and gives you room to grow.",
      },
      {
        type: "h2",
        text: "5. Insurance or Home Sale Requirements",
      },
      {
        type: "p",
        text: "Insurance companies increasingly require replacement of unsafe panels (Zinsco, Federal Pacific) before offering coverage. Similarly, home inspectors often flag outdated panels during a sale. Proactively upgrading avoids last-minute surprises.",
      },
      {
        type: "p",
        text: "If any of these sound familiar, contact Peak Electrical for a free assessment. We'll tell you exactly what you need — no pressure, no surprises.",
      },
    ],
  },
  {
    slug: "level-1-vs-level-2-ev-charging-sacramento",
    title: "Level 1 vs Level 2 EV Charging: What Sacramento Homeowners Need to Know",
    tag: "EV Charging",
    excerpt:
      "Level 1 charging uses a standard outlet; Level 2 needs a 240V circuit. Here's how they compare and why most Sacramento EV owners choose Level 2.",
    date: "2026-03-01",
    image: "/images/blog/level-1-vs-level-2-ev-charging-sacramento.png",
    imageAlt: "Level 2 EV charger installation for Sacramento homeowner",
    content: [
      {
        type: "p",
        text: "If you've recently bought an electric vehicle or are considering one, you've probably heard about Level 1 and Level 2 charging. Understanding the difference helps you choose the right setup for your Sacramento home.",
      },
      {
        type: "h2",
        text: "Level 1 Charging: Standard Outlet",
      },
      {
        type: "p",
        text: "Level 1 charging uses a standard 120-volt household outlet. No special installation is required — you plug in the cable that came with your EV. The downside: it's slow. Most EVs gain only 3–5 miles of range per hour of charging, so a full charge can take 24 hours or more.",
      },
      {
        type: "h2",
        text: "Level 2 Charging: Dedicated 240V Circuit",
      },
      {
        type: "p",
        text: "Level 2 charging requires a dedicated 240-volt circuit, similar to what powers your dryer or range. A licensed electrician installs the circuit and a wall-mounted charger (or a simple outlet for a portable unit). Charging speed is much faster: typically 25–35 miles of range per hour, so most EVs can fully charge overnight.",
      },
      {
        type: "h2",
        text: "Why Most Sacramento EV Owners Choose Level 2",
      },
      {
        type: "p",
        text: "For daily driving, Level 2 is the practical choice. It's faster, more efficient, and many EV manufacturers recommend it for regular use. Plus, SMUD's Charge@Home rebate offers up to $500 back on qualifying Level 2 installations — making the upgrade more affordable.",
      },
      {
        type: "p",
        text: "Peak Electrical installs Level 2 EV chargers for all makes and models. We handle permits, SMUD rebate paperwork, and inspections. Contact us for a free estimate.",
      },
    ],
  },
  {
    slug: "prepare-sacramento-home-for-solar-installation",
    title: "How to Prepare Your Sacramento Home for Solar Panel Installation",
    tag: "Solar Prep",
    excerpt:
      "Before solar installers arrive, your electrical system needs to be ready. Panel upgrades, service capacity, and permits — here's what Sacramento homeowners should know.",
    date: "2026-03-10",
    image: "/images/blog/prepare-sacramento-home-for-solar-installation.png",
    imageAlt: "Sacramento home electrical panel ready for solar installation",
    content: [
      {
        type: "p",
        text: "Going solar is a smart move for many Sacramento homeowners — SMUD's sunny climate and favorable net metering make it an attractive investment. But before solar panels go on your roof, your electrical system must be ready to handle the additional power.",
      },
      {
        type: "h2",
        text: "Panel Capacity Matters",
      },
      {
        type: "p",
        text: "Solar inverters feed power into your electrical panel. If your panel is already at or near capacity — common with 100-amp service in older homes — you may need an upgrade before solar can be installed. A 200-amp panel provides the headroom most solar systems require.",
      },
      {
        type: "h2",
        text: "Unsafe Panels Must Be Replaced First",
      },
      {
        type: "p",
        text: "Solar installers typically won't connect to Zinsco, Federal Pacific, or other known hazardous panels. If you have one of these, it must be replaced before solar installation. Peak Electrical specializes in panel upgrades and can coordinate with your solar contractor.",
      },
      {
        type: "h2",
        text: "Permits and Inspections",
      },
      {
        type: "p",
        text: "Panel upgrades and solar installations both require permits and inspections. Working with a licensed electrician who pulls permits ensures your system is code-compliant and insurable. We handle SMUD or PG&E coordination when needed.",
      },
      {
        type: "p",
        text: "Planning to go solar? Contact Peak for a panel assessment and upgrade quote. We'll make sure your home is ready.",
      },
    ],
  },
];
