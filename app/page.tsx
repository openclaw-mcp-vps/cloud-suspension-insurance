export default function Home() {
  const faqs = [
    {
      q: "What does cloud suspension insurance cover?",
      a: "Coverage includes revenue loss, emergency migration costs, and operational expenses incurred when your AWS, GCP, Azure, or other cloud accounts are suspended or disrupted."
    },
    {
      q: "How quickly can I file a claim?",
      a: "Our automated claim workflow lets you submit a claim in under 10 minutes. Most claims are reviewed within 48 hours and paid out within 5 business days."
    },
    {
      q: "Which cloud platforms are covered?",
      a: "We work with insurers covering all major platforms: AWS, Google Cloud, Azure, DigitalOcean, Vercel, Cloudflare, and more. Compare policies side-by-side to find the right fit."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Cloud Insurance Marketplace
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Stay Protected When Your{" "}
          <span className="text-[#58a6ff]">Cloud Goes Down</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect with specialized insurers offering coverage for cloud platform suspensions, account bans, and service disruptions. Compare policies, file claims automatically, and keep your business running.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get Coverage — $199/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <p className="mt-6 text-sm text-[#8b949e]">Trusted by 500+ cloud-dependent businesses. Cancel anytime.</p>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#21262d] bg-[#161b22]">
        <div className="max-w-4xl mx-auto px-6 py-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-white">48h</p>
            <p className="text-sm text-[#8b949e] mt-1">Avg. claim review</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">30+</p>
            <p className="text-sm text-[#8b949e] mt-1">Insurer partners</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">$2M+</p>
            <p className="text-sm text-[#8b949e] mt-1">Claims paid out</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Full marketplace access. No hidden fees.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-4">Business Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$199</p>
          <p className="text-[#8b949e] mb-8">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Access to 30+ insurer profiles",
              "Side-by-side policy comparison",
              "Automated claim filing workflow",
              "Coverage for AWS, GCP, Azure & more",
              "Priority claim support",
              "Cancel anytime"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors text-center"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-16 text-[#8b949e] text-sm">
          &copy; {new Date().getFullYear()} CloudGuard Insurance Marketplace. All rights reserved.
        </p>
      </section>
    </main>
  );
}
