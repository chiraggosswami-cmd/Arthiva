import React, { useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { AuthPanel } from '../components/AuthPanel';
import { useAuth } from '../state/AuthContext';
import { NaomiLogo } from '../components/NaomiLogo';
import {
  Check,
  ShieldCheck,
  Sparkles,
  Mail,
  ArrowRight,
  HelpCircle,
  TrendingUp,
  Server,
  Zap
} from 'lucide-react';
import { Link } from 'wouter';

export function PricingPage() {
  const { user, openAuthModal, authModalOpen, authModalTab, closeAuthModal } = useAuth();
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [brandEmail, setBrandEmail] = useState('');
  const [monthlyOrders, setMonthlyOrders] = useState('1,000 - 5,000');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandEmail) return;
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f7faf8] text-[#143d41] flex flex-col font-['Hanken_Grotesk'] selection:bg-[#0e3b43] selection:text-white">
      <SiteHeader />

      <main className="flex-1 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaf4ef] border border-[#cfdfd7] text-xs font-bold text-[#14533d]">
              <Sparkles size={13} className="text-[#1f8a5b]" />
              <span>PILOT ACCESS & TRANSPARENT PRICING</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Bricolage_Grotesque'] tracking-tight text-[#0e3b43]">
              Simple, margin-positive pilot plans
            </h1>

            <p className="text-sm sm:text-base text-[#59716c] max-w-2xl mx-auto">
              Naomi is currently in an invite-only pilot for fast-scaling Indian D2C brands. All approved pilots include direct courier telemetry, order scoring, and expected margin waterfalls.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            
            {/* Tier 1: Early Pilot */}
            <div className="bg-white rounded-3xl p-7 border border-[#e1e8e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#6d817d] uppercase tracking-wider">
                  EARLY ACCESS
                </div>
                <h2 className="text-2xl font-bold font-['Bricolage_Grotesque'] text-[#0e3b43] mt-1">
                  Pilot Partner
                </h2>
                <p className="text-xs text-[#59716c] mt-2 leading-relaxed">
                  For emerging brands evaluating order health and testing COD journey rules.
                </p>

                <div className="mt-6 mb-6 pb-6 border-b border-[#edf2ef]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold font-['Bricolage_Grotesque'] text-[#0e3b43]">₹0</span>
                    <span className="text-xs text-[#718580]">/ during 30-day pilot</span>
                  </div>
                  <span className="text-[11px] text-[#1f8a5b] font-semibold block mt-1">
                    Free evaluation on first 500 orders
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-[#39504c]">
                  {[
                    'Live order health scoring (0–100)',
                    'Expected value journey simulator',
                    'Standard NDR rescue dashboard',
                    '1 Store connection (Shopify / Woo)',
                    'Multi-brand demo environment'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={15} className="text-[#1f8a5b] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#edf2ef]">
                <button
                  type="button"
                  onClick={() => openAuthModal('register', '/dashboard')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-transparent via-[#edf5f1] to-transparent hover:from-[#e1efe9] hover:to-[#d8ebe3] border border-[#0e3b43]/30 hover:border-[#0e3b43] text-[#0e3b43] font-bold text-xs shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
                >
                  Start Free Pilot
                </button>
              </div>
            </div>

            {/* Tier 2: Growth Pilot (Featured) */}
            <div className="bg-[#0e3b43] text-white rounded-3xl p-7 border border-[#092b31] shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#f5a524] text-[#0e3b43] text-[10px] font-extrabold tracking-wider uppercase">
                MOST POPULAR PILOT
              </div>

              <div>
                <div className="text-xs font-bold text-[#a0c2bd] uppercase tracking-wider">
                  D2C ACCELERATOR
                </div>
                <h2 className="text-2xl font-bold font-['Bricolage_Grotesque'] text-white mt-1">
                  Scale Operations
                </h2>
                <p className="text-xs text-white/75 mt-2 leading-relaxed">
                  Automated journey routing, courier selection, and active WhatsApp delivery rescue.
                </p>

                <div className="mt-6 mb-6 pb-6 border-b border-white/15">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold font-['Bricolage_Grotesque'] text-white">Custom</span>
                    <span className="text-xs text-white/70">/ based on order volume</span>
                  </div>
                  <span className="text-[11px] text-[#4ee29d] font-bold block mt-1">
                    Guaranteed margin protection ROI
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-white/90">
                  {[
                    'All Pilot Partner features included',
                    'Automated OTP & Prepaid conversion triggers',
                    'Intelligent Courier dispatch ranking',
                    'Automated WhatsApp NDR rescue workflows',
                    'Listing intelligence & return cause audits',
                    'Dedicated Slack pilot channel'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={15} className="text-[#4ee29d] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/15">
                <button
                  type="button"
                  onClick={() => openAuthModal('register', '/dashboard')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#f5a524] via-[#f7b038] to-[#f59e0b] hover:from-[#e69818] hover:via-[#efa326] hover:to-[#d97706] text-[#0e3b43] font-extrabold text-xs shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
                >
                  Apply for Scale Pilot
                </button>
              </div>
            </div>

            {/* Tier 3: Enterprise & Custom */}
            <div className="bg-white rounded-3xl p-7 border border-[#e1e8e4] shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#6d817d] uppercase tracking-wider">
                  CUSTOM SUITE
                </div>
                <h2 className="text-2xl font-bold font-['Bricolage_Grotesque'] text-[#0e3b43] mt-1">
                  Enterprise D2C
                </h2>
                <p className="text-xs text-[#59716c] mt-2 leading-relaxed">
                  For brands doing 20,000+ monthly orders with custom WMS, ERP, and multi-courier APIs.
                </p>

                <div className="mt-6 mb-6 pb-6 border-b border-[#edf2ef]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold font-['Bricolage_Grotesque'] text-[#0e3b43]">Contact us</span>
                  </div>
                  <span className="text-[11px] text-[#708480] font-semibold block mt-1">
                    Tailored contract with custom SLAs
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-[#39504c]">
                  {[
                    'Custom ERP / Unicommerce / Vinculum sync',
                    'Multi-warehouse regional RTO routing',
                    'Custom machine-learning loss scoring',
                    'Dedicated solutions architect',
                    'Quarterly margin audit reports'
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={15} className="text-[#1f8a5b] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#edf2ef]">
                <a
                  href="#contact-pilot"
                  className="w-full block py-2.5 rounded-xl bg-gradient-to-r from-transparent via-[#f8faf9] to-transparent hover:from-[#edf4f0] hover:to-[#e5f0ea] border border-[#dce5e1] hover:border-[#0e3b43] text-[#0e3b43] font-bold text-xs shadow-2xs hover:shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
                >
                  Contact Pilot Lead
                </a>
              </div>
            </div>

          </div>

          {/* Contact / Pilot Application Form */}
          <div id="contact-pilot" className="mt-16 max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-[#dbe5e1] shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} className="text-[#14533d]" />
              <h3 className="text-lg font-bold font-['Bricolage_Grotesque'] text-[#0e3b43]">
                Request Naomi Pilot Access
              </h3>
            </div>
            <p className="text-xs text-[#5b736e] mb-6">
              Our engineering team connects directly to your test storefront to audit your last 30 days of RTO drag and demonstrate potential margin savings.
            </p>

            {contactSubmitted ? (
              <div className="p-4 rounded-2xl bg-[#edf7f1] border border-[#bfe2cf] text-xs text-[#14533d] flex items-center gap-3">
                <Check size={18} className="text-[#1f8a5b] shrink-0" />
                <div>
                  <b className="block">Pilot inquiry received!</b>
                  <span>We have registered {brandEmail} and will reach out within 24 hours with sandbox credentials.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#143d41] mb-1">Brand Email</label>
                    <input
                      type="email"
                      required
                      value={brandEmail}
                      onChange={e => setBrandEmail(e.target.value)}
                      placeholder="founder@yourbrand.in"
                      className="w-full bg-[#f8faf9] border border-[#dce5e1] rounded-xl px-3 py-2 text-xs text-[#0e3b43] outline-none focus:border-[#0e3b43]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#143d41] mb-1">Monthly Order Volume</label>
                    <select
                      value={monthlyOrders}
                      onChange={e => setMonthlyOrders(e.target.value)}
                      className="w-full bg-[#f8faf9] border border-[#dce5e1] rounded-xl px-3 py-2 text-xs text-[#0e3b43] outline-none focus:border-[#0e3b43]"
                    >
                      <option>Under 1,000 orders/mo</option>
                      <option>1,000 - 5,000 orders/mo</option>
                      <option>5,000 - 20,000 orders/mo</option>
                      <option>20,000+ orders/mo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0e3b43] via-[#134954] to-[#185e6b] hover:from-[#134954] hover:via-[#195c68] hover:to-[#206f7e] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Pilot Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#0a292f] text-white/80 py-8 border-t border-white/10 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[11px] text-white/50">
            Naomi is a small-scale pilot project for Indian D2C ecommerce brands. Pricing subject to volume tier approval.
          </p>
        </div>
      </footer>

      {authModalOpen && (
        <AuthPanel
          initialTab={authModalTab}
          isModal={true}
          onClose={closeAuthModal}
        />
      )}
    </div>
  );
}
